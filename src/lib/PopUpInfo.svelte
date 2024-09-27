<script>
    import { slide } from 'svelte/transition'
    export let type = 'alert-error'
    export let msg

</script>

<div role="alert" class={`alert ${type} fixed top-28 md:right-4 md:w-1/4 w-full`} transition:slide={{duration: 300}}>
    <span class="text-lg text-center" class:text-indigo-950={type=== 'alert-info'}>{msg}</span>
  </div>