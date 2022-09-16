// document.getElementById("task").innerHTML = 'Drishya as subject -Task - Make a table (3 row and 3 col)  having add and delete button - you have to give numbers in rows and columns and you have to find the sum of all rows and columns';

document.getElementById("task").innerHTML = 'Drishya'
// let box = document.getElementById("container");
let sum = 0;

for (var rowIndex = 0; rowIndex < 3; rowIndex++) {
  var tr = document.createElement("tr");
  let num = 0;
  var content;
   var val = false;
  for (var colIndex = 0; colIndex < 3; colIndex++) {
    var col = document.createElement("td");
    
    let btn = document.getElementById('reset');
   
    btn.onclick = function(){set(val)}
   
    function set (val) {
      val = true;
      console.log('inside func val :  ' + val)
    }
    console.log('val :  ' + val)
    !val ? ( content = Math.floor((Math.random() * 100) + 1) ) :(content = 0);
    // content = Math.floor(Math.random() * 100) + 1
    num = num + content;
    // console.log('col'  + num)
    col.innerHTML = content;
    tr.appendChild(col);
   
  }
  
  console.log("row" + num);
  // console.log("smu" + sum + num);
  
  sum = sum + num
  console.log('sum '  + sum)
  // console.log("smu" + sum + num);
  box.appendChild(tr);
  
}

console.log("sum " + sum);


const total = () => {
 let txt = document.querySelector('h3')
 let sumText = document.getElementById('sum').appendChild(txt)
 sumText.innerText = sum
  // document.getElementById('sum').innerText = sum
  
}


