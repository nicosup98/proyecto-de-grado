

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



  <nav class="navbar">
    <div class="logo">
      <img src="urbe_logo.png" class="w-16 zoom-img" alt="URBE Logo" />
    </div>
    <div class="logo-right">
      <img src="public\logo_huella.png" class="w-16 zoom-img" alt="Huella logo" />
    </div>
  </nav>
  
  <link rel="stylesheet" href="inicio.css">


  <div class="form-container">
      <form class="form">
          <label for="userType">Tipo de usuario:</label>
          <select id="userType" bind:value={userType}>
              <option value="">Selecciona una opción</option>
              <option value="profesor">Profesor</option>
              <option value="estudiante">Estudiante</option>
          </select>
  
          <label for="gender">Género:</label>
          <select id="gender" bind:value={gender}>
              <option value="">Selecciona una opción</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
          </select>
  
          <label for="cedula">Ingrese su ID:</label>
          <input type="text" id="cedula" bind:value={cedula} pattern="[0-9]{11}" required>
      </form>
  </div>
  

  <script>

  let cedula = "";
  let id = "";
  
    let userType = "";
  let gender = "";

  

  </script>