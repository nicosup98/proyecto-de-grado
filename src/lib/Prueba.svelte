<script>
    import "/fondo.css";
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import { form, updateForm, form_results } from "../stores/form";
    import { sendForm } from "../services/Form";
    import Decimal from "decimal.js";
    import PopUpInfo from "./PopUpInfo.svelte";
    let bloque_preferido = "";
    let cantidad_veces_urinario = 0;
    let cantidad_veces_inodoro = 0;
    let bathroomVisits4 = 0;
    let tiempo_bebedero = 0;
    let bathroomVisits6 = 0;

    let newExpenseName = "";
    let newExpenseValue = 0;
    let showModal = false;
    let additionalExpenses = [];
    let showAlert = false;

    let selectedExpenseOption = "";
    let loader = false;
    let alert

    $: genero = $form.genero;
    $: tipo_usuario = $form.tipo_persona;

    onMount(() => {
        // Redirigir a Inicio.svelte si no se han establecido tipo_usuario o genero
        if (!tipo_usuario || !genero) {
            navigate("/");
        }
    });

    function displayAlert(alertConfig){
        const {duration} = alertConfig
        alert = alertConfig
        showAlert = true
        setTimeout(()=>{
            showAlert = false
        },duration || 500)
    }
    function increment(value, step = 1) {
        return Decimal.add(value, step).lessThanOrEqualTo(99)
            ? Decimal.add(value, step).toNumber()
            : 99;
    }

    function decrement(value, step = 1) {
        const newValue = new Decimal(value);
        return newValue.greaterThan(0)
            ? newValue.minus(step).toNumber()
            : new Decimal(0).toNumber();
    }

    function addExpense() {
        if (newExpenseValue < 0) {
            displayAlert({msg:"El gasto de agua en litros por semana no puede ser negativo.",type:'alert-warning'})
            return;
        }

        if (
            selectedExpenseOption === "Otro" &&
            newExpenseName &&
            newExpenseValue
        ) {
            additionalExpenses = [
                ...additionalExpenses,
                {
                    name: newExpenseName,
                    value: newExpenseValue,
                    option: selectedExpenseOption,
                },
            ];
        } else if (selectedExpenseOption !== "Otro" && selectedExpenseOption) {
            additionalExpenses = [
                ...additionalExpenses,
                {
                    name: selectedExpenseOption,
                    value: newExpenseValue,
                    option: selectedExpenseOption,
                },
            ];
        } else {
            alert("Por favor, complete todos los campos.");
        }
        newExpenseName = "";
        newExpenseValue = 0;
        selectedExpenseOption = "";
        showModal = false;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const newForm = {
            bloque_preferido,
            cantidad_veces_inodoro,
            cantidad_veces_urinario,
            tiempo_ducha: bathroomVisits4,
            tiempo_bebedero,
            tiempo_lavamanos: bathroomVisits6,
            punto_rojo: additionalExpenses,
        };

        if (newForm.bloque_preferido === "") {
            displayAlert({msg:"Por favor, seleccione un bloque preferido.",type:'alert-warning'},)
            return;
        }
        updateForm(newForm);
        loader = true;
        const resp = await sendForm($form);
        if (!resp.ok) {
            displayAlert({msg: 'ocurrion un error al enviar el formulario',type: 'alert-error'})
            return;
        }
        displayAlert({msg:'el formulario se envio satisfactoriamente',type: 'alert-info'})
        form_results.set(await resp.json());
        setTimeout(() => {
            loader = false;
            navigate("/respuestas");
        }, 500);
    }
</script>

