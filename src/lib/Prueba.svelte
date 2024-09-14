<script>
    import '/fondo.css';
    import { onMount } from 'svelte';

    let bathroomVisits1 = '';
    let bathroomVisits2 = 0;
    let bathroomVisits3 = 0;
    let bathroomVisits4 = 0;
    let bathroomVisits5 = 0;
    let bathroomVisits6 = 0;

    let newExpenseName = '';
    let newExpenseValue = 0;
    let showModal = false;
    let additionalExpenses = [];

    function increment(value, step = 1) {
        return value + step;
    }

    function decrement(value, step = 1) {
        return value > 0 ? value - step : 0;
    }

    function addExpense() {
        if (newExpenseName && newExpenseValue) {
            additionalExpenses = [...additionalExpenses, { name: newExpenseName, value: newExpenseValue }];
            newExpenseName = '';
            newExpenseValue = 0;
            showModal = false;
        } else {
            alert("Por favor, complete todos los campos.");
        }
    }
</script>

<!-- Prueba565 -->
<!-- Prueba565 -->
 <!-- Prueba565 -->
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
        <img src="urbe_logo.png" class="w-16 zoom-img mr-2" alt="URBE Logo" />
    </div>
    <div class="flex items-center">
        <img src="sustentable_logo.png" class="w-16 zoom-img ml-6" alt="Huella logo" />
    </div>
</nav>

