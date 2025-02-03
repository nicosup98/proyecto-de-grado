<script>
  // @ts-ignore
  import BlueBox from "./BlueBox.svelte";
  // @ts-ignore
  import DonutChart from "./DonutChart.svelte";
  // @ts-ignore
  import BarChart from "./BarChart.svelte";
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  let showModal = false;
  let tipoRecoleccion = 'recoleccion';

  const monthlyData = [
    { month: "Enero", consumoRojo: 500, consumoAzul: 500, colorRojo: "#FF6347", colorAzul: "#1E90FF" },
    { month: "Febrero", consumoRojo: 600, consumoAzul: 600, colorRojo: "#FF6347", colorAzul: "#1E90FF" },
    { month: "Marzo", consumoRojo: 450, consumoAzul: 450, colorRojo: "#FF6347", colorAzul: "#1E90FF" },
    { month: "Abril", consumoRojo: 550, consumoAzul: 550, colorRojo: "#FF6347", colorAzul: "#1E90FF" },
    { month: "Mayo", consumoRojo: 650, consumoAzul: 650, colorRojo: "#FF6347", colorAzul: "#1E90FF" },
    { month: "Junio", consumoRojo: 700, consumoAzul: 700, colorRojo: "#FF6347", colorAzul: "#1E90FF" },
    { month: "Julio", consumoRojo: 750, consumoAzul: 750, colorRojo: "#FF6347", colorAzul: "#1E90FF" },
    { month: "Agosto", consumoRojo: 800, consumoAzul: 800, colorRojo: "#FF6347", colorAzul: "#1E90FF" },
    { month: "Septiembre", consumoRojo: 850, consumoAzul: 850, colorRojo: "#FF6347", colorAzul: "#1E90FF" },
    { month: "Octubre", consumoRojo: 900, consumoAzul: 900, colorRojo: "#FF6347", colorAzul: "#1E90FF" },
    { month: "Noviembre", consumoRojo: 950, consumoAzul: 950, colorRojo: "#FF6347", colorAzul: "#1E90FF" },
    { month: "Diciembre", consumoRojo: 1000, consumoAzul: 1000, colorRojo: "#FF6347", colorAzul: "#1E90FF" },
  ];

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  function handleEdit() {
    window.location.href = "/editar-gasto";
  }

  function handleView() {
    window.location.href = "/desglose-mensual";
  }

  onMount(() => {
    const canvas = document.getElementById("monthlyChart");
    // @ts-ignore
    const ctx = canvas.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: monthlyData.map(data => data.month),
        datasets: [
          {
            label: "Gasto Mensual de Agua",
            data: monthlyData.map(data => data.consumoRojo),
            backgroundColor: monthlyData.map(data => data.colorRojo),
            borderColor: monthlyData.map(data => data.colorRojo),
            borderWidth: 1
          },
          {
            label: "Ingreso de agua mensual",
            data: monthlyData.map(data => data.consumoAzul),
            backgroundColor: monthlyData.map(data => data.colorAzul),
            borderColor: monthlyData.map(data => data.colorAzul),
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "white"
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: "white"
            }
          },
          y: {
            ticks: {
              color: "white"
            }
            }
          }
          }
        });
        });
      </script>

      <div class="text-white" ></div>
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
            <span class="text-xl">Bienvenido Admin</span> <img src="image.png" class="w-7 filter invert" alt="" />
            </div>
          </label>
          </div>

          <div class="drawer-side">
          <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
          <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-white">
            <!-- Sidebar content here -->
            <li><button class="btn btn-primary rounded" on:click={() => window.location.href = '/administrador'}>Datos del Formulario</button></li>
            <li class="my-4"><button class="btn btn-error rounded">Cerrar Sesion</button></li>
          </ul>
          </div>
        </div>
        </div>

        <div class="divider"></div>
        <section class="flex justify-around gap-4 text-white">
        <div class="text-center w-full">
          <span class="text-lg" id="consumo-mensual">Consumo Mensual</span>
          <div class="chart-container">
          <canvas id="monthlyChart"></canvas>
          </div>
        </div>
        </section>

        <div class="flex flex-col md:flex-row justify-around my-4 gap-2 md:gap-4">
        <button class="btn btn-success w-full md:w-auto" on:click={handleEdit}>Editar Gasto de Agua</button>
        <button class="btn btn-danger w-full md:w-auto" on:click={handleView}>Litros que se Gastaron</button>
        <button class="btn btn-info w-full md:w-auto" on:click={openModal}>Ventana Modal recolección de agua</button>
        </div>

        {#if showModal}
        <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div class="bg-white p-6 rounded-lg shadow-lg w-1/3 text-black">
          <h3 class="text-lg font-bold">Recolección de Agua</h3>
          <form>
            <label for="tipoRecoleccion">Tipo de Recolección:</label>
            <select id="tipoRecoleccion" class="select select-bordered w-full mb-4" bind:value={tipoRecoleccion}>
            <option value="recoleccion">Recolección de Agua</option>
            <option value="compra">Agua Comprada</option>
            </select>

            <label for="mes">Mes:</label>
            <select id="mes" class="select select-bordered w-full mb-4">
            <option value="Enero">Enero</option>
            <option value="Febrero">Febrero</option>
            <option value="Marzo">Marzo</option>
            <option value="Abril">Abril</option>
            <option value="Mayo">Mayo</option>
            <option value="Junio">Junio</option>
            <option value="Julio">Julio</option>
            <option value="Agosto">Agosto</option>
            <option value="Septiembre">Septiembre</option>
            <option value="Octubre">Octubre</option>
            <option value="Noviembre">Noviembre</option>
            <option value="Diciembre">Diciembre</option>
            </select>
 

            {#if tipoRecoleccion === 'recoleccion'}
            <label for="litrosRecolectados">Litros Recolectados:</label>
            <input type="number" id="litrosRecolectados" class="input input-bordered w-full mb-4" max="9999999999" />
            {/if}

            {#if tipoRecoleccion === 'compra'}
            <label for="litrosComprados">Litros Comprados:</label>
            <input type="number" id="litrosComprados" class="input input-bordered w-full mb-4" max="9999999999" />
            {/if}
      
            <div class="flex justify-between mt-4">
              <button type="button" class="btn btn-primary w-full md:w-auto" on:click={closeModal}>Guardar</button>
              <button class="btn btn-secondary w-full md:w-auto" on:click={closeModal}>Cerrar</button>
            </div>
          </form>
          </div>
        </div>
        {/if}
        <style>
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