<script>
    let bathroomVisits1 = '';
    let bathroomVisits2 = 0;
    let bathroomVisits3 = 0;
    let bathroomVisits4 = 0;
    let bathroomVisits5 = 0;
    let bathroomVisits6 = 0;
   

    function increment(value) {
        return value + 1;
    }

    function decrement(value) {
        return value > 0 ? value - 1 : 0;
    }
</script>

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
    <form class="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 p-10 rounded-lg w-full md:w-1/3 max-h-96 overflow-y-auto">
        <div class="relative z-10 mb-4 text-center">
            <h2 class="text-2xl font-bold text-white">Formulario de Registro</h2>
            <h2 class="text-2xl font-bold text-white animate-clip" style="position: relative; top: -33px;">Formulario de Registro</h2>
        </div>

        <div class="flex flex-col items-center">
            <label class="text-lg mb-2 text-white relative text-center">¿Cuál es el lugar en el que consideras que gastas más agua?</label>
            <select bind:value={bathroomVisits1} class="mb-4 p-2 w-full text-lg rounded-lg text-center relative ">
                <option value="">Selecciona una opción</option>
                <option value="Bloque A">Bloque A</option>
                <option value="Bloque B">Bloque B</option>
                <option value="Bloque C">Bloque C</option>
                <option value="Bloque D">Bloque D</option>
            </select>
        </div>

        <hr class="border-t border-gray-300 my-4">

        <div class="flex flex-col items-center">
            <label class="text-lg mb-2 text-white text-center">¿Cuántas veces utilizas el urinario en promedio a la semana? <img src="https://example.com/toilet.png" alt="Toilet Icon" class="w-12 h-12 ml-2"></label>
            <div class="flex items-center justify-around mb-4">
                <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits2 = decrement(bathroomVisits2)}>-</button>
                <input type="number" bind:value={bathroomVisits2} class="pl-4 w-20 text-center bg-transparent border-none text-white text-6xl" readonly />
                <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits2 = increment(bathroomVisits2)}>+</button>
            </div>
        </div>

        <hr class="border-t border-gray-300 my-4">

        <div class="flex flex-col items-center">
            <label class="text-lg mb-2 text-white text-center">¿Cuántas veces utilizas el inodoro en promedio a la semana? <img src="https://example.com/toilet.png" alt="Toilet Icon" class="w-12 h-12 ml-2"></label>
            <div class="flex items-center justify-center mb-4">
                <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits3 = decrement(bathroomVisits3)}>-</button>
                <input type="number" bind:value={bathroomVisits3} class="pl-4 w-20 text-center bg-transparent border-none text-white text-6xl" readonly />
                <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits3 = increment(bathroomVisits3)}>+</button>
            </div>
        </div>

        <hr class="border-t border-gray-300 my-4">

        <div class="flex flex-col items-center">
            <label class="text-lg mb-2 text-white text-center">¿Cuántos minutos en promedio dura tu ducha diaria? <img src="https://example.com/toilet.png" alt="Toilet Icon" class="w-12 h-12 ml-2"></label>
            <div class="flex items-center justify-center mb-4">
                <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits4 = decrement(bathroomVisits4)}>-</button>
                <input type="number" bind:value={bathroomVisits4} class="pl-4 w-20 text-center bg-transparent border-none text-white text-6xl" readonly />
                <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits4 = increment(bathroomVisits4)}>+</button>
            </div>
        </div>

        <hr class="border-t border-gray-300 my-4">

        <div class="flex flex-col items-center">
            <label class="text-lg mb-2 text-white text-center">¿Cuántos litros de agua crees que consumes en promedio a la semana usando el bebedero? <img src="https://example.com/toilet.png" alt="Toilet Icon" class="w-12 h-12 ml-2"></label>
            <div class="flex items-center justify-center mb-4">
                <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits5 = decrement(bathroomVisits5)}>-</button>
                <input type="number" bind:value={bathroomVisits5} class="pl-4 w-20 text-center bg-transparent border-none text-white text-6xl" readonly />
                <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits5 = increment(bathroomVisits5)}>+</button>
            </div>
        </div>

        <hr class="border-t border-gray-300 my-4">

        <div class="flex flex-col items-center">
            <label class="text-lg mb-2 text-white text-center">¿Cuántos segundos en total utilizas el lavamanos a lo largo de una semana? <img src="https://example.com/toilet.png" alt="Toilet Icon" class="w-12 h-12 ml-2"></label>
            <div class="flex items-center justify-center mb-4">
                <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits6 = decrement(bathroomVisits6)}>-</button>
                <input type="number" bind:value={bathroomVisits6} class="pl-4 w-20 text-center bg-transparent border-none text-white text-6xl" readonly />
                <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits6 = increment(bathroomVisits6)}>+</button>
            </div>
        </div>

        <div class="flex justify-center">
            <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-700 transition-colors duration-300 w-full">Continuar</button>
        </div>
    </form>
</div>

<footer class="bg-gray-800 text-white p-4 text-center w-full fixed bottom-0 left-0">
    <p>Universidad Privada Dr. Rafael Belloso Chacín.</p>
    <p>©2024 Powered by Servieduca All rights reserved</p>
</footer>