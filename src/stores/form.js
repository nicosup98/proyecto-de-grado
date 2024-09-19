import { writable, } from "svelte/store";
/**
 * @type {import("svelte/store").Writable<{[key:string]: any}>}
 */
export const form = writable({})
/**
 * @type {import("svelte/store").Writable<Record<string,any>>}
 */
export const form_results = writable({})

export function updateForm(values){
    form.update(f=>({...f,...values}))
}

export function sendForm(form_data) {
    return fetch("https://nicosup98-proyecto-de-86.deno.dev/send_form",
        {method: 'POST',body: JSON.stringify(form_data)}
    )
}