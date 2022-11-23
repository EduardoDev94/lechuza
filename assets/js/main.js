console.log ('Arquivo Vinculado')

const h1Titular = document.querySelector ('#titular')
const imgCoruja = document.querySelector ('#lechuza')
const inputsForms = document.querySelectorAll ('.formulario input')
const copyright = document.querySelector ('#copyright')
const twitter = document.querySelector ('.fa-twitter')
const youtube = document.querySelector ('.fa-youtube')
const form = document.querySelector ('form')
const h2 = document.querySelectorAll ('h2')
const icon = document.querySelectorAll ('icon')


h1Titular.style.display = 'none';
imgCoruja.style.filter = "grayscale(100%)"
inputsForms.forEach( input => input.style.backgroundColor = 'red')
console.log ("Os atributos do copyright são:\n",copyright.attributes)
console.log(twitter.getAttribute ("href"));
youtube.setAttribute ('href','https://youtube.com')
youtube.setAttribute ("target", "_blank")
console.log (form.hasAttribute("action"))
form.setAttribute ("action","http://digitalhouse.com.br")
form.removeAttribute ('url')

imgCoruja.addEventListener ('click',(event) => {
    alert ('olá')
})

//imgCoruja.addEventListener ('mouseover',() => {console.log ('Emcima da coruja')})

imgCoruja.addEventListener ('mouseout',()=>console.log ('Mouse fora coruja') )

const inputName = document.querySelector('#name')


inputName.addEventListener("keypress",(event)=>{
    console.log (event)
})


