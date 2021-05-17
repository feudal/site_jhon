emailjs.init("user_fJfucuzfpm3gfMKDB5ovi");

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('service_pfmlm2i', 'template_uj7ub9j', this)
      .then(function() {
        console.log('SUCCESS!');
        alert('Message was successful send!')
      }, function(error) {
        console.log('FAILED...', error);
      });
  });
}