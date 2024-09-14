<script>
  import { Router, Route } from "svelte-routing";
  import AdminHome from "./lib/AdminHome.svelte";
  import FormComponent from "./lib/Form.svelte";
  import Inicio from "./lib/Inicio.svelte";
  import Formulario from "./lib/Formulario.svelte";
  import Personal from "./lib/Personal.svelte";
  import Respuestas from "./lib/Respuestas.svelte";
  import Admin from "./lib/Admin.svelte";
  import Prueba from "./lib/Prueba.svelte";
  export let url = "";
</script>

<Router {url}>
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
</Router>