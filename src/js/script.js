ScrollReveal().reveal('.container', { delay: 250 });
ScrollReveal().reveal('nav');


$('#orderModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var product = button.data('product')
    var price = button.data('price')
    var allergies = button.data('allergies')
    var description = button.data('description')
    var ingredientsImage = button.data('ingredientsImage')
                                        // Extract info from data-* attributes
                                        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
                                        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(product)
    modal.find('.price').text(price)
    modal.find('.allergies').text(allergies)
    modal.find('.description').text(description)
  })