<div class="flex justify-center items-center py-4">
    <div class="flex justify-around flex-col md:flex-row w-full md:w-3/4">
        <div class="flex flex-col justify-center md:w-1/2 p-10 text-white md:mr-10">
            <h1
                class="text-3xl md:text-4xl font-bold mb-4  relative top-[-40px]"
            >
                Registro de Consumo de Agua dentro de URBE
            </h1>
            <p class="text-lg relative top-[-22px]">
                Por favor, registre su consumo de agua dentro de la universidad.
                Los datos deben ser un promedio semanal.
            </p>
        </div>

        <form
            class="backdrop-blur-lg bg-white bg-opacity-10 border border-white border-opacity-30 p-10 rounded-3xl w-full md:w-3/5 max-h-[550px] overflow-y-auto"
            on:submit={handleSubmit}
        >
            <div class="relative z-10 mb-4 text-center">
                <h2
                    class="text-2xl font-bold text-white animate-clip mt-6"
                    style="position: relative; top: -33px;"
                >
                    Formulario de Registro
                </h2>
            </div>

            <div class="flex flex-col items-center">
                <label class="text-lg mb-2 text-white relative text-center"
                    >¿Cuál es el lugar en el que consideras que gastas más agua?
                    <select
                        bind:value={bloque_preferido}
                        class="mb-4 p-2 w-full text-lg rounded-lg text-center relative text-black"
                        required
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="A">Bloque A</option>
                        <option value="B">Bloque B</option>
                        <option value="C">Bloque C</option>
                        <option value="D">Bloque D</option>
                        <option value="E">Bloque E</option>
                        <option value="F">Bloque F</option>
                        <option value="G">Bloque G</option>
                        <option value="Biblioteca">Biblioteca</option>
                        {#if tipo_usuario === "personal" || tipo_usuario === "mantenimiento"}
                            <option value="Feria de comida"
                                >Feria de Comida</option
                            >
                        {/if}
                        {#if tipo_usuario === "mantenimiento"}
                            <option value="Centro de mantenimiento"
                                >Centro de Mantenimiento</option
                            >
                            <option value="Vivero">Vivero</option>
                            <option value="Otro">Otro</option>
                        {/if}

                        <option value="Rectorado">Rectorado</option>
                        <option value="Cancha">Cancha</option>
                    </select>
                </label>
            </div>

            <hr class="border-t border-gray-300 my-4" />

            {#if genero !== "femenino"}
                <div class="flex flex-col items-center">
                    <label class="text-lg mb-2 text-white text-center"
                        >¿Cuántas veces utilizas el urinario en promedio a la
                        semana?
                        <img
                            src="icono_urinario.png"
                            alt="Toilet Icon"
                            class="w-25 h-15 ml-6 mt-0"
                        />
                        <div class="flex items-center justify-center mb-4">
                            <button
                                type="button"
                                class="px-5 py-2 bg-transparent rounded text-6xl text-white"
                                on:click={() =>
                                    (cantidad_veces_urinario = decrement(
                                        cantidad_veces_urinario,
                                    ))}>-</button
                            >
                            <input
                                type="number"
                                bind:value={cantidad_veces_urinario}
                                class="pl-4 w-28 text-center bg-transparent border-none text-white text-6xl"
                                readonly
                            />
                            <button
                                type="button"
                                class="px-5 py-2 bg-transparent rounded text-6xl text-white"
                                on:click={() =>
                                    (cantidad_veces_urinario = increment(
                                        cantidad_veces_urinario,
                                    ))}>+</button
                            >
                        </div>
                    </label>
                </div>
                <hr class="border-t border-gray-300 my-4" />
            {/if}

            <div class="flex flex-col items-center">
                <label class="text-lg mb-2 text-white text-center"
                    >¿Cuántas veces utilizas el inodoro en promedio a la semana?
                    <img
                        src="icono_ignodoro.png"
                        alt="Toilet Icon"
                        class="w-12 h-12 ml-6 mt-0"
                    />
                    <div class="flex items-center justify-center mb-4">
                        <button
                            type="button"
                            class="px-5 py-2 bg-transparent rounded text-6xl text-white"
                            on:click={() =>
                                (cantidad_veces_inodoro = decrement(
                                    cantidad_veces_inodoro,
                                ))}>-</button
                        >
                        <input
                            type="number"
                            bind:value={cantidad_veces_inodoro}
                            class="pl-4 w-28 text-center bg-transparent border-none text-white text-6xl"
                            readonly
                        />
                        <button
                            type="button"
                            class="px-5 py-2 bg-transparent rounded text-6xl text-white"
                            on:click={() =>
                                (cantidad_veces_inodoro = increment(
                                    cantidad_veces_inodoro,
                                ))}>+</button
                        >
                    </div>
                </label>
            </div>

            <hr class="border-t border-gray-300 my-4" />

            <div class="flex flex-col items-center">
                <label class="text-lg mb-2 text-white text-center"
                    >¿Cuántos minutos en promedio dura tu ducha diaria?
                    <img
                        src="icono_regadera.png"
                        alt="Toilet Icon"
                        class="w-12 h-12 ml-6 mt-0"
                    />
                    <div class="flex items-center justify-center mb-4">
                        <button
                            type="button"
                            class="px-5 py-2 bg-transparent rounded text-6xl text-white"
                            on:click={() =>
                                (bathroomVisits4 = decrement(bathroomVisits4))}
                            >-</button
                        >
                        <input
                            type="number"
                            bind:value={bathroomVisits4}
                            class="pl-4 w-28 text-center bg-transparent border-none text-white text-6xl"
                            readonly
                        />
                        <button
                            type="button"
                            class="px-5 py-2 bg-transparent rounded text-6xl text-white"
                            on:click={() =>
                                (bathroomVisits4 = increment(bathroomVisits4))}
                            >+</button
                        >
                    </div>
                </label>
            </div>

            <hr class="border-t border-gray-300 my-4" />

            <div class="flex flex-col items-center">
                <label class="text-lg mb-2 text-white text-center"
                    >¿Cuánto segundos crees que usas el bebedero en promedio a la
                    semana?
                    <img
                        src="icono_bebedero.png"
                        alt="Toilet Icon"
                        class="w-12 h-12 ml-6 mt-0"
                    />
                    <div class="flex items-center justify-center mb-4">
                        <button
                            type="button"
                            class="px-5 py-2 bg-transparent rounded text-6xl text-white"
                            on:click={() =>
                                (tiempo_bebedero = decrement(tiempo_bebedero))}
                            >-</button
                        >
                        <input
                            type="number"
                            bind:value={tiempo_bebedero}
                            class="pl-4 w-28 text-center bg-transparent border-none text-white text-6xl"
                            readonly
                        />
                        <button
                            type="button"
                            class="px-5 py-2 bg-transparent rounded text-6xl text-white"
                            on:click={() =>
                                (tiempo_bebedero = increment(tiempo_bebedero))}
                            >+</button
                        >
                    </div>
                </label>
            </div>

            <hr class="border-t border-gray-300 my-4" />

            <div class="flex flex-col items-center">
                <label class="text-lg mb-2 text-white text-center"
                    >¿Cuántos segundos en total utilizas el lavamanos a lo largo
                    de una semana?
                    <img
                        src="icono_lavamanos.png"
                        alt="Toilet Icon"
                        class="w-12 h-12 ml-6 mt-0"
                    />
                    <div class="flex items-center justify-center mb-4">
                        <button
                            type="button"
                            class="px-5 py-2 bg-transparent rounded text-6xl text-white"
                            on:click={() =>
                                (bathroomVisits6 = decrement(bathroomVisits6))}
                            >-</button
                        >
                        <input
                            type="number"
                            bind:value={bathroomVisits6}
                            class="pl-4 w-28 text-center bg-transparent border-none text-white text-6xl"
                            readonly
                        />
                        <button
                            type="button"
                            class="px-5 py-2 bg-transparent rounded text-6xl text-white"
                            on:click={() =>
                                (bathroomVisits6 = increment(bathroomVisits6))}
                            >+</button
                        >
                    </div>
                </label>
            </div>

            <hr class="border-t border-gray-300 my-4" />

            <!-- Aquí se muestran los gastos adicionales dentro del formulario -->
            {#each additionalExpenses as expense, index}
                <div class="flex flex-col items-center">
                    <label class="text-lg mb-2 text-white text-center"
                        >{expense.name}
                        <div class="flex items-center justify-center mb-4">
                            <button
                                type="button"
                                class="px-5 py-2 bg-transparent rounded text-6xl text-white"
                                on:click={() =>
                                    (expense.value = decrement(expense.value))}
                                >-</button
                            >
                            <input
                                type="number"
                                bind:value={expense.value}
                                class="pl-4 w-28 text-center bg-transparent border-none text-white text-6xl"
                                readonly
                            />
                            <button
                                type="button"
                                class="px-5 py-2 bg-transparent rounded text-6xl text-white"
                                on:click={() =>
                                    (expense.value = increment(expense.value))}
                                >+</button
                            >
                        </div>
                    </label>
                </div>

                <hr class="border-t border-gray-300 my-4" />
            {/each}

            {#if tipo_usuario === "mantenimiento"}
                <div class="flex justify-center">
                    <button
                        type="button"
                        class="bg-green-500 text-white p-2 rounded-lg mt-4 hover:bg-green-700 transition-colors duration-300 w-full"
                        on:click={() => (showModal = true)}
                        >Agregar gasto de agua</button
                    >
                </div>
            {/if}

            <div class="flex justify-center">
                <button
                    type="submit"
                    disabled={loader}
                    class="flex justify-center gap-2 bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-700 transition-colors duration-300 w-full"
                >
                    Continuar
                    {#if loader}
                        <span class="loading loading-spinner"></span>
                    {/if}
                </button>
            </div>
        </form>
    </div>
</div>
{#if showAlert}
    <PopUpInfo {...alert} />
{/if}

{#if showModal}
    <div
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl mb-4">Agregar nuevo gasto de agua</h3>
            <label class="block mb-2">
            Nombre del gasto:
            <input
                type="text"
                bind:value={newExpenseName}
                class="p-2 border rounded w-full"
                required
            />
            </label>
            <label class="block mb-4">
                {selectedExpenseOption == "botellon" ? "botellones" : "litros"} por semana:
                <input
                    type="number"
                    bind:value={newExpenseValue}
                    class="p-2 border rounded w-full"
                    min="0"
                    required
                />
            </label>
            <div class="flex justify-end">
                <button
                    type="button"
                    class="bg-blue-500 text-white p-2 rounded mr-2"
                    on:click={addExpense}>Aceptar</button
                >
                <button
                    type="button"
                    class="bg-red-500 text-white p-2 rounded"
                    on:click={() => (showModal = false)}>Cancelar</button
                >
            </div>
        </div>
    </div>
{/if}