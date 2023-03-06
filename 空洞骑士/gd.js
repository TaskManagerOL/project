// 音乐盒制作开始
var previous = document.getElementById('previous');
var pause = document.getElementById('pause');
var next = document.getElementById('next');
var loop = document.getElementById('loop');
var music = document.getElementById('music');
var musiclibrary = new Array('游戏原声/Christopher Larkin - City of Tears.mp3', '游戏原声/Christopher Larkin - Crossroads.mp3', '游戏原声/Christopher Larkin - Greenpath.mp3', '游戏原声/Christopher Larkin - Dream.mp3', '游戏原声/Christopher Larkin - Soul Sanctum.mp3', "游戏原声/Christopher Larkin - Kingdom's Edge.mp3", '游戏原声/Christopher Larkin - Hollow Knight.mp3',)
var now = 0;
next.onclick = function () {
    if (now == musiclibrary.length - 1) {
        // music.autoplay = true;
        now = 0;
        music.src = musiclibrary[now];
    } else {
        now++;
        music.src = musiclibrary[now];
    }
    next.style.backgroundColor = "grey";
    setTimeout(() => {
        next.style.backgroundColor = "white";
    }, 50);
}

previous.onclick = function () {
    // music.autoplay = true;
    now--;
    if (now == -1) {
        now = musiclibrary.length - 1;
        music.src = musiclibrary[now];
    } else {
        music.src = musiclibrary[now];
    }
    previous.style.backgroundColor = "grey";
    setTimeout(() => {
        previous.style.backgroundColor = "white";
    }, 50);
}

var pausetime = 0;
pause.onclick = function () {
    pausetime++;
    if (pausetime % 2 == 1) {
        music.pause();
        pause.title = '已暂停';
        pause.innerHTML = "&#xea82;"
    } else {
        music.play();
        pause.title = '已播放';
        pause.innerHTML = "&#xe800;"
    }
    pause.style.backgroundColor = "grey";
    setTimeout(() => {
        pause.style.backgroundColor = "white";
    }, 50);
}

var looptime = 0;
loop.onclick = function () {
    looptime++;
    if (looptime % 2 == 1) {
        music.loop = true;
        loop.title = '已循环播放';
        loop.innerHTML = "&#xe607;"
    } else {
        music.loop = false;
        loop.title = '已顺序播放';
        loop.innerHTML = "&#xe60f;"
    }
    loop.style.backgroundColor = "grey";
    setTimeout(() => {
        loop.style.backgroundColor = "white";
    }, 50);
}

music.addEventListener('ended', function () {
    now++;
    music.src = musiclibrary[now];
    if (now == musiclibrary.length - 1) {
        now = 0;
        music.src = musiclibrary[now];
    }
}, false);


dragElement(document.getElementById("move"));

function dragElement(move) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    move.onmousedown = dragMouseDown;
}
function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    console.log(e);
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    move.style.top = (move.offsetTop - pos2) + "px";
    move.style.left = (move.offsetLeft - pos1) + "px";
}

function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
}
//音乐盒制作结束

var dzjtime = 0;
var dzj = document.getElementById("dzj");
var dzjbig = document.getElementById("dzjbig");
dzjbig.onclick = function () {
    dzjtime++;
    if (dzjtime % 2 == 1) {
        dzjbig.style.transition = "all 1s linear 1.6s";
        dzj.style.backgroundImage = "url(图片素材/骨钉及剑技/black.png)";
        setTimeout(() => { xa.style.backgroundImage = "url(图片素材/骨钉及剑技/black.png)"; }, 400);
        setTimeout(() => { al.style.backgroundImage = "url(图片素材/骨钉及剑技/black.png)"; }, 800);
        setTimeout(() => { mt.style.backgroundImage = "url(图片素材/骨钉及剑技/black.png)"; }, 1200);
        xa.style.boxShadow = "none";
        al.style.boxShadow = "none";
        mt.style.boxShadow = "none";
        dzj.style.boxShadow = " 0 0 15px 15px black";
        dzjbig.style.opacity = "1";
        dzjbig.style.boxShadow = " 0 0 15px 15px black inset";
        dzjbig.style.height = "60vw";
        dzjbig.style.width = "93vw";
        dzjbig.style.zIndex = "99";
        dzjbig = document.getElementById("");
        mtbig = document.getElementById("");
        albig = document.getElementById("");
        xabig = document.getElementById("");
        window.setTimeout(() => {
            dzjbig = document.getElementById("dzjbig");
            albig = document.getElementById("albig");
            xabig = document.getElementById("xabig");
            mtbig = document.getElementById("mtbig");
        }, 2600)
    } else {
        dzjbig.style.transition = "all 1s linear";
        dzjbig.style.width = "45vw";
        dzjbig.style.height = "28vw";
        xa.style.boxShadow = "0 0 15px 15px black inset";
        al.style.boxShadow = "0 0 15px 15px black inset";
        mt.style.boxShadow = "0 0 15px 15px black inset";
        dzj.style.boxShadow = "0 0 15px 15px black inset";
        dzjbig.style.opacity = "0";
        dzjbig.style.zIndex = "0";
        setTimeout(() => { mt.style.backgroundImage = "url(图片素材/骨钉及剑技/mt.png)"; }, 1000);
        setTimeout(() => { al.style.backgroundImage = "url(图片素材/骨钉及剑技/al.png)"; }, 1400);
        setTimeout(() => { xa.style.backgroundImage = "url(图片素材/骨钉及剑技/xa.png)"; }, 1800);
        setTimeout(() => { dzj.style.backgroundImage = "url(图片素材/骨钉及剑技/dzj.png)"; }, 2400);
        dzjbig = document.getElementById("");
        mtbig = document.getElementById("");
        albig = document.getElementById("");
        xabig = document.getElementById("");
        window.setTimeout(() => {
            dzjbig = document.getElementById("dzjbig");
            albig = document.getElementById("albig");
            xabig = document.getElementById("xabig");
            mtbig = document.getElementById("mtbig");
        }, 2400)
    }
}

