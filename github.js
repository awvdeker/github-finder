async function profileCall(userName){
  let result = await fetch(`https://api.github.com/users/${userName}?client_id=${clientId}&client_secret=${clientSecret}`);
  let data = await result.json();

  return data;
}

var clientId = "373e25d1625298fcc5f5";
var clientSecret = "24b6a5971383c1ccb3d6ec08a2baa38bcb22f7c4";

// user information => https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}
// user repo => https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}
