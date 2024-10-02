<script>
  import { Router, Route } from "svelte-routing";
  import AdminHome from "./lib/AdminHome.svelte";
  import Inicio from "./lib/Inicio.svelte";
  import Respuestas from "./lib/Respuestas.svelte";
  import Admin from "./lib/Admin.svelte";
  import Prueba from "./lib/Prueba.svelte";
  import Layout from "./Layout.svelte";
  import { fade } from 'svelte/transition'
  export let url = "";
</script>

<Router {url}  viewtransition="{() => ({ fn: fade, duration: 250 })}">

<Layout>
  <div class="container mx-auto m-3 h-full">
    <Route path="/admin" component={AdminHome} />
    <Route path="/" component={Inicio}/>
    <Route path="/loginAdmin" component={Admin}/>
    <Route path="/respuestas" component={Respuestas}/>
    <Route path="/formulario" component={Prueba}/>
  </div>
</Layout>


</Router>