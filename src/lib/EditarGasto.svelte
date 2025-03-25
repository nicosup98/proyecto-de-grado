<script>
  import { onMount } from "svelte";
  import { getConsumoReal, updateConsumoReal } from "../services/admin";
  import { DateInput } from "date-picker-svelte";
  import dayjs from "dayjs";
  import timezone from "dayjs/plugin/timezone";
  import utc from "dayjs/plugin/utc";
  import { Link, navigate } from "svelte-routing";

  const title = [
    "Agua comprada",
    "Agua recolectada",
    "Agua suministrada",
    "Agua gastada",
    "Fecha",
    "Opciones",
  ];
  let data = [];
  let consumoSelected = {};
  let dialogRef;
  let loadingEditConsumo = false;
  let showTimeoutToast = false;
  let dialogSesionRef;
  let loadingInit = false;
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault("America/Caracas");

  async function consumoData() {
    loadingInit = true;
    const token = localStorage.getItem("token");
    const resp = await getConsumoReal(token);
    if (!resp.ok) {
      if (resp.status == 403) {
        showTimeoutToast = true;
        setTimeout(() => {
          localStorage.clear();
          navigate("/loginAdmin");
        }, 1000);
        return;
      }
      alert("ocurrio un error al consultar dashboard");
      console.error(await resp.text());
    }
    const d = await resp.json();
    data = d.data;
    loadingInit = false;
  }
  onMount(async () => {
    await consumoData();
  });

  function cerrarSesion() {
    localStorage.removeItem("token");
    navigate("/loginAdmin");
  }

  function verInfo(consumoReal) {
    dialogRef.showModal();
    console.log(dayjs(consumoReal.fecha).toDate());
    consumoSelected = {
      ...consumoReal,
      fecha: dayjs(consumoReal.fecha).toDate(),
    };
  }

  async function handleEditConsumoReal(e) {
    e.preventDefault();
    loadingEditConsumo = true;
    const token = localStorage.getItem("token");

    const resp = await updateConsumoReal(token, consumoSelected);
    loadingEditConsumo = false;
    dialogRef.close();
    await consumoData();
  }

  function closeDialog() {
    dialogRef.close();
  }
</script>

<div class="container">
  <div class="drawer z-20">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer" class="flex animate-slide-in">
        <div class="btn btn-ghost text-xl drawer-button">
          <img src="burger.svg" alt="" class="filter invert w-7" />
        </div>
        <div class="flex items-center gap-1">
          <span class="text-xl text-white">Bienvenido Admin</span>
          <img src="image.png" class="w-7 filter invert" alt="" />
        </div>
      </label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"
      ></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <!-- Sidebar content here -->
        <li>
          <Link to="/ConsumosAdmin" class="btn btn-primary rounded"
            >Datos de Consumo</Link
          >
        </li>
        <li class="my-4">
          <button
            class="btn btn-error rounded"
            on:click={() => dialogSesionRef.showModal()}>Cerrar Sesion</button
          >
        </li>
      </ul>
    </div>
  </div>
  {#if loadingInit}
    ...loading
  {:else}
    <table class="table overflow-y-scroll max-h-full">
      <thead class="text-white">
        <tr>
          {#each title as t}
            <th> {t}</th>
          {/each}
        </tr>
      </thead>
      <tbody class="text-blue-200">
        {#each data as r}
          <tr>
            <th>{r.agua_comprada}</th>
            <th>{r.agua_recolectada}</th>
            <th>{r.agua_suministrada}</th>
            <th>{r.agua_gastada}</th>
            <th>{r.fecha_mostrar}</th>
            <th>
              <button
                class="bg-white text-blue-700 rounded p-2"
                on:click={() => verInfo(r)}>ver</button
              >
            </th>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}

  <dialog class="modal" bind:this={dialogRef} id="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >✕</button
        >
      </form>
      <form on:submit={handleEditConsumoReal} class="flex flex-col gap-2">
        <label
          class="flex items-center gap-2 input input-bordered w-[90%] mx-auto input-primary text-blue-700 rounded"
        >
          Agua comprada:
          <input
            type="text"
            pattern="[0-9]+"
            bind:value={consumoSelected.agua_comprada}
            class="placeholder-primary"
            placeholder="12345"
          />
        </label>
        <label
          class="flex items-center gap-2 input input-bordered w-[90%] mx-auto input-primary text-blue-700 rounded"
        >
          Agua sumistrada:
          <input
            type="text"
            class="placeholder-primary"
            bind:value={consumoSelected.agua_suministrada}
            placeholder="12345"
          />
        </label>
        <label
          class="flex items-center gap-2 input input-bordered w-[90%] mx-auto input-primary text-blue-700 rounded"
        >
          Agua Recolectada:
          <input
            type="text"
            class="placeholder-primary"
            bind:value={consumoSelected.agua_recolectada}
            placeholder="12345"
          />
        </label>
        <label
          class="flex items-center gap-2 input input-bordered w-[90%] mx-auto input-primary text-blue-700 rounded"
        >
          Agua gastada:
          <input
            type="text"
            class="placeholder-blue-400"
            bind:value={consumoSelected.agua_gastada}
            placeholder="12345"
          />
        </label>
        <label
          class="flex items-center gap-2 datepicker-input input input-bordered w-[90%] mx-auto input-primary text-blue-700 placeholder-primary rounded"
        >
          fecha:
          <DateInput bind:value={consumoSelected.fecha} format="MM-yyyy" />
        </label>
        <div class="flex justify-around">
          <button type="submit" class="btn btn-success text-white rounded">
            {#if loadingEditConsumo}
              <span class="loading loading-spinner"></span>
            {/if}
            aceptar
          </button>
          <button
            type="button"
            class="btn btn-outline btn-secondary rounded"
            on:click={closeDialog}>cerrar</button
          >
        </div>
      </form>
    </div>
  </dialog>
  <dialog bind:this={dialogSesionRef} class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold text-primary">cerrar sesion</h3>
      <p class="py-4 text-primary">esta seguro de cerrar sesion ?</p>
      <div class="flex gap-2">
        <button class="btn btn-info rounded" on:click={cerrarSesion}
          >cerrar sesion</button
        >
        <button
          class="btn btn-secondary rounded"
          on:click={() => dialogSesionRef.close()}>salir</button
        >
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
  {#if showTimeoutToast}
    <div class="toast toast-bottom toast-end">
      <div class="alert alert-info">
        <span>sesion expirada redirigiendo al login</span>
      </div>
    </div>
  {/if}
</div>

<style>
  :root {
    --date-picker-foreground: "primary";
  }
</style>
