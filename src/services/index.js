const isDev = import.meta.env.VITE_DEV
export const back_url = !Boolean(isDev) ? import.meta.env.VITE_BACK_URL : 'http://localhost:4000' //cambiar cuando se despliegue