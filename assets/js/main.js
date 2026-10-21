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

// Category filters (People and News pages)
(function () {
  var toolbars = document.querySelectorAll('[data-filter-target]');
  toolbars.forEach(function (toolbar) {
    var target = document.getElementById(toolbar.getAttribute('data-filter-target'));
    if (!target) return;
    var buttons = toolbar.querySelectorAll('.filter-btn');
    var items = target.querySelectorAll('[data-category]');

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var filter = button.getAttribute('data-filter');
        buttons.forEach(function (b) {
          var active = b === button;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        items.forEach(function (item) {
          item.hidden = filter !== 'all' && item.getAttribute('data-category') !== filter;
        });
      });
    });
  });
})();
