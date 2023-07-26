$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

var projectModal = document.getElementById('projectModal')
projectModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var source = event.relatedTarget

  // Extract info from data-bs-* attributes
  var title = source.getAttribute('data-bs-title')
  var summ = source.getAttribute('data-bs-summary')
  var tech = source.getAttribute('data-bs-tech')
  var image = source.getAttribute('data-bs-img')
  var link = source.getAttribute('data-bs-link')

  // Update the modal's content.
  var modalTitle = projectModal.querySelector('.modal-title')
  var modalImage = projectModal.querySelector('.modal-image')
  var modalLink = projectModal.querySelector('.modal-link')
  var modalBodyText = projectModal.querySelector('.modal-body-text')
  var modalBodyTech = projectModal.querySelector('.modal-body-tech')

  modalTitle.textContent = title
  modalBodyText.textContent = summ
  modalImage.src = image
  modalBodyTech.textContent = tech
  if (link !== "") {
    modalLink.formAction = link
    modalLink.disabled = false
    modalLink.textContent = "Link"
  } else {
    modalLink.formAction = "/"
    modalLink.disabled = true
    modalLink.textContent = "Contact for information!"
  }
});
  