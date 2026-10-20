// Mobile menu toggle
(function () {
  var header = document.querySelector('.site-header');
  var button = document.querySelector('.nav-toggle');
  if (!header || !button) return;

  button.addEventListener('click', function () {
    var open = header.classList.toggle('nav-open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('nav-open')) {
      header.classList.remove('nav-open');
      button.setAttribute('aria-expanded', 'false');
      button.focus();
    }
  });
})();
