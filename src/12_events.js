const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log(e);
  document.querySelector("#my-form").style.background = "#ccc";
  //document.querySelector("body").classList.add("bg-dark");
  document.querySelector(".items").lastElementChild.innerHTML =
    "<h1>Hello</h1>";
});
