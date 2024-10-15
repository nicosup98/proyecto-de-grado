const isProd = import.meta.env.VITE_PROD
export const back_url = isProd ? import.meta.env.VITE_BACK_URL : 'http://localhost:4000' //cambiar cuando se despliegue