<div class="flex justify-center items-center min-h-screen pt-24 pb-24">
    <div class="flex flex-col md:flex-row w-full md:w-2/3">
        <div class="md:w-1/2 p-10 text-white md:mr-10">
            <h1 class="text-3xl md:text-4xl font-bold mb-4">Aqui va una nota diciendo lo que tiene que hacer el usuario</h1>
            <p class="text-lg">Ejemplo: tiene que poner el consumo de agua dentro de urbe, no a las afueras.</p>
        </div>
        <form class="backdrop-blur-lg bg-white bg-opacity-10 border border-white border-opacity-30 p-10 rounded-3xl w-full md:w-3/5 max-h-[600px] overflow-y-auto">

            <div class="relative z-10 mb-4 text-center">
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
                        <option value="Feria de comida">Feria de comida</option>
                        <option value="Centro de mantenimiento">Centro de mantenimiento</option>
                    </select>
                </label>
            </div>

            <hr class="border-t border-gray-300 my-4">

            <div class="flex flex-col items-center">
                <label class="text-lg mb-2 text-white text-center">¿Cuántas veces utilizas el urinario en promedio a la semana? 
                    <img src="icono_urinario.png" alt="Toilet Icon" class="w-25 h-15 ml-6 mt-0">
                    <div class="flex items-center justify-center mb-4">
                        <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits2 = decrement(bathroomVisits2)}>-</button>
                        <input type="number" bind:value={bathroomVisits2} class="pl-4 w-28 text-center bg-transparent border-none text-white text-6xl" readonly />
                        <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits2 = increment(bathroomVisits2)}>+</button>
                    </div>
                </label>
            </div>

            <hr class="border-t border-gray-300 my-4">

            <div class="flex flex-col items-center">
                <label class="text-lg mb-2 text-white text-center">¿Cuántas veces utilizas el inodoro en promedio a la semana? 
                    <img src="icono_ignodoro.png" alt="Toilet Icon" class="w-12 h-12 ml-6 mt-0">
                    <div class="flex items-center justify-center mb-4">
                        <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits3 = decrement(bathroomVisits3)}>-</button>
                        <input type="number" bind:value={bathroomVisits3} class="pl-4 w-28 text-center bg-transparent border-none text-white text-6xl" readonly />
                        <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits3 = increment(bathroomVisits3)}>+</button>
                    </div>
                </label>
            </div>

            <hr class="border-t border-gray-300 my-4">

            <div class="flex flex-col items-center">
                <label class="text-lg mb-2 text-white text-center">¿Cuántos minutos en promedio dura tu ducha diaria? 
                    <img src="icono_regadera.png" alt="Toilet Icon" class="w-12 h-12 ml-6 mt-0">
                    <div class="flex items-center justify-center mb-4">
                        <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits4 = decrement(bathroomVisits4)}>-</button>
                        <input type="number" bind:value={bathroomVisits4} class="pl-4 w-28 text-center bg-transparent border-none text-white text-6xl" readonly />
                        <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits4 = increment(bathroomVisits4)}>+</button>
                    </div>
                </label>
            </div>

            <hr class="border-t border-gray-300 my-4">

            <div class="flex flex-col items-center">
                <label class="text-lg mb-2 text-white text-center">¿Cuántos litros de agua crees que consumes en promedio a la semana usando el bebedero? 
                    <img src="icono_bebedero.png" alt="Toilet Icon" class="w-12 h-12 ml-6 mt-0">
                    <div class="flex items-center justify-center mb-4">
                        <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits5 = decrement(bathroomVisits5, 0.1)}>-</button>
                        <input type="number" bind:value={bathroomVisits5} class="pl-4 w-28 text-center bg-transparent border-none text-white text-6xl" readonly />
                        <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits5 = increment(bathroomVisits5, 0.1)}>+</button>
                    </div>
                </label>
            </div>

            <hr class="border-t border-gray-300 my-4">

            <div class="flex flex-col items-center">
                <label class="text-lg mb-2 text-white text-center">¿Cuántos segundos en total utilizas el lavamanos a lo largo de una semana? 
                    <img src="icono_lavamanos.png" alt="Toilet Icon" class="w-12 h-12 ml-6 mt-0">
                    <div class="flex items-center justify-center mb-4">
                        <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits6 = decrement(bathroomVisits6)}>-</button>
                        <input type="number" bind:value={bathroomVisits6} class="pl-4 w-28 text-center bg-transparent border-none text-white text-6xl" readonly />
                        <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => bathroomVisits6 = increment(bathroomVisits6)}>+</button>
                    </div>
                </label>
            </div>

            <hr class="border-t border-gray-300 my-4">

            <!-- Aquí se muestran los gastos adicionales dentro del formulario -->
            {#each additionalExpenses as expense, index}
                <div class="flex flex-col items-center">
                    <label class="text-lg mb-2 text-white text-center">{expense.name}
                        <div class="flex items-center justify-center mb-4">
                            <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => expense.value = decrement(expense.value)}>-</button>
                            <input type="number" bind:value={expense.value} class="pl-4 w-28 text-center bg-transparent border-none text-white text-6xl" readonly />
                            <button type="button" class="px-5 py-2 bg-transparent rounded text-6xl text-white" on:click={() => expense.value = increment(expense.value)}>+</button>
                        </div>
                    </label>
                </div>

                <hr class="border-t border-gray-300 my-4">
            {/each}

            <div class="flex justify-center">
                <button type="button" class="bg-green-500 text-white p-2 rounded-lg mt-4 hover:bg-green-700 transition-colors duration-300 w-full" on:click={() => showModal = true}>Agregar gasto de agua</button>
            </div>

            <div class="flex justify-center">
                <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-700 transition-colors duration-300 w-full">Continuar</button>
            </div>
        </form>
    </div>
</div>

{#if showModal}
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl mb-4">Agregar nuevo gasto de agua</h3>
            <label class="block mb-2">
                Nombre del gasto:
                <input type="text" bind:value={newExpenseName} class="p-2 border rounded w-full" required />
            </label>
            <label class="block mb-4">
                Gasto por segundo:
                <input type="number" bind:value={newExpenseValue} class="p-2 border rounded w-full" required />
            </label>
            <div class="flex justify-end">
                <button type="button" class="bg-blue-500 text-white p-2 rounded mr-2" on:click={addExpense}>Aceptar</button>
                <button type="button" class="bg-red-500 text-white p-2 rounded" on:click={() => showModal = false}>Cancelar</button>
            </div>
        </div>
    </div>
{/if}

<footer class="bg-gray-800 text-white p-4 text-center w-full fixed bottom-0 left-0">
    <p>Universidad Privada Dr. Rafael Belloso Chacín.</p>
    <p>©2024 Powered by Servieduca All rights reserved</p>
</footer>