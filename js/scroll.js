document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const elementsToAnimate = document.querySelectorAll('.home h2, .home h3, .home p, .home .couple .col-lg-6:nth-child(1) .text-end, .home .couple .col-lg-6:nth-child(2) .text-start');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        } else {
          entry.target.style.animationPlayState = 'paused';
          entry.target.style.animation = 'none';
          void entry.target.offsetWidth; 
          entry.target.style.animation = null;
        }
      });
    }, observerOptions);
  
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });

  function resizeContainer() {
    const container = document.getElementById('container');
    container.classList.toggle('resized');
}

document.getElementById('my-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Show the popup
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
  
  // Hide the popup after 3 seconds
  setTimeout(function() {
    popup.style.display = 'none';
  }, 3000);
  
  // Optionally, submit the form using AJAX
  var form = event.target;
  var formData = new FormData(form);
  
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset(); // Reset the form if the submission is successful
    } else {
      alert('Ada masalah dalam mengirim form.');
    }
  }).catch(error => {
    alert('Ada masalah dalam mengirim form.');
  });
});
  