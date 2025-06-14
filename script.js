
let data, info;

async function init(){
  let link = "https://data.cityofnewyork.us/resource/9hyh-zkx9.json?$limit=300";
  info = await fetch(link);
  data = await info.json();
  console.log(data);
}

function agencyByBorough(){

	let  b = 0,  q = 0,  m = 0,  br = 0,  st = 0;
  

	for(let i = 0; i < data.length; i++){
		let agency = data[i];
		if(agency.borough == "Brooklyn"){
		  b++;
		}else if(agency.borough == "Queens"){
		  q++;
		}else if(agency.borough == "Manhattan"){
		  m++;
		}else if(agency.borough == "Bronx"){
		  br++;
		}else if(agency.borough== "Staten Island"){
		  st++;
		}
	  }	


let chartData = [
    ["Brooklyn",b],
    ["Queens",q],
    ["Manhattan",m],
    ["Bronx",br],
    ["Staten Island",st]
  ];
  

  let chartType = document.getElementById("chartType").value;

  
  
    displayChart(chartData,"chart",chartType);
}

function agencydescriptions(){
	let g=0, j=0, a=0, c=0, h=0;
  
	for(let i = 0; i < data.length; i++){
		let family = data[i];
		if(family.agency_name == "Good Shepherd Services"){
		  g++;
		}else if(family.agency_name == "Arab-American Family Support Center"){
		  j++;
		}else if(family.agency_name == "Astor Home for Children"){
		  a++;
		}else if(family.agency_name == "Jewish Child Care Association"){
		  c++;
		}else if(family.agency_name == "Harlem Dowling Westside"){
		  h++;
		}
	  }	


let chartData = [
    ["Good Shepherd Services",g],
    ["Arab-American Family Support Center",j],
    ["Astor Home for Children",a],
    ["Jewish Child Care Association",c],
    ["Harlem Dowling Westside",h]
  ];
  

  let chartType = document.getElementById("chartType").value;

  
  
    displayChart(chartData,"chart",chartType);
}
	
	


function displayChart( data, id, type ){
  let chart = c3.generate({
    bindto: '#' + id,
    data: {
      columns: data,
      type:type
    }
  });
}




