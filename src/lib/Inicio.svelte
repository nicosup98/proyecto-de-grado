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
<link rel="stylesheet" href="fondo.css">

<nav class="fixed top-0 left-0 w-full bg-white bg-opacity-60 text-white p-2 flex justify-between items-center z-100">
  <div class="flex items-center">
      <img src="urbe_logo.png" class="w-16 zoom-img mr-2" alt="URBE Logo" />
  </div>
  <div class="flex items-center">
      <img src="public/logo_huella.png" class="w-16 zoom-img ml-2" alt="Huella logo" />
  </div>
</nav>


<div class="flex justify-center items-center h-screen relative z-1 pt-16">
  <form class="bg-white bg-opacity-80 p-5 rounded-lg flex flex-col items-center m-auto">
      <label for="userType">Tipo de usuario:</label>
      <select id="userType" bind:value={userType} class="mb-2">
          <option value="">Selecciona una opción</option>
          <option value="profesor">Profesora</option>
          <option value="estudiante">Estudiante</option>
      </select>

      <label for="gender">Género:</label>
      <select id="gender" bind:value={gender} class="mb-2">
          <option value="">Selecciona una opción</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
      </select>

      <label for="cedula">Ingrese su ID:</label>
      <input type="text" id="cedula" bind:value={cedula} pattern="[0-9]{11}" required class="mb-2">
  </form>
</div>

<script>
  let cedula = "";
  let id = "";
  let userType = "";
  let gender = "";
</script>