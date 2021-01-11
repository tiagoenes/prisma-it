function addEventToButtons(){
  setTimeout(function(){
    const cardioBtn = document.querySelector("#cardiologie-btn");
    const algemeenBtn = document.querySelector("#algemeen-btn");

    cardioBtn.addEventListener('click', (event) => {
      const element = document.querySelector("#cardiologie");
      const activeBtn = document.querySelector("#cardiologie-btn")
      element.classList.toggle("hide");
      activeBtn.classList.toggle("active-category");
      if(document.querySelector("#cardiologie")){
        document.querySelector('#cardiologie').scrollIntoView({
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
