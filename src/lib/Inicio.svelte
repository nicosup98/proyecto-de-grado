<script>
  import { navigate } from "svelte-routing";
  import { updateForm, form_results } from "../stores/form";
  import { validarEmail } from "../services/Form";
  import { onMount } from 'svelte'
    import { back_url } from "../services";
  let email = "";
  let tipo_usuario = "";
  let genero = "";
  let loader = false;

  onMount(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has('email')) {
      email = atob(urlParams.get('email'))
    }
  })

  async function handleOauthGmail(e) {
    e.preventDefault();
    window.location.href = `${back_url}/oauth/google/login` // 
  }

  async function handleSubmit(event) {
    event.preventDefault();
    updateForm({ email, genero, tipo_persona: tipo_usuario }); // se remplazo el genero e email con el store
    loader = true;
    const respuestas = await validarEmail(email);
    const data = await respuestas.json();
    if (respuestas.status === 200) {
      const [res] = data;
      form_results.set({
        consumo_total: {
          semanal: res.gasto_agua_semanal,
          mensual: res.gasto_agua,
        },
        consumo_detalles: {
          litros_lavamanos: res.litros_lavamanos,
          litros_urinarios: res.litros_urinarios,
          litros_inodoro: res.litros_inodoro,
          litros_bebedero: res.litros_bebedero,
          litros_puntos_rojos: res.litros_puntos_rojos,
        },
      });
      navigate("/respuestas");
    } else if (respuestas.status === 404) {
      navigate("/formulario"); // Redirigir a Prueba.svelte
    } else {
      alert(data.error);
    }
    loader = false;
  }
</script>

<div class="flex flex-col md:flex-row justify-between items-center z-1">
  <div class="text-center w-full md:w-1/3 p-6">
    <section class="flex items-center justify-center">
      <div class="relative">
        <h2
          class="absolute text-4xl md:text-5xl font-bold text-white left-1/2 transform -translate-x-1/2 -translate-y-1/2 stroke-2 stroke-current text-white whitespace-nowrap"
        >
          Huella Hídrica
        </h2>
        <h2
          class="absolute text-4xl md:text-5xl font-bold text-blue-500 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-clip whitespace-nowrap"
        >
          Huella Hídrica
        </h2>
        <p class="text-center text-2xl mt-12 text-white">
          ¡Descubre tu huella hídrica y sé parte del cambio!
        </p>
      </div>
    </section>
  </div>
  <form
    on:submit={handleSubmit}
    class="bg-white bg-opacity-80 p-10 z-10 rounded-lg flex flex-col items-center m-auto w-full md:w-1/3 relative bg-cover bg-center bg-no-repeat max-h-full overflow-y-auto"
    style="background-image: url('/fachada-completa.jpg');"
  >
    <div
      class="absolute inset-0 bg-white bg-opacity-70 rounded-lg overflow-y-auto max-h-full"
    ></div>
    <div class="relative z-10 w-full">
      <div class="relative w-full mb-4 text-center" style="top: 0px;">
        <h2 class="text-2xl font-bold text-black-100 inline-block">
          Formulario de Registro
        </h2>
      </div>
      <label for="tipo_usuario" class="text-lg mb-2">Tipo de usuario:</label>
      <select
        id="tipo_usuario"
        bind:value={tipo_usuario}
        required
        class="mb-4 p-2 w-full text-lg"
      >
        <option value="">Selecciona una opción</option>
        <option value="estudiante">Estudiante</option>
        <option value="profesor">Profesor</option>
        <option value="personal">Personal</option>
        <option value="visitante">Visitante</option>
        <option value="mantenimiento">Personal de Mantenimiento</option>
      </select>

      <label for="genero" class="text-lg mb-2">Género:</label>
      <select
        id="genero"
        bind:value={genero}
        required
        class="mb-4 p-2 w-full text-lg"
      >
        <option value="">Selecciona una opción</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
        <option value="Otro">Otro</option>
      </select>

      <label for="email" class="text-lg mb-2"
        >Ingrese su correo electrónico:</label
      >
      <input
        type="email"
        id="email"
        bind:value={email}
        required
        class="mb-4 p-2 w-full text-lg"
      />
      <button
        type="submit"
        disabled={loader}
        class="btn btn-primary flex justify-center gap-2 bg-blue-500 text-white rounded-lg mt-4  w-full"
      >
        Continuar
        {#if loader}
          <span class="loading loading-spinner loading-md"></span>
        {/if}
      </button>
      <div class="flex justify-center my-4"></div>
      <button class="glow-on-hover bg-white text-gray-600 rounded px-4 py-2 font-bold w-full flex items-center justify-center gap-2" on:click={handleOauthGmail}>
        <img src="/icono_google.png" alt="Google Icon" class="w-6 h-6" />
        Inicia Sesión Con Google
      </button>
      
    </div>
  </form>
</div>

<!--
 Animacion de Hueña Hídrica
-->
<style>
  @keyframes clip {
    0%,
    100% {
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

  .glow-on-hover {
    outline: none;
    cursor: pointer;
    position: relative;
    z-index: 0;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(90deg, #4285F4, #DB4437, #F4B400, #0F9D58);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 10s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    left: 0;
    top: 0;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 500% 0; }
    100% { background-position: 0 0; }
}
</style>
