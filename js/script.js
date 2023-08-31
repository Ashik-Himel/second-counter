const resultDisplayer = document.getElementById("result-displayer");
const allBtn = document.getElementsByClassName("btn");

const disableBtn = (param) => {
  for (let btn of allBtn) {
    if (param != btn) btn.removeAttribute("disabled");
    else btn.setAttribute("disabled", "true");
  }
};

allBtn[0].addEventListener("click", function () {
  let currentVal = +resultDisplayer.innerText;
  const intervalId =  setInterval(() => {
    currentVal++;
    resultDisplayer.innerText = currentVal;
  }, 1000);
  disableBtn(this);

  allBtn[1].addEventListener("click", function () {
    clearInterval(intervalId);
    disableBtn(this);
  });

  allBtn[2].addEventListener("click", function () {
    clearInterval(intervalId);
    resultDisplayer.innerText = 0;
    disableBtn(this);
  });
  
});