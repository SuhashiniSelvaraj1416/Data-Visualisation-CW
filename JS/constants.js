const country_australia = ["Fiji","Kiribati","New zealand","Tonga","Tokelau"];
const country_africa = ["Mauritius","Morocco","South Africa","Tanzania","Uganda"];
const country_europe = ["France","Germany","Italy","Spain","United Kingdom"];
const country_asia = ["China","India","Japan","Malaysia","Singapore"];
const country_antartica = ["","","","",""];
const country_north_america = ["Bermuda","Canada","Greenland","Mexico","United States"];
const country_south_america = ["Argentina","Brazil","Colombia","Paraguay","Peru"];
var country_list=[];
var selected_continent="";
var selectedCountry = []
const csv_bar_plot="https://raw.githubusercontent.com/SuhashiniSelvaraj1416/Data-Visualisation-CW/main/Continent_countries%20total%20cases.csv";
function toBarCharts(){
    document.body.scrollTop =window.innerHeight;
    document.documentElement.scrollTop=650+window.innerHeight;
}
function showPopup() {
    var popup = document.createElement("div")
  
  
  popup.innerHTML = "This is a pop-up box!";
  
  
  popup.style.position = "absolute";
  popup.style.backgroundColor = "white";
  popup.style.padding = "10px";
  popup.style.border = "1px solid black";
  
  
  var button = document.getElementsByTagName("button")[0];
  popup.style.left = button.offsetLeft + "px";
  popup.style.top = button.offsetTop + button.offsetHeight + "px";
  
  
  document.body.appendChild(popup);
  }