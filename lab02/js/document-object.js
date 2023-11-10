var msg = '<p><br>page title: </br>' + document.title + '<br />';
msg += '<br>page address: </b>' + document.URL + '<br />';
msg += '<br>last modified: </b>' + document.lastModified + '</p>';
var el = document.getElementById('footer');
el.innerHTML = msg;