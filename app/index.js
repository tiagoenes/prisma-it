import 'scss/_index.scss';


import { fetchButtons } from 'buttons.js';
import { fetchSlides } from 'content.js';
import { addEventToButtons } from 'eventsButtons.js';

let screenSize = $(document).width();
let activeCardio = {cardiology:true};
let activeAlgemeen = {algemeen:true};;
window.activeCardio;
fetchButtons(activeCardio,activeAlgemeen);
fetchSlides();

document.addEventListener("DOMContentLoaded", function(){
  addEventToButtons();
});

window.onresize = function(event) {
  if($(document).width() != screenSize){
    screenSize = $(document).width();
    fetchSlides();
  }
};
