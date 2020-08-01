var name1,price1,freedelivery1,category1;
function addtocart(name,freedelivery,price,category){
    console.log(name);
    console.log("dasd");
    var favoritemovie = "Shrek";
sessionStorage.setItem("name",name);
sessionStorage.setItem("freedelivery",freedelivery);
sessionStorage.setItem("price",price);
sessionStorage.setItem("category",category);
}


function addtocart1(){
  var table=document.getElementById("mytable");
   var array= {
     name:sessionStorage.getItem("name"),
     freedelivery:sessionStorage.getItem("freedelivery"),
     category:sessionStorage.getItem("category"),
     price:sessionStorage.getItem("price")
   };
   var row=table.insertRow(-1);
   var cell1=row.insertCell(0);
  var cell2=row.insertCell(1);
  var cell3=row.insertCell(2);
  var cell4=row.insertCell(3);
  var cell5=row.insertCell(4);
  var cell6=row.insertCell(5);
   for (){
      
   }
//   var row=table.insertRow(-1);
//   var cell1=row.insertCell(0);
//   var cell2=row.insertCell(1);
//   var cell3=row.insertCell(2);
//   var cell4=row.insertCell(3);
//   var cell5=row.insertCell(4);
//   var cell6=row.insertCell(5);
//   cell1.innerHTML=sessionStorage.getItem("name");
//   cell2.innerHTML=" ";
//   cell3.innerHTML=sessionStorage.getItem("freedelivery");
//   cell4.innerHTML=sessionStorage.getItem("price");
//   cell5.innerHTML=sessionStorage.getItem("category");
//  cell6.innerHTML="<a >Deletefromcart</a>";
}