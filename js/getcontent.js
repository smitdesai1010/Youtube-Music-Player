import { generateframes } from "./generatecontent.js";

function start(input){

    var key2 = prompt("Enter Key")
    var key = 'AIzaSyClCgBnyLGw7'+key2
    var api = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' + 
               key + '&type=video&maxResults=10&q=' + input;

    fetchapi(api)
}


function fetchapi(api){
    fetch(api)
    .then( response => response.json() )
    .then( data => generateframes(data.items) )
    .catch( e => console.log('Error'+e))
}


export {start}