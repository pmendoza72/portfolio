'use strict'

var projects = [
  {
    projectName: 'Salmon Cookies',
    projectUrl: 'https://pmendoza72.github.io/cookie-stand/',
    projectImageUrl: 'img/salmon-cookie-tn.png',
    projectDescription: 'HTML table dynamically populated using JavaScript including form that adds to table.'
  },
  {
    projectName: 'BlackJack',
    projectUrl: 'https://pmendoza72.github.io/201-Project/',
    projectImageUrl: 'img/blackjack-tn.png',
    projectDescription: 'BlackJack card game using HTML, CSS and JavaScript only.'
  },
  {
    projectName: 'Project 3',
    projectUrl: '#',
    projectImageUrl: 'http://placehold.it/300x300',
    projectDescription: 'Project coming soon.'
  },
];

  var projectSource = $('#project-template').html();
  var handleBarsTemplate = Handlebars.compile(projectSource);

  for (var i in projects) {
      var showProjects = handleBarsTemplate(projects[i]);
      $('#insert-projects').append(showProjects);
  };
