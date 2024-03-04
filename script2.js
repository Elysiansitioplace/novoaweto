//ATIVAÇÃO DA LUPA
let box = document.querySelector('.fundo');
let busca = document.querySelector('.lupa');
let closee = document.querySelector('.fechar');

busca.addEventListener('click', ()=>{
box.classList.add('abrir');
});

closee.addEventListener('click', ()=>{
box.classList.remove('abrir')
})


//SISTEMA DE PESQUISA DA LUPA
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
//
const carrofundo = document.querySelector('.fundo-carrinho');
const carroclique = document.querySelector('.clique-carro');
const carrofechar = document.querySelector('#carrinho-fechar');

carroclique.addEventListener('click', ()=>{
  carrofundo.classList.add("ativar-carrinho")
})

carrofechar.addEventListener('click', ()=>{
  carrofundo.classList.remove("ativar-carrinho")
})


//ATIVAÇÃO DO MENU DE NAVEGAÇÃO
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
})

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







//ATIVAÇÃO DO MENU CATEGORIAS
const categoriaofc = document.querySelector('.seçao-menu');
const cliqueofc = document.querySelector('.categoria-clique');
const fecharofc = document.querySelector('.fundo-fechar');

cliqueofc.addEventListener('click', ()=>{
categoriaofc.classList.add('ativar-seçaomenu')
})

fecharofc.addEventListener('click', ()=>{
categoriaofc.classList.remove('ativar-seçaomenu')
})


//ATIVAÇÃO DO MENU CATEGORIAS PARA MOBILE
const categoriamob = document.querySelector('.seçao-menumob');
const cliquemob = document.querySelector('.categoria-cliquemob');
const fecharmob = document.querySelector('.fundo-fecharmob')

cliquemob.addEventListener('click', ()=>{
  categoriamob.classList.add('ativar-seçaomenumob')
  })

  fecharmob.addEventListener('click', ()=>{
    categoriamob.classList.remove('ativar-seçaomenumob') 
    })









    function ofertas(){
      document.querySelector('.titulo-categoria').innerHTML = "Ofertas";
    }
    
    const fundoofertas = document.querySelector(".fundo-ofertas");
    const cliqueofertas = document.querySelector("#cliqueofertas");
    cliqueofertas.addEventListener('click', ()=>{
    fundoofertas.classList.add("ativar-ofertas")
      
    });

    function religiosos(){
      document.querySelector('.titulo-categoria').innerHTML = "Religião";
    }
    
    const fundoreligio = document.querySelector(".fundo-religio");
    const cliquereligio = document.querySelector("#cliquereligio");
    cliquereligio.addEventListener('click', ()=>{
    fundoreligio.classList.add("ativar-religio");
      
    });


    function romance(){
      document.querySelector('.titulo-categoria').innerHTML = "Romance";
    }
    
    const fundoromance = document.querySelector(".fundo-romance");
    const cliqueromance = document.querySelector("#cliqueromance");
    cliqueromance.addEventListener('click', ()=>{
    fundoromance.classList.add("ativar-romance");
      
    });







    
   
function didaticos(){
  document.querySelector('.titulo-categoria').innerHTML = "Didáticos";
}

const fundodidatico = document.querySelector(".fundo-didaticos");
const cliquedidatico = document.querySelector("#cliquedidatico");
cliquedidatico.addEventListener('click', ()=>{
fundodidatico.classList.add("ativar-didatico")
  
});


function biografia(){
  document.querySelector('.titulo-categoria').innerHTML = "Biografias";
}

const fundobiografia = document.querySelector(".fundo-biografias");
const cliquebiografia = document.querySelector("#cliquebiografia");
cliquebiografia.addEventListener('click', ()=>{
fundobiografia.classList.add("ativar-biografias")
  
});



function Autoajuda(){
  document.querySelector('.titulo-categoria').innerHTML = "Auto Ajuda";
}