var altime = 0;
var al = document.getElementById("al");
var albig = document.getElementById("albig");
albig.onclick = function () {
    altime++;
    if (altime % 2 == 1) {
        albig.style.transition = "all 1s linear 1.6s";
        al.style.backgroundImage = "url(图片素材/骨钉及剑技/black.png)";
        setTimeout(() => { mt.style.backgroundImage = "url(图片素材/骨钉及剑技/black.png)"; }, 400);
        setTimeout(() => { xa.style.backgroundImage = "url(图片素材/骨钉及剑技/black.png)"; }, 800);
        setTimeout(() => { dzj.style.backgroundImage = "url(图片素材/骨钉及剑技/black.png)"; }, 1200);
        xa.style.boxShadow = "none";
        dzj.style.boxShadow = "none";
        mt.style.boxShadow = "none";
        al.style.boxShadow = " 0 0 15px 15px black";
        albig.style.opacity = "1";
        albig.style.boxShadow = " 0 0 15px 15px black inset";
        albig.style.height = "60vw";
        albig.style.width = "93vw";
        albig.style.zIndex = "99";
        albig = document.getElementById("");
        dzjbig = document.getElementById("");
        mtbig = document.getElementById("");
        albig = document.getElementById("");
        xabig = document.getElementById("");
        window.setTimeout(() => {
            dzjbig = document.getElementById("dzjbig");
            albig = document.getElementById("albig");
            xabig = document.getElementById("xabig");
            mtbig = document.getElementById("mtbig");
        }, 2600)
    } else {
        albig.style.transition = "all 1s linear";
        albig.style.width = "45vw";
        albig.style.height = "28vw";
        xa.style.boxShadow = "0 0 15px 15px black inset";
        al.style.boxShadow = "0 0 15px 15px black inset";
        mt.style.boxShadow = "0 0 15px 15px black inset";
        dzj.style.boxShadow = "0 0 15px 15px black inset";
        albig.style.opacity = "0";
        albig.style.zIndex = "0";
        setTimeout(() => { dzj.style.backgroundImage = "url(图片素材/骨钉及剑技/dzj.png)"; }, 1000);
        setTimeout(() => { xa.style.backgroundImage = "url(图片素材/骨钉及剑技/xa.png)"; }, 1400);
        setTimeout(() => { mt.style.backgroundImage = "url(图片素材/骨钉及剑技/mt.png)"; }, 1800);
        setTimeout(() => { al.style.backgroundImage = "url(图片素材/骨钉及剑技/al.png)"; }, 2400);
        dzjbig = document.getElementById("");
        mtbig = document.getElementById("");
        albig = document.getElementById("");
        xabig = document.getElementById("");
        window.setTimeout(() => {
            dzjbig = document.getElementById("dzjbig");
            albig = document.getElementById("albig");
            xabig = document.getElementById("xabig");
            mtbig = document.getElementById("mtbig");
        }, 2400)
    }
}

