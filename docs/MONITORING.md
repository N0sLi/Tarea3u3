# Plan de Monitoreo (Micro-Blog)

## Métricas Clave
- **Uptime/Disponibilidad**: GET /health, intervalo 5 min.
- **Tiempo de respuesta (sintético)**: objetivo p95 < 500 ms.
- **Errores 5xx**: revisar logs del servicio (Render).
- **Recursos**: CPU/RAM desde el panel del proveedor.

## UptimeRobot (Guía Rápida)
1. Crear monitor tipo HTTP(s).
2. URL: https://TU-APP.onrender.com/health
3. Intervalo: 5 minutos.
4. Guardar y esperar el primer chequeo.
5. Adjuntar captura de dashboard al informe.

## Alertas Sugeridas
- Notificación por email si estado DOWN.
- Alerta si respuesta > 2 s durante 3 chequeos seguidos (si la cuenta lo permite).