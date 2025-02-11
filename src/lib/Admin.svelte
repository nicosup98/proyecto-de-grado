<script>
    import { navigate } from "svelte-routing";
  import { login } from "../services/admin";

  let user = {}

  async function handleLogin(e) {
    e.preventDefault()
    const resp = await login(user);

    if(!resp.ok) {
      alert('ocurrio un error al hacer login')
      console.error(await resp.text())
      return
    }

    const data = await resp.text()

    localStorage.setItem('token',data)
    localStorage.setItem('email',user.email)

    navigate('/administrador')
  }
</script>

<!-- por que mano ??? -->
<link
  href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
  rel="stylesheet"
/>
<div
  class="flex justify-center items-center min-h-screen bg-cover bg-center"
  style="background-image: url('bg.jpg');"
>
  <div
    class="wrapper bg-white bg-opacity-20 border-2 border-white border-opacity-20 backdrop-blur-md text-white rounded-lg p-8"
  >
    <form action="" on:submit={handleLogin}>
      <h1 class="text-3xl text-center mb-6">Login</h1>
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
        <input
          type="password"
          placeholder="Contraseña"
          required
          bind:value={user.password}
          class="w-full h-full bg-white bg-opacity-20 border-none outline-none border-2 border-white border-opacity-20 rounded-full text-white placeholder-white px-5 py-2.5"
        />
        <i
          class="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2 text-xl"
        ></i>
      </div>
      <button
        type="submit"
        class="btn w-full h-12 bg-green-400 border-none outline-none rounded-full shadow-md cursor-pointer text-lg text-gray-800 font-semibold transition-colors duration-300 hover:bg-blue-200"
        >Login</button
      >
    </form>
  </div>
</div>
