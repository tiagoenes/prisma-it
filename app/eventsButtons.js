function addEventToButtons(){
  console.log("here");
  setTimeout(function(){
    const cardioBtn = document.querySelector("#cardiology-btn");
    const algemeenBtn = document.querySelector("#algemeen-btn");

    cardioBtn.addEventListener('click', (event) => {
      const element = document.querySelector("#cardiology");
      const activeBtn = document.querySelector("#cardiology-active-category")
      element.classList.toggle("hide");
      activeBtn.classList.toggle("active-category");
    });

    algemeenBtn.addEventListener('click', (event) => {
      const element = document.querySelector("#algemeen");
      const activeBtn = document.querySelector("#algemeen-active-category")
      element.classList.toggle("hide");
      activeBtn.classList.toggle("active-category");
    });
  }, 600);
}

export { addEventToButtons };
