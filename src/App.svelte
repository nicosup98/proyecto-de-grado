<script>
  import { Router, Route } from "svelte-routing";
  import AdminHome from "./lib/AdminHome.svelte"
  import FormComponent from "./lib/Form.svelte"
  export let url = "";
</script>

<Router {url}>
  <div class="container mx-auto m-3">
    <Route path="/admin" component={AdminHome} />
    <Route path="/" component={FormComponent}/>
  </div>
</Router>
