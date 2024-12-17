"use strict";

const list = document.querySelector(".js-list");
const addbutton = document.querySelector(".js-btn-add");
const form = document.querySelector(".new-form");
const cancelbutton = document.querySelector(".js-btn-cancel");
const inputform1 = document.querySelector(".js-inputform1");
const inputform2 = document.querySelector(".js-inputform2");
const inputform3 = document.querySelector(".js-inputform3");
const inputform4 = document.querySelector(".js-inputform4");
const searchButton = document.querySelector (".js_button-search");
const descrSearchText = document.querySelector(".js_in_search_desc");


//Ejercicio de Objetos. ejemplo de un objeto con la información del primer gatito
const kittenData_1 = {
  image: "https://dev.adalab.es/gato-siames.webp",
  name: 'Anastacio',
  race: 'Siames',
  desc: 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
 
};

const kittenData_2 = {
  image: "https://dev.adalab.es/sphynx-gato.webp",
  name: 'Fiona',
  race: 'Sphynx',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
 
};

const kittenData_3 = {
  image: "https://dev.adalab.es/maine-coon-cat.webp",
  name: 'Cielo',
  race: 'Maine Coon',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
 
};

function renderKitten(kittenData) {
  return `<li class="card">
<img class="card_img" src="${kittenData.image}" alt="sphynx-cat"/>
     <h3 class="card_title">${kittenData.name}</h3>
     <h4 class="card_race">${kittenData.race}</h4>
    <p class="card_description">${kittenData.desc}</p>
</li>`;
    }
list.innerHTML= renderKitten(kittenData_1) + renderKitten(kittenData_2) + renderKitten(kittenData_3);


//Esto habría que hacerse para los 3 gatitos
/*let breedText = "";
if (kittenRace1 === "") {
  breedText = 'Uy que despiste, no sabemos su raza';
  } 
  else {
    breedText = kittenRace1;
      }
*/

 //Ejercicio formulario
function showNewCatForm() {
  form.classList.remove("collapsed");
}
function hideNewCatForm() {
  form.classList.add("collapsed");
}

function handleClick() {
  
  if (form.classList.contains("collapsed")) {
    showNewCatForm();
    
  } 
  else {
    hideNewCatForm();
    
    }

}

addbutton.addEventListener('click', handleClick);

//de momento

 cancelbutton.addEventListener('click', ()=>{
 form.classList.add('collapsed');
 inputform1.value = "";
 inputform2.value = "";
 inputform3.value = "";
 inputform4.value = "";
});


function filterKitten (ev){
  ev.preventDefault();
        const descrValue = descrSearchText.value; 
        if (kittenData_1.desc.includes(descrValue)) {
          list.innerHTML = renderKitten(kittenData_1);
          }
        if (kittenData_2.desc.includes(descrValue)) {
            list.innerHTML = renderKitten(kittenData_2);
            }
        if (kittenData_3.desc.includes(descrValue)) {
              list.innerHTML = renderKitten(kittenData_3);
            }
  };

searchButton.addEventListener('click', filterKitten);



