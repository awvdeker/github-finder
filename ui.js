function buildProfile(data) {
var profile = document.getElementById('profile');
profile.innerHTML=`
  <div class="card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
      <img class="img-fluid mb-2" src="${data.avatar_url}">
      <a href="${data.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
    </div>
    <div class="col-md-9">
      <span class="badge badge-primary">Repo public: ${data.repos}</span>
      <span class="badge badge-success">Followers: ${data.followers}</span>
      <span class="badge badge-info">Following: ${data.following}</span>
      <br><br>
      <ul class="list-group">
        <li class="list-group-item">Company: ${data.company}</li>
        <li class="list-group-item">Website/Blog: <a href="${data.blog}">${data.blog} </a></li>
        <li class="list-group-item">Location: ${data.location}</li>
        <li class="list-group-item">Member Since: ${data.created_at}</li>
      </ul>
    </div>
    </div>
  </div>`
}

/*
var divCard = document.createElement('div');
divCard.classList.add("card","card-body","mb-3");
var divRow = document.createElement('div');
divRow.classList.add("row");
var divColumnFirst = document.createElement('div');
divColumnFirst.classList.add("col-md-3");
var avatar = document.createElement('img');
avatar.classList.add("img-fluid","mb-2");
avatar.src = data.avatar_url;
divColumnFirst.appendChild(avatar);
var link = document.createElement('a');
link.href = data.html_url;
link.target = "_blank";
link.classList.add("btn","btn-primary","btn-block");
link.innerHTML = "View Profile";
divColumnFirst.appendChild(link);
divRow.appendChild(divColumnFirst);
var divColumnSecond = document.createElement('div');
divColumnSecond.classList.add("col-md-9");
*/
