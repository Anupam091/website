function navbarBurgerToggle() {
  const burger = $('.navbar-burger'),
        menu   = $('.navbar-menu');

  burger.click(function() {
    [burger, menu].forEach(function(el) {
      el.toggleClass('is-active');
    });
  });
}

$(function() {
  navbarBurgerToggle();
});
