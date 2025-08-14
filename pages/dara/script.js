function logar(event) {
    event.preventDefault(); 

    
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

   
    if (email && senha) {
        
        window.location.href = "../grazi/index.html"; 
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}