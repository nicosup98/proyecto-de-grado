<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";
  import { checkToken, getDashboard } from "../services/admin";
  import { navigate } from "svelte-routing";

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  let dataDashboard;
  let showTimeoutToast = false;
  let dialogSesionRef;

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

  function cerrarSesion() {
    localStorage.removeItem("token");
    navigate("/loginAdmin");
  }

  onMount(async () => {
    const token = checkToken();
    if (!token) {
      navigate("/");
    }

    const resp = await getDashboard(null, token);
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
    const { data } = await resp.json();
    dataDashboard = data;
    console.log(data);
    const dispenserCanvas = document.getElementById("dispenserChart");
    if (dispenserCanvas instanceof HTMLCanvasElement) {
      const dispenserCtx = dispenserCanvas.getContext("2d");
      new Chart(dispenserCtx, {
        type: "doughnut",
        data: {
          labels: data.consumo_dispensador.map((d) => d.dispensador),
          datasets: [
            {
              data: data.consumo_dispensador.map(
                (d) => (d.consumo / data.consumo_total_dispensador) * 100,
              ),
              backgroundColor: [
                "#FF6384",
                "#800080",
                "#FFCE56",
                "#5b1eea",
                "#45f75a",
              ],
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
        },
      });
    }

    const blocksCanvas = document.getElementById("blocksChart");
    if (blocksCanvas instanceof HTMLCanvasElement) {
      const blocksCtx = blocksCanvas.getContext("2d");
      new Chart(blocksCtx, {
        type: "bar",
        data: {
          labels: data.consumo_bloque.map((d) => d.bloque),
          datasets: [
            {
              label: "Consumo por Bloque",
              data: data.consumo_bloque.map((d) => d.consumo),
              backgroundColor: "#FFCE56", // Cambiado a amarillo
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

    const personsCanvas = document.getElementById("personsChart");
    if (personsCanvas instanceof HTMLCanvasElement) {
      const personsCtx = personsCanvas.getContext("2d");
      new Chart(personsCtx, {
        type: "bar",
        data: {
          labels: data.consumo_tipo.map((d) => d.tipo),
          datasets: [
            {
              label: "Consumo por Tipo de Persona",
              data: data.consumo_tipo.map((d) => d.consumo),
              backgroundColor: "#4CAF50", // Cambiado a verde
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

    const monthlyCanvas = document.getElementById("monthlyChart");
    if (monthlyCanvas instanceof HTMLCanvasElement) {
      const monthlyCtx = monthlyCanvas.getContext("2d");
      new Chart(monthlyCtx, {
        type: "bar",
        data: {
          labels: dataOfMonthlyConsumption.map((d) => d.mes),
          datasets: [
            {
              label: "Consumo Mensual",
              data: dataOfMonthlyConsumption.map((d) => d.consumo),
              backgroundColor: "#FF6347",
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
              on:click={() => navigate("/ConsumosAdmin")}
              >Datos de Consumo</button
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
  </div>
  {#if !dataDashboard}
    ...loading
  {:else}
    <section class="flex flex-wrap justify-around my-3 info-box-section">
      <div class="info-box">
        <h2 class="info-box-title">Personas</h2>
        <p class="info-box-body">{dataDashboard.cantidad_personas}</p>
      </div>
      <div class="info-box">
        <h2 class="info-box-title">Promedio por Persona</h2>
        <p class="info-box-body">{dataDashboard.promedio_consumo}</p>
      </div>
      <div class="info-box">
        <h2 class="info-box-title">Litros Totales</h2>
        <p class="info-box-body">{dataDashboard.consumo_total.toFixed(2)}L</p>
      </div>
    </section>
  {/if}
  <div class="divider"></div>
  <section class="charts-grid">
    <div class="text-center">
      <span
        class="chart-title text-lg"
        hidden={!dataDashboard?.consumo_tipo}
        id="consumo-dispensador">Consumo por Dispensador</span
      >
      <div class="chart-container">
        <canvas id="dispenserChart"></canvas>
      </div>
    </div>
    <div class="text-center">
      <span
        class="chart-title text-lg"
        id="consumo-bloque"
        hidden={!dataDashboard?.consumo_tipo}>Consumo por Bloque</span
      >
      <div class="chart-container">
        <canvas id="blocksChart"></canvas>
      </div>
    </div>
    <div class="text-center center">
      <span
        class="chart-title text-lg"
        id="consumo-persona"
        hidden={!dataDashboard?.consumo_tipo}>Consumo por Tipo de Persona</span
      >
      <div class="chart-container">
        <canvas id="personsChart"></canvas>
      </div>
    </div>
  </section>
  {#if showTimeoutToast}
    <div class="toast toast-bottom toast-end">
      <div class="alert alert-info">
        <span>sesion expirada redirigiendo al login</span>
      </div>
    </div>
  {/if}
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
      grid-template-rows: auto auto;
    }
    .charts-grid > .center {
      grid-column: span 2;
      justify-self: center;
      width: 100%; /* Asegura que la tercera gráfica ocupe todo el ancho disponible */
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

  .chart-title {
    font-size: 2rem; /* Agrandar el tamaño de la fuente */
    animation: fadeIn 1s ease-in-out; /* Agregar animación */
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .info-box-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .info-box {
    background-color: white;
    color: black;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    margin: 10px;
    font-size: 1.2rem;
    animation: slideIn 1s ease-in-out;
    flex: 1 1 100%; /* Ajusta el tamaño de las cajas */
    max-width: 100%; /* Asegura que las cajas no excedan el 100% del ancho del contenedor */
    box-sizing: border-box;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  @media (min-width: 768px) {
    .info-box {
      flex: 1 1 30%; /* Ajusta el tamaño de las cajas */
      max-width: 30%; /* Asegura que las cajas no excedan el 30% del ancho del contenedor */
    }
  }

  .info-box:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @keyframes slideIn {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .info-box-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .info-box-body {
    font-size: 1.2rem;
  }
</style>
