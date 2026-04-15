# AGENTS.md

## Project Overview
- App type: Ionic + Angular standalone application.
- Package manager: `npm` with lockfile `package-lock.json`.
- Main app code lives in `src/app/`.
- Current route setup is in `src/app/app.routes.ts` and the default screen is `src/app/home/`.

## Working Rules
- Keep changes focused and minimal; do not refactor unrelated Angular/Ionic code.
- Follow existing standalone-component patterns instead of introducing NgModules.
- Preserve the current TypeScript, Angular, and Ionic style already used in the repo.
- Prefer updating existing pages/components before adding new abstractions.
- When adding UI, keep mobile-first behavior in mind because this is an Ionic app.

## Commands
- Install dependencies: `npm install`
- Start dev server: `npm start`
- Build: `npm run build`
- Run tests: `npm test`
- Run lint: `npm run lint`

## Code Structure
- `src/app/app.component.ts`: root shell.
- `src/app/app.routes.ts`: route definitions.
- `src/app/home/`: current primary page.
- `src/theme/variables.scss` and `src/global.scss`: shared styling.
- `src/environments/`: environment configuration.

## Implementation Guidance
- For new pages, use Angular standalone components and lazy-loaded routes where appropriate.
- For Ionic UI, prefer components from `@ionic/angular/standalone`.
- Keep templates, styles, and component logic colocated in the existing page/component folders.
- Add or update unit tests only when there is already nearby coverage for the changed code.
- Do not introduce new dependencies unless the task clearly requires them.

## Validation
- For code changes, prefer targeted validation first, then broader checks if needed.
- If you change Angular templates, component logic, or routing, run relevant tests or explain why they were not run.
- If you modify styles only, a build or quick app preview is usually sufficient when available.
