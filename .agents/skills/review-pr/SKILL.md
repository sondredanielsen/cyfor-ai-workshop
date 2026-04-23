---
name: review-pr
description: "Reviews pull requests in this repository with emphasis on API/frontend sync, generated artifacts, booking-domain validation, reviewability, and concrete risk-finding. Use for real PR review work against GitHub context, not generic summaries."
compatibility: GitHub Copilot, GitHub Copilot CLI, OpenAI Codex (via openskills)
---

# Review PR

Review the real pull request, not a pasted summary.

## Focus

- Find bugs, regressions, risky assumptions, and missing validation.
- Prefer concrete findings over style opinions.
- Keep the review grounded in the changed code and this repo's workflow.

## Project Checks

- If API models, routes, Prisma schema, or OpenAPI changed, check that generated artifacts were updated with `npm run generate`.
- If backend contracts changed, check that `web/` still matches the generated client and UI behavior.
- Check that naming and validation fit a booking or resource-management product, not a generic todo app.
- Check that persistence still works after refresh.
- Check that diffs stay small enough to review comfortably.

## Review Output

- Put findings first, ordered by severity.
- Include file references and explain the user-visible or maintenance risk.
- Call out missing tests or missing validation when they materially weaken the change.
- If no findings are present, say so explicitly and mention any residual risk or verification gap.

## Avoid

- Do not rubber-stamp.
- Do not spend the review on formatting-only nits.
- Do not assume generated files are correct just because they exist.