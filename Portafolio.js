//Este script me permite el click en el link del menu y agregar las clases corerespondientes
//para que lugei con css se produzca el efecto donde se mueve el indicador.
const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
} 

list.forEach((item)=>
    item.addEventListener('click',activeLink));

function IrASemana(1){
   window.location.href = `semanas/semana${1}.html`;
}
  

