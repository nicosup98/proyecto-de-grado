<script>
  import { onMount } from "svelte";
  import { getConsumoReal, updateConsumoReal } from "../services/admin";
  import { DateInput } from "date-picker-svelte";
  import dayjs from "dayjs";
  import timezone from "dayjs/plugin/timezone";
  import utc from "dayjs/plugin/utc";
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
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault("America/Caracas");
  onMount(async () => {
    const token = localStorage.getItem("token");
    const resp = await getConsumoReal(token);
    const d = await resp.json();
    data = d.data;
  });

  function verInfo(consumoReal) {
    dialogRef.showModal();
    consumoSelected = consumoReal;
    console.log({ consumoSelected });
  }

  async function handleEditConsumoReal(e) {
    e.preventDefault();
    loadingEditConsumo = true;
    const token = localStorage.getItem("token");

    const resp = await updateConsumoReal(token, consumoSelected);
    loadingEditConsumo = false;
    dialogRef.close();
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
          <span class="text-xl">Bienvenido Admin</span>
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
          <button
            class="btn btn-primary rounded"
            on:click={() => (window.location.href = "/ConsumosAdmin")}
            >Datos de Consumo</button
          >
        </li>
        <li class="my-4">
          <button class="btn btn-error rounded">Cerrar Sesion</button>
        </li>
      </ul>
    </div>
  </div>
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
          <th>{r.fecha}</th>
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
          <DateInput bind:value={consumoSelected.fecha} format="dd-MM-yyyy" />
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
</div>

<style>
  :root {
    --date-picker-foreground: "primary";
  }
</style>