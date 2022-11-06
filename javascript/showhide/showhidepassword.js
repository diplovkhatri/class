let pwdcheck = true;
function showhide() {
  if (pwdcheck) {
    document.getElementById("pwd").setAttribute("type", "text");
    document.getElementById("btn").innerHTML = "Hide";

    pwdcheck = false;
  } else {
    document.getElementById("pwd").setAttribute("type", "password");
    document.getElementById("btn").innerHTML = "show";
    pwdcheck = true;
  }
}
