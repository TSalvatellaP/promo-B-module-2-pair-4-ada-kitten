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



const kittenOne = `<li class="card">
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
   </p>

</li>`;

const kittenTwo = `<li class="card">
<img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
     <h3 class="card_title">Fiona</h3>
     <h4 class="card_race">Sphynx</h4>
    <p class="card_description">
            Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
            hasta con pinta de alienígena han llegado a definir a esta raza
            gatuna que se caracteriza por la «ausencia» de pelo.
    </p>
</li>`;

const kittenThree = `<li class="card">
<img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
    <h3 class="card_title">Cielo</h3>
    <h4 class="card_race">Maine Coon</h4>
    <p class="card_description">
            Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
            bella mirada se ha convertido en una de sus señas de identidad.
            Sus ojos son grandes y las orejas resultan largas y en punta.
    </p>
 </li>`;
 list.innerHTML = kittenOne + kittenTwo + kittenThree

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
        console.log (descrValue)
      });

const kittenDesc1 =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
if (kittenDesc1.includes(descrSearchText)) {
       let list = "kittenOne";
        //Completa el código
      }

const kittenDesc2 =
"Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenDesc3 = 
"Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
