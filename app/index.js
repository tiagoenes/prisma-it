/**
 * Application entry point
 */

// Load application styles
import 'scss/_index.scss';

// ================================
// START YOUR APP HERE
// ================================
const resultsList = document.querySelector('#buttons');
const categoryName = document.querySelector('#category-name');
const content = document.querySelector('#content');
fetch('content.json')
  .then(response => response.json())
  .then((data) => {
    // console.log(data.content);
    const categories = data.content;
    resultsList.innerHTML = "";
    content.innerHTML = "";
      categories.forEach((category) => {
        // categoryName.innerText = category.name
        resultsList.insertAdjacentHTML('beforeend', `
          <div class="button-category">
          <img src="./assets/images/${category.name}.svg" height=35 alt="${category.name}">
          <div>${category.name.toUpperCase()}</div>
          </div>
          `);
        // console.log(category.slides);
        let display = category.name == "algemeen" ? "hide" : "";
        // console.log (getSlides(category));

        content.insertAdjacentHTML('beforeend', `
            <h2 class=""><span class="d-inline-flex">Channel <b id="category-name"class="category-name mx-2">${category.name}</b></span></h2>
            <div>
            <button class="add-slide-btn"><i class="fas fa-plus"></i><div class="mx-2">Add a new slide</div></button>
            <div class="mx-2 color-purple " id="duration-${category.name}"></div><i class="far fa-clock"></i>
            </div>
            <div id="myCarousel${category.name}" class="carousel slide" data-ride="carousel" data-interval="0">
              <div class="carousel-inner" id="car-in-${category.name}">
              </div>
              <a class="carousel-control left" href="#myCarousel${category.name}" data-slide="prev">
                <i class="fa fa-chevron-left"></i>
              </a>
              <a class="carousel-control right" href="#myCarousel${category.name}" data-slide="next">
                <i class="fa fa-chevron-right"></i>
              </a>
            </div>
          `);
        let carousel = document.querySelector(`#car-in-${category.name}`);
        const slides = category.slides;
        const n = 3 //tweak this to add more items per line
        let html = "";
        let count = 0;
        let duration = 0;
        const results = new Array(Math.ceil(slides.length / n))
          .fill()
          .map(_ => slides.splice(0, n))
        results.forEach((result) => {
          count +=1;
          let active = count === 1 ? "active" : "";
          console.log(count);
          html += `<div class="item ${active}"><div class="row">`
          result.forEach((slide)=>{
            duration += slide.duration;
            html += `<div class="box-col col-sm-4"><div class="img-box" ><img src="${slide.url}" class="img-responsive" alt=""><div class="title">${slide.title}</div><div class="play-duration centered-axis-x"><i class="fas fa-play mx-2"></i>${secondsToHms(slide.duration)}</div></div></div>`;
          });
          html += `</div></div>`
        });
        carousel.innerHTML=html;
        let durationDiv = document.querySelector(`#duration-${category.name}`);
        console.log(secondsToHms(duration));
        durationDiv.innerText = secondsToHms(duration);
      });
    });


function secondsToHms(seconds) {
  if (!seconds) return '';

  let duration = seconds;
  let hours = duration / 3600;
  duration = duration % (3600);

  let min = parseInt(duration / 60);
  duration = duration % (60);

  let sec = parseInt(duration);

  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }

  if (parseInt(hours, 10) > 0) {
    return `${parseInt(hours, 10)}h${min}m${sec}s`
  }
  else if (min == 0) {
    return `${sec}s`
  }
  else {
    return `${min}m${sec}s`
  }
}
