## Design decisions

This project was designed following a layered architecture:
- Routes: HTTP routing only
- Controllers: request validation and response handling
- Services: domain logic
- Models: domain types
- Schemas: runtime validation (Zod)

The API was intentionally built without a database in early stages to
focus on domain logic and HTTP behavior before persistence concerns.

Early design sketches were used to define the API contract
before implementation (see /docs).
