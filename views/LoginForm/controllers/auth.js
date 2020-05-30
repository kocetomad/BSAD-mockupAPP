console.log("!!");
function _login() {
  console.log("a");
  users = [
    "Peter_Williams",
    "Jane_Fenton",
    "Juan_Reyes",
    "Michelle_Ford",
    "David_Davison",
    "Moira_Lewis",
  ];

  passwords = [
    "end.user",
    "service.desk",
    "major.incidents.manager",
    "resolver",
    "queue.manager",
    "technician",
  ];

  roles = [
    "EndUser",
    "ServiceDesk",
    "MajorIncidentsManager",
    "Resolver",
    "QueueManager",
    "Technician",
  ];
  usr = document.getElementById("loginFormUsername");
  pas = document.getElementById("loginFormPassword");

  if (
    searchStringInArray(usr.value, users) ==
    searchStringInArray(pas.value, passwords)
  ) {
    if (roles[searchStringInArray(pas.value, passwords)]) {
      location.href =
        "../" +
        roles[searchStringInArray(pas.value, passwords)] +
        "/index.html";
    }
  }
}

function searchStringInArray(str, strArray) {
  for (var j = 0; j < strArray.length; j++) {
    if (strArray[j].localeCompare(str) == 0) {
      console.log(j);
      return j;
    }
  }
  return -1;
}
