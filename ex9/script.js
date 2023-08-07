function vai () {
    var p = document.querySelector("p")
    var n1 = document.querySelector("#n1")
    var n2 = document.querySelector("#n2")

    if(n1.value > n2.value) {
        p.innerHTML = n1.value
    } else if (n1.value < n2.value) {
        p.innerHTML = n2.value
    }

}