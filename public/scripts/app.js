// 'use strict'

// var projectSource = $('#project-template').html();
// var handleBarsTemplate = Handlebars.compile(projectSource);
//
// // Pass our data to the template
// var theCompiledHtml = handleBarsTemplate(context);
//
// // Add the compiled html to the page
// $('#insert-projects').append(theCompiledHtml);


$(() => {
  $.ajax({
    url: './data/projects.json'
  }).done(function(data) {
    console.log('request done: ' + Date.now());
    data.forEach((note) => {
      $('#insert-projects').append(`<article class="format-article"><a href="${note.projectUrl}"><h3>${note.projectName}</h3>
        <img src="${note.projectImageUrl}" alt="${note.projectName}"></a>
        <p>${note.projectDescription}</p>
      </article>`);
    });
  });
  console.log('request started: ' + Date.now());
});
