console.log("App iniciado");


const trailerLinks = {
  "harry potter e a pedra filosofal": "https://www.youtube.com/watch?v=VyHV0BRtdxo",
  "jogos vorazes em chamas": "https://www.youtube.com/watch?v=EAzGXqJSDJ8",
  "a fantastica fabrica de chocolate": "https://www.youtube.com/watch?v=OFVGCUIXJls",
  "500 dias com ela": "https://www.youtube.com/watch?v=PsD0NpFSADM",
  
};


document.addEventListener("DOMContentLoaded", () => {
  const recomendados = document.querySelectorAll(".recomendado");

  recomendados.forEach(img => {
    img.addEventListener("click", () => {
      const titulo = img.alt.trim().toLowerCase(); 

      
      if (trailerLinks.hasOwnProperty(titulo)) {
        const link = trailerLinks[titulo];
        window.open(link, "_blank"); 
      } else {
        alert("Trailer não disponível para este filme.");
      }
    });
  });
});



