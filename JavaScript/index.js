function viewavatar(){
    document.getElementById("avatarviewer").style.display = 'block';
}
function ESCviewavatar(){
    document.getElementById("avatarviewer").style.display = 'none';
}
function CoverBe(){
    if(document.getElementById("cover").className == "entercover")
    {
        document.getElementById("cover").className = "cover";
        document.getElementById("contentbackground").style.display = 'block';
        document.getElementById("thefooter").style.display = 'block';
        document.getElementById("navigationBlockB").style.marginLeft = 0 + '%';
        document.getElementById("TheNavigation").style.marginRight = 0 + 'px';
        document.body.scrollTop=document.documentElement.scrollTop=430; 
    }
    else
    {
        document.getElementById("cover").className = "entercover";
        document.getElementById("contentbackground").style.display = 'none';
        document.getElementById("thefooter").style.display = 'none';
        document.getElementById("navigationBlockB").style.marginLeft = 20 + '%';
        document.getElementById("TheNavigation").style.marginRight = -300 + '%';
        document.body.scrollTop=document.documentElement.scrollTop=0; 
    }
}