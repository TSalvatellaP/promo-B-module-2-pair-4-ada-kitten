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

const kittenOne = `<li class="card">
  <img class="card_img" src="${kittenImage1}" alt="gatito"/>
  <h3 class="card_title">${kittenName1}</h3>
  <h4 class="card_race">${breedText}</h4>
  <p class="card_description">${kittenDesc1}</p>
</li>`;

const kittenTwo = `<li class="card">
<img class="card_img" src="${kittenImage2}" alt="sphynx-cat"/>
     <h3 class="card_title">${kittenName2}</h3>
     <h4 class="card_race">${kittenRace2}</h4>
    <p class="card_description">${kittenDesc2}</p>
</li>`;

const kittenThree = `<li class="card">
<img class="card_img" src="${kittenImage3}" alt="maine-coon-cat" />
    <h3 class="card_title">${kittenName3}</h3>
    <h4 class="card_race">${kittenRace3}</h4>
    <p class="card_description">${kittenDesc3}</p>
 </li>`;

 list.innerHTML = kittenOne + kittenTwo + kittenThree;

 addbutton.addEventListener('click', ()=>{
 form.classList.toggle('collapsed');
 });

 cancelbutton.addEventListener('click', ()=>{
 form.classList.add('collapsed');
 inputform1.value = "";
 inputform2.value = "";
 inputform3.value = "";
 inputform4.value = "";
});

searchButton.addEventListener("click", (ev) => {
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
      });



