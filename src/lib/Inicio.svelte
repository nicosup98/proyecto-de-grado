<script>
  let email = "";
  let userType = "";
  let gender = "";
</script>

<style>
  @media (max-width: 768px) {
    .text-left {
      text-align: center;
    }
  }
</style>

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

<nav class="fixed top-0 left-0 w-full bg-white bg-opacity-60 text-white p-2 flex justify-between items-center z-10">
  <div class="flex items-center">
    <img src="urbe_logo.png" class="w-16 zoom-img mr-2" alt="URBE Logo" />
  </div>
  <div class="flex items-center">
    <img src="public/huella_logo.png" class="w-16 zoom-img ml-2" alt="Huella logo" />
  </div>
</nav>

<div class="flex flex-col md:flex-row justify-between items-center h-[calc(100vh-80px)] relative z-1 pt-16 overflow-hidden">
  <div class="text-left w-full md:w-1/3 p-6">
    <h1 class="text-4xl font-bold text-white">Título del Formulario</h1>
    <p class="mt-4 text-lg text-white">Aquí puedes agregar una descripción o cualquier otro texto relevante.</p>
  </div>
  <form class="bg-white bg-opacity-80 p-10 rounded-lg flex flex-col items-center m-auto w-full md:w-1/3 relative bg-cover bg-center bg-no-repeat max-h-full overflow-y-auto" style="background-image: url('/fachada-completa.jpg');">
    <div class="absolute inset-0 bg-white bg-opacity-90 rounded-lg overflow-y-auto max-h-full"></div>
    <div class="relative z-10 w-full">
      <div class="relative w-full mb-4 text-center" style="top: 0px;">
        <h2 class="text-2xl font-bold text-black-100 inline-block">Formulario de Registro</h2>
      </div>
      <label for="userType" class="text-lg mb-2">Tipo de usuario:</label>
      <select id="userType" bind:value={userType} class="mb-4 p-2 w-full text-lg">
        <option value="">Selecciona una opción</option>
        <option value="profesor">Estudiante</option>
        <option value="estudiante">Profesor</option>
        <option value="visitante">Visitante</option>
        <option value="personal">Personal</option>
        <option value="mantenimiento">Personal de Mantenimiento</option>
      </select>

      <label for="gender" class="text-lg mb-2">Género:</label>
      <select id="gender" bind:value={gender} class="mb-4 p-2 w-full text-lg">
        <option value="">Selecciona una opción</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
        <option value="prefiero-no-decirlo">Prefiero No Decirlo</option>
      </select>

      <label for="email" class="text-lg mb-2">Ingrese su correo electrónico:</label>
      <input type="email" id="email" bind:value={email} required class="mb-4 p-2 w-full text-lg">
      <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-700 transition-colors duration-300 w-full">Continuar</button>
    </div>
  </form>
</div>

<footer class="bg-gray-800 text-white p-4 text-center w-full fixed bottom-0 left-0">
  <p>Universidad Privada Dr. Rafael Belloso Chacín.</p>
  <p>©2024 Powered by Servieduca All rights reserved</p>
</footer>