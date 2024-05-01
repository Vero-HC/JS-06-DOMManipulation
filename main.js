const div1 = document.getElementById("div-1");
console.log(div1);

const divColletion = document.getElementsByTagName ("div");
console.log(divColletion);

const p = document.getElementById("p1");
const userNameInputs = document.getElementsByName("userName");
const userNameInput = userNameInputs[0];

console.log(p , userNameInput);

userNameInput.addEventListener ("input", (event) => {
    console.log(event.target.value);
    p.innerText = event.target.value;
});
