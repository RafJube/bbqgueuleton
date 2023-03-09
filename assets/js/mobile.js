const isHover = e => e.parentElement.querySelector(':hover') === e;

const selections = document.querySelectorAll('.barbecue-tag');
const display = document.getElementById('mobile-caracteristiques');
selections.forEach(selected => {
  document.addEventListener('mousemove', function checkHover() {
    const hovered = isHover(selected);
    if (hovered) {
      display.innerHTML = selected.querySelector('.barbecue-info').textContent
    }
  });
})
