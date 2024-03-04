let box = document.querySelector('.fundo');
let busca = document.querySelector('.lupa');
let closee = document.querySelector('.fechar');

busca.addEventListener('click', ()=>{
box.classList.add('abrir');
});

closee.addEventListener('click', ()=>{
box.classList.remove('abrir')
})



const fundo1 = document.querySelector('.fundo-menu1');
const clique1 = document.querySelector('.clique-menu1');
const fechar1 = document.querySelector('.menu1-fechar');

const fundo2 = document.querySelector('.fundo-menu2');
const clique2 = document.querySelector('.clique-menu2');
const fechar2 = document.querySelector('.menu2-fechar');

const fundo3 = document.querySelector('.fundo-menu3');
const clique3 = document.querySelector('.clique-menu3');
const fechar3 = document.querySelector('.menu3-fechar');

const fundo4 = document.querySelector('.fundo-menu4');
const clique4 = document.querySelector('.clique-menu4');
const fechar4 = document.querySelector('.menu4-fechar');

const fundo5 = document.querySelector('.fundo-menu5');
const clique5 = document.querySelector('.clique-menu5');
const fechar5 = document.querySelector('.menu5-fechar');

const fundo6 = document.querySelector('.fundo-menu6');
const clique6 = document.querySelector('.clique-menu6');
const fechar6 = document.querySelector('.menu6-fechar');

clique1.addEventListener('click', ()=>{
  fundo1.classList.add('ativar-menu1');
});

fechar1.addEventListener('click',()=>{
  fundo1.classList.remove('ativar-menu1')
})

clique2.addEventListener('click', ()=>{
  fundo2.classList.add('ativar-menu2');
})

fechar2.addEventListener('click',()=>{
  fundo2.classList.remove('ativar-menu2');
})

clique3.addEventListener('click', ()=>{
  fundo3.classList.add('ativar-menu3');
})

fechar3.addEventListener('click',()=>{
  fundo3.classList.remove('ativar-menu3');
})

clique4.addEventListener('click', ()=>{
  fundo4.classList.add('ativar-menu4');
})

fechar4.addEventListener('click',()=>{
  fundo4.classList.remove('ativar-menu4');
})

clique5.addEventListener('click', ()=>{
  fundo5.classList.add('ativar-menu5');
})

fechar5.addEventListener('click',()=>{
  fundo5.classList.remove('ativar-menu5');
})

clique6.addEventListener('click', ()=>{
  fundo6.classList.add('ativar-menu6');
})

fechar6.addEventListener('click',()=>{
  fundo6.classList.remove('ativar-menu6');
})





// ATIVAÇÃO DO MENU MOBILE
const fundomenu= document.querySelector('.fundo-menu');
const menuclique = document.querySelector('.clique-menu');
const menufechar = document.querySelector('.fechar-menu');

menuclique.addEventListener('click', ()=>{
  fundomenu.classList.add("ativar-menu")
})

menufechar.addEventListener('click', ()=>{
  fundomenu.classList.remove("ativar-menu")
})



// ATIVAÇÃO DO CARROSSEL
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function addcarro(){

  const titulocarro = document.querySelector(".titulo-produto-carrinho");
  const titulobloco = document.querySelector(".titulo-produto")
  
  document.getElementById('titulo-produto-carrinho').innerHTML = 'titulobloco'
}



//ATIVAÇÃO DA BARRA DE PESQUISA
const pesquisainput = document.getElementById('input-pesquisa');//Barra de Pesquisa
const produtoinput  = document.getElementById('lista').getElementsByTagName('li'); //Lista + Dados

pesquisainput.addEventListener('input',function(){
const pesquisaterminal = pesquisainput.value.toLowerCase();

for (let i = 0; i < produtoinput.length; i++){
    const produtonome = produtoinput[i].innerText.toLowerCase();

    if (produtonome.includes(pesquisaterminal)){
        produtoinput[i].style.display = 'block'; 
    } else{
        produtoinput[i].style.display = 'none';
    } 
    }

})

//ATIVAÇÃO DA BARRA DE PESQUISAMOB
const fundolupamob= document.querySelector('#listamob');
const lupacliquemob = document.querySelector('#input-lupa');
const menufecharmob = document.querySelector('#fechar-busca');

lupacliquemob.addEventListener('click', ()=>{
  fundolupamob.classList.add("ativo-listamob")
})

menufecharmob.addEventListener('click', ()=>{
  fundolupamob.classList.remove("ativo-listamob")
})


const pesquisainputmob = document.getElementById('input-lupa');//Barra de Pesquisa
const produtoinputmob  = document.getElementById('listamob').getElementsByTagName('li'); //Lista + Dados

pesquisainputmob.addEventListener('input',function(){
const pesquisaterminalmob = pesquisainputmob.value.toLowerCase();

for (let i = 0; i < produtoinputmob.length; i++){
    const produtonomemob = produtoinputmob[i].innerText.toLowerCase();

    if (produtonomemob.includes(pesquisaterminalmob)){
        produtoinputmob[i].style.display = 'block'; 
    } else{
        produtoinputmob[i].style.display = 'none';
    } 
    }

})







