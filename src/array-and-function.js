const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(e => text += "<li>" + e + "</li>");
text += "</ul>";

console.log(text)

document.getElementById("aa").innerHTML = text;


//<ul><li>Banana</li><li>Orange</li><li>Apple</li><li>Mango</li></ul>