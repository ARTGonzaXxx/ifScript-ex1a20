function vai () {
    var p = document.querySelector("p")
    var n1 = document.querySelector("#n1")
    var n2 = document.querySelector("#n2")
    var n3 = document.querySelector("#n3")
    var n4 = document.querySelector("#n4")
    var soma = Number(n1.value) + Number(n2.value) + Number(n3.value) + Number(n4.value)
    p.innerHTML = soma/4
}