<script>
  // @ts-ignore
  import BlueBox from "./BlueBox.svelte";
  // @ts-ignore
  import DonutChart from "./DonutChart.svelte";
  // @ts-ignore
  import BarChart from "./BarChart.svelte";
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";
  import { navigate } from "svelte-routing";
  import { addConsumoReal, getConsumoRealByMonts } from "../services/admin";
  import { DateInput } from "date-picker-svelte";

  let formGastoAdmin = {};
  let dialogRef;
  let monthlyChart;
  let chart;
  let dataChart = {}
  let loading = false;

  const monthlyData = [
    {
      month: "Enero",
      consumoRojo: 500,
      consumoAzul: 500,
      colorRojo: "#FF6347",
      colorAzul: "#1E90FF",
    },
    {
      month: "Febrero",
      consumoRojo: 600,
      consumoAzul: 600,
      colorRojo: "#FF6347",
      colorAzul: "#1E90FF",
    },
    {
      month: "Marzo",
      consumoRojo: 450,
      consumoAzul: 450,
      colorRojo: "#FF6347",
      colorAzul: "#1E90FF",
    },
    {
      month: "Abril",
      consumoRojo: 550,
      consumoAzul: 550,
      colorRojo: "#FF6347",
      colorAzul: "#1E90FF",
    },
    {
      month: "Mayo",
      consumoRojo: 650,
      consumoAzul: 650,
      colorRojo: "#FF6347",
      colorAzul: "#1E90FF",
    },
    {
      month: "Junio",
      consumoRojo: 700,
      consumoAzul: 700,
      colorRojo: "#FF6347",
      colorAzul: "#1E90FF",
    },
    {
      month: "Julio",
      consumoRojo: 750,
      consumoAzul: 750,
      colorRojo: "#FF6347",
      colorAzul: "#1E90FF",
    },
    {
      month: "Agosto",
      consumoRojo: 800,
      consumoAzul: 800,
      colorRojo: "#FF6347",
      colorAzul: "#1E90FF",
    },
    {
      month: "Septiembre",
      consumoRojo: 850,
      consumoAzul: 850,
      colorRojo: "#FF6347",
      colorAzul: "#1E90FF",
    },
    {
      month: "Octubre",
      consumoRojo: 900,
      consumoAzul: 900,
      colorRojo: "#FF6347",
      colorAzul: "#1E90FF",
    },
    {
      month: "Noviembre",
      consumoRojo: 950,
      consumoAzul: 950,
      colorRojo: "#FF6347",
      colorAzul: "#1E90FF",
    },
    {
      month: "Diciembre",
      consumoRojo: 1000,
      consumoAzul: 1000,
      colorRojo: "#FF6347",
      colorAzul: "#1E90FF",
    },
  ];

  const dataOFMonths = [];

  function openModal() {
    dialogRef.showModal();
  }

  function closeModal() {
    formGastoAdmin = {};
    dialogRef.close();
  }

  async function saveForm(e) {
    e.preventDefault();
    loading = true;
    const token = localStorage.getItem("token");
    const resp = await addConsumoReal(token, formGastoAdmin);
    if (!resp.ok) {
      alert("ocurrion un error al guardar la informacion");
      console.error(await resp.text());
      return;
    }
    loading = false;
    dialogRef.close();

    await home();
  }

  function handleEdit() {
    navigate("/editar-gasto");
  }

  async function home() {
    const token = localStorage.getItem("token");
    const resp = await getConsumoRealByMonts(token);
    if (!resp.ok) {
      alert("ocurrio un error al consultar los datos");
      console.error(await resp.text());
      return;
    }
    chart?.destroy()
    const { data } = await resp.json();
    dataChart = data
    // @ts-ignore
    const ctx = monthlyChart.getContext("2d");
    chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: dataChart.map((data) => data.mes),
        datasets: [
          {
            label: "Gasto Mensual de Agua",
            data: dataChart.map((data) => data.agua_gastada),
            backgroundColor: "#FF6347",
            borderColor: "#FF6347",
            borderWidth: 1,
          },
          {
            label: "Ingreso de agua mensual",
            data: dataChart.map((data) => data.agua_suministrada),
            backgroundColor: "#1E90FF",
            borderColor: "#1E90FF",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "white",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "white",
            },
          },
          y: {
            ticks: {
              color: "white",
            },
          },
        },
      },
    });
  }

  // @ts-ignore
  onMount(async () => {
    await home();

    return ()=>chart.destroy()
  });
</script>

<div class="text-white"></div>
<div class="flex justify-between text-white">
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
      <ul
        class="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-white"
      >
        <!-- Sidebar content here no se redirecciona asi es con link -->
        <li>
          <button
            class="btn btn-primary rounded"
            on:click={() => navigate("/administrador")}
            >Datos del Formulario</button
          >
        </li>
        <li class="my-4">
          <button class="btn btn-error rounded">Cerrar Sesion</button>
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="divider"></div>
<section class="flex justify-around gap-4 text-white">
  <div class="text-center w-full">
    <span class="text-lg" id="consumo-mensual">Consumo Mensual</span>
    <div class="chart-container">
      <canvas bind:this={monthlyChart} id="monthlyChart"></canvas>
    </div>
  </div>
</section>

<div class="flex flex-col md:flex-row justify-around my-4 gap-2 md:gap-4">
  <button class="btn btn-success w-full md:w-auto" on:click={handleEdit}
    >Editar Gasto de Agua</button
  >
  <button class="btn btn-info w-full md:w-auto" on:click={openModal}
    >Ingresos/gastos de agua</button
  >
</div>

<dialog class="modal w-full" bind:this={dialogRef}>
  <div class="modal-box w-full">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >✕</button
      >
    </form>
    <div class="bg-white p-6 rounded-lg shadow-lg w-1/3 text-black w-full">
      <h3 class="text-lg font-bold">Recolección de Agua</h3>
      <form on:submit={saveForm} class="flex flex-col w-full">
        <label for="litrosRecolectados">Litros Recolectados:</label>
        <input
          type="number"
          id="litrosRecolectados"
          bind:value={formGastoAdmin.agua_recolectada}
          class="input input-bordered w-full mb-4"
          max="9999999999"
          min="0"
          required
        />

        <label for="litrosComprados">Litros Comprados:</label>
        <input
          type="number"
          id="litrosComprados"
          bind:value={formGastoAdmin.agua_comprada}
          class="input input-bordered w-full mb-4"
          max="9999999999"
          min="0"
          required

        />

        <label for="litrosGastados">Litros Gastados:</label>
        <input
          type="number"
          id="litrosGastados"
          bind:value={formGastoAdmin.agua_gastada}
          class="input input-bordered w-full mb-4"
          max="9999999999"
          min="0"
          required
        />
        <label for="dateInput">fecha</label>
        <DateInput
          id="dateInput"
          format="dd-MM-yyyy"
          bind:value={formGastoAdmin.fecha}
          required
        />

        <div class="flex justify-between mt-4">
          <button type="submit" class="btn btn-primary w-full md:w-auto">
            {#if loading}
              <span class="loading loading-spinner text-primary"></span>
            {/if}
            Guardar
          </button>
          <button
            type="button"
            class="btn btn-secondary w-full md:w-auto"
            on:click={closeModal}
          >
            Cerrar
          </button>
        </div>
      </form>
    </div>
  </div>
</dialog>

<style>
  :root {
    --date-input-width: 100%;
  }


  .btn {
    padding: 10px 20px;
    margin: 5px;
  }

  .text-white {
    color: white;
  }

  .chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 400px;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
  }

  .chart-container canvas {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
</style>
