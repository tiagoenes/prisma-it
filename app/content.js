function fetchSlides(){
  fetch('./assets/JSON/content.json',{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
  .then(response => response.json())
  .then((data) => {
    const categories = data.content;
    content.innerHTML = "";
    categories.forEach((category) => {
      content.insertAdjacentHTML('beforeend', `
        <div id="${category.name}">
          <h2 class="">
          <span class="d-inline-flex">Channel <b id="category-name"class="category-name">${category.name}</b></span></h2>
          <div class="row d-flex justify-content-between align-items-center"">
            <div class="col-xs-12 col-sm-6 add-button-container">
              <button class="add-slide-btn"><i class="fas fa-plus"></i><div class="mx-2">Add a new slide</div></button>
            </div>
            <div class="col-xs-12 col-sm-6 d-flex duration-container">
              <div class="d-flex align-items-center tot-duration">
                <div class="">Total duration: </div>
                <div class="mx-2 color-purple " id="duration-${category.name}"></div>
                <i class="far fa-clock"></i>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-8 col-xl-9 col-xxl-10">
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
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4 col-xl-3 col-xxl-2 playlist-btn-container">
             <div class="d-flex align-items-center justify-content-center btn-playlist"><i class="mx-2 fas fa-play"></i><div>Play entire channel</div></div>
             <div class="d-flex align-items-center justify-content-center btn-playlist my-3"><i class="mx-2 fas fa-plus"></i><div>Add playlist to channel</div></div>
             <div class="d-flex align-items-center justify-content-center btn-playlist my-3"><i class="mx-2 fas fa-edit"></i><div>Edit playlist</div></div>
             <div class="d-flex align-items-center justify-content-center btn-playlist my-3"><i class="mx-2 fas fa-trash-alt"></i><div>Delete playlist</div></div>
             <div class="d-flex align-items-center justify-content-center btn-playlist my-3"><i class="mx-2 fas fa-eye"></i><div>Preview playlist</div></div>
             <div class="d-flex align-items-center justify-content-center btn-playlist"><i class="mx-2 fas fa-cloud-upload-alt"></i><div>Publish playlist</div></div>
            </div>
          </div>
        </div>
        `);
      let carousel = document.querySelector(`#car-in-${category.name}`);
      const slides = category.slides;

      let n = 3
      let cols = 4
      if($(document).width()>=768 && $(document).width()<1200){
        cols=6;
        n = 2
      }else if($(document).width()<768){
        cols=12;
        n = 1
      }
      let html = "";
      let count = 0;
      let duration = 0;


      const results = new Array(Math.ceil(slides.length / n))
        .fill()
        .map(_ => slides.splice(0, n))
        results.forEach((result) => {
        count +=1;
        let active = count === 1 ? "active" : "";
        html += `<div class="item ${active}"><div class="row">`
        result.forEach((slide)=>{
          duration += slide.duration;
          html += `<div class="box-col col-sm-${cols}"><div class="img-box" ><img src="${slide.url}" class="img-responsive" alt=""><div class="title">${slide.title}</div><div class="play-duration centered-axis-x"><i class="fas fa-play mx-2"></i>${secondsToHms(slide.duration)}</div></div></div>`;
        });
        html += `</div></div>`
      });
      carousel.innerHTML=html;
      let durationDiv = document.querySelector(`#duration-${category.name}`);
      durationDiv.innerText = secondsToHms(duration);



    });
  });


}
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


export { fetchSlides };

