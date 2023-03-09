var photosModal = document.getElementById('photosModal')
photosModal.addEventListener('show.bs.modal', function (event) {
  var selected = event.relatedTarget
  var actived = selected.getAttribute('data-bs-photo')
  var photos = photosModal.querySelectorAll('.carousel-item')
  photos.forEach(photo => {
    photo.classList.remove("active");
  })
  document.getElementById(actived).parentElement.classList.add("active");
})
