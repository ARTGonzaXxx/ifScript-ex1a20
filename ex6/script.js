function vai () {
    var p = document.querySelector("p")
    var n1 = document.querySelector("#n1")
    var n2 = document.querySelector("#n2 ")

    p.innerHTML = Math.cbrt(n1.value * n2.value)
}