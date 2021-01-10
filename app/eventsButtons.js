function addEventToButtons(){
  console.log("here");
  setTimeout(function(){
    const cardioBtn = document.querySelector("#cardiology-btn");
    const algemeenBtn = document.querySelector("#algemeen-btn");

    cardioBtn.addEventListener('click', (event) => {
      const element = document.querySelector("#cardiology");
      const activeBtn = document.querySelector("#cardiology-btn")
      element.classList.toggle("hide");
      activeBtn.classList.toggle("active-category");
      if(document.querySelector("#cardiology")){
        document.querySelector('#cardiology').scrollIntoView({
          behavior: 'smooth'
        });
      }

    });

    algemeenBtn.addEventListener('click', (event) => {
      const element = document.querySelector("#algemeen");
      const activeBtn = document.querySelector("#algemeen-btn")
      element.classList.toggle("hide");
      activeBtn.classList.toggle("active-category");
      if(document.querySelector("#algemeen")){
        document.querySelector('#algemeen').scrollIntoView({behavior: "smooth"});
      }
    });
  }, 1000);
}

export { addEventToButtons };
