function introductionLogoAnimation() {
  const animation = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const logo = entry.target.querySelector('#intro-logo');
      if (entry.isIntersecting) {
        logo.classList.add('logo-animation');
      return; // if we added the class, exit the function
      }
      // We're not intersecting, so remove the class!
      logo.classList.remove('logo-animation');
    });
  });

  animation.observe(document.querySelector('#intro-logo-container'));
}

function introductionVideoAnimation() {
  var options = {
    threshold: 0.8
  }
  const animation = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const video = entry.target.querySelector('.video-wrapper');
      if (entry.isIntersecting) {
        video.classList.add('video-animation');
      return; // if we added the class, exit the function
      }
      // We're not intersecting, so remove the class!
      video.classList.remove('video-animation');
    });
  }, options);

  animation.observe(document.querySelector('.video-container'));
}

function cuissonAnimation() {
  const anim1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const card = entry.target.querySelector('.card-anim-1');
      if (entry.isIntersecting) {
        card.classList.add('cards-animation-1');
      return; // if we added the class, exit the function
      }
      // We're not intersecting, so remove the class!
      card.classList.remove('cards-animation-1');
    });
  });

  const anim2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const card = entry.target.querySelector('.card-anim-2');
      if (entry.isIntersecting) {
        card.classList.add('cards-animation-2');
      return; // if we added the class, exit the function
      }
      // We're not intersecting, so remove the class!
      card.classList.remove('cards-animation-2');
    });
  });

  const anim3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const card = entry.target.querySelector('.card-anim-3');
      if (entry.isIntersecting) {
        card.classList.add('cards-animation-3');
      return; // if we added the class, exit the function
      }
      // We're not intersecting, so remove the class!
      card.classList.remove('cards-animation-3');
    });
  });

  const anim4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const card = entry.target.querySelector('.card-anim-4');
      if (entry.isIntersecting) {
        card.classList.add('cards-animation-4');
      return; // if we added the class, exit the function
      }
      // We're not intersecting, so remove the class!
      card.classList.remove('cards-animation-4');
    });
  });

  containers = document.querySelectorAll('.cards')

  containers.forEach ( container => {
    if(container.querySelector('.cards-animation-container-1')) {
      anim1.observe(container.querySelector('.cards-animation-container-1'));
    }
    if(container.querySelector('.cards-animation-container-2')) {
      anim2.observe(container.querySelector('.cards-animation-container-2'));
    }
    if(container.querySelector('.cards-animation-container-3')) {
      anim3.observe(container.querySelector('.cards-animation-container-3'));
    }
    if(container.querySelector('.cards-animation-container-4')) {
      anim4.observe(container.querySelector('.cards-animation-container-4'));
    }
  });
}

function caracteristiquesAnimation() {
  const animation = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const barbecue = entry.target.querySelector('.barbecue-background');
      if (entry.isIntersecting) {
        barbecue.classList.add('barbecue-animation');
      return; // if we added the class, exit the function
      }
      // We're not intersecting, so remove the class!
      barbecue.classList.remove('barbecue-animation');
    });
  });

  animation.observe(document.querySelector('.barbecue-container'));
}

function origineAccessoiresAnimation() {
  var options = {
    threshold: 0.7
  }
  const animation = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const unscrolled = entry.target.querySelector('.unscrolled');
      const scrolled = entry.target.querySelector('.scrolled');
      if (entry.isIntersecting) {
        unscrolled.classList.add('hidden');
        scrolled.classList.add('visible');
        return; // if we added the class, exit the function
      }
      // We're not intersecting, so remove the class!
      unscrolled.classList.remove('hidden');
      scrolled.classList.remove('visible');
    });
  }, options);

  containers = document.querySelectorAll('.cards-image')

  containers.forEach ( container => {
    if(container.querySelector('.cards-images-animation-container')) {
      animation.observe(container.querySelector('.cards-images-animation-container'));
    }
  });
}

introductionLogoAnimation();
introductionVideoAnimation();
cuissonAnimation();
caracteristiquesAnimation();
origineAccessoiresAnimation();


// Animation for conception in origine section
function hideConceptionAnimation() {
  conceptions = document.querySelectorAll('.conception-phase')
  conceptions.forEach ( conception => {
    conception.querySelector('.conception-description').style.opacity = "0";
  });
}

function conceptionAnimation() {
  conceptions = document.querySelectorAll('.conception-phase')
  var i = 0;
  hideConceptionAnimation();
  var interval = setInterval(() => {
      if (i < conceptions.length) {
      conceptions[i].querySelector('.conception-bubble').classList.add("animated");
      conceptions[i].querySelector('.conception-description').classList.add("animated");
      conceptions[i].querySelector('.conception-description').style.opacity = "1";
      if (i > 0) {
        conceptions[i-1].querySelector('.conception-description').classList.remove("animated");
        conceptions[i-1].querySelector('.conception-bubble').classList.remove("animated");
      }
      i += 1;
    } else {
      conceptions[conceptions.length - 1].querySelector('.conception-description').classList.remove("animated");
      conceptions[conceptions.length - 1].querySelector('.conception-bubble').classList.remove("animated");
      clearInterval(interval);
    }
  }, 2000)
}

conceptionAnimation();
setInterval(()=> {
  conceptionAnimation();
}, 12000);
