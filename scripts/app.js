'use strict'

var projectSource = $('#project-template').html();
var handleBarsTemplate = Handlebars.compile(projectSource);

// Pass our data to the template
var theCompiledHtml = handleBarsTemplate(context);

// Add the compiled html to the page
$('#insert-projects').append(theCompiledHtml);
