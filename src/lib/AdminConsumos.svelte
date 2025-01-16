<script>
  import BlueBox from "./BlueBox.svelte";
  import DonutChart from "./DonutChart.svelte";
  import BarChart from "./BarChart.svelte";

  let showModal = false;



  const monthlyData = [
    { month: "Enero", consumo: 1000 },
    { month: "Febrero", consumo: 1200 },
    { month: "Marzo", consumo: 900 },
    { month: "Abril", consumo: 1100 },
    { month: "Mayo", consumo: 1300 },
    { month: "Junio", consumo: 1400 },
    { month: "Julio", consumo: 1500 },
    { month: "Agosto", consumo: 1600 },
    { month: "Septiembre", consumo: 1700 },
    { month: "Octubre", consumo: 1800 },
    { month: "Noviembre", consumo: 1900 },
    { month: "Diciembre", consumo: 2000 },
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
</script>

<div>
<div class="flex justify-between">
  <div class="drawer z-20">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer" class="flex">
        <div class="btn btn-ghost text-xl drawer-button">
          <img src="burger.svg" alt="" />
        </div>
        <div class="flex items-center gap-1">
          Bienvenido Admin <img src="image.png" class="w-4" alt="" />
        </div>
      </label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <!-- Sidebar content here -->
        <li><button class="btn btn-primary rounded" on:click={() => window.location.href = '/administrador'}>Datos del Formulario</button></li>
        <li class="my-4"><button class="btn btn-error rounded">Cerrar Sesion</button></li>
      </ul>
    </div>
  </div>
</div>



<div class="divider"></div>

<section class="flex justify-around gap-4">
  <div class="text-center">
    <span class="text-lg" id="consumo-mensual">Consumo Mensual</span>
    <BarChart data={monthlyData} />
  </div>
</section>

<div class="flex justify-around my-4">
  <button class="btn btn-success" on:click={handleEdit}>Editar Gasto de Agua</button>
  <button class="btn btn-danger" on:click={handleView}>Litros que se Gastaron</button>
  <button class="btn btn-info" on:click={openModal}>Ventana Modal recolección de agua</button>
</div>

{#if showModal}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
      <h3 class="text-lg font-bold">Recolección de Agua</h3>
      <form>
        <label for="litrosRecolectados">Litros Recolectados:</label>
        <input type="number" id="litrosRecolectados" class="input input-bordered w-full mb-4" />

        <label for="litrosComprados">Litros Comprados:</label>
        <input type="number" id="litrosComprados" class="input input-bordered w-full mb-4" />

        <div class="flex justify-end">
          <button type="button" class="btn btn-primary" on:click={closeModal}>Guardar</button>
        </div>
      </form>
      <button class="btn btn-secondary mt-4" on:click={closeModal}>Cerrar</button>
    </div>
  </div>
{/if}
</div>

<style>
.btn {
  padding: 10px 20px;
  margin: 5px;
}
</style>