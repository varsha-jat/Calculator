const input = document.querySelector("#input");
const buttons = document.querySelector("#buttons");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");;
input.style.fontSize= '2rem';
input.style.padding= '0 0.5rem'
buttons.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    const button = event.target;
    const action = button.textContent;

    if (action === "C") {
      input.textContent = "";
    } else if (action === "=") {
      const result = eval(input.textContent);
      input.textContent = result;
    }else if (action === "dc") {
        input.textContent = input.textContent.substring(0, input.textContent.length - 1);
      }
          else {
      input.textContent += action;
    }
  }
});