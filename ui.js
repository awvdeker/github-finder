//DOM opbouwen, userinterface
 function buildProfile(data){
var profile= document.getElementById("profile");
profile.innerHTML=



`<div class="  card card-body mb-3">
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
    <li class="list-group-item">Company:${data.company}</li>
    <li class="list-group-item">Website/Blog: <a href="${data.blog}">${data.blog} </a></li>
    <li class="list-group-item">Location: ${data.location}</li>
    <li class="list-group-item">Member Since: ${data.created_at}</li>
  </ul>
</div>
</div>
</div>`
 } 


// var divCard= document.createElement("div");
// divCard.classList.add('card','card-body','mb-3');

// var divRow= document.createElement("div");
// divRow.classList.add('row');

// var divCol3= document.createElement("div");
// divCol3.classList.add('col-md-3');

// var avatar= document.createElement("IMG");
// avatar.classList.add('img-fluid', 'mb-2');
// avatar.src="${user.avatar_url}";

// var link= document.createElement("a")
// link= "${user.html_url}";
// link.classList.add('btn', 'btn-primary','btn-block');

// var divCol9= document.createElement("div");
// divCol9.classList.add('col-md-9');

// var span1= document.createElement("span");
// span1.classList.add('badge','badge-primary');
// var span2= document.createElement("span");
// span2.classList.add('badge','badge-primary');
// var span3= document.createElement("span");
// span3.classList.add('badge','badge-primary');