<script>
    import { form_results } from "../stores/form";
    let results;

    $: results = $form_results;
</script>

{#if results}
    <div>
        <h2>Resultados del Formulario</h2>
        <p>Bloque preferido: {results.bloque_preferido}</p>
        <p>Cantidad de veces que utilizas el inodoro: {results.cantidad_veces_inodoro}</p>
        <p>Cantidad de veces que utilizas el urinario: {results.cantidad_veces_urinario}</p>
        <p>Tiempo de ducha: {results.tiempo_ducha} minutos</p>
        <p>Tiempo en el bebedero: {results.tiempo_bebedero} segundos</p>
        <p>Tiempo en el lavamanos: {results.tiempo_lavamanos} segundos</p>
        <h3>Gastos adicionales:</h3>
        <ul>
            {#each results.punto_rojo as expense}
                <li>{expense.name}: {expense.value} litros por semana</li>
            {/each}
        </ul>
    </div>
{/if}
