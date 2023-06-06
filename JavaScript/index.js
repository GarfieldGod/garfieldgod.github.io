function viewavatar(){
    if(document.getElementById("avatar").className == "avatar")
    {
        document.getElementById("cover").className = "blockcover";
        document.getElementById("contentbackground").style.display = 'none';
        document.getElementById("thefooter").style.display = 'none';
        document.getElementById("navigationBlockB").style.marginLeft = 20 + '%';
        document.getElementById("TheNavigation").style.marginRight = -300 + '%';
        document.body.scrollTop=document.documentElement.scrollTop=0; 
        document.getElementById("avatarviewer").style.display = 'block';
        setTimeout("animeteavatarvieweron1()",700);
    }
}
function animeteavatarvieweron1(){
    document.getElementById("cover").className = "nonecover";
    setTimeout("animeteavatarvieweron2()",500);

}
function animeteavatarvieweron2(){
    document.getElementById("MiniHeader").style.height = 0;
    document.getElementById("avatarviewer").style.height = 100 + '%';
    document.getElementById("avatarviewerimg").style.height = 80 + 'vh';
}

function ESCviewavatar(){
    document.getElementById("avatarviewerimg").style.height = 0 + 'vh';
    document.getElementById("avatarviewer").style.height = 0 + '%';
    document.getElementById("MiniHeader").style.height = 220+ 'px';
    setTimeout("animeteavatarvieweroff1()",700);
}
function animeteavatarvieweroff1(){
    document.getElementById("cover").className = "blockcover";
    setTimeout("animeteavatarvieweroff2()",500);
}
function animeteavatarvieweroff2(){
    document.getElementById("avatarviewer").style.display = 'none';
    document.getElementById("TheNavigation").style.marginRight = 0 + 'px';
    document.getElementById("navigationBlockB").style.marginLeft = 0 + '%';
    document.getElementById("thefooter").style.display = 'block';
    document.getElementById("contentbackground").style.display = 'block';
    document.body.scrollTop=document.documentElement.scrollTop=430;
    document.getElementById("cover").className = "cover";
}







function CoverBe(){
    if(document.getElementById("cover").className == "entercover")
    {
        document.getElementById("avatar").className = "avatar";
        document.getElementById("cover").className = "cover";
        document.getElementById("contentbackground").style.display = 'block';
        document.getElementById("thefooter").style.display = 'block';
        document.getElementById("navigationBlockB").style.marginLeft = 0 + '%';
        document.getElementById("TheNavigation").style.marginRight = 0 + 'px';
        document.body.scrollTop=document.documentElement.scrollTop=430; 
    }
    else if(document.getElementById("cover").className == "cover")
    {
        document.getElementById("avatar").className = "avatarpre";
        document.getElementById("cover").className = "entercover";
        document.getElementById("contentbackground").style.display = 'none';
        document.getElementById("thefooter").style.display = 'none';
        document.getElementById("navigationBlockB").style.marginLeft = 20 + '%';
        document.getElementById("TheNavigation").style.marginRight = -300 + '%';
        document.body.scrollTop=document.documentElement.scrollTop=0; 
    }
}


window.addEventListener('scroll', () => {
    let body = document.body, timer;
    clearTimeout(timer);
    if(!body.classList.contains('disable-hover')) {
      body.classList.add('disable-hover');
    }
    timer = setTimeout(() => {
      body.classList.remove('disable-hover');
    }, 300);
},false);