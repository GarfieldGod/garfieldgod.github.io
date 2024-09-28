function viewavatar(){
    if(document.getElementById("avatar").className == "avatar")
    {
        document.getElementById("navigationBlockB").style.marginLeft = 20 + '%';
        document.getElementById("RightMenu").className = "ClosedRightMenu";
        document.getElementById("avatarviewer").style.display = 'block';
        document.getElementById("search").className = "searchin";
        setTimeout("animeteavatarvieweron1()", 700);
        photochangeon();
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
    setTimeout("animeteavatarvieweroff1()", 700);
    photochangeoff();
}
function animeteavatarvieweroff1(){
    document.getElementById("cover").className = "blockcover";
    setTimeout("animeteavatarvieweroff2()",500);
}
function animeteavatarvieweroff2(){
    document.getElementById("navigationBlockB").style.marginLeft = -20 + '%';
    document.getElementById("avatarviewer").style.display = 'none';
    document.getElementById("RightMenu").className = "RightMenu";
    document.getElementById("search").className = "search";
}

function searchs(){
    window.location.href="https://www.baidu.com/s?wd=" + document.getElementById("searchTxt").value;
}

//--------------------------------------------------------------------------------------------ÂÖ»»Æ÷
