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
