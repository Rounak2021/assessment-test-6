  // Declaring the variable and storing the value
  
  var newURL = "http://universities.hipolabs.com/search?";
  var table = document.getElementById("table");

  
// Calling the fetch and storing the response by creating table row and ultiple table datas.
  fetch(newURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
           tr = document.createElement("tr");
           td1 = document.createElement("td");
           td2 = document.createElement("td");
          
          //  Replacing the table row and table data with the university name, their domains and country.
          tr.innerText = data[i].name;
          td1.innerText = data[i].domains;
          td2.innerText = data[i].country;
        
          
          // Appending table row and their child
          tr.append(td1, td2);         
          table.appendChild(tr);
          
  
      }
    })
    // If the API is not fetching data properly, then this is the catch statement to declare error in loading the API.
    .catch((err) => console.log("API is failed. Please check the issue and try again."));
  
// ---------------------------------------------------------------

// Function for the search icon.
const searchFun = () => {
  let filter = document.getElementById('myInput').value.toUpperCase();
  let myTable = document.getElementById('table');
  let tr = myTable.getElementsByTagName('tr');

  for(var i=0; i<tr.length; i++){
    let td = tr[i].getElementsByTagName('td')[0];

    if(td){
      let textvalue = td.textContent || td.innerHTML;
      if(textvalue.toUpperCase().indexOf(filter)>-1){
          tr[i].style.display = "";
      }else{
        tr[i].style.display = "none";
      }
    }
  }
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// END OF CODE----------------------------------------------------