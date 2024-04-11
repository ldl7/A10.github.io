function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  var x = cname + "=" + cvalue + ";" + expires + ";path=/";
  document.cookie = x
  console.log(document.cookie)
  console.log(x)
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  let enteredName = prompt("Please enter your name:", "");
  if (enteredName != "" && enteredName != null) {
    setCookie("username", enteredName, 365); // Store the entered name
    if (enteredName === user) {
      document.getElementById("entry").innerHTML = "Welcome again " + enteredName;
    } else {
      document.getElementById("entry").innerHTML = "Welcome " + enteredName;
    }
  }
}
