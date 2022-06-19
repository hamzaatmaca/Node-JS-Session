//data variable text color
let data = document.getElementsByClassName("loginRegisterHeaderText");
if (data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].innerText == "Login in Here") {
      data[i].style.color = "green";
    } else if (data[i].innerText == "Sign in Here") {
      data[i].style.color = "green";
    } else if (data[i].innerText == "User Has Been Created") {
      data[i].style.color = "blue";
    }
  }
}
