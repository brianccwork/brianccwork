var options = {};

emailjs.init("m0FeTdE6QOQOjSR9E");

  function sendMail() {
      const params = {
          from_name: document.getElementById("fullName").value,
          email_id: document.getElementById("email_id").value,
          message: document.getElementById("message").value
      };

      emailjs.send("service_j2mxu9e", "template_sjd8lbo", params)
          .then(res => {
              M.toast({html: 'Success! Email sent.', classes: 'green darken-2'});
              document.getElementById("contact-form").reset();
          })
          .catch(error => {
              M.toast({html: 'Failed: ' + error.message, classes: 'red darken-2'});
          });
  }

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
  var collapsibleElem = document.querySelector('.collapsible');
  var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
});

document.addEventListener('mousemove', function(event) {
  const cube = document.createElement('div');
  cube.classList.add('cube');
  cube.style.left = `${event.pageX}px`;
  cube.style.top = `${event.pageY}px`;

  const container = document.getElementById('cube-container');
  container.appendChild(cube);

  // Remove the cube after the animation ends
  setTimeout(() => {
    cube.remove();
  }, 1000); // Match this with the animation duration
});