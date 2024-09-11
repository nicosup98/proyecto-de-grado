<script>
    let bathroomVisits1 = '';
    let bathroomVisits2 = 0;
    let bathroomVisits3 = 0;
    let bathroomVisits4 = 0;
    let bathroomVisits5 = 0;
    let bathroomVisits6 = 0;
    let bathroomVisits7 = 0;

    function increment(value) {
        return value + 1;
    }

    function decrement(value) {
        return value > 0 ? value - 1 : 0;
    }
</script>

<style>
    @media (max-width: 768px) {
        .text-left {
            text-align: center;
        }
    }
    .toilet-icon {
        width: 50px; /* Ajusta el ancho de la imagen */
        height: 50px; /* Ajusta la altura de la imagen */
        margin-left: 8px;
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
<link rel="stylesheet" href="fondo.css">

<nav class="fixed top-0 left-0 w-full bg-white bg-opacity-60 text-white p-2 flex justify-between items-center z-10 width: 100%  padding: 1rem">
    <div class="flex items-center">
        <img src="urbe_logo.png" class="w-16 zoom-img mr-2" alt="URBE Logo" />
    </div>
    <div class="flex items-center">
        <img src="public\huella_logo.png" class="w-16 zoom-img ml-2" alt="Huella logo" />
    </div>
</nav>

<div class="flex justify-center items-center h-screen relative z-1 pt-16">
    <form class="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 p-10 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-1/2 max-h-full overflow-auto">
        <div class="col-span-1 sm:col-span-2 relative z-10 mb-4 text-center">
            <h2 class="text-2xl font-bold text-black-100">Formulario de Registro</h2>
            <h2 class="text-2xl font-bold text-blue-600 animate-clip" style="position: relative; top: -33px;">Formulario de Registro</h2>
        </div>

        <div class="flex flex-col items-center col-span-1 sm:col-span-2">
            <label class="text-lg mb-2">¿En qué bloque frecuentas más al baño?</label>
            <select bind:value={bathroomVisits1} class="mb-4 p-2 w-full text-lg">
                <option value="">Selecciona una opción</option>
                <option value="Bloque A">Bloque A</option>
                <option value="Bloque B">Bloque B</option>
                <option value="Bloque C">Bloque C</option>
                <option value="Bloque D">Bloque D</option>
            </select>
        </div>

        <div class="flex flex-col items-center">
            <label class="text-lg mb-2">¿Cuántas veces vas al baño? (Pregunta 2) <img src="public\ignodoro.png" alt="Toilet Icon" class="toilet-icon"></label>
            <div class="flex items-center justify-center mb-4">
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits2 = decrement(bathroomVisits2)}>-</button>
                <input type="number" bind:value={bathroomVisits2} class="mx-2 p-2 w-16 text-lg text-center rounded border-none" readonly />
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits2 = increment(bathroomVisits2)}>+</button>
            </div>
        </div>

        <div class="flex flex-col items-center">
            <label class="text-lg mb-2">¿Cuántas veces vas al baño? (Pregunta 3) <img src="public\ignodoro.png" alt="Toilet Icon" class="toilet-icon"></label>
            <div class="flex items-center justify-center mb-4">
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits3 = decrement(bathroomVisits3)}>-</button>
                <input type="number" bind:value={bathroomVisits3} class="mx-2 p-2 w-16 text-lg text-center rounded border-none" readonly />
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits3 = increment(bathroomVisits3)}>+</button>
            </div>
        </div>

        <div class="flex flex-col items-center">
            <label class="text-lg mb-2">¿Cuántas veces vas al baño? (Pregunta 4) <img src="public\ignodoro.png" alt="Toilet Icon" class="toilet-icon"></label>
            <div class="flex items-center justify-center mb-4">
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits4 = decrement(bathroomVisits4)}>-</button>
                <input type="number" bind:value={bathroomVisits4} class="mx-2 p-2 w-16 text-lg text-center rounded border-none" readonly />
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits4 = increment(bathroomVisits4)}>+</button>
            </div>
        </div>

        <div class="flex flex-col items-center">
            <label class="text-lg mb-2">¿Cuántas veces vas al baño? (Pregunta 5) <img src="public\ignodoro.png" alt="Toilet Icon" class="toilet-icon"></label>
            <div class="flex items-center justify-center mb-4">
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits5 = decrement(bathroomVisits5)}>-</button>
                <input type="number" bind:value={bathroomVisits5} class="mx-2 p-2 w-16 text-lg text-center rounded border-none" readonly />
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits5 = increment(bathroomVisits5)}>+</button>
            </div>
        </div>

        <div class="flex flex-col items-center">
            <label class="text-lg mb-2">¿Cuántas veces vas al baño? (Pregunta 6) <img src="public\ignodoro.png" alt="Toilet Icon" class="toilet-icon"></label>
            <div class="flex items-center justify-center mb-4">
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits6 = decrement(bathroomVisits6)}>-</button>
                <input type="number" bind:value={bathroomVisits6} class="mx-2 p-2 w-16 text-lg text-center rounded border-none" readonly />
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits6 = increment(bathroomVisits6)}>+</button>
            </div>
        </div>

        <div class="flex flex-col items-center">
            <label class="text-lg mb-2">¿Cuántas veces vas al baño? (Pregunta 7) <img src="public\ignodoro.png" alt="Toilet Icon" class="toilet-icon"></label>
            <div class="flex items-center justify-center mb-4">
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits7 = decrement(bathroomVisits7)}>-</button>
                <input type="number" bind:value={bathroomVisits7} class="mx-2 p-2 w-16 text-lg text-center rounded border-none" readonly />
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits7 = increment(bathroomVisits7)}>+</button>
            </div>
        </div>

        <div class="col-span-1 sm:col-span-2 flex justify-center">
            <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-700 transition-colors duration-300 w-full">Continuar</button>
        </div>
    </form>
</div>

<footer class="bg-gray-800 text-white p-4 text-center w-full fixed bottom-0 left-0">
    <p>Universidad Privada Dr. Rafael Belloso Chacín.</p>
    <p>©2024 Powered by Servieduca All rights reserved</p>
</footer>