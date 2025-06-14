//https://data.cityofnewyork.us/resource/9hyh-zkx9.json?$limit=100

let data, info, leftPanel;

  async function init(){
  let link = "https://data.cityofnewyork.us/resource/9hyh-zkx9.json?$limit=100";
  //Challenge 2: Get the data using the link and analyze it
  info = await fetch(link);
  data = await info.json();
  //console.log(data);
  leftPanel = document.getElementById("leftPanel");
  let build = "";
  //Challenge 3: Build info cards with button to show map
  for(let i = 0; i < data.length; i++){
    let center = data[i];
let lat = center.latitude;
let lon = center.longitude;
    build += `<div class="fitted card">`;
    build += `     <h3>${center.borough}</h3>`;    
build += `   <hr>`;
build += `     <p>Location: ${center.program_address_1}</p>`;
build += `     <h4>${center.program_zip}</h4>`;
build += `     <h4>${center.agency_name}</h4>`;
// button to show Map
if(lat && lon){
        build += `<input type='button' value='Map' onclick="showMap( ${lat},${lon} )">`;
     }
     build += `</div>`;
   }  
   //Challenge 4: Display cards in left panel
   leftPanel.innerHTML = build;
}

//Challenge 5: Create a function filterByBoro() to retrieve the borough from the user via the text input, filter the data using filter(), and generate cards for this subset of the data.

function filterByBoro(){
 let boro = document.getElementById("borough").value;
  let build = "";
  
  for(let i = 0; i < data.length; i++){
    let complaint = data[i];
if (complaint.borough == boro){
build += `<div class="fitted card">`;
build += `     <h3>${complaint.borough}</h3>`;    
build += `   <hr>`;
build += `     <p>Location: ${complaint.program_address_1}</p>`;
build += `     <h4>${complaint.program_zip}</h4>`;
build += `     <h4>${complaint.agency_name}</h4>`;
// button to show Map
if(complaint.latitude  && complaint.longitude){
build += `<input type='button' value='Map' onclick="showMap( ${complaint.latitude},${complaint.longitude} )">`;
}
build += `</div>`;
}
  }
  //Display results
  leftPanel.innerHTML = build; 
}

function filterBycenter(){
 let centername = document.getElementById("Bigcenter").value;
  let build = "";
  
  for(let i = 0; i < data.length; i++){
    let Bigback = data[i];
if (Bigback.agency_name == centername){
build += `<div class="fitted card">`;
build += `     <h3>${Bigback.borough}</h3>`;    
build += `   <hr>`;
build += `     <p>Location: ${Bigback.program_address_1}</p>`;
build += `     <h4>${Bigback.program_zip}</h4>`;
build += `     <h4>${Bigback.agency_name}</h4>`;
// button to show Map
if(Bigback.latitude  && Bigback.longitude){
build += `<input type='button' value='Map' onclick="showMap( ${Bigback.latitude},${Bigback.longitude} )">`;
}
build += `</div>`;
}
  }
  //Display results
  leftPanel.innerHTML = build; 
}

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
