/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');


// Hard coded for the moment
var token = '';

var projects=[];

function HTTPGET(url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    return req.responseText;
}


var getProjects2 = function()
{
  
  var response1 = HTTPGET('https://todoist.com/API/getProjects?token=' + token);
  
    var json1 = JSON.parse(response1);
  
  
  for (var i in json1) {
    projects.push({
      title: json1[i].name,
      subtitle:json1[i].id
    });
      
  }
   
};

var projectsMenu = new UI.Menu({
  sections: [{
    title: 'Current Projects',
    items: projects
  }]
});
getProjects2();
projectsMenu.show();


