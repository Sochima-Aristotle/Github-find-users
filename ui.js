class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // display profile in ui
  showProfile(user) {
    this.profile.innerHTML = `
    <div class= "card card-body mb-3">
        <div class = "row">
            <div class = "col-md-3">
                <img class ="img-fluid mb-2" src = "${user.avatar_url}">
                <a href= "${user.html_url}" target ="_blank" class = "btn btn-primary btn-block">View profile</a>
            </div>
            <div class= "col-md-9">
                <span class= "badge badge-primary">Public Repos:${user.public_repos}</span>
                <span class= "badge badge-success">Followers:${user.followers}</span>
                <span class= "badge badge-info">Following:${user.following}</span>
                <br><br><br>
                <ul class= "list-group">
                  <li class = "list-group-item">Company: ${user.company}</li>
                  <li class = "list-group-item">Website/Blog: ${user.blog}</li>
                  <li class = "list-group-item">Location: ${user.location}</li>
                  <li class = "list-group-item">Membership: ${user.created_at}</li>
                </ul>
             </div>
        </div>
    </div>
    <h3 class = "page-heading mb-3">Lastest Repos</h3>
    <div id= "repos"></div>
    `;
  }
  // create showRepos
  showRepos(repos) {
    let output = "";

    repos.forEach((repo) => {
      output += `
      <div class = "card card-body mb-2">
        <div class = "row">
          <div class = "col-md-6">
            <a href = "${repo.html_url}" target = "_blank">${repo.name}</a>
          </div>
          <div class = "col-md-6">
          <span class= "badge badge-primary">Public Stars:${repo.stargazers_count}</span>
                <span class= "badge badge-secondary">Public Watchers:${repo.watcher_count}</span>
                <span class= "badge badge-success">Forks:${repo.forms_count}</span>
          </div>
        </div>
      </div>
      `;
    });
    document.getElementById("repos").innerHTML = output;
  }
  // show Alert of an unexisting
  showAlert(message, className) {
    // remove remainig alert
    this.clearAlert();
    //  create Element
    const div = document.createElement("div");
    // add class
    div.className = className;
    // add Text
    // div.appendChild(document.createTextNode(message));
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector(".searchContainer");
    // get search box
    const searchBox = document.querySelector(".search");
    // insert message
    container.insertBefore(div, searchBox);
    // // SET TIME OUT
    // setTimeout(() => {
    //   this.clearAlert();
    // }, 3000);
    setTimeout(function () {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector("alert");
    if (currentAlert) {
      console.log("i got here");
      currentAlert.remove();
    }
  }
  // clear profile after search
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
