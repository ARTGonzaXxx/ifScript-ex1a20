function vai () {
     p = document.querySelector("p")
     dia = document.querySelector("#dia")
    dia = dia.value
    dia = Number(dia)
    
     lado = dia *dia
    
    area = lado * lado
    p.innerHTML = area
}