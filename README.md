# Micro-Blog Institucional

Aplicación web simple para publicar mensajes (≤ 280 caracteres) y listarlos del más reciente al más antiguo.

## Stack
- Node.js + Express (API + estáticos)
- HTML/JS (frontend)
- GitHub Actions (CI/CD)
- Render (despliegue)
- UptimeRobot (monitoreo)

## Ejecutar localmente
```bash
npm install
npm run dev
# abre http://localhost:3000
```

## Endpoints
- `GET /api/posts` → lista posts (orden nuevo→antiguo)
- `POST /api/posts { text }` → crea post
- `GET /health` → healthcheck para monitoreo

## Diagrama (arquitectura + flujo DevOps)

Desarrollo → Commit → GitHub (main)
            └─ Actions: Install → Test (Jest) → CD (Deploy Hook Render)
                           └─ Render: Build/Start → App pública
                                        └─ UptimeRobot: monitorea /health cada 5 min

```
[Dev] --push--> [GitHub] --Actions--> [Render] --URL Pública-->
                                         ^
                                         | UptimeRobot (HTTP GET /health)
```

## Monitoreo
Ver **docs/MONITORING.md**.

## Enlaces (completa con tus URLs reales)
- App en vivo: https://TU-APP.onrender.com
- Tablero Kanban: (Trello / GitHub Projects)
- Release v1.0.0: (en GitHub Releases)

---
*Generado el 2025-08-15.*