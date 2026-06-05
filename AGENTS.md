# SmartLGU Development Instructions

## Project context

This is an ASP.NET Core Clean Architecture project based on Jason Taylor's CleanArchitecture template.

The frontend is located in:

src/Web/ClientApp

The frontend is a React/Vite/TypeScript app.

## Product context

SmartLGU is a web-based Local Government Unit digital governance system.

The client wants a presentation-ready prototype covering the main LGU system modules.

The prototype should show how LGU staff, administrators, and citizens may navigate and use the system.

## Main packages/modules

### Basic LGU IDS Platform

Core digital governance foundation.

Modules:
- Cloud Infrastructure Setup
- Database Setup
- KYC & Verification
- Security & Compliance
- Resident Registration
- Module Activation
- Admin Dashboard
- Testing & Go-Live
- Profile

### Expanded LGU IDS Platform

Adds more municipal service workflows.

Modules:
- Assistance & Social Services
- Beneficiary & Fund Tracking
- Barangay Endorsement
- Requests & Complaints

### Full LGU IDS Platform

Complete digital governance ecosystem.

Modules:
- Disaster & Calamity
- Announcements & Alerts
- Payments & Acknowledgments
- Analytics & Reports
- Household Management
- Events
- Directory

## Development goal

Build a presentation-ready clickable prototype.

The frontend should be detailed enough for client demo.

The backend should contain lightweight Clean Architecture skeleton files only, so future development can continue from the generated structure.

## Architecture direction

For each major module, create a clean module structure following the existing CleanArchitecture style.

Prefer module-by-module implementation.

For each module, add only what is needed for prototype/demo:

### Domain layer

Create simple entities/enums/value objects only when useful.

### Application layer

Create DTOs, queries, commands, and validators only as lightweight skeletons.

Queries may return mock/demo data.

Do not create complex business logic yet.

### Infrastructure layer

Use mock/demo data providers only.

Do not create real database migrations unless explicitly requested.

Do not implement real integrations.

### Presentation layer

Create API endpoints/controllers only if needed by the frontend.

Keep controllers/endpoints thin.

### Frontend

Work mainly inside:

src/Web/ClientApp

Create React pages, routes, layouts, mock tables, forms, cards, and status views.

The UI should be professional, modern, clean, and suitable for presentation to LGU decision-makers.

## Rules

- Use mock/static/demo data only.
- Do not implement real database persistence yet.
- Do not create EF migrations unless requested.
- Do not add authentication implementation yet unless requested.
- Do not add paid third-party UI libraries.
- Keep changes small and reviewable.
- Follow existing folder and naming conventions.
- Prefer one module per pull request.
- Ensure the app builds successfully.