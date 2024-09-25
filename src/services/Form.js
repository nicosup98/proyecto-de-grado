const back_url = "https://nicosup98-proyecto-de-86.deno.dev"

export function sendForm(form_data) {
    return fetch(`${back_url}/send_form`,
        {method: 'POST',body: JSON.stringify(form_data)}
    )
}

export function validarEmail(email){
    return fetch(`${back_url}/resultados/email`,{
        method: "POST",
        body: email,
        headers: {
            'content-type': 'application/json'
        },
    })
}