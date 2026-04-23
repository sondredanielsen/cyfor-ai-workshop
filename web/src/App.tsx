import { type FormEvent, useState } from "react";
import logo from "../public/logo.svg";
import resourceDefault from "../public/resource-default.svg";
import {
  getGetItemsQueryKey,
  useDeleteItemsId,
  useGetItems,
  usePostItems,
  usePutItemsId,
} from "./api";
import { useQueryClient } from "@tanstack/react-query";

export default function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [editingResourceId, setEditingResourceId] = useState<number | null>(null);
  const queryClient = useQueryClient();
  const refreshItems = () =>
    queryClient.invalidateQueries({ queryKey: getGetItemsQueryKey() });
  const itemsQuery = useGetItems();
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setCategory("");
    setEditingResourceId(null);
  };
  const createItemMutation = usePostItems({
    mutation: {
      onSuccess: async () => {
        resetForm();
        await refreshItems();
      },
    },
  });
  const updateItemMutation = usePutItemsId({
    mutation: {
      onSuccess: async () => {
        resetForm();
        await refreshItems();
      },
    },
  });
  const deleteItemMutation = useDeleteItemsId({
    mutation: {
      onSuccess: refreshItems,
    },
  });

  const trimmedTitle = title.trim();
  const trimmedDescription = description.trim();
  const trimmedCategory = category.trim();
  const items = itemsQuery.data?.items ?? [];
  const isSubmitting = createItemMutation.isPending || updateItemMutation.isPending;
  const deletingItemId = deleteItemMutation.variables?.id;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!trimmedTitle || !trimmedDescription || !trimmedCategory || isSubmitting) {
      return;
    }

    const data = {
      title: trimmedTitle,
      description: trimmedDescription,
      category: trimmedCategory,
    };

    if (editingResourceId === null) {
      createItemMutation.mutate({ data });
      return;
    }

    updateItemMutation.mutate({
      id: editingResourceId,
      data,
    });
  };

  const handleRemove = (id: number) => {
    if (deleteItemMutation.isPending) {
      return;
    }

    if (editingResourceId === id) {
      resetForm();
    }

    deleteItemMutation.mutate({ id });
  };

  const handleEdit = (item: (typeof items)[number]) => {
    if (isSubmitting) {
      return;
    }

    setEditingResourceId(item.id);
    setTitle(item.title);
    setDescription(item.description);
    setCategory(item.category);
  };

  return (
    <main className="min-h-screen bg-forsvaret-warm-white px-4 py-10 text-forsvaret-black">
      <div className="mx-auto max-w-xl space-y-6">
        <header className="space-y-2 flex flex-col items-center">
          <img src={logo} alt="App logo" className="h-16 w-16 mb-2" />
          <h1 className="text-2xl font-semibold">Reservasjoner</h1>
          <p className="text-sm text-forsvaret-gray">
            Create, update, and remove bookable resources with the generated API hooks.
          </p>
        </header>

        <form
          className="flex flex-col gap-3 rounded-lg border border-forsvaret-gray-light bg-white p-4 shadow-sm"
          onSubmit={handleSubmit}
        >
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Resource title"
            maxLength={120}
            className="flex-1 rounded-md border border-forsvaret-gray-light px-3 py-2 text-base outline-none focus:border-forsvaret-green focus:ring-2 focus:ring-forsvaret-green/30"
          />
          <input
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            placeholder="Category"
            maxLength={40}
            className="flex-1 rounded-md border border-forsvaret-gray-light px-3 py-2 text-base outline-none focus:border-forsvaret-green focus:ring-2 focus:ring-forsvaret-green/30"
          />
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Description"
            maxLength={500}
            className="flex-[2] rounded-md border border-forsvaret-gray-light px-3 py-2 text-base outline-none focus:border-forsvaret-green focus:ring-2 focus:ring-forsvaret-green/30"
          />
          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={!trimmedTitle || !trimmedDescription || !trimmedCategory || isSubmitting}
              className="rounded-md bg-forsvaret-green px-4 py-2 text-sm font-medium text-white hover:bg-forsvaret-green-light disabled:cursor-not-allowed disabled:bg-forsvaret-gray-light disabled:text-forsvaret-gray"
            >
              {createItemMutation.isPending
                ? "Adding..."
                : updateItemMutation.isPending
                  ? "Saving..."
                  : editingResourceId === null
                    ? "Add resource"
                    : "Save changes"}
            </button>
            {editingResourceId !== null ? (
              <button
                type="button"
                onClick={resetForm}
                disabled={isSubmitting}
                className="rounded-md border border-forsvaret-green px-4 py-2 text-sm font-medium text-forsvaret-green hover:bg-forsvaret-green hover:text-white disabled:cursor-not-allowed disabled:border-forsvaret-gray-light disabled:text-forsvaret-gray"
              >
                Cancel edit
              </button>
            ) : null}
          </div>
        </form>

        {createItemMutation.isError ? (
          <p className="text-sm text-forsvaret-error">
            Could not add the resource: {createItemMutation.error.message}
          </p>
        ) : null}

        {updateItemMutation.isError ? (
          <p className="text-sm text-forsvaret-error">
            Could not update the resource: {updateItemMutation.error.message}
          </p>
        ) : null}

        {deleteItemMutation.isError ? (
          <p className="text-sm text-forsvaret-error">
            Could not remove the resource: {deleteItemMutation.error.message}
          </p>
        ) : null}

        <section className="rounded-lg border border-forsvaret-gray-light bg-white p-4 shadow-sm">
          <h2 className="text-sm font-medium text-forsvaret-gray-dark">Resources</h2>

          {itemsQuery.isPending ? <p className="mt-3 text-sm text-forsvaret-gray">Loading resources...</p> : null}

          {itemsQuery.isError ? (
            <p className="mt-3 text-sm text-forsvaret-error">Could not load resources: {itemsQuery.error.message}</p>
          ) : null}

          {!itemsQuery.isPending && !itemsQuery.isError ? (
            items.length > 0 ? (
              <ul className="mt-3 divide-y divide-forsvaret-gray-light">
                {items.map((item) => (
                  <li key={item.id} className="flex items-start justify-between gap-3 py-3">
                    <img
                      src={resourceDefault}
                      alt="Ressursbilde"
                      className="h-12 w-12 rounded-lg border border-forsvaret-gray-light bg-forsvaret-warm-white object-cover mr-3"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-forsvaret-black">{item.title}</p>
                      <p className="text-sm text-forsvaret-gray-dark">{item.category}</p>
                      <p className="text-sm text-forsvaret-gray">{item.description}</p>
                    </div>
                    <div className="flex shrink-0 gap-2">
                      <button
                        type="button"
                        onClick={() => handleEdit(item)}
                        disabled={isSubmitting}
                        className="rounded-md border border-forsvaret-green px-3 py-1 text-sm text-forsvaret-green hover:bg-forsvaret-green hover:text-white disabled:cursor-not-allowed disabled:border-forsvaret-gray-light disabled:text-forsvaret-gray"
                      >
                        {editingResourceId === item.id ? "Editing" : "Edit"}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRemove(item.id)}
                        disabled={deleteItemMutation.isPending}
                        className="rounded-md border border-forsvaret-gray-light px-3 py-1 text-sm text-forsvaret-gray-dark hover:bg-forsvaret-error hover:text-white hover:border-forsvaret-error disabled:cursor-not-allowed disabled:border-forsvaret-gray-light disabled:text-forsvaret-gray"
                      >
                        {deleteItemMutation.isPending && deletingItemId === item.id
                          ? "Removing..."
                          : "Remove"}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-forsvaret-gray">No resources yet.</p>
            )
          ) : null}
        </section>
      </div>
    </main>
  );
}
