'use strict';

console.warn('hia');

function init() {
  var modal = $('#modal-content');
//load templates programatically
//add  click listeners. 
  setTimeout(function() {
    modal.load('../html/welcomeModal.html')
    modal.on('click', 'li#about', function(e) {
      console.log(e)
      modal.load('../html/about.html')

    });

  }, 1000);


}

init();


function createMenu(){
var menuItems = ['About', 'News', 'Screenshots'];
// var menu = _.template("<li id='<%print()%>'> </li>");
var menu = '';
$.each(menuItems, function(index, item){
  menu += '<li id="">' + item '</li>'
});
  <li id="about">
                        About
                    </li>
                    <li>
                        News
                    </li>
                    <li>
                        Screenshots
                    </li>
                    <li>
                        Live CD/USB CD/USB Key vendors Related Live CD
                    </li>
                    <li>
                        Live Docs
                    </li>
                    <li>
                        Server Edition
                    </li>
                    <li>
                        Downloads
                    </li>
                    <li>
                        DRBL-winroll
                    </li>
                    <li>
                        Testimonials
                    </li>
                    <li>
                        Lecture Materials
                    </li>
                    <li>
                        Related Articles
                    </li>
                    <li>
                        Partners
                    </li>
                    <li>
                        FAQ/Q&A
                    </li>
                    <li>
                        Forum
                    </li>
                    <li>
                        Mailing Lists
                    </li>
                    <li>
                        Developers
                    </li>
                    <li>
                        Contributors
                    </li>
                    <li>
                        Related Links
                    </li>
                    <li>
                        Local Communities
                    </li>
}