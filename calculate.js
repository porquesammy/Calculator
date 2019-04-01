let button = document.querySelectorAll("button");

// add press event then remove after transition
for(let i=0; i<button.length; i++){

    button[i].addEventListener('click', () => {
        button[i].classList.add('pressed');
    });

    button[i].addEventListener('transitionend', () => {
        button[i].classList.remove('pressed');
      });

}