let isTransitioning = false;
function clicar_botao(){
    const html = document.documentElement
     //isso faz a mesma coisa simplificada
     html.classList.toggle('light')

     if (isTransitioning) return; // Bloqueia se já estiver animando
     isTransitioning = true;

     //pegar a imagem
     const img = document.querySelector('img')

     //subistutuir
     if (html.classList.contains("light")){
         img.setAttribute('src','imagens/kira fundo certo.png')
     } else{
         img.setAttribute('src','imagens/d7t4uub-e05602c6-3de2-4380-85a1-43e67a673c99.png')
     }
     setTimeout(() => {
        isTransitioning = false;
    }, 1000); // Tempo da  transição 
}