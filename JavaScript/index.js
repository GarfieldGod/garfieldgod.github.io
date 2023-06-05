function viewavatar(){
    document.getElementById("avatarviewer").style.display = 'block';
}
function ESCviewavatar(){
    document.getElementById("avatarviewer").style.display = 'none';
}
function CoverBe(){
    /* document.getElementById("cover").style.height = 0 + 'px'; */
    document.getElementById("cover").className = "cover";
    /*document.getElementById("cover").style.height = 430 + "px";*/
    document.getElementById("contentbackground").style.display = 'block';
    document.getElementById("thefooter").style.display = 'block';
    document.body.scrollTop=document.documentElement.scrollTop=430;
}