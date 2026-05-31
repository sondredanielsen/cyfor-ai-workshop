# Refine-Issue Skill

This skill helps turn a vague GitHub issue or requirement into an actionable, implementation-ready brief. Use it to clarify scope, surface hidden assumptions, and ensure requirements are ready for Copilot-driven implementation.

## When to use
- When an issue or requirement is ambiguous, incomplete, or lacks clear acceptance criteria.
- When you need to clarify what success looks like before starting work.

## Steps
1. **Restate the problem**: Summarize the issue in 1-2 sentences.
2. **Identify the affected user/role**: Who is impacted?
3. **Write a user story**: Use the format: _As a [user], I want [feature], so that [benefit]._
4. **List acceptance criteria**: What must be true for this to be "done"?
5. **List non-goals**: What is explicitly out of scope?
6. **State assumptions**: What are you assuming about the context or requirements?
7. **Surface hidden business rules**: Are there policies, constraints, or rules that must be followed?
8. **List edge cases/validation rules**: What tricky scenarios or input validation should be considered?
9. **Identify impacted system parts**: Which code, services, or docs will be affected (e.g., `api/`, `web/`, database, tests)?
10. **Ask clarifying questions**: If anything is unclear, ask targeted follow-ups before proceeding.

## Example output
- Problem statement
- User/role
- User story
- Acceptance criteria
- Non-goals
- Assumptions
- Hidden business rules
- Edge cases/validation
- Impacted system parts
- Clarifying questions (if needed)

Keep it concise and focused. The goal is to make the issue actionable, not to create a long template.