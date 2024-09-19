<script>
  import { Router, Route } from "svelte-routing";
  import AdminHome from "./lib/AdminHome.svelte";
  import FormComponent from "./lib/Form.svelte";
  import Inicio from "./lib/Inicio.svelte";
  import Formulario from "./lib/formulario.svelte";
  import Personal from "./lib/Personal.svelte";
  import Respuestas from "./lib/Respuestas.svelte";
  import Admin from "./lib/Admin.svelte";
  import Prueba from "./lib/Prueba.svelte";
  export let url = "";
</script>

<Router {url}>

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

<nav class="sticky top-0 left-0 w-full bg-white bg-opacity-60 text-white p-2 flex justify-between items-center z-10">
    <div class="flex items-center">
        <img src="/urbe_logo.png" class="w-16 zoom-img mr-2" alt="URBE Logo" />
    </div>
    <div class="flex items-center">
        <img src="/huella_logo.png" class="w-16 zoom-img ml-2" alt="Huella logo" />
    </div>
</nav>
  <div class="container mx-auto m-3">
    <Route path="/admin" component={AdminHome} />
    <Route path="/" component={FormComponent}/>
    <Route path="/inicio" component={Inicio}/>
    <Route path="/loginAdmin" component={Admin}/>
    <Route path="/formulario" component={Formulario}/>
    <Route path="/respuestas" component={Respuestas}/>
    <Route path="/prueba" component={Prueba}/>
    <Route path="/personal" component={Personal}/>
  </div>

<footer class="bg-gray-800 text-white p-4 text-center w-full  bottom-0 left-0">
  <p>Universidad Privada Dr. Rafael Belloso Chacín.</p>
  <p>©2024 Powered by Servieduca All rights reserved</p>
</footer>
</Router>