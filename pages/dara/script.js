function togglePassword() {
    const senha = document.getElementById("senha");
    const toggle = document.getElementById("toggleSenha");
  
    if (senha.type === "password") {
      senha.type = "text";
      toggle.textContent = "🙈";
    } else {
      senha.type = "password";
      toggle.textContent = "👁";
    }
  }
  
  function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    if (email === "admin" && senha === "1234") {
      alert("Login bem-sucedido!");
    } else {
      alert("E-mail ou senha incorretos.");
    }
  }
  