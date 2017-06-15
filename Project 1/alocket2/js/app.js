$(document).ready(function() {

// Variables
projContainer = $('#projContainer');
projectsButton = $('.projects');
projInfo = $('.proj_info');


var isTransitioningToProjects = false;
var projectPaneIsOpen = false;


projectsButton.on('click', function() {
  if(projectPaneIsOpen) {
    closeProjectPane()
  } else {
    openProjectPane()
  }
});

openProjectPane = function() {
    projectPaneIsOpen = true
    projContainer.slideToggle();
}

closeProjectPane = function() {
  projectPaneIsOpen = false
  projContainer.slideToggle();
}

});
