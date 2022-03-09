const myEmail = () => {
  const inputValue = document.getElementById("inputValue");
  const getValue = inputValue.value;
  const expression =
    /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(?:gmail|GMAIL|mail)([\.])(?:com|COM)/g;
  console.log("click");
  if (expression.test(getValue)) {
    document.getElementById("output").innerHTML = " your email is valid";
  } else {
    document.getElementById("output").innerHTML = "your email is not valid";
  }
};
