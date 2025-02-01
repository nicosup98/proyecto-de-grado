<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";
  import BlueBox from "./BlueBox.svelte";

  const dataOfdispenser = [
    { dispensador: "lavamanos", consumo: 1200 },
    { dispensador: "inodoros", consumo: 4650 },
    { dispensador: "bebederos", consumo: 456 },
  ];

  const dataOfBlocks = [
    { bloque: "bloque A", consumo: 203 },
    { bloque: "bloque B", consumo: 123 },
    { bloque: "bloque c", consumo: 345 },
    { bloque: "bloque D", consumo: 304 },
    { bloque: "bloque E", consumo: 56 },
    { bloque: "bloque F", consumo: 587 },
    { bloque: "bloque G", consumo: 467 },
  ];

  const dataOfPersons = [
    { tipo: "invitado", consumo: 124 },
    { tipo: "estudiante", consumo: 3400 },
    { tipo: "profesor", consumo: 680 },
    { tipo: "personal", consumo: 1245 },
  ];

  const dataOfMonthlyConsumption = [
    { mes: "Enero", consumo: 5000 },
    { mes: "Febrero", consumo: 4500 },
    { mes: "Marzo", consumo: 4800 },
    { mes: "Abril", consumo: 4700 },
    { mes: "Mayo", consumo: 4900 },
    { mes: "Junio", consumo: 5100 },
    { mes: "Julio", consumo: 5300 },
    { mes: "Agosto", consumo: 5200 },
    { mes: "Septiembre", consumo: 5000 },
    { mes: "Octubre", consumo: 4800 },
    { mes: "Noviembre", consumo: 4700 },
    { mes: "Diciembre", consumo: 4600 },
  ];

  onMount(() => {
    const dispenserCanvas = document.getElementById("dispenserChart");
    if (dispenserCanvas instanceof HTMLCanvasElement) {
      const dispenserCtx = dispenserCanvas.getContext("2d");
      new Chart(dispenserCtx, {
        type: "doughnut",
        data: {
          labels: dataOfdispenser.map(d => d.dispensador),
          datasets: [{
            data: dataOfdispenser.map(d => d.consumo),
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              labels: {
                color: "white"
              }
            }
          }
        }
      });
    }

    const blocksCanvas = document.getElementById("blocksChart");
    if (blocksCanvas instanceof HTMLCanvasElement) {
      const blocksCtx = blocksCanvas.getContext("2d");
      new Chart(blocksCtx, {
        type: "bar",
        data: {
          labels: dataOfBlocks.map(d => d.bloque),
          datasets: [{
            label: "Consumo por Bloque",
            data: dataOfBlocks.map(d => d.consumo),
            backgroundColor: "#36A2EB",
          }]
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
    }

    const personsCanvas = document.getElementById("personsChart");
    if (personsCanvas instanceof HTMLCanvasElement) {
      const personsCtx = personsCanvas.getContext("2d");
      new Chart(personsCtx, {
        type: "bar",
        data: {
          labels: dataOfPersons.map(d => d.tipo),
          datasets: [{
            label: "Consumo por Tipo de Persona",
            data: dataOfPersons.map(d => d.consumo),
            backgroundColor: "#367588",
          }]
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
    }

    const monthlyCanvas = document.getElementById("monthlyChart");
    if (monthlyCanvas instanceof HTMLCanvasElement) {
      const monthlyCtx = monthlyCanvas.getContext("2d");
      new Chart(monthlyCtx, {
        type: "bar",
        data: {
          labels: dataOfMonthlyConsumption.map(d => d.mes),
          datasets: [{
            label: "Consumo Mensual",
            data: dataOfMonthlyConsumption.map(d => d.consumo),
            backgroundColor: "#FF6347",
          }]
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
    }
  });
</script>

<div class="text-white">
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
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <!-- Sidebar content here -->
          <li><button class="btn btn-primary rounded" on:click={() => window.location.href = '/ConsumosAdmin'}>Datos de Consumo</button></li>
          <li class="my-4"><button class="btn btn-error rounded">Cerrar Sesion</button></li>
        </ul>
      </div>
    </div>
  </div>
  <section class="flex flex-wrap justify-around my-3">
    <BlueBox title="Personas" body="12.128" />
    <BlueBox title="Promedio por Persona" body="62 L" />
    <BlueBox title="Litros Mensuales" body="80000 L" />
    <aside class="flex-col p-3 w-full md:w-[245px]">
      <div>
        <span class="text-base">Promedio de Litros por Persona (Mensuales)</span>
        <p class="text-xl text-cyan-300 my-1">62 L</p>
      </div>
      <div>
        <span class="text-base">Personas Registradas</span>
        <p class="text-xl text-cyan-300">12.128</p>
      </div>
    </aside>
  </section>
  <div class="divider"></div>
  <section class="charts-grid">
    <div class="text-center">
      <span class="text-lg" id="consumo-dispensador">Consumo por Dispensador</span>
      <div class="chart-container">
        <canvas id="dispenserChart"></canvas>
      </div>
    </div>
    <div class="text-center">
      <span class="text-lg" id="consumo-bloque">Consumo por Bloque</span>
      <div class="chart-container">
        <canvas id="blocksChart"></canvas>
      </div>
    </div>
    <div class="text-center">
      <span class="text-lg" id="consumo-persona">Consumo por Tipo de Persona</span>
      <div class="chart-container">
        <canvas id="personsChart"></canvas>
      </div>
    </div>
    <div class="text-center">
      <span class="text-lg" id="consumo-mensual">Consumo Mensual</span>
      <div class="chart-container">
        <canvas id="monthlyChart"></canvas>
      </div>
    </div>
  </section>
</div>

<style>
  .charts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (min-width: 768px) {
    .charts-grid {
      grid-template-columns: 1fr 1fr;
    }
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