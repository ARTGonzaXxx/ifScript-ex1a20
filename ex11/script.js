function vai() {
    var p = document.querySelector("p")
    var n1 = document.querySelector("#p1")
    var n2 = document.querySelector("#p2")
     media = (Number(n1.value)+(2*Number(n2.value)))/3
     if(media >= 6) {
        p.innerHTML = "Aprovado"
     } else {
     p.innerHTML = "REPROVADO SEU MERDA(se vc tiver testando então tudo bem)"
     }
}