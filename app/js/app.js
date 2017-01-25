'use strict';

console.warn('hia');

function init() {
  var modal = $('#modal-content');

  setTimeout(function() {
    modal.load('../html/welcomeModal.html')


  }, 1000);

}

init();
