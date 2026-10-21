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

// People page category filter
(function () {
  var grid = document.getElementById('people-grid');
  var buttons = document.querySelectorAll('.filter-btn');
  if (!grid || !buttons.length) return;
  var cards = grid.querySelectorAll('.person');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.getAttribute('data-filter');
      buttons.forEach(function (b) {
        var active = b === button;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      cards.forEach(function (card) {
        card.hidden = filter !== 'all' && card.getAttribute('data-category') !== filter;
      });
    });
  });
})();
