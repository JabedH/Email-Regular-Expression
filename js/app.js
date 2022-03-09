const myEmail = () => {
  const inputValue = document.getElementById("inputValue");
  const getValue = inputValue.value;
  inputValue.value = "";
  const expression =
    /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(?:gmail|GMAIL|mail)([\.])(?:com|COM)/g;
  console.log("click");
  if (expression.test(getValue)) {
    document.getElementById("output").innerHTML = " your email is valid";
    document.getElementById("output").style.color = "green";
  } else {
    document.getElementById("output").innerHTML = "please input valid email ";
    document.getElementById("output").style.color = "red";
  }
};
