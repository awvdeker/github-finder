/* becode/javascript
 *
 *
 * coded by kevin@BeCode
 * started at 7/05/2019
 */
//Simple startup code
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e)=>{
  //get the value of the input text and have fun
  //console.log(e.target.value);
  profileCall(e.target.value).then( data => {
    //console.log(data);
    buildProfile(data);
  })
  repoCall(e.target.value).then( repoData =>{
    //console.log(repoData);
    buildRepos(repoData);
  })
});
