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

const kittenImage1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1 = "Anastacio";
//kittenName1 = kittenName1.toUpperCase();
const kittenRace1 = "";
const kittenDesc1 =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = "Fiona";
const kittenRace2 = "Sphynx";
const kittenDesc2 =
"Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = "Cielo";
const kittenRace3 = "Maine Coon";
const kittenDesc3 = 
"Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";

//Esto habría que hacerse para los 3 gatitos
let breedText = "";
if (kittenRace1 === "") {
  breedText = 'Uy que despiste, no sabemos su raza';
  } 
  else {
    breedText = kittenRace1;
      }
      
//Ejercicio function I, 2
function renderKitten(url, name, race, desc) {
  return `<li class="card">
<img class="card_img" src="${url}" alt="sphynx-cat"/>
     <h3 class="card_title">${name}</h3>
     <h4 class="card_race">${race}</h4>
    <p class="card_description">${desc}</p>
</li>`;
}

const kittenOne = renderKitten(kittenImage1, kittenName1, kittenRace1, kittenDesc1);
const kittenTwo = renderKitten(kittenImage2, kittenName2, kittenRace2, kittenDesc2);
const kittenThree = renderKitten(kittenImage3, kittenName3, kittenRace3, kittenDesc3)

 list.innerHTML = kittenOne + kittenTwo + kittenThree;

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

/*searchButton.addEventListener("click", (ev) => {
        ev.preventDefault();
        const descrValue = descrSearchText.value; 
        if (kittenDesc1.includes(descrValue)) {
          list.innerHTML = kittenOne;
          }
        if (kittenDesc2.includes(descrValue)) {
            list.innerHTML = kittenTwo;
            }
        if (kittenDesc3.includes(descrValue)) {
              list.innerHTML = kittenThree;
            }
      });*/

//Ejercicio function II, 1

function filterKitten (ev){
  ev.preventDefault();
        const descrValue = descrSearchText.value; 
        if (kittenDesc1.includes(descrValue)) {
          list.innerHTML = kittenOne;
          }
        if (kittenDesc2.includes(descrValue)) {
            list.innerHTML = kittenTwo;
            }
        if (kittenDesc3.includes(descrValue)) {
              list.innerHTML = kittenThree;
            }
  };

searchButton.addEventListener('click', filterKitten);



