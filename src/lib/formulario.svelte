<script>
    import '/fondo.css'; 

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

<nav class="fixed top-0 left-0 w-full bg-white bg-opacity-60 text-white p-2 flex justify-between items-center z-10">
    <div class="flex items-center">
        <img src="/urbe_logo.png" class="w-16 zoom-img mr-2" alt="URBE Logo" />
    </div>
    <div class="flex items-center">
        <img src="/huella_logo.png" class="w-16 zoom-img ml-2" alt="Huella logo" />
    </div>
</nav>

<div class="flex justify-center items-center h-screen relative z-1 pt-16">

    <form style="background-image: url('/fachada-completa.jpg')" class="backdrop-brightness-50 border border-white border-opacity-30 p-10 rounded-3xl w-full md:w-1/3 max-h-96 overflow-y-auto bg-center bg-cover bg-no-repeat">

        <div class="relative z-10 mb-4 text-center">
            <h2 class="text-2xl font-bold text-white">Formulario de Registro</h2>
            <h2 class="text-2xl font-bold text-white animate-clip" style="position: relative; top: -33px;">Formulario de Registro</h2>
        </div>

        <div class="flex flex-col items-center">
            <label class="text-lg mb-2 text-white relative text-center">¿Cuál es el lugar en el que consideras que gastas más agua?

                <select bind:value={bathroomVisits1} class="mb-4 p-2 w-full text-lg rounded-lg text-center relative text-black">
                    <option value="">Selecciona una opción</option>
                    <option value="Bloque A">Bloque A</option>
                    <option value="Bloque B">Bloque B</option>
                    <option value="Bloque C">Bloque C</option>
                    <option value="Bloque D">Bloque D</option>
                </select>

            </label>

        </div>

        <hr class="border-t border-gray-300 my-4">


        <div class="flex flex-col items-start ml-4">
            <label for="bathroomVisits2" class="text-lg mb-2 text-white">¿Cuántas veces utilizas el urinario en promedio a la semana? <img src="https://example.com/toilet.png" alt="Toilet Icon" class="w-12 h-12 ml-2"></label>
            <div class="flex items-center justify-center mb-4">
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits2 = decrement(bathroomVisits2)}>-</button>
                <input id="bathroomVisits2" type="number" bind:value={bathroomVisits2} class="mx-2 p-2 w-16 text-lg text-center bg-transparent border-none" readonly />
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits2 = increment(bathroomVisits2)}>+</button>
            </div>

        </div>

        <hr class="border-t border-gray-300 my-4">


        <div class="flex flex-col items-start ml-4">
            <label for="bathroomVisits3" class="text-lg mb-2 text-white">¿Cuántas veces utilizas el inodoro en promedio a la semana? <img src="https://example.com/toilet.png" alt="Toilet Icon" class="w-12 h-12 ml-2"></label>
            <div class="flex items-center justify-center mb-4">
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits3 = decrement(bathroomVisits3)}>-</button>
                <input id="bathroomVisits3" type="number" bind:value={bathroomVisits3} class="mx-2 p-2 w-16 text-lg text-center bg-transparent border-none" readonly />
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits3 = increment(bathroomVisits3)}>+</button>
            </div>
        </div>

        <hr class="border-t border-gray-300 my-4">


        <div class="flex flex-col items-start ml-4">
            <label for="bathroomVisits4" class="text-lg mb-2 text-white">¿Cuántos minutos en promedio dura tu ducha diaria? <img src="https://example.com/toilet.png" alt="Toilet Icon" class="w-12 h-12 ml-2"></label>
            <div class="flex items-center justify-center mb-4">
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits4 = decrement(bathroomVisits4)}>-</button>
                <input id="bathroomVisits4" type="number" bind:value={bathroomVisits4} class="mx-2 p-2 w-16 text-lg text-center bg-transparent border-none" readonly />
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits4 = increment(bathroomVisits4)}>+</button>
            </div>
        </div>

        <hr class="border-t border-gray-300 my-4">

        <div class="flex flex-col items-start ml-4">
            <label for="bathroomVisits5" class="text-lg mb-2 text-white">¿Cuántos litros de agua crees que consumes en promedio a la semana usando el bebedero? <img src="https://example.com/toilet.png" alt="Toilet Icon" class="w-12 h-12 ml-2"></label>
            <div class="flex items-center justify-center mb-4">
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits5 = decrement(bathroomVisits5)}>-</button>
                <input id="bathroomVisits5" type="number" bind:value={bathroomVisits5} class="mx-2 p-2 w-16 text-lg text-center bg-transparent border-none" readonly />
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits5 = increment(bathroomVisits5)}>+</button>
            </div>
        </div>

        <hr class="border-t border-gray-300 my-4">

        <div class="flex flex-col items-start ml-4">
            <label for="bathroomVisits6" class="text-lg mb-2 text-white">¿Cuántos segundos en total utilizas el lavamanos a lo largo de una semana? <img src="https://example.com/toilet.png" alt="Toilet Icon" class="w-12 h-12 ml-2"></label>
            <div class="flex items-center justify-center mb-4">
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits6 = decrement(bathroomVisits6)}>-</button>
                <input id="bathroomVisits6" type="number" bind:value={bathroomVisits6} class="mx-2 p-2 w-16 text-lg text-center bg-transparent border-none" readonly />
                <button type="button" class="px-2 py-1 bg-gray-300 rounded" on:click={() => bathroomVisits6 = increment(bathroomVisits6)}>+</button>
            </div>
        
            </label>
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