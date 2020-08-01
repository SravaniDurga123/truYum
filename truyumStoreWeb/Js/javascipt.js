
function addtocart(name,freedelivery,price,category){
    console.log(name);
    console.log("dasd");

    var table=document.getElementById("mytable");
    table.innerHTML='ffdv';
    let row=document.createElement('tr');
    let col1=document.createElement('td');
    let col2=document.createElement('td');
    let col3=document.createElement('td');
    let col4=document.createElement('td');
      col1.textContent=name;
       row.appendChild(col1);
       col2.textContent=freedelivery;
       row.appendChild(col2);
       col3.textContent=price;
       row.appendChild(col3);
       col4.textContent=category;
       row.appendChild(col4);
       document.querySelector("mytable").appendChild(row);
    // var cell1=table.insertCell(0);
    // var cell2=table.insertCell(1);
    // var cell3=table.insertCell(2);
    // var cell4=table.insertCell(3);
    // cell1.innerHTML='name';
    // cell2.innerHTML=freedelivery;
    // cell3.innerHTML=price;
    // cell4.innerHTML=category;
   
}