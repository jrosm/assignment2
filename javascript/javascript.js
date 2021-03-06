// Change the color of an element using .style
const turnRed = document.querySelector(".pColor");
turnRed.style.color = "#ca265a";

// Change the font size of an element using .setProperty
const changeSize = document.querySelector(".fontSize");
changeSize.style.setProperty('font-size', '65px')

// Add a class to an HTML tag with .setAttribute, and change some property with that class
const attributeClass = document.querySelector(".attributeClass");
attributeClass.setAttribute('name', 'firstParagraph');

// Create an empty paragraph and add some content with Javascript
const addText = document.querySelector(".addText");
addText.innerHTML = "I used to be empty, but now I contain text! :)";

// Create an array and display the content on the page
const myArray = [
    "item1 ",
    "item2 ",
    "item3 ",
    "item4 ",
    "item5 "
]

const displayArray = document.querySelector(".displayArray");
displayArray.innerHTML = myArray;

// Create a button and add an event listener to change the background of a section or div.
const myButton = document.querySelector('.myButton');
const bodybg = document.querySelector('.bodybg');

myButton.addEventListener('click', function() {
    bodybg.style.background = "#000";

   myButton.classList.toggle('clicked')
});

// Select one of the 3 elements implemented in class and integrate it into your page. (Color Changer)
const colorChanger = document.querySelector('.colorChanger');
const colorWrapper = document.querySelector('.colorWrapper');
colorChanger.addEventListener('click', () => {
    colorWrapper.style.background = colors();
});

function colors() {
    let colorArray = [];
    for(let i = 0; i < 3; i++){
        colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
    }

    let color = colorArray
    .map(x => x.toString(16))
    .join('');

    return `#${color}`;
}

// Replace the HTML content on a paragraph.
$("#add").html("<p>I replaced the previous text!</p>");

// Create a button and add an event that adds some content at the beginning of a paragraph.
const textButton = document.querySelector(".textButton");
textButton.addEventListener('click', function() {
    $("#add2").prepend("I am sentence 0. ");
});

// Leaflet 
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery ?? <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);