import { back_url } from ".";

export function getDashboard(date, token){
  const url = new URL(`${back_url}/admin/dashboard`)
  if(date){
    url.searchParams.append('date',date)
  }
  return fetch(url,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
}

export function login(user){
 return fetch(`${back_url}/login/admin`,{
  method: 'POST',
  body: JSON.stringify(user)
 }) 
}

export function checkToken() {
  return localStorage.getItem('token')
}

export function getConsumoReal(token) {
  return fetch(`${back_url}/admin/gastoReal`,{
    headers: {
      Authorization:`Bearer ${token}`
    }
  })
}

export function getConsumoRealByMonts(token) {
  return fetch(`${back_url}/admin/gastoReal/year`, {
    headers: {
      Authorization:`Bearer ${token}`
    }
  })
}

export function updateConsumoReal(token,consumoReal) {
  return fetch(`${back_url}/admin/gastoReal`,
    {
      method: 'PUT',
      body: JSON.stringify(consumoReal),
      headers: {
         Authorization:`Bearer ${token}`
      }
    }
  )
}

export function addConsumoReal(token,consumoReal) {
  return fetch(`${back_url}/admin/gastoReal`,{
    method: 'POST',
    headers: {
      Authorization:`Bearer ${token}`
    },
    body: JSON.stringify(consumoReal)
  })
}