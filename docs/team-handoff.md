# Team Handoff Guide

## How frontend should be given to the team

- Put the frontend in its own repository or frontend folder.
- Keep UI components, route files, and API client code in the frontend codebase only.
- Share this repo with the backend and Supabase teams together with the API contract file.

## What to give the backend team

- the route list
- form field names
- validation rules
- expected success and error response shape
- upload limits and accepted file types
- required enums and status values

## How backend should connect

- Backend exposes API URLs.
- Frontend reads the API base URL from `VITE_API_BASE_URL`.
- All data calls should go through `src/services/api/client.ts`.
- Replace mock responses module by module without changing page components.

## What to give the Supabase team

- the list of entities and fields used by the frontend
- file upload requirements
- admin role requirements
- dashboard metric needs
- storage expectations for gallery, reports, and logos

## Recommended workflow

1. Frontend builds screens with mock data first.
2. Backend shares endpoint contracts and sample payloads.
3. Supabase team finalizes schema and storage structure.
4. Frontend swaps mock service functions with live API calls.
5. Teams test integration together page by page.
