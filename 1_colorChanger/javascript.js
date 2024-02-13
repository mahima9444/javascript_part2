const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
// const buttons = document.getElementById("lavender") 

// buttons.addEventListener('click', function(e){
//  body.style.backgroundColor = "lavender";
// })
buttons.forEach(function (buttons) {
  console.log(buttons);
  buttons.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "lavender") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "plum") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "lightgreen") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "lightpink") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
