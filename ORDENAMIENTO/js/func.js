numeros = new Array(); // arreglo
var i;
for (i = 0; i < 15; i++) {
  numeros[i]=Math.random()*100;// llenado random de arreglo
 } 
 /////////////////////////////////////////////// ordenamiento burbuja ////////////////////////////////////
function sort1()
{
  backbutton();
  var i;
var wi=0;
function bubble(arr) {
  for (var i = 0; i < arr.length; i++) {
   for(var j=0; j < arr.length - 1; j++){
    if (arr[j] > arr[j + 1]) {
      var a = arr[j]
      var b = arr[j + 1]
      arr[j] = b
      arr[j + 1] = a
     }
     
   }
  }
  return arr;
}

document.write("<span>NUMEROS DESORDENADOS</span>" + "<br>" + "<br>");
var i;

for (i = 0; i < numeros.length; i++) {
    document.write("<div style="+'"'+"width:" +(numeros[i])+"%; height:20px;  "+'"'+"> "+ Math.trunc(numeros[i]) +"</div>");
  }
numeros = bubble(numeros);
print();

}
/////////////////////////////// ordenamiento de quicksort //////////////////////////////////////////////////
function sort2()
{
  backbutton();
  function swap(numeros, leftIndex, rightIndex){
    var temp = numeros[leftIndex];
    numeros[leftIndex] = numeros[rightIndex];
    numeros[rightIndex] = temp;
}
function partition(numeros, left, right) {
    var pivot   = numeros[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (numeros[i] < pivot) {
            i++;
        }
        while (numeros[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(numeros, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(numeros, left, right) {
    var index;
    if (numeros.length > 1) {
        index = partition(numeros, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(numeros, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(numeros, index, right);
        }
    }
}
quickSort(numeros,0,14);
print();
}
////////////////////////////////////////////////////////   ordenamiento insertion sort ///////////////////////////////////////////////
function sort3()
{
  backbutton();
  function insertionSort (numeros) {
    for (var i = 0; i < numeros.length; i++) {
      let value = numeros[i];
      // store the current item value so it can be placed right
      for (var j = i - 1; j > -1 && numeros[j] > value; j--) {
        // loop through the numeros in the sorted array (the numeros from the current to the beginning)
        // copy each item to the next one
        numeros[j + 1] = numeros[j];
      }
      // the last item we've reached should now hold the value of the currently sorted item
      numeros[j + 1] = value;
    }
  }
  insertionSort(numeros);
  print();
  
}
function print()
{
  document.write("<br>"+"<span>NUMEROS ORDENADOS</span>" + "<br>" + "<br>");
  var i;

  for (i = 0; i < numeros.length; i++) {
  document.write("<div style="+'"'+"width:" +(numeros[i])+"%; height:20px;  "+'"'+"> "+ Math.trunc(numeros[i]) +"</div>");
  }
  document.write("<br>"+"<span>MIN</span>" + "<br>" + "<br>");
  document.write("<br>"+"<p>"+ Math.trunc(numeros[0]) +"</p>" + "<br>" + "<br>");
  document.write("<br>"+"<span>MAX</span>" + "<br>" + "<br>");
  document.write("<br>"+"<p>"+Math.trunc(numeros[14])+"</p>" + "<br>" + "<br>");
  document.write("<br>"+"<footer>Creado Por Gustavo Perez </footer>");
  document.write("<style>body { background: #026988; font-family: 'Courier New', Courier, monospace; color: white; } div { padding-top: 5px; background: #000; margin: 10px; color: white; text-align: center; align-content: center; border: solid white 3px; border-radius: 25px;} .menu { width: 200px; height: 50px; margin-top: 25px; margin-left: 250px; margin-bottom: 25px; background: #ffff; color: #000; font-weight: 800; font-family: 'Courier New', Courier, monospace; } .imback { width: 200px; height: 50px; margin-top: 25px; margin-bottom: 25px; background: #ffff; color: #000; font-weight: 800; font-family: 'Courier New', Courier, monospace; } p { margin: auto; text-align: center; font-family: 'Courier New', Courier, monospace; font-size: 25px; } span { margin: auto; padding: 20px; display: block; text-align: center; font-family: 'Courier New', Courier, monospace; font-size: 25px; background: rgb(250, 250, 250); color: #000; border-radius: 25px; } footer{ margin: auto; padding: 20px; display: block; text-align: center; font-family: 'Courier New', Courier, monospace; font-size: 25px; background: rgb(70, 2, 77); color: #000; font-family: 'Courier New', Courier, monospace; color: #ffff; }</style>");
}
function backbutton()
{
  document.write(" <input class="+'"'+"imback"+'"'+" type="+'"'+"button"+'"'+" value="+'"'+"Regresar"+'"'+" onclick="+'"'+"history.go(0)"+'"'+">");
}
