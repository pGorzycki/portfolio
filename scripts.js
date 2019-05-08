// JUMBOTRON TEXT ANIMATION
const jumbotronText = () => {
    const header1 = document.querySelector(".jumbotron-span");
    const header2 = document.querySelector(".jumbotron-description");
    const cursor1 = document.querySelector(".cursor1");
    const cursor2 = document.querySelector(".cursor2");
    const headerText = "Piotr Górzycki";
    const headerText2 = "Front-end development";

    let indexNumber = 0;
    let time = 150;

    const textAnimation = () => {
        header1.textContent += headerText[indexNumber++];
        if (indexNumber === headerText.length) {
            clearInterval(headerInterval);
            clearInterval(cursorAnm1);
            cursor1.classList.add("cursor-hide");
            indexNumber = 0;
            const header2Interval = setInterval(() => {
                header2.textContent += headerText2[indexNumber++];
                if (indexNumber === headerText2.length) clearInterval(header2Interval);
            }, time);
            setInterval(() => {
                cursor2.classList.toggle("cursor-hide")
            }, time * 2);
        }
    };

    const cursorAnimation1 = () => {
        cursor1.classList.toggle("cursor-hide");
    };


    const headerInterval = setInterval(textAnimation, time);
    const cursorAnm1 = setInterval(cursorAnimation1, time * 2);
};
jumbotronText();

// KIEDY PATRZE TO WIDZE
const startAnimations = () => {
  const animationWrappers = document.getElementsByClassName("animate");
  for (let i = 0; i < animationWrappers.length; i++) {
      if (animationWrappers[i].getBoundingClientRect().y < (window.innerHeight * 0.8)){
          animationWrappers[i].classList.add("animate-start");
      } else {
          animationWrappers[i].classList.remove("animate-start");
      }
  }
};
window.addEventListener("scroll", startAnimations);