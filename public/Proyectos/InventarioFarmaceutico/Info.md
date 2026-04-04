# Architecture — g_inventario

> Inventario para distribución y comercialización de medicamentos (México - Cofepris)

## Archetype

### B (Full-Stack Product) + C (Domain-Heavy System) — calibrado a demo

- B: React 19 SPA + CodeIgniter 4 API, PHP8.5, Vite, TailwindCSS, Typescript, Postgresql and Nginx. (Monolito desaclopado)
- C (lightweight): Services para invariantes de dominio complejas (stock, inmutabilidad, FEFO). CRUD simple va directo Controller → Model.
