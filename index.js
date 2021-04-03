// Animation du titre
let characters = document.querySelectorAll('.home-title');
let characterCount = 0;

for (let i = 0; i < characters.length; i++) {
  let character = characters[i];
  let newContent = '';

  for (let j = 0; j < character.textContent.length; j++) {
    let substring = character.textContent.substr(j, 1);
    
    if (substring !== " ") {
      newContent += `<span style="--animation-order: ${characterCount};">${substring}</span>`;
    } else {
      newContent += substring;
    }
    characterCount++;
  }
  character.innerHTML = newContent;
}

// Animation du bloc compétences
let ratio = .5
let options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

let handleIntersect = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible')
    }  
  });
}

let observer = new IntersectionObserver(handleIntersect, options);
observer.observe(document.querySelector('.reveal'))




// Animation du carroussel
let items = document.querySelectorAll('.project-item');
let nbSlide = items.length;
let next = document.querySelector('.fa-arrow-right');
let previous = document.querySelector('.fa-arrow-left');
let count = 0;


function nextSlide() {
    items[count].classList.remove('active');

    if(count < nbSlide -1) {
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active');
}

next.addEventListener('click', nextSlide)


function previousSlide() {
    items[count].classList.remove('active');

    if(count > 0) {
        count--;
    } else {
        count = nbSlide -1;
    }

    items[count].classList.add('active');
}

previous.addEventListener('click', previousSlide)