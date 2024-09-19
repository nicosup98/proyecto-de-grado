<script>
    import '/fondo.css'; // Ajusta la ruta según la ubicación real del archivo fondo.css
    import { form,form_results } from "../stores/form"
    import { onMount } from "svelte"

    let recommendation = ''; // Variable para la recomendación

    $: waterConsumption = $form_results.consumo_total.semanal
    $: approximateValue = $form_results.consumo_total.mensual
    //para debug
    // onMount(()=>{
    //     console.log($form)
    // })
</script>

<style>
    @media (max-width: 350px) {
        .responsive-padding {
            padding-bottom: 32px;
        }
    }
</style>

<div class="ocean">
    <div class="bubble bubble--1"></div>
    <div class="bubble bubble--2"></div>
    <div class="bubble bubble--3"></div>
    <div class="bubble bubble--4"></div>
    <div class="bubble bubble--5"></div>
    <div class="bubble bubble--6"></div>
    <div class="bubble bubble--7"></div>
    <div class="bubble bubble--8"></div>
    <div class="bubble bubble--9"></div>
    <div class="bubble bubble--10"></div>
    <div class="bubble bubble--11"></div>
    <div class="bubble bubble--12"></div>
</div>

<nav class="fixed top-0 left-0 w-full bg-white bg-opacity-60 text-white p-2 flex justify-between items-center z-10">
    <div class="flex items-center">
        <img src="/urbe_logo.png" class="w-16 zoom-img mr-2" alt="URBE Logo" />
    </div>
    <div class="flex items-center">
        <img src="/huella_logo.png" class="w-16 zoom-img ml-2" alt="Huella logo" />
    </div>
</nav>

<div class="flex justify-center items-center h-screen relative z-1 pt-16 pb-16 responsive-padding">
    <div class="flex flex-col md:flex-row w-full md:w-2/3 max-w-4xl">
        <div class="w-full p-4 md:w-1/2">
            <h1 class="text-3xl font-bold text-white mb-4 text-left mt-8 ml-0">Título del Formulario</h1>
            <p class="text-lg text-white text-left ml-0 mb-8">Esta es una breve descripción del formulario. Por favor, completa la información requerida en el formulario a la derecha.</p>
        </div>
        <div class="w-full md:w-1/2">
            <form class="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 p-10 rounded-lg w-full" style="max-height: 65rem; overflow-y: auto;">
                <div class="relative z-10 mb-4 text-center">
                    <h2 class="text-2xl font-bold text-black-100">Respuestas</h2>
                    <h2 class="text-2xl font-bold text-blue-600 animate-clip" style="position: relative; top: -33px;">Respuestas</h2>
                </div>

                <div class="flex flex-col items-center">
                    <p class="text-lg mb-2 text-white text-center">Su consumo de agua en URBE es de : {waterConsumption} litros</p>
                </div>

                <hr class="border-t border-gray-300 my-4">

                <div class="flex flex-col items-center">
                    <p class="text-lg mb-2 text-white text-center">Lo cual tiene un aproximado de: {approximateValue} litros al mes</p>
                </div>

                <hr class="border-t border-gray-300 my-4">

                <div class="flex flex-col items-center">
                    <p class="text-lg mb-2 text-white text-center">Breve descripción sobre el consumo de agua y su importancia.</p>
                </div>

                <hr class="border-t border-gray-300 my-4">

                <div class="flex flex-col items-center">
                    <p class="text-lg mb-2 text-white text-center">Te recomendamos que hagas: {recommendation}</p>
                </div>

                <div class="flex justify-center">
                    <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-700 transition-colors duration-300 w-full">Continuar</button>
                </div>
            </form>
        </div>
    </div>
</div>

<footer class="bg-gray-800 text-white p-4 text-center w-full fixed bottom-0 left-0">
    <p>Universidad Privada Dr. Rafael Belloso Chacín.</p>
    <p>©2024 Powered by Servieduca All rights reserved</p>
</footer>