'use strict'

var projects = [];

// function Project (projectName, projectUrl, projectImageUrl, projectDescription) {
//   this.projectName = projectName;
//   this.projectUrl = projectUrl;
//   this.projectImageUrl = projectImageUrl;
//   this.projectDescription = projectDescription;
// }

var project1 = {
  projectName: 'Salmon Cookies',
  projectUrl: 'https://pmendoza72.github.io/cookie-stand/',
  projectImageUrl: 'img/salmon-cookie-tn.png',
  projectDescription: 'HTML table dynamically populated using JavaScript including form that adds to table.'
};

var project2 = {
  projectName: 'BlackJack',
  projectUrl: 'https://pmendoza72.github.io/201-Project/',
  projectImageUrl: 'img/blackjack-tn.png',
  projectDescription: 'BlackJack card game using HTML, CSS and JavaScript only.'
};

var project3 = {
  projectName: 'Project 3',
  projectUrl: '#',
  projectImageUrl: 'http://placehold.it/300x300',
  projectDescription: 'Coming soon.'
};

// $("#insert-projects").

// Project.prototype.toHtml = function() {
//   var template = Handlebars.compile($('#project-template').text());
//   return template(this);
// };

var sourceHtml = $('#project-template').text();
var handleBarsTemplate = Handlebars.compile(sourceHtml);

var finalHtml = handleBarsTemplate(project1);
$('#insert-projects').append(finalHtml);
$('#insert-projects').append(handleBarsTemplate(project2));
$('#insert-projects').append(handleBarsTemplate(project3));
