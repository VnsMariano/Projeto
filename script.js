function ToggleMode(){
    const html = document.documentElement
   // if(html.classlist.contains('light')) {
       // html.classList.remove('light')
    //} else {
       // html.classList.add('light')
    //}
    html.classList.toggle('light')

    //pegar a tag img

    const img = document.querySelector("#profile img")

    //substituir a img
    if (html.classList.contains("light")){
        //Se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar.png")
    }
}
