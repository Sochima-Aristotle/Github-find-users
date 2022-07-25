const github = new Github();
const ui = new UI();

const username = document.getElementById("username");

username.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //    show alert
        ui.showAlert("User not yet in existance", "alert alert-danger");
      } else {
        // show profile
        console.log("repo", data.repos);
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //   clear profile
    ui.clearProfile();
  }
});
