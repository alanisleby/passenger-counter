//document.getElementById("count-el").innerText = 5;

let getCountEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

// console.log(saveEl.innerText);

function increment() {
   count = count + 1;
   getCountEl.innerText = count;
}

function save() {
   let countStr = count + " - ";

   saveEl.textContent += countStr;
   getCountEl.innerText = 0;
   count = 0;
   console.log(countStr);

   // aca arriba dice tal cosa : saveEl.innerText = el contenido de la etiqueta p .
   // el contenido de la etiqueta p AHORA es igual a la etiqueta p + countStr (que es igual a coun + " "), asi que saveEl.innerText ahora vale lo mismo mas lo que sea que este en el count y el guioncito, asi que si vuelvo a apretar save todo el valor actual de saveEl.innerText sera eso mas lo que este en el count mas el guioncito.
}
