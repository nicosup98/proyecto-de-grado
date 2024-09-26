<script>
    import '/fondo.css'; // Ajusta la ruta según la ubicación real del archivo fondo.css
    import { form, form_results } from "../stores/form";
    import { onMount } from "svelte";
    import party from 'party-js';

    let recommendation = ''; // Variable para la recomendación general

    // Inicializa con valores por defecto
    $: waterConsumption = $form_results.consumo_total?.semanal || 0;
    $: approximateValue = $form_results.consumo_total?.mensual || 0;
    $: litrosLavamanos = $form_results.consumo_detalles?.litros_lavamanos || 0; // Inicializa con 0 si es undefined
    $: litrosUrinarios = $form_results.consumo_detalles?.litros_urinarios || 0; // Inicializa con 0 si es undefined
    $: litrosInodoro = $form_results.consumo_detalles?.litros_inodoro || 0; // Inicializa con 0 si es undefined
    $: litrosBebedero = $form_results.consumo_detalles?.litros_bebedero || 0; // Inicializa con 0 si es undefined

    function lanzarConfeti() {
        if (waterConsumption < 100) {
            requestAnimationFrame(() => {
                party.confetti(document.body, {
                    count: party.variation.range(15, 30), // Reducir el número de partículas
                });
            });
        }
    }

    function actualizarRecomendacion() {
        if (waterConsumption > 100) {
            recommendation = `Vimos que tu consumo de agua fue ${waterConsumption} litros. Te recomendamos que ahorres agua. Intenta reducir tu consumo de agua para ayudar al medio ambiente.`;
        } else {
            recommendation = `Vimos que tu consumo de agua fue ${waterConsumption} litros. Tu consumo de agua está bien. Sigue así.`;
        }
    }

    // $: actualizarRecomendacion();

    onMount(() => {
        lanzarConfeti();
        actualizarRecomendacion();
    });

    function handleSubmit(event) {
        event.preventDefault();
        window.location.href = "https://urbesustentable.urbe.edu";
    }
</script>


<style>
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .fade-in {
        animation: fadeIn 0.6s;
    }

    .fade-in-after {
        opacity: 0;
        animation: fadeIn 0.6s forwards;
        animation-delay: 0.6s;
    }
</style>

<div class="flex justify-center items-center h-screen z-1">
    <div class="flex flex-col md:flex-row w-full md:w-2/3 max-w-4xl">
        <div class="w-full p-4 md:w-1/2 fade-in">
            <h1 class="text-3xl font-bold text-white mb-4 text-center mt-8 ml-0">¡Gracias por tu participación!</h1>
            <p class="text-lg text-white text-center mb-8">Con tus respuestas, ayudaremos a generar estrategias para un uso más eficiente del agua dentro de la universidad.</p>
        </div>
        <div class="w-full md:w-1/2 fade-in-after">
            <form on:submit={handleSubmit} class="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 p-10 rounded-lg w-full max-h-[65vh] overflow-y-auto">
                <div class="relative z-10 mb-4 text-center">
                    <h2 class="text-2xl font-bold text-white">Respuestas</h2>
                </div>

                <hr class="border-t border-gray-300 my-4">

                <div class="flex flex-col items-center">
                    <p class="text-lg mb-2 text-white text-center">Su consumo de agua en URBE semanalmente es de : {waterConsumption} litros</p>
                </div>

                <hr class="border-t border-gray-300 my-4">

                <div class="flex flex-col items-center">
                    <p class="text-lg mb-2 text-white text-center">Lo cual tiene un aproximado de: {approximateValue} litros al mes</p>
                </div>

                <hr class="border-t border-gray-300 my-4">

                {#if litrosLavamanos * 4.34524 > 50}
                <div class="flex flex-col items-center p-2">
                    <p class="text-lg mb-2 text-warning text-center">Vimos que tu consumo de agua en el lavamanos fue de {litrosLavamanos} litros, te recomendamos que reduzcas el uso del lavamanos para ahorrar agua.</p>
                </div>
                <hr class="border-t border-gray-300 my-4">
                {/if}

                {#if litrosUrinarios * 4.34524 > 50}
                <div class="flex flex-col items-center p-2">
                    <p class="text-lg mb-2 text-warning text-center">Vimos que tu consumo de agua en los urinarios fue de {litrosUrinarios} litros, te recomendamos que reduzcas el uso de los urinarios para ahorrar agua.</p>
                </div>
                <hr class="border-t border-gray-300 my-4">
                {/if}

                {#if litrosInodoro * 4.34524 > 50}
                <div class="flex flex-col items-center p-2">
                    <p class="text-lg mb-2 text-warning text-center">Vimos que tu consumo de agua en el inodoro fue de {litrosInodoro} litros, te recomendamos que reduzcas el uso del inodoro para ahorrar agua.</p>
                </div>
                <hr class="border-t border-gray-300 my-4">
                {/if}

                {#if litrosBebedero * 4.34524 > 50}
                <div class="flex flex-col items-center p-2">
                    <p class="text-lg mb-2 text-warning text-center">Vimos que tu consumo de agua en el bebedero fue de {litrosBebedero} litros, te recomendamos que reduzcas el uso del bebedero para ahorrar agua.</p>
                </div>
                <hr class="border-t border-gray-300 my-4">
                {/if}

                <div class="flex flex-col items-center">
                    <p class="text-lg mb-2 text-white text-center">{recommendation}</p>
                </div>

                <div class="flex justify-center">
                    <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-700 transition-colors duration-300 w-full">Finalizar</button>
                </div>
            </form>
        </div>
    </div>
</div>
