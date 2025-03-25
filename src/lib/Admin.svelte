<script>
  import { navigate } from "svelte-routing";
  import { login } from "../services/admin";

  let user = {};
  let showPassword = false;

  async function handleLogin(e) {
    e.preventDefault();
    const resp = await login(user);

    if (!resp.ok) {
      const errorText = await resp.text();
      if (errorText.includes("invalid email")) {
        alert("El correo es inválido");
      } else if (errorText.includes("incorrect password")) {
        alert("La contraseña es incorrecta");
      } else {
        alert("Ingrese el correo y la contraseña correctamente");
      }
      console.error(errorText);
      return;
    }

    const data = await resp.text();

    localStorage.setItem("token", data);
    localStorage.setItem("email", user.email);

    navigate("/administrador");
  }
</script>

<link
  href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
  rel="stylesheet"
/>
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
          <span class="text-xl text-white">Bienvenido Admin</span>
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
            on:click={() => navigate("/")}
            >Volver al Inicio</button
          >
        
      </ul>
    </div>
  </div>
</div>

<div class="divider"></div>

<div
  class="flex justify-center items-start min-h-screen bg-cover bg-center"
  style="background-image: url('bg.jpg');"
>
  <div
    class="wrapper bg-white bg-opacity-20 border-2 border-white border-opacity-20 backdrop-blur-md text-white rounded-lg p-8 w-96 mt-10"
  >
    <div class="image-container w-full h-48 mb-4">
      <img src="/organismos-operadores.jpeg" alt="Imagen" class="w-full h-full object-cover rounded-t-lg" />
    </div>
    <form action="" on:submit={handleLogin}>
      <h1 class="text-3xl text-center mb-6">Inicio De Sesión</h1>
      <div class="input-box relative w-full h-12 mb-8">
        <input
          type="text"
          placeholder="Usuario"
          bind:value={user.email}
          required
          class="w-full h-full bg-white bg-opacity-20 border-none outline-none border-2 border-white border-opacity-20 rounded-full text-white placeholder-white px-5 py-2.5"
        />
        <i
          class="bx bxs-user absolute right-5 top-1/2 transform -translate-y-1/2 text-xl"
        ></i>
      </div>
      <div class="input-box relative w-full h-12 mb-8">
        {#if showPassword}
        <input type="text" placeholder="Contraseña" required bind:value={user.password} class="w-full h-full bg-white bg-opacity-20 border-none outline-none border-2 border-white border-opacity-20 rounded-full text-white placeholder-white px-5 py-2.5" />
        {:else}
        <input type="password" placeholder="Contraseña" required bind:value={user.password} class="w-full h-full bg-white bg-opacity-20 border-none outline-none border-2 border-white border-opacity-20 rounded-full text-white placeholder-white px-5 py-2.5" />
        {/if}
        <button
          type="button"
          class="bx {showPassword ? 'bxs-show' : 'bxs-hide'} absolute right-5 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer"
          on:click={() => (showPassword = !showPassword)}
          aria-label="Toggle password visibility"
        ></button>
      </div>
      <button
        type="submit"
        class="btn w-full h-12 bg-green-300 border-none outline-none rounded-full shadow-md cursor-pointer text-lg text-gray-800 font-semibold transition-transform duration-300 transform hover:scale-105"
        >Iniciar Sesión</button
      >
    </form>
  </div>
</div>

<style>
  .image-container {
    height: 200px; /* Ajusta la altura según sea necesario */
  }
</style>