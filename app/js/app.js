'use strict';

String.prototype.supplant = function (o) {
  return this.replace(/{([^{}]*)}/g,
    function (a, b) {
      var r = o[b];
      return typeof r === 'string' || typeof r === 'number' ? r : a;
    }
  );
};

function init() {
  var content = $('#content');
  var menuList = ['home', 'about', 'directions', 'contact', 'resources', 'forsale']
  var state = 'home';
  var hash = window.location.hash;
  if (hash) {
    var passedState = hash.slice(1);
    if (_.contains(menuList, passedState)) {
      state = passedState;
    }
  }

  content.addClass('visible');
  content.load('../html/tag.html');
  setTimeout(function () {
    content.removeClass('visible');
    setTimeout(function () {
      content.load('../html/' + state + '.html');
      content.addClass('visible');
    }, 1000);
  }, 2000)

  setMenuListeners(menuList, content);
}

init();

function setMenuListeners(menuList, rootElem) {
  $.each(menuList, function (i, selector) {
    $('#' + selector).on('click', function () {
      rootElem.load('../html/' + selector + '.html');
      window.location.hash = selector;
    });
  })
}
