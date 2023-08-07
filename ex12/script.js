function vai() {
    p = document.querySelector("p")
    peso = document.querySelector("#peso")
    altura = document.querySelector("#altura")
    var r = Number(peso.value)/ (Number(altura.value)*Number(altura.value))
    if(r < 20) {
        p.innerHTML = "Abaixo do peso"
    } else if(r < 25) {
         p.innerHTML = "Peso ideal"
     } else {
         p.innerHTML = "Acima do peso"
     }
   
}