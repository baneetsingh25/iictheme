# Frontend API Contract

This frontend expects the backend to be the system of record.

## Base assumptions

- Base URL comes from `VITE_API_BASE_URL`
- All responses should follow this shape:

```json
{
  "success": true,
  "message": "Optional human-readable message",
  "data": {},
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 100
  }
}
```

## Key frontend entities

- `HomePayload`
- `Event`
- `Notice`
- `IdeaSubmission`
- `Member`
- `JoinRequest`
- `Report`
- `GalleryItem`
- `Achievement`
- `ContactQuery`
- `DashboardMetrics`

## Required endpoints

- `GET /home`
- `GET /events`
- `POST /events/:id/register`
- `POST /ideas`
- `GET /projects`
- `GET /resources`
- `GET /reports`
- `GET /members`
- `POST /join-requests`
- `GET /gallery`
- `GET /achievements`
- `POST /contact`
- `GET /queries/:queryId`
- `POST /auth/login`
- `GET /admin/dashboard`

## Protected flows

Backend should own:

- tracking ID generation
- query ID generation
- capacity checks
- admin role verification
- financial report access control
- email confirmation flows
- QR generation
- export generation
