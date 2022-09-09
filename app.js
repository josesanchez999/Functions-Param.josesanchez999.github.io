const name = "Functions & Parameters"

function toUpper(text){
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

toUpper(name);

let obj = {
    name: 'Jose',
    age: 20,
    education: 'Digital Media'
  };
  
  console.log(obj)
  
  obj.college = 'NVC';
  console.log('My Information!');
  console.log(obj);

  let btn = document.createElement("button");
btn.innerHTML = "Click Me";
btn.onclick = function () {
  alert("Welcome!");
};
document.body.appendChild(btn);