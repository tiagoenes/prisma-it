function fetchButtons(){
  const resultsList = document.querySelector('#buttons');
  const categoryName = document.querySelector('#category-name');
  fetch('./assets/JSON/content.json',{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
  .then(response => response.json())
  .then((data) => {
    const categories = data.content;
    categories.forEach((category) => {
        resultsList.insertAdjacentHTML('beforeend', `
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-12 p-lg-0">
          <div id="${category.name}-btn" class="button-category">
          <img src="./assets/images/${category.name}.svg" height=35 alt="${category.name}">
          <div id="${category.name}-active-category"class="active-category text-btn">${category.name.toUpperCase()}</div>
          </div>
          </div>
          `);
    });
  });


}


export { fetchButtons };
