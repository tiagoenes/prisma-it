import 'scss/_index.scss';


import { fetchButtons } from 'buttons.js';
import { fetchSlides } from 'content.js';
import { addEventToButtons } from 'eventsButtons.js';

let screenSize = $(document).width();

fetchButtons();
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
