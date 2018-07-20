
var libra = 0
var resultadolb = document.getElementById('resultadolb')
var k = document.getElementById('kilo-boton')
k.addEventListener(`click`, convertirKilo)

var kilo = 0
var resultadokg = document.getElementById('resultadokg')
var l = document.getElementById('libra-boton')
l.addEventListener(`click`, convertirLibra)

function convertirKilo() {
  let lb = document.getElementById('kilo')
  libra = parseInt(lb.value)
  let lbf = libra * 2.2046
  let lbfinal = lbf.toFixed(4)
  resultadolb.innerHTML = `${lbfinal} lb`
}

function convertirLibra() {
  let kg = document.getElementById('libra')
  kilo = parseInt(kg.value)
  let kgf = kilo / 2.2046
  let kgfinal = kgf.toFixed(4)
  resultadokg.innerHTML = `${kgfinal} kg`
}
