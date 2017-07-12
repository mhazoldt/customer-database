console.log(customers["results"]);



function placeOnGrid(customer){
  let nextGridItem = document.createElement("li");
  let nextGridContentDiv = document.createElement("div");


  let contentDivHtml = `

  <img src=${customer['picture']['large']} class='gridImage'/>
  <h3>${customer['name']['first']} ${customer['name']['last']}</h3>
  <div></div>
  <p class='customerEmail'>${customer['email']}</p>
  <p>${customer['location']['street']}</p>
  <p>${customer['location']['city']}, ${customer['location']['state']} ${customer['location']['postcode']}</p>
  <p>${customer['phone']}</p>
  <p class='customerIdValue'>${customer['id']['value']}</p>

  `;

  nextGridContentDiv.innerHTML = contentDivHtml;



  nextGridItem.appendChild(nextGridContentDiv);
  document.getElementById("gridList").appendChild(nextGridItem);

}


customers["results"].forEach(placeOnGrid);
