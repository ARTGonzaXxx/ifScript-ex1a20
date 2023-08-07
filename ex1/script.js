function vai () {
  const altura = document.querySelector("#altura")
  const largura = document.querySelector("#largura")
  const p = document.querySelector("p")
p.innerHTML = `Área =  ${altura.value * largura.value}`
}