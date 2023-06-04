let box=document.getElementById("result");
let submit=document.getElementById("submit");
function clickButton() {
      var sreach_countries = document.getElementById("Input").value.split(' ').join('+');
      var request = new XMLHttpRequest();
      request.addEventListener('load',getData);
      request.open('GET', 'https://restcountries.com/v3.1/name/'+sreach_countries);
      request.send();
}
function getData() {
    var data = JSON.parse(this.responseText);  
    show(data)
}
function show(data){
    data.forEach((item)=>{
    result.innerHTML=
    `<p>name: ${item.altSpellings}</p>
     <p>capital: ${item.capital}</p>
     <p>area: ${item.area}</p>
     <p>border: ${item.borders}</p>
     <p>population: ${item.population}</p>
     <p>region: ${item.region}</p>
    `
    })
}
submit.addEventListener('click',clickButton)




