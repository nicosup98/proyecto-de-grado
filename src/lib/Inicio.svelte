<script>
  import { navigate } from "svelte-routing";
  import { updateForm } from "../stores/form";

  let email = "";
  let tipo_usuario = "";
  let genero = "";

  function handleSubmit(event) {
      event.preventDefault();
      updateForm({ email, genero, tipo_persona: tipo_usuario }); // se remplazo el genero e email con el store
      navigate("/formulario"); // Redirigir a Prueba.svelte
  }
</script>
<!--
 Animacion de Hueña Hídrica
-->
<style>
@keyframes clip {
    0%, 100% {
        clip-path: polygon(
            0% 45%,
            16% 44%,
            33% 50%,
            54% 60%,
            70% 61%,
            84% 59%,
            100% 52%,
            100% 100%,
            0% 100%
        );
    }
    50% {
        clip-path: polygon(
            0% 60%,
            15% 65%,
            34% 66%,
            51% 62%,
            67% 50%,
            84% 45%,
            100% 46%,
            100% 100%,
            0% 100%
        );
    }
}

.animate-clip {
    animation: clip 4s ease-in-out infinite;
}

.stroke-2 {
    -webkit-text-stroke: 2px;
}
</style>

<div class="flex flex-col md:flex-row justify-between items-center h-[calc(100vh-80px)] relative z-1 pt-16 overflow-hidden">
<div class="text-center w-full md:w-1/3 p-6">
    <section class="flex items-center justify-center">
      <div class="relative">
        <h2 class="absolute text-4xl md:text-5xl font-bold text-white left-1/2 transform -translate-x-1/2 -translate-y-1/2 stroke-2 stroke-current text-white whitespace-nowrap">Huella Hídrica</h2>
        <h2 class="absolute text-4xl md:text-5xl font-bold text-blue-500 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-clip whitespace-nowrap">Huella Hídrica</h2>
      <p class="text-center text-2xl mt-12 text-white">¡Descubre tu huella hídrica y sé parte del cambio!</p>
    </div>
   </section>
</div>
<form on:submit={handleSubmit} class="bg-white bg-opacity-80 p-10 z-10 rounded-lg flex flex-col items-center m-auto w-full md:w-1/3 relative bg-cover bg-center bg-no-repeat max-h-full overflow-y-auto" style="background-image: url('/fachada-completa.jpg');">
  <div class="absolute inset-0 bg-white bg-opacity-70 rounded-lg overflow-y-auto max-h-full"></div>
  <div class="relative z-10 w-full">
    <div class="relative w-full mb-4 text-center" style="top: 0px;">
      <h2 class="text-2xl font-bold text-black-100 inline-block">Formulario de Registro</h2>
    </div>
    <label for="tipo_usuario" class="text-lg mb-2">Tipo de usuario:</label>
    <select id="tipo_usuario" bind:value={tipo_usuario} required class="mb-4 p-2 w-full text-lg">
      <option value="">Selecciona una opción</option>
      <option value="estudiante">Estudiante</option>
      <option value="profesor">Profesor</option>
      <option value="personal">Personal</option>
      <option value="visitante">Visitante</option>
      <option value="mantenimiento">Personal de Mantenimiento</option>
    </select>

    <label for="genero" class="text-lg mb-2">Género:</label>
    <select id="genero" bind:value={genero}  required class="mb-4 p-2 w-full text-lg">
      <option value="">Selecciona una opción</option>
      <option value="masculino">Masculino</option>
      <option value="femenino">Femenino</option>
      <option value="Otros">Otro</option>
    </select>

    <label for="email" class="text-lg mb-2">Ingrese su correo electrónico:</label>
    <input type="email" id="email" bind:value={email} required class="mb-4 p-2 w-full text-lg">
    <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-700 transition-colors duration-300 w-full">Continuar</button>
  </div>
</form>
</div>