function vai() {
    per = document.querySelector("#per")
    p = document.querySelector("p")
    area = ((per.value/4) * (per.value/4))
    p.innerHTML = area
}