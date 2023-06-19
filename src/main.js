//classes use "." and id's use "#"
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    //alert("Please enter fields");
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    //Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    //create new list item
    const li = document.createElement("li");
    //Add text node with input values
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    //Add HTML
    userList.appendChild(li);

    //Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