var xatime = 0;
var xa = document.getElementById("xa");
var xabig = document.getElementById("xabig");
xabig.onclick = function () {
    xatime++;
    if (xatime % 2 == 1) {
        xabig.style.transition = "all 1s linear 1.6s";
        xa.style.backgroundImage = "url(图片素材/骨钉及剑技/black.png)";
        setTimeout(() => { dzj.style.backgroundImage = "url(图片素材/骨钉及剑技/black.png)"; }, 400);
        setTimeout(() => { al.style.backgroundImage = "url(图片素材/骨钉及剑技/black.png)"; }, 800);
        setTimeout(() => { mt.style.backgroundImage = "url(图片素材/骨钉及剑技/black.png)"; }, 1200);
        al.style.boxShadow = "none";
        dzj.style.boxShadow = "none";
        mt.style.boxShadow = "none";
        xa.style.boxShadow = " 0 0 15px 15px black";
        xabig.style.opacity = "1";
        xabig.style.boxShadow = " 0 0 15px 15px black inset";
        xabig.style.height = "60vw";
        xabig.style.width = "93vw";
        xabig.style.zIndex = "99";
        dzjbig = document.getElementById("");
        mtbig = document.getElementById("");
        albig = document.getElementById("");
        xabig = document.getElementById("");
        window.setTimeout(() => {
            dzjbig = document.getElementById("dzjbig");
            albig = document.getElementById("albig");
            xabig = document.getElementById("xabig");
            mtbig = document.getElementById("mtbig");
        }, 2600)
    } else {
        xabig.style.transition = "all 1s linear";
        xabig.style.width = "45vw";
        xabig.style.height = "28vw";
        xa.style.boxShadow = "0 0 15px 15px black inset";
        al.style.boxShadow = "0 0 15px 15px black inset";
        mt.style.boxShadow = "0 0 15px 15px black inset";
        dzj.style.boxShadow = "0 0 15px 15px black inset";
        xabig.style.opacity = "0";
        xabig.style.zIndex = "0";
        setTimeout(() => { mt.style.backgroundImage = "url(图片素材/骨钉及剑技/mt.png)"; }, 1000);
        setTimeout(() => { al.style.backgroundImage = "url(图片素材/骨钉及剑技/al.png)"; }, 1400);
        setTimeout(() => { dzj.style.backgroundImage = "url(图片素材/骨钉及剑技/dzj.png)"; }, 1800);
        setTimeout(() => { xa.style.backgroundImage = "url(图片素材/骨钉及剑技/xa.png)"; }, 2400);
        dzjbig = document.getElementById("");
        mtbig = document.getElementById("");
        albig = document.getElementById("");
        xabig = document.getElementById("");
        window.setTimeout(() => {
            dzjbig = document.getElementById("dzjbig");
            albig = document.getElementById("albig");
            xabig = document.getElementById("xabig");
            mtbig = document.getElementById("mtbig");
        }, 2400)
    }
}

var mttime = 0;
var mt = document.getElementById("mt");
var mtbig = document.getElementById("mtbig");

mtbig.onclick = function () {
    mttime++;
    if (mttime % 2 == 1) {
        mtbig.style.transition = "all 1s linear 1.6s";
        mt.style.backgroundImage = "url(图片素材/骨钉及剑技/black.png)";
        setTimeout(() => { al.style.backgroundImage = "url(图片素材/骨钉及剑技/black.png)"; }, 400);
        setTimeout(() => { dzj.style.backgroundImage = "url(图片素材/骨钉及剑技/black.png)"; }, 800);
        setTimeout(() => { xa.style.backgroundImage = "url(图片素材/骨钉及剑技/black.png)"; }, 1200);
        al.style.boxShadow = "none";
        dzj.style.boxShadow = "none";
        xa.style.boxShadow = "none";
        mt.style.boxShadow = " 0 0 15px 15px black";
        mtbig.style.opacity = "1";
        mtbig.style.boxShadow = " 0 0 15px 15px black inset";
        mtbig.style.height = "60vw";
        mtbig.style.width = "93vw";
        mtbig.style.zIndex = "99";
        dzjbig = document.getElementById("");
        mtbig = document.getElementById("");
        albig = document.getElementById("");
        xabig = document.getElementById("");
        window.setTimeout(() => {
            dzjbig = document.getElementById("dzjbig");
            albig = document.getElementById("albig");
            xabig = document.getElementById("xabig");
            mtbig = document.getElementById("mtbig");
        }, 2600)
    } else {
        mtbig.style.transition = "all 1s linear";
        mtbig.style.width = "45vw";
        mtbig.style.height = "28vw";
        xa.style.boxShadow = "0 0 15px 15px black inset";
        al.style.boxShadow = "0 0 15px 15px black inset";
        mt.style.boxShadow = "0 0 15px 15px black inset";
        dzj.style.boxShadow = "0 0 15px 15px black inset";
        mtbig.style.opacity = "0";
        mtbig.style.zIndex = "0";
        setTimeout(() => { xa.style.backgroundImage = "url(图片素材/骨钉及剑技/xa.png)"; }, 1000);
        setTimeout(() => { dzj.style.backgroundImage = "url(图片素材/骨钉及剑技/dzj.png)"; }, 1400);
        setTimeout(() => { al.style.backgroundImage = "url(图片素材/骨钉及剑技/al.png)"; }, 1800);
        setTimeout(() => { mt.style.backgroundImage = "url(图片素材/骨钉及剑技/mt.png)"; }, 2400);
        dzjbig = document.getElementById("");
        mtbig = document.getElementById("");
        albig = document.getElementById("");
        xabig = document.getElementById("");
        window.setTimeout(() => {
            dzjbig = document.getElementById("dzjbig");
            albig = document.getElementById("albig");
            xabig = document.getElementById("xabig");
            mtbig = document.getElementById("mtbig");
        }, 2400)
    }
}