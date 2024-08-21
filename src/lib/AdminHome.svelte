<script>
  import BlueBox from "./BlueBox.svelte";
  import DonutChart from "./DonutChart.svelte";
  import BarChart from "./BarChart.svelte";
  const dataOfdispenser = [
    {
      dispensador: "lavamanos",
      consumo: "1200",
    },
    {
      dispensador: "inodoros",
      consumo: "4650",
    },
    {
      dispensador: "bebederos",
      consumo: "456",
    },
  ];

  const dataOfBlocks = [
    {
      bloque: "bloque A",
      consumo: 203,
    },
    {
      bloque: "bloque B",
      consumo: 123,
    },
    {
      bloque: "bloque c",
      consumo: 345,
    },
    {
      bloque: "bloque D",
      consumo: 304,
    },
    {
      bloque: "bloque E",
      consumo: 56,
    },
    {
      bloque: "bloque F",
      consumo: 587,
    },
    {
      bloque: "bloque G",
      consumo: 467,
    },
  ];

  const dataOfPersons = [
    {
      tipo: "invitado",
      consumo: "124",
    },
    {
      tipo: "estudiante",
      consumo: "3400"
    },
    {
      tipo: "profesor",
      consumo: "680"
    },
    {
      tipo: "personal",
      consumo: "1245"
    },

  ];
</script>

<div>
  <div class="flex justify-between">
    <div class="drawer">
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
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"
        ></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <!-- Sidebar content here -->
          <li><button class="btn btn-error rounded">Cerrar Sesion</button></li>
        </ul>
      </div>
    </div>
    <img src="urbe_logo.png" class="w-16 zoom-img" alt="" />
  </div>
  <section class="flex justify-around my-3">
    <BlueBox title="Personas" body="12.128" />
    <BlueBox title="Promedio por Persona" body="62 L" />
    <BlueBox title="Litros Mensuales" body="80000 L" />
    <aside class=" flex-col p-3 w-[245px]">
      <div>
        <span class="text-base">Promedio de Litros por Persona (Mensuales)</span
        >
        <p class="text-xl text-blue-500 my-1">62 L</p>
      </div>
      <div>
        <span class="text-base">Personas Registradas</span>
        <p class="text-xl text-blue-500">12.128</p>
      </div>
    </aside>
  </section>
  <div class="divider"></div>
  <section class="flex justify-around gap-4">
    <div class="text-center">
      <span class="text-lg" id="consumo-dispensador">Consumo por Dispensador</span>
      <DonutChart width={450} data={dataOfdispenser} />
    </div>
    <div class="text-center">
      <span class="text-lg" id="consumo-bloque">Consumo por Bloque</span>
      <BarChart data={dataOfBlocks} />
    </div>
    <div class="text-center">
      <span class="text-lg" id="consumo-persona">Consumo por Tipo de Persona</span>
      <BarChart data={dataOfPersons} color="#367588" width={430}/>
    </div>
  </section>
</div>
<section>
  <div class="stats shadow custom-position">
    <div class="stat place-items-center">
      <div class="stat-title">Downloads</div>
      <div class="stat-value">31K</div>
      <div class="stat-desc">From January 1st to February 1st</div>
    </div>
  
    <div class="stat place-items-center">
      <div class="stat-title">Users</div>
      <div class="stat-value text-secondary">4,200</div>
      <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
    </div>
  
    <div class="stat place-items-center">
      <div class="stat-title">New Registers</div>
      <div class="stat-value">1,200</div>
      <div class="stat-desc">↘︎ 90 (14%)</div>
    </div>
  </div>
</section>

