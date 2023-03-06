// 音乐盒制作开始
var previous = document.getElementById('previous');
var pause = document.getElementById('pause');
var next = document.getElementById('next');
var loop = document.getElementById('loop');
var music = document.getElementById('music');
var musiclibrary = new Array('游戏原声/Christopher Larkin - Dream.mp3', '游戏原声/Christopher Larkin - Soul Sanctum.mp3', "游戏原声/Christopher Larkin - Kingdom's Edge.mp3", '游戏原声/Christopher Larkin - Hollow Knight.mp3', '游戏原声/Christopher Larkin - City of Tears.mp3', '游戏原声/Christopher Larkin - Crossroads.mp3', '游戏原声/Christopher Larkin - Greenpath.mp3')
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

//护符点击
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var n4 = document.getElementById("n4");
var n5 = document.getElementById("n5");
var n6 = document.getElementById("n6");
var n7 = document.getElementById("n7");
var n8 = document.getElementById("n8");
var n9 = document.getElementById("n9");
var n10 = document.getElementById("n10");
var n11 = document.getElementById("n11");
var n12 = document.getElementById("n12");
var n13 = document.getElementById("n13");
var n14 = document.getElementById("n14");
var n15 = document.getElementById("n15");
var n16 = document.getElementById("n16");
var n17 = document.getElementById("n17");
var n18 = document.getElementById("n18");
var n19 = document.getElementById("n19");
var n20 = document.getElementById("n20");
var n21 = document.getElementById("n21");
var n22 = document.getElementById("n22");
var n23 = document.getElementById("n23");
var n24 = document.getElementById("n24");
var n25 = document.getElementById("n25");
var n26 = document.getElementById("n26");
var n27 = document.getElementById("n27");
var n28 = document.getElementById("n28");
var n29 = document.getElementById("n29");
var n30 = document.getElementById("n30");
var n31 = document.getElementById("n31");
var n32 = document.getElementById("n32");
var n33 = document.getElementById("n33");
var n34 = document.getElementById("n34");
var n35 = document.getElementById("n35");
var n36 = document.getElementById("n36");
var n37 = document.getElementById("n37");
var n38 = document.getElementById("n38");
var n39 = document.getElementById("n39");
var n40 = document.getElementById("n40");
var hfname = document.getElementById("hfname");
var spend = document.getElementById("spend");
var big = document.getElementById("big");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var puttop1 = document.getElementById("puttop1");
var puttop2 = document.getElementById("puttop2");
var puttop3 = document.getElementById("puttop3");
var puttop4 = document.getElementById("puttop4");
var puttop5 = document.getElementById("puttop5");
var puttop6 = document.getElementById("puttop6");
var puttop7 = document.getElementById("puttop7");
var puttop8 = document.getElementById("puttop8");
var puttop9 = document.getElementById("puttop9");
var putbottom = document.getElementById("putbottom");
var choose = document.getElementById("choose");
var puttop = new Array();
var puttoptime = 0;
var end = -1;
var nowspend = 0;
var prime = 0;
var saver = 0;
var newtime = 0;

var time1 = 0; var primein1 = 0; var ptime1 = 0;
var time2 = 0; var primein2 = 0; var ptime2 = 0;
var time3 = 0; var primein3 = 0; var ptime3 = 0;
var time4 = 0; var primein4 = 0; var ptime4 = 0;
var time5 = 0; var primein5 = 0; var ptime5 = 0;
var time6 = 0; var primein6 = 0; var ptime6 = 0;
var time7 = 0; var primein7 = 0; var ptime7 = 0;
var time8 = 0; var primein8 = 0; var ptime8 = 0;
var time9 = 0; var primein9 = 0; var ptime9 = 0;
var time10 = 0; var primein10 = 0; var ptime10 = 0;
var time11 = 0; var primein11 = 0; var ptime11 = 0;
var time12 = 0; var primein12 = 0; var ptime12 = 0;
var time13 = 0; var primein13 = 0; var ptime13 = 0;
var time14 = 0; var primein14 = 0; var ptime14 = 0;
var time15 = 0; var primein15 = 0; var ptime15 = 0;
var time16 = 0; var primein16 = 0; var ptime16 = 0;
var time17 = 0; var primein17 = 0; var ptime17 = 0;
var time18 = 0; var primein18 = 0; var ptime18 = 0;
var time19 = 0; var primein19 = 0; var ptime19 = 0;
var time20 = 0; var primein20 = 0; var ptime20 = 0;
var time21 = 0; var primein21 = 0; var ptime21 = 0;
var time22 = 0; var primein22 = 0; var ptime22 = 0;
var time23 = 0; var primein23 = 0; var ptime23 = 0;
var time24 = 0; var primein24 = 0; var ptime24 = 0;
var time25 = 0; var primein25 = 0; var ptime25 = 0;
var time26 = 0; var primein26 = 0; var ptime26 = 0;
var time27 = 0; var primein27 = 0; var ptime27 = 0;
var time28 = 0; var primein28 = 0; var ptime28 = 0;
var time29 = 0; var primein29 = 0; var ptime29 = 0;
var time30 = 0; var primein30 = 0; var ptime30 = 0;
var time31 = 0; var primein31 = 0; var ptime31 = 0;
var time32 = 0; var primein32 = 0; var ptime32 = 0;
var time33 = 0; var primein33 = 0; var ptime33 = 0;
var time34 = 0; var primein34 = 0; var ptime34 = 0;
var time35 = 0; var primein35 = 0; var ptime35 = 0;
var time36 = 0; var primein36 = 0; var ptime36 = 0;
var time37 = 0; var primein37 = 0; var ptime37 = 0;
var time38 = 0; var primein38 = 0; var ptime38 = 0;
var time39 = 0; var primein39 = 0; var ptime39 = 0;
var time40 = 0; var primein40 = 0; var ptime40 = 0;



function pri() {
    if (nowspend >= 9) {
        prime = 1;
    } else if (nowspend < 9) {
        prime = 0;
    }
}
function topf() {
    puttop1.style.backgroundImage = puttop[0];
    puttop2.style.backgroundImage = puttop[1];
    puttop3.style.backgroundImage = puttop[2];
    puttop4.style.backgroundImage = puttop[3];
    puttop5.style.backgroundImage = puttop[4];
    puttop6.style.backgroundImage = puttop[5];
    puttop7.style.backgroundImage = puttop[6];
    puttop8.style.backgroundImage = puttop[7];
    puttop9.style.backgroundImage = puttop[8];
}
n1.onclick = function () {
    hfname.innerHTML = "任性的指南针";
    big.style.backgroundImage = 'url(图片素材/hf/1.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take1.png)';
    p1.innerHTML = "当地图打开时，将其位置告诉佩戴者，允许漫游者进行精确定位。";
    p2.innerHTML = "功能：在地图上显示自己的位置";
    p3.innerHTML = "获得方式：德特茅斯的地图商人妻子220G出售";
    p4.innerHTML = "";
    choose.style.top = "28.05vw";
    choose.style.left = "6vw";
    pri();
    if (prime == 0 || time1 % 2 == 1) {
        time1++;
        saver = 1;
        if (time1 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein1 == 0) {
                end++;
                n1.style.backgroundImage = 'url(图片素材/hf/1s.png)';
                nowspend += saver;
                spent(nowspend);
                primein1 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/1.jpg)';
                ptime1 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time1 % 2 == 0 && primein1 == 1 && ptime1 == end) {
            n1.style.backgroundImage = 'url(图片素材/hf/1.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein1 = 0;
            puttoptime--;
            puttop[ptime1] = null;
            topf();
            end--;
            newtime--;
        }
    }
}
n2.onclick = function () {
    hfname.innerHTML = "蜂群集结";
    big.style.backgroundImage = 'url(图片素材/hf/2.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take1.png)';
    p1.innerHTML = "虫群将跟随持有者并收集任何散落的吉欧。适合那些无论多细小的东西都不愿意丢下的人。";
    p2.innerHTML = "功能：吸引掉落的钱";
    p3.innerHTML = "获得方式：德特茅斯的斯莱300G出售";
    p4.innerHTML = "";
    choose.style.top = "28.05vw";
    choose.style.left = "11.05vw";
    pri();
    if (prime == 0 || time2 % 2 == 1) {
        time2++;
        saver = 1;
        if (time2 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein2 == 0) {
                n2.style.backgroundImage = 'url(图片素材/hf/2s.png)';
                nowspend += saver;
                spent(nowspend);
                primein2 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/2.jpg)';
                ptime2 = puttoptime
                puttoptime++;
                topf();
                end++;
                newtime++;
            }
        } else if (time2 % 2 == 0 && primein2 == 1 && ptime2 == end) {
            n2.style.backgroundImage = 'url(图片素材/hf/2.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein2 = 0;
            puttoptime--;
            puttop[ptime2] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n3.onclick = function () {
    hfname.innerHTML = "坚硬外壳";
    big.style.backgroundImage = 'url(图片素材/hf/3.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take2.png)';
    p1.innerHTML = "加强韧性。当从伤害中恢复时，延长持有者保持不受伤害的时间。使其更容易在危险情形下逃脱。";
    p2.innerHTML = "功能：将受伤后的无敌时间延长至1.7s（原为2.3s）";
    p3.innerHTML = "获得方式：德特茅斯的斯莱200G出售";
    p4.innerHTML = "特殊搭配：与苦痛荆棘可加快其发生速度；"
    choose.style.top = "28.05vw";
    choose.style.left = "16.1vw";
    pri();
    if (prime == 0 || time3 % 2 == 1) {
        time3++;
        saver = 2;
        if (time3 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein3 == 0) {
                end++;
                n3.style.backgroundImage = 'url(图片素材/hf/3s.png)';
                nowspend += saver;
                spent(nowspend);
                primein3 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/3.jpg)';
                ptime3 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time3 % 2 == 0 && primein3 == 1 && ptime3 == end) {
            n3.style.backgroundImage = 'url(图片素材/hf/3.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein3 = 0;
            puttoptime--;
            puttop[ptime3] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n4.onclick = function () {
    hfname.innerHTML = "灵魂捕手";
    big.style.backgroundImage = 'url(图片素材/hf/4.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take2.png)';
    p1.innerHTML = "萨满曾用它来从周围的世界中吸取更多灵魂。增加用骨钉攻击敌人时获得的灵魂数量。";
    p2.innerHTML = "功能：增加平A获取的灵魂量，大球额外+3，小球额外+2";
    p3.innerHTML = "获得方式：祖先山丘击败巴德尔长者后获得";
    p4.innerHTML = "";
    choose.style.top = "28.05vw";
    choose.style.left = "21.15vw";
    pri();
    if (prime == 0 || time4 % 2 == 1) {
        time4++;
        saver = 2;
        if (time4 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein4 == 0) {
                end++;
                n4.style.backgroundImage = 'url(图片素材/hf/4s.png)';
                nowspend += saver;
                spent(nowspend);
                primein4 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/4.jpg)';
                ptime4 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time4 % 2 == 0 && primein4 == 1 && ptime4 == end) {
            n4.style.backgroundImage = 'url(图片素材/hf/4.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein4 = 0;
            puttoptime--;
            puttop[ptime4] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n5.onclick = function () {
    hfname.innerHTML = "萨满之石";
    big.style.backgroundImage = 'url(图片素材/hf/5.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take3.png)';
    p1.innerHTML = "据说包含前代萨满的学识。提高法术的威力，对敌人造成更多伤害。";
    p2.innerHTML = "功能：提升法术的伤害（复仇之魂和暗影之魂增加33%伤害、体积变大；嚎叫幽灵和深渊尖啸增加50%伤害；荒芜俯冲伤害变为53，黑暗降临伤害变为88";
    p3.innerHTML = "获得方式：遗忘十字路右下角萨鲁巴220G出售";
    p4.innerHTML = "特殊搭配：与吸虫之巢可提升虫子伤害及体积";
    choose.style.top = "28.05vw";
    choose.style.left = "26.2vw";
    pri();
    if (prime == 0 || time5 % 2 == 1) {
        time5++;
        saver = 3;
        if (time5 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein5 == 0) {
                end++;
                n5.style.backgroundImage = 'url(图片素材/hf/5s.png)';
                nowspend += saver;
                spent(nowspend);
                primein5 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/5.jpg)';
                ptime5 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time5 % 2 == 0 && primein5 == 1 && ptime5 == end) {
            n5.style.backgroundImage = 'url(图片素材/hf/5.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein5 = 0;
            puttoptime--;
            puttop[ptime5] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n6.onclick = function () {
    hfname.innerHTML = "噬魂者";
    big.style.backgroundImage = 'url(图片素材/hf/6.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take4.png)';
    p1.innerHTML = "提高法术的威力，对敌人造成更多伤害。大大增加用骨钉攻击敌人时获得的灵魂数量。";
    p2.innerHTML = "功能：大幅度增加平A获取的灵魂量（大球额外+8，小球额外+6）";
    p3.innerHTML = "获得方式：安息之地的碎棺材下砸，右边的隐藏房间可以获得";
    p4.innerHTML = "";
    choose.style.top = "28.05vw";
    choose.style.left = "31.25vw";
    pri();
    if (prime == 0 || time6 % 2 == 1) {
        time6++;
        saver = 4;
        if (time6 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein6 == 0) {
                end++;
                n6.style.backgroundImage = 'url(图片素材/hf/6s.png)';
                nowspend += saver;
                spent(nowspend);
                primein6 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/6.jpg)';
                ptime6 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time6 % 2 == 0 && primein6 == 1 && ptime6 == end) {
            n6.style.backgroundImage = 'url(图片素材/hf/6.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein6 = 0;
            puttoptime--;
            puttop[ptime6] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n7.onclick = function () {
    hfname.innerHTML = "冲刺大师";
    big.style.backgroundImage = 'url(图片素材/hf/7.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take2.png)';
    p1.innerHTML = "有着被称为“冲刺大师”的古怪虫子形象。持有者将能够更频繁地冲刺，也能向下冲刺。非常适合那些想要快速移动的虫子。";
    p2.innerHTML = "功能：减少50%的冲刺冷却时间，可以向下冲刺";
    p3.innerHTML = "获得方式：螳螂村右下角的冲刺大师雕像处可以获得";
    p4.innerHTML = "特殊搭配：与锋利之影可提升50%冲刺伤害";
    choose.style.top = "28.05vw";
    choose.style.left = "36.3vw";
    pri();
    if (prime == 0 || time7 % 2 == 1) {
        time7++;
        saver = 2;
        if (time7 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein7 == 0) {
                end++;
                n7.style.backgroundImage = 'url(图片素材/hf/7s.png)';
                nowspend += saver;
                spent(nowspend);
                primein7 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/7.jpg)';
                ptime7 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time7 % 2 == 0 && primein7 == 1 && ptime7 == end) {
            n7.style.backgroundImage = 'url(图片素材/hf/7.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein7 = 0;
            puttoptime--;
            puttop[ptime7] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n8.onclick = function () {
    hfname.innerHTML = "飞毛腿";
    big.style.backgroundImage = 'url(图片素材/hf/8.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take1.png)';
    p1.innerHTML = "有着被称为“飞毛腿”的古怪虫子形象。有着被称为“飞毛腿”的古怪虫子形象。";
    p2.innerHTML = "功能：增加20%移动速度";
    p3.innerHTML = "获得方式：拿到店主钥匙后德特茅斯的斯莱400G出售";
    p4.innerHTML = "特殊搭配：与编制者之歌可提高小蜘蛛50%的移动速度和跳跃高度";
    choose.style.top = "28.05vw";
    choose.style.left = "41.35vw";
    pri();
    if (prime == 0 || time8 % 2 == 1) {
        time8++;
        saver = 1;
        if (time8 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein8 == 0) {
                end++;
                n8.style.backgroundImage = 'url(图片素材/hf/8s.png)';
                nowspend += saver;
                spent(nowspend);
                primein8 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/8.jpg)';
                ptime8 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time8 % 2 == 0 && primein8 == 1 && ptime8 == end) {
            n8.style.backgroundImage = 'url(图片素材/hf/8.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein8 = 0;
            puttoptime--;
            puttop[ptime8] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n9.onclick = function () {
    hfname.innerHTML = "幼虫之歌";
    big.style.backgroundImage = 'url(图片素材/hf/9.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take1.png)';
    p1.innerHTML = "包含被解救的幼虫的感激。受到伤害时获得灵魂。";
    p2.innerHTML = "功能：受伤时获得15点灵魂";
    p3.innerHTML = "获得方式：解救10只幼虫后虫爷爷赠与";
    p4.innerHTML = "特殊搭配：与蜕变挽歌可在受伤时获得25点灵魂；与编制者之歌可在小蜘蛛攻击敌人时获得3灵魂";
    choose.style.top = "28.05vw";
    choose.style.left = "46.4vw";
    pri();
    if (prime == 0 || time9 % 2 == 1) {
        time9++;
        saver = 1;
        if (time9 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein9 == 0) {
                end++;
                n9.style.backgroundImage = 'url(图片素材/hf/9s.png)';
                nowspend += saver;
                spent(nowspend);
                primein9 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/9.jpg)';
                ptime9 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time9 % 2 == 0 && primein9 == 1 && ptime9 == end) {
            n9.style.backgroundImage = 'url(图片素材/hf/9.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein9 = 0;
            puttoptime--;
            puttop[ptime9] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n10.onclick = function () {
    hfname.innerHTML = "蜕变挽歌";
    big.style.backgroundImage = 'url(图片素材/hf/10.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take3.png)';
    p1.innerHTML = "包含将要步入生命的下一个阶段的幼虫的感激。为武器灌输神圣的力量。当持有者处于满血状态时，能从骨钉中射出白热能量束。";
    p2.innerHTML = "功能：当满生命值时，平A可以发出剑气";
    p3.innerHTML = "获得方式：解救46只幼虫后虫爷爷赠与";
    p4.innerHTML = "特殊搭配：与幼虫之歌可在受伤时获得25点灵魂；与骄傲印记可增加剑气宽度；与亡者之怒可在一点生命值时发出红色剑气且伤害提升";
    choose.style.top = "28.05vw";
    choose.style.left = "51.45vw";
    pri();
    if (prime == 0 || time10 % 2 == 1) {
        time10++;
        saver = 3;
        if (time10 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein10 == 0) {
                end++;
                n10.style.backgroundImage = 'url(图片素材/hf/10s.png)';
                nowspend += saver;
                spent(nowspend);
                primein10 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/10.jpg)';
                ptime10 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time10 % 2 == 0 && primein10 == 1 && ptime10 == end) {
            n10.style.backgroundImage = 'url(图片素材/hf/10.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein10 = 0;
            puttoptime--;
            puttop[ptime10] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n11.onclick = function () {
    hfname.innerHTML = "易碎心脏";
    big.style.backgroundImage = 'url(图片素材/hf/11.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take2.png)';
    p1.innerHTML = "增加持有者的生命值，承受更多伤害。这个护符十分脆弱，如果它的持有者被杀死就会损坏。";
    p2.innerHTML = "功能：增加2点生命上限，死亡后会损坏，需要在食腿者处花200G修复";
    p3.innerHTML = "获得方式：真菌荒地的食腿者350G出售（携带防御者纹章可以打八折）";
    p4.innerHTML = "特殊搭配：与乔尼的祝福可以变为蓝血；与蜂巢之血可以变为蜂蜜血";
    choose.style.top = "32.7vw";
    choose.style.left = "9.1vw";
    pri();
    if (prime == 0 || time11 % 2 == 1) {
        time11++;
        saver = 2;
        if (time11 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein11 == 0) {
                end++;
                n11.style.backgroundImage = 'url(图片素材/hf/11s.png)';
                nowspend += saver;
                spent(nowspend);
                primein11 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/11.jpg)';
                ptime11 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time11 % 2 == 0 && primein11 == 1 && ptime11 == end) {
            n11.style.backgroundImage = 'url(图片素材/hf/11.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein11 = 0;
            puttoptime--;
            puttop[ptime11] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n12.onclick = function () {
    hfname.innerHTML = "易碎贪婪";
    big.style.backgroundImage = 'url(图片素材/hf/12.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take2.png)';
    p1.innerHTML = "使得持有者在击败敌人时能找到更多的吉欧。这个护符十分脆弱，如果它的持有者被杀死就会损坏。";
    p2.innerHTML = "功能：杀怪掉落额外20%~60%的吉欧，死亡后会损坏，需要在食腿者处花150G修复";
    p3.innerHTML = "获得方式：真菌荒地的食腿者250G出售（携带防御者纹章可以打八折）";
    p4.innerHTML = "";
    choose.style.top = "32.7vw";
    choose.style.left = "14.15vw";
    pri();
    if (prime == 0 || time12 % 2 == 1) {
        time12++;
        saver = 2;
        if (time12 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein12 == 0) {
                end++;
                n12.style.backgroundImage = 'url(图片素材/hf/12s.png)';
                nowspend += saver;
                spent(nowspend);
                primein12 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/12.jpg)';
                ptime12 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time12 % 2 == 0 && primein12 == 1 && ptime12 == end) {
            n12.style.backgroundImage = 'url(图片素材/hf/12.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein12 = 0;
            puttoptime--;
            puttop[ptime12] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n13.onclick = function () {
    hfname.innerHTML = "易碎力量";
    big.style.backgroundImage = 'url(图片素材/hf/13.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take3.png)';

    p1.innerHTML = "增强持有者的攻击力，使其骨钉能够对敌人造成更多伤害。这个护符十分脆弱，如果它的持有者被杀死就会损坏。";
    p2.innerHTML = "功能：增加50%的平A伤害，死亡后会损坏，需要在食腿者处花350G修复";
    p3.innerHTML = "获得方式：真菌荒地的食腿者600G出售（携带防御者纹章可以打八折）";
    p4.innerHTML = "";
    choose.style.top = "32.7vw";
    choose.style.left = "19.2vw";
    pri();
    if (prime == 0 || time13 % 2 == 1) {
        time13++;
        saver = 3;
        if (time13 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein13 == 0) {
                end++;
                n13.style.backgroundImage = 'url(图片素材/hf/13s.png)';
                nowspend += saver;
                spent(nowspend);
                primein13 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/13.jpg)';
                ptime13 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time13 % 2 == 0 && primein13 == 1 && ptime13 == end) {
            n13.style.backgroundImage = 'url(图片素材/hf/13.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein13 = 0;
            puttoptime--;
            puttop[ptime13] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n14.onclick = function () {
    hfname.innerHTML = "法术扭曲者";
    big.style.backgroundImage = 'url(图片素材/hf/14.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take2.png)';
    p1.innerHTML = "反映了灵魂圣所掌握灵魂力量的欲望，可以提高持有者的施法能力。减少法术的灵魂消耗。";
    p2.innerHTML = "功能：将法术消耗的灵魂量降低为24（原为33）";
    p3.innerHTML = "获得方式：灵魂圣所右上角的隐藏房间内获得";
    p4.innerHTML = "";
    choose.style.top = "32.7vw";
    choose.style.left = "24.25vw";
    pri();
    if (prime == 0 || time14 % 2 == 1) {
        time14++;
        saver = 2;
        if (time14 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein14 == 0) {
                end++;
                n14.style.backgroundImage = 'url(图片素材/hf/14s.png)';
                nowspend += saver;
                spent(nowspend);
                primein14 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/14.jpg)';
                ptime14 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time14 % 2 == 0 && primein14 == 1 && ptime14 == end) {
            n14.style.backgroundImage = 'url(图片素材/hf/14.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein14 = 0;
            puttoptime--;
            puttop[ptime14] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n15.onclick = function () {
    hfname.innerHTML = "稳定之体";
    big.style.backgroundImage = 'url(图片素材/hf/15.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take1.png)';
    p1.innerHTML = "防止持有者用骨钉劈砍敌人时产生后坐力。让人保持稳定，持续攻击。";
    p2.innerHTML = "功能：消除平A产生的后坐力";
    p3.innerHTML = "获得方式：遗忘十字路右下角萨鲁巴200G出售";
    p4.innerHTML = "";
    choose.style.top = "32.7vw";
    choose.style.left = "29.3vw";
    pri();
    if (prime == 0 || time15 % 2 == 1) {
        time15++;
        saver = 1;
        if (time15 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein15 == 0) {
                end++;
                n15.style.backgroundImage = 'url(图片素材/hf/15s.png)';
                nowspend += saver;
                spent(nowspend);
                primein15 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/15.jpg)';
                ptime15 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time15 % 2 == 0 && primein15 == 1 && ptime15 == end) {
            n15.style.backgroundImage = 'url(图片素材/hf/15.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein15 = 0;
            puttoptime--;
            puttop[ptime15] = null;
            topf();
            end--;
            newtime--;
        }
    }
}
n16.onclick = function () {
    hfname.innerHTML = "沉重之击";
    big.style.backgroundImage = 'url(图片素材/hf/16.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take2.png)';
    p1.innerHTML = "阵亡战士的骨钉形成。增加持有者骨钉的力量，使敌人在被击中时后退的距离更远。";
    p2.innerHTML = "功能：提升平A击退75%，蓄力斩和冲刺斩击退100%，旋风斩击退150%";
    p3.innerHTML = "获得方式：拿到店主钥匙德特茅斯的斯莱350G出售";
    p4.innerHTML = "";
    choose.style.top = "32.7vw";
    choose.style.left = "34.35vw";
    pri();
    if (prime == 0 || time16 % 2 == 1) {
        time16++;
        saver = 2;
        if (time16 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein16 == 0) {
                end++;
                n16.style.backgroundImage = 'url(图片素材/hf/16s.png)';
                nowspend += saver;
                spent(nowspend);
                primein16 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/16.jpg)';
                ptime16 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time16 % 2 == 0 && primein16 == 1 && ptime16 == end) {
            n16.style.backgroundImage = 'url(图片素材/hf/16.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein16 = 0;
            puttoptime--;
            puttop[ptime16] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n17.onclick = function () {
    hfname.innerHTML = "快速劈砍";
    big.style.backgroundImage = 'url(图片素材/hf/17.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take3.png)';
    p1.innerHTML = "诞生于那些被融合的不完美的废弃骨钉。允许持有者更快地挥砍骨钉。";
    p2.innerHTML = "功能：增加54%的平A速度";
    p3.innerHTML = "获得方式：国王边缘下方的隐藏房间内获得";
    p4.innerHTML = "";
    choose.style.top = "32.7vw";
    choose.style.left = "39.4vw";
    pri();
    if (prime == 0 || time17 % 2 == 1) {
        time17++;
        saver = 3;
        if (time17 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein17 == 0) {
                end++;
                n17.style.backgroundImage = 'url(图片素材/hf/17s.png)';
                nowspend += saver;
                spent(nowspend);
                primein17 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/17.jpg)';
                ptime17 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time17 % 2 == 0 && primein17 == 1 && ptime17 == end) {
            n17.style.backgroundImage = 'url(图片素材/hf/17.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein17 = 0;
            puttoptime--;
            puttop[ptime17] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n18.onclick = function () {
    hfname.innerHTML = "修长之钉";
    big.style.backgroundImage = 'url(图片素材/hf/18.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take2.png)';
    p1.innerHTML = "增加持有者骨钉的攻击范围，允许打击更远处的敌人。";
    p2.innerHTML = "功能：增加15%的平A范围";
    p3.innerHTML = "获得方式：遗忘十字路右下角萨鲁巴300G出售";
    p4.innerHTML = "特殊搭配：与骄傲印记可增加40%的平A范围";
    choose.style.top = "32.7vw";
    choose.style.left = "44.45vw";
    pri();
    if (prime == 0 || time18 % 2 == 1) {
        time18++;
        saver = 2;
        if (time18 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein18 == 0) {
                end++;
                n18.style.backgroundImage = 'url(图片素材/hf/18s.png)';
                nowspend += saver;
                spent(nowspend);
                primein18 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/18.jpg)';
                ptime18 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time18 % 2 == 0 && primein18 == 1 && ptime18 == end) {
            n18.style.backgroundImage = 'url(图片素材/hf/18.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein18 = 0;
            puttoptime--;
            puttop[ptime18] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n19.onclick = function () {
    hfname.innerHTML = "骄傲印记";
    big.style.backgroundImage = 'url(图片素材/hf/19.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take3.png)';
    p1.innerHTML = "由螳螂部落慷慨赠予他们尊敬的人。大大增加持有者骨钉的攻击范围，使其能够从更远处劈砍敌人。";
    p2.innerHTML = "功能：增加25%的平A范围";
    p3.innerHTML = "获得方式：击败螳螂领主后右上角的房间宝箱内获得";
    p4.innerHTML = "特殊搭配：与蜕变挽歌可增加剑气宽度；与修长之钉可增加40%的平A范围";
    choose.style.top = "32.7vw";
    choose.style.left = "49.5vw";
    pri();
    if (prime == 0 || time19 % 2 == 1) {
        time19++;
        saver = 3;
        if (time19 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein19 == 0) {
                end++;
                n19.style.backgroundImage = 'url(图片素材/hf/19s.png)';
                nowspend += saver;
                spent(nowspend);
                primein19 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/19.jpg)';
                ptime19 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time19 % 2 == 0 && primein19 == 1 && ptime19 == end) {
            n19.style.backgroundImage = 'url(图片素材/hf/19.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein19 = 0;
            puttoptime--;
            puttop[ptime19] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n20.onclick = function () {
    hfname.innerHTML = "亡者之怒";
    big.style.backgroundImage = 'url(图片素材/hf/20.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take2.png)';
    p1.innerHTML = "体现了那些将死之人的愤怒和英勇。当接近死亡时，持有者的力量会增加。";
    p2.innerHTML = "功能：只有一点生命值时增加75%的平A伤害";
    p3.innerHTML = "获得方式：国王山道的一个隐藏宝箱内获得";
    p4.innerHTML = "特殊搭配：与蜕变挽歌同时装备可在一点生命值时挥出红色剑气且伤害增加；与发光子宫可在一点生命值时召唤出的苍蝇闪红，伤害增加为14（原来为9）";
    choose.style.top = "32.7vw";
    choose.style.left = "54.55vw";
    pri();
    if (prime == 0 || time20 % 2 == 1) {
        time20++;
        saver = 2;
        if (time20 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein20 == 0) {
                end++;
                n20.style.backgroundImage = 'url(图片素材/hf/20s.png)';
                nowspend += saver;
                spent(nowspend);
                primein20 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/20.jpg)';
                ptime20 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time20 % 2 == 0 && primein20 == 1 && ptime20 == end) {
            n20.style.backgroundImage = 'url(图片素材/hf/20.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein20 = 0;
            puttoptime--;
            puttop[ptime20] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n21.onclick = function () {
    hfname.innerHTML = "苦痛荆棘";
    big.style.backgroundImage = 'url(图片素材/hf/21.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take1.png)';
    p1.innerHTML = "感受持有者的痛苦并鞭打周围的世界。当受到伤害时，产生荆棘藤蔓伤害附近的敌人。";
    p2.innerHTML = "功能：受到非地形伤害后对周围敌人造成两次当前骨钉伤害的伤害";
    p3.innerHTML = "获得方式：苍绿之径的长房间内获得";
    p4.innerHTML = "特殊搭配：与坚硬外壳可加快荆棘的发生速度；与无忧旋律触发其效果也可触发荆棘效果";
    choose.style.top = "37.35vw";
    choose.style.left = "6vw";
    pri();
    if (prime == 0 || time21 % 2 == 1) {
        time21++;
        saver = 1;
        if (time21 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein21 == 0) {
                end++;
                n21.style.backgroundImage = 'url(图片素材/hf/21s.png)';
                nowspend += saver;
                spent(nowspend);
                primein21 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/21.jpg)';
                ptime21 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time21 % 2 == 0 && primein21 == 1 && ptime21 == end) {
            n21.style.backgroundImage = 'url(图片素材/hf/21.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein21 = 0;
            puttoptime--;
            puttop[ptime21] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n22.onclick = function () {
    hfname.innerHTML = "巴德尔之壳";
    big.style.backgroundImage = 'url(图片素材/hf/22.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take2.png)';
    p1.innerHTML = "当受到伤害时，产生荆棘藤蔓伤害附近的敌人。外壳不是无法破坏的，吸收太多的伤害后将会破碎。";
    p2.innerHTML = "功能：聚集灵魂时生成保护壳，可抵消一次伤害，但会打断聚集，最多抵消4次，坐一次长椅便会恢复";
    p3.innerHTML = "获得方式：跳入呼啸山崖下方的宝箱，击败右边的巴德尔长者获得";
    p4.innerHTML = "特殊搭配：与蘑菇孢子、乌恩之形可变为一只壳上长蘑菇的蜗牛、同时拥有三种效果";
    choose.style.top = "37.35vw";
    choose.style.left = "11.05vw";
    pri();
    if (prime == 0 || time22 % 2 == 1) {
        time22++;
        saver = 2;
        if (time22 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein22 == 0) {
                end++;
                n22.style.backgroundImage = 'url(图片素材/hf/22s.png)';
                nowspend += saver;
                spent(nowspend);
                primein22 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/22.jpg)';
                ptime22 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time22 % 2 == 0 && primein22 == 1 && ptime22 == end) {
            n22.style.backgroundImage = 'url(图片素材/hf/22.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein22 = 0;
            puttoptime--;
            puttop[ptime22] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n23.onclick = function () {
    hfname.innerHTML = "吸虫之巢";
    big.style.backgroundImage = 'url(图片素材/hf/23.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take3.png)';
    p1.innerHTML = "吸虫之母肠道诞生的活的护符。将复仇之魂法术变成一群不稳定的幼小吸虫。";
    p2.innerHTML = "功能：将复仇之魂变为9只小虫子、暗影之魂变为16只小虫子，一只虫子4点伤害";
    p3.innerHTML = "获得方式：皇家水道左下击败吸虫之母获得";
    p4.innerHTML = "特殊搭配：与防御者纹章可转变为大虫子，撞到敌人或一段时间后爆炸，之后留下毒气，伤害吃满26点";
    choose.style.top = "37.35vw";
    choose.style.left = "16.1vw";
    pri();
    if (prime == 0 || time23 % 2 == 1) {
        time23++;
        saver = 3;
        if (time23 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein23 == 0) {
                end++;
                n23.style.backgroundImage = 'url(图片素材/hf/23s.png)';
                nowspend += saver;
                spent(nowspend);
                primein23 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/23.jpg)';
                ptime23 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time23 % 2 == 0 && primein23 == 1 && ptime23 == end) {
            n23.style.backgroundImage = 'url(图片素材/hf/23.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein23 = 0;
            puttoptime--;
            puttop[ptime23] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n24.onclick = function () {
    hfname.innerHTML = "防御者纹章";
    big.style.backgroundImage = 'url(图片素材/hf/24.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take1.png)';
    p1.innerHTML = "圣巢国王赋予最忠诚的骑士的独特护符。虽然有些刮痕和污渍，但依旧保存得很好。让持有者散发出英勇的气息。";
    p2.innerHTML = "功能：每2.4s以自己为中心释放一团毒气，持续2.2s";
    p3.innerHTML = "获得方式：皇家水道击败粪虫防御者获得";
    p4.innerHTML = "特殊搭配：与吸虫之巢可转化为大虫子（详见吸虫之巢）；与发光子宫可让苍蝇伤害降低但是死亡留下毒气；与蘑菇孢子可让孢子变为毒气，伤害增加为40（原为27）";
    choose.style.top = "37.35vw";
    choose.style.left = "21.15vw";
    pri();
    if (prime == 0 || time24 % 2 == 1) {
        time24++;
        saver = 1;
        if (time24 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein24 == 0) {
                end++;
                n24.style.backgroundImage = 'url(图片素材/hf/24s.png)';
                nowspend += saver;
                spent(nowspend);
                primein24 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/24.jpg)';
                ptime24 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time24 % 2 == 0 && primein24 == 1 && ptime24 == end) {
            n24.style.backgroundImage = 'url(图片素材/hf/24.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein24 = 0;
            puttoptime--;
            puttop[ptime24] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n25.onclick = function () {
    hfname.innerHTML = "发光子宫";
    big.style.backgroundImage = 'url(图片素材/hf/25.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take2.png)';
    p1.innerHTML = "从持有者的身上汲取灵魂，用来产生幼崽。幼崽没有进食或成长的意愿，并会牺牲自己来保护它们的父母。";
    p2.innerHTML = "功能：每4s消耗8灵魂召唤一只小苍蝇，小苍蝇自杀式攻击造成9点伤害，最多存在4只；";
    p3.innerHTML = "获得方式：遗忘十字路假骑士右边的隐藏房间内获得";
    p4.innerHTML = "特殊搭配：与亡者之怒可让小苍蝇伤害变为14；与防御者纹章变为爆炸苍蝇（详见防御者纹章）";
    choose.style.top = "37.35vw";
    choose.style.left = "26.2vw";
    pri();
    if (prime == 0 || time25 % 2 == 1) {
        time25++;
        saver = 2;
        if (time25 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein25 == 0) {
                end++;
                n25.style.backgroundImage = 'url(图片素材/hf/25s.png)';
                nowspend += saver;
                spent(nowspend);
                primein25 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/25.jpg)';
                ptime25 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time25 % 2 == 0 && primein25 == 1 && ptime25 == end) {
            n25.style.backgroundImage = 'url(图片素材/hf/25.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein25 = 0;
            puttoptime--;
            puttop[ptime25] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n26.onclick = function () {
    hfname.innerHTML = "快速聚集";
    big.style.backgroundImage = 'url(图片素材/hf/26.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take3.png)';
    p1.innerHTML = "包含水晶镜片的护符。提升灵魂的凝聚速度，让持有者更快地治愈伤口。";
    p2.innerHTML = "功能：聚集灵魂的速度变为原来的两倍";
    p3.innerHTML = "获得方式：遗忘十字路右下角萨鲁巴800G出售";
    p4.innerHTML = "特殊搭配：与乌恩之形可使回血时移动速度变为原来的两倍";
    choose.style.top = "37.35vw";
    choose.style.left = "31.25vw";
    pri();
    if (prime == 0 || time26 % 2 == 1) {
        time26++;
        saver = 3;
        if (time26 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein26 == 0) {
                end++;
                n26.style.backgroundImage = 'url(图片素材/hf/26s.png)';
                nowspend += saver;
                spent(nowspend);
                primein26 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/26.jpg)';
                ptime26 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time26 % 2 == 0 && primein26 == 1 && ptime26 == end) {
            n26.style.backgroundImage = 'url(图片素材/hf/26.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein26 = 0;
            puttoptime--;
            puttop[ptime26] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n27.onclick = function () {
    hfname.innerHTML = "深度聚集";
    big.style.backgroundImage = 'url(图片素材/hf/27.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take4.png)';
    p1.innerHTML = "在水晶内长时间自然形成。从周围的空气中吸取灵魂。持有者会以更慢的速度凝聚灵魂，但治疗效果会加倍。";
    p2.innerHTML = "功能：聚集灵魂可一次回复两点生命值，但速度变为原来的65%";
    p3.innerHTML = "获得方式：水晶山峰打破隐藏墙壁最左边获得";
    p4.innerHTML = "特殊搭配：与蘑菇孢子可将孢子云范围增加35%";
    choose.style.top = "37.35vw";
    choose.style.left = "36.3vw";
    pri();
    if (prime == 0 || time27 % 2 == 1) {
        time27++;
        saver = 4;
        if (time27 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein27 == 0) {
                end++;
                n27.style.backgroundImage = 'url(图片素材/hf/27s.png)';
                nowspend += saver;
                spent(nowspend);
                primein27 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/27.jpg)';
                ptime27 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time27 % 2 == 0 && primein27 == 1 && ptime27 == end) {
            n27.style.backgroundImage = 'url(图片素材/hf/27.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein27 = 0;
            puttoptime--;
            puttop[ptime27] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n28.onclick = function () {
    hfname.innerHTML = "生命血之心";
    big.style.backgroundImage = 'url(图片素材/hf/28.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take2.png)';
    p1.innerHTML = "包含一个活着的核心，浸出宝贵的生命血。休息时，持有者被生命血包裹，可以防止少量伤害。";
    p2.innerHTML = "功能：增加2点生命血，坐到长椅上恢复";
    p3.innerHTML = "获得方式：遗忘十字路右下角萨鲁巴250G出售";
    p4.innerHTML = "";
    choose.style.top = "37.35vw";
    choose.style.left = "41.35vw";
    pri();
    if (prime == 0 || time28 % 2 == 1) {
        time28++;
        saver = 2;
        if (time28 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein28 == 0) {
                end++;
                n28.style.backgroundImage = 'url(图片素材/hf/28s.png)';
                nowspend += saver;
                spent(nowspend);
                primein28 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/28.jpg)';
                ptime28 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time28 % 2 == 0 && primein28 == 1 && ptime28 == end) {
            n28.style.backgroundImage = 'url(图片素材/hf/28.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein28 = 0;
            puttoptime--;
            puttop[ptime28] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n29.onclick = function () {
    hfname.innerHTML = "生命血核心";
    big.style.backgroundImage = 'url(图片素材/hf/29.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take3.png)';

    p1.innerHTML = "包含一个活着的核心，流出宝贵的生命血。休息时，持有者被生命血包裹，可以防止大量伤害。";
    p2.innerHTML = "功能：增加4点生命血，坐长椅恢复";
    p3.innerHTML = "获得方式：拥有15点生命血，深渊左侧的大门会打开，在最里面的房间内获得";
    p4.innerHTML = "";
    choose.style.top = "37.35vw";
    choose.style.left = "46.4vw";
    pri();
    if (prime == 0 || time29 % 2 == 1) {
        time29++;
        saver = 3;
        if (time29 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein29 == 0) {
                end++;
                n29.style.backgroundImage = 'url(图片素材/hf/29s.png)';
                nowspend += saver;
                spent(nowspend);
                primein29 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/29.jpg)';
                ptime29 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time29 % 2 == 0 && primein29 == 1 && ptime29 == end) {
            n29.style.backgroundImage = 'url(图片素材/hf/29.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein29 = 0;
            puttoptime--;
            puttop[ptime29] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n30.onclick = function () {
    hfname.innerHTML = "乔尼的祝福";
    big.style.backgroundImage = 'url(图片素材/hf/30.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take4.png)';

    p1.innerHTML = "由仁慈的异教徒乔尼给予的祝福，将生命流体变成蓝色的生命血。持有者将拥有一个更健康的外壳，可以承受更多的伤害，但不能够通过凝聚灵魂自愈。";
    p2.innerHTML = "功能：将全部生命值转变为更多生命血";
    p3.innerHTML = "获得方式：呼啸山崖隐藏房间内获得";
    p4.innerHTML = "特殊搭配：与蜂巢之血可将生命血变为蜂蜜生命血";
    choose.style.top = "37.35vw";
    choose.style.left = "51.45vw";
    pri();
    if (prime == 0 || time30 % 2 == 1) {
        time30++;
        saver = 4;
        if (time30 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein30 == 0) {
                end++;
                n30.style.backgroundImage = 'url(图片素材/hf/30s.png)';
                nowspend += saver;
                spent(nowspend);
                primein30 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/30.jpg)';
                ptime30 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time30 % 2 == 0 && primein30 == 1 && ptime30 == end) {
            n30.style.backgroundImage = 'url(图片素材/hf/30.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein30 = 0;
            puttoptime--;
            puttop[ptime30] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n31.onclick = function () {
    hfname.innerHTML = "蜂巢之血";
    big.style.backgroundImage = 'url(图片素材/hf/31.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take4.png)';

    p1.innerHTML = "蜂巢中珍贵的金色硬化花蜜块。随时间修复持有者的伤口，使其回复生命值而不需凝聚灵魂。";
    p2.innerHTML = "功能：将全部生命值转变为蜂蜜血";
    p3.innerHTML = "获得方式：在蜂巢打败蜜蜂骑士后获得";
    p4.innerHTML = "特殊搭配：与乔尼的祝福搭配可将蜂蜜血变为蜂蜜生命血";
    choose.style.top = "42vw";
    choose.style.left = "9.1vw";
    pri();
    if (prime == 0 || time31 % 2 == 1) {
        time31++;
        saver = 4;
        if (time31 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein31 == 0) {
                end++;
                n31.style.backgroundImage = 'url(图片素材/hf/31s.png)';
                nowspend += saver;
                spent(nowspend);
                primein31 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/31.jpg)';
                ptime31 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time31 % 2 == 0 && primein31 == 1 && ptime31 == end) {
            n31.style.backgroundImage = 'url(图片素材/hf/31.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein31 = 0;
            puttoptime--;
            puttop[ptime31] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n32.onclick = function () {
    hfname.innerHTML = "蘑菇孢子";
    big.style.backgroundImage = 'url(图片素材/hf/32.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take1.png)';
    p1.innerHTML = "由活的真菌物质组成。当暴露于灵魂之下时，能散发出孢子。当凝聚灵魂时，发射孢子云，缓慢伤害敌人。";
    p2.innerHTML = "功能：聚集灵魂完成后放出一片孢子云，持续4.1s，可造成27次伤害，一次一点，有4.25s冷却";
    p3.innerHTML = "获得方式：王后驿站下方的隐藏房间内获得";
    p4.innerHTML = "特殊搭配：详见巴德尔之壳、防御者纹章、乌恩之形、深度聚集";
    choose.style.top = "42vw";
    choose.style.left = "14.15vw";
    pri();
    if (prime == 0 || time32 % 2 == 1) {
        time32++;
        saver = 1;
        if (time32 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein32 == 0) {
                end++;
                n32.style.backgroundImage = 'url(图片素材/hf/32s.png)';
                nowspend += saver;
                spent(nowspend);
                primein32 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/32.jpg)';
                ptime32 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time32 % 2 == 0 && primein32 == 1 && ptime32 == end) {
            n32.style.backgroundImage = 'url(图片素材/hf/32.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein32 = 0;
            puttoptime--;
            puttop[ptime32] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n33.onclick = function () {
    hfname.innerHTML = "锋利之影";
    big.style.backgroundImage = 'url(图片素材/hf/33.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take2.png)';
    p1.innerHTML = "含有被禁用的法术，能将影子转换为致命的武器。当使用暗影冲刺时，持有者的身体会变得锋利，并伤害敌人。";
    p2.innerHTML = "功能：暗影冲刺会造成一次等同于一次骨钉的伤害、暗影冲刺距离增加39%";
    p3.innerHTML = "获得方式：深邃巢穴右下的隐藏房间内获得";
    p4.innerHTML = "特殊搭配：与冲刺大师壳提升50%黑冲伤害";
    choose.style.top = "42vw";
    choose.style.left = "19.2vw";
    pri();
    if (prime == 0 || time33 % 2 == 1) {
        time33++;
        saver = 2;
        if (time33 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein33 == 0) {
                end++;
                n33.style.backgroundImage = 'url(图片素材/hf/33s.png)';
                nowspend += saver;
                spent(nowspend);
                primein33 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/33.jpg)';
                ptime33 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time33 % 2 == 0 && primein33 == 1 && ptime33 == end) {
            n33.style.backgroundImage = 'url(图片素材/hf/33.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein33 = 0;
            puttoptime--;
            puttop[ptime33] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n34.onclick = function () {
    hfname.innerHTML = "乌恩之形";
    big.style.backgroundImage = 'url(图片素材/hf/34.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take2.png)';
    p1.innerHTML = "让持有者展现出内在的乌恩形态。当凝聚灵魂时，持有者将展现出新的外形，并可以自由移动以避开敌人。";
    p2.innerHTML = "功能：聚集灵魂时变成一只蛞蝓，可以左右移动，人物体积减小";
    p3.innerHTML = "获得方式：乌恩之湖左边下去";
    p4.innerHTML = "特殊搭配：详见巴德尔之壳、快速聚集、蘑菇孢子";
    choose.style.top = "42vw";
    choose.style.left = "24.25vw";
    pri();
    if (prime == 0 || time34 % 2 == 1) {
        time34++;
        saver = 2;
        if (time34 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein34 == 0) {
                end++;
                n34.style.backgroundImage = 'url(图片素材/hf/34s.png)';
                nowspend += saver;
                spent(nowspend);
                primein34 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/34.jpg)';
                ptime34 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time34 % 2 == 0 && primein34 == 1 && ptime34 == end) {
            n34.style.backgroundImage = 'url(图片素材/hf/34.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein34 = 0;
            puttoptime--;
            puttop[ptime34] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n35.onclick = function () {
    hfname.innerHTML = "骨钉大师的荣耀";
    big.style.backgroundImage = 'url(图片素材/hf/35.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take1.png)';
    p1.innerHTML = "包含一个骨钉大师的激情、技能和遗憾。提高持有者对骨钉技艺的掌握，使其更快地集中力量并释放技艺。";
    p2.innerHTML = "功能：骨钉技蓄力时间缩短为0.75s（原1.75s）";
    p3.innerHTML = "获得方式：学会三个骨钉技艺后找德特茅斯的斯莱获取";
    p4.innerHTML = "";
    choose.style.top = "42vw";
    choose.style.left = "29.3vw";
    pri();
    if (prime == 0 || time35 % 2 == 1) {
        time35++;
        saver = 1;
        if (time35 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein35 == 0) {
                end++;
                n35.style.backgroundImage = 'url(图片素材/hf/35s.png)';
                nowspend += saver;
                spent(nowspend);
                primein35 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/35.jpg)';
                ptime35 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time35 % 2 == 0 && primein35 == 1 && ptime35 == end) {
            n35.style.backgroundImage = 'url(图片素材/hf/35.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein35 = 0;
            puttoptime--;
            puttop[ptime35] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n36.onclick = function () {
    hfname.innerHTML = "编制者之歌";
    big.style.backgroundImage = 'url(图片素材/hf/36.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take2.png)';
    p1.innerHTML = "一个缠丝的护符，蕴含着那些离开圣巢返回家乡的编织者所留下的离别之歌。生成编织者幼体，陪伴并保护孤独寂寞的持有者。";
    p2.innerHTML = "功能：召唤3只小蜘蛛，小蜘蛛自身无敌，会主动攻击敌人，伤害为3";
    p3.innerHTML = "获得方式：深邃巢穴中间的隐藏房间内获得";
    p4.innerHTML = "特殊搭配：详见飞毛腿、幼虫之歌";
    choose.style.top = "42vw";
    choose.style.left = "34.35vw";
    pri();
    if (prime == 0 || time36 % 2 == 1) {
        time36++;
        saver = 2;
        if (time36 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein36 == 0) {
                end++;
                n36.style.backgroundImage = 'url(图片素材/hf/36s.png)';
                nowspend += saver;
                spent(nowspend);
                primein36 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/36.jpg)';
                ptime36 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time36 % 2 == 0 && primein36 == 1 && ptime36 == end) {
            n36.style.backgroundImage = 'url(图片素材/hf/36.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein36 = 0;
            puttoptime--;
            puttop[ptime36] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n37.onclick = function () {
    hfname.innerHTML = "舞梦者";
    big.style.backgroundImage = 'url(图片素材/hf/37.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take1.png)';
    p1.innerHTML = "专门给挥动梦之钉和收集精华的人准备的临时护符。允许持有者更快地对梦之钉充能，并在击中敌人时收集更多灵魂。";
    p2.innerHTML = "功能：将挥舞梦之钉所需时间降低为0.9s（原为2.4s）；击中敌人获得灵魂增加为66（原为33）杀死敌人掉落精华的概率翻倍";
    p3.innerHTML = "获得方式：收集500精华后先知给予";
    p4.innerHTML = "特殊搭配：与梦之盾盾的大小增加15%，恢复速度加快";
    choose.style.top = "42vw";
    choose.style.left = "39.4vw";
    pri();
    if (prime == 0 || time37 % 2 == 1) {
        time37++;
        saver = 1;
        if (time37 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein37 == 0) {
                end++;
                n37.style.backgroundImage = 'url(图片素材/hf/37s.png)';
                nowspend += saver;
                spent(nowspend);
                primein37 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/37.jpg)';
                ptime37 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time37 % 2 == 0 && primein37 == 1 && ptime37 == end) {
            n37.style.backgroundImage = 'url(图片素材/hf/37.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein37 = 0;
            puttoptime--;
            puttop[ptime37] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n38.onclick = function () {
    hfname.innerHTML = "梦之盾";
    big.style.backgroundImage = 'url(图片素材/hf/38.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take3.png)';
    p1.innerHTML = "曾经被一个能塑造梦境的部落所使用的防御性护符。召唤出一面跟随持有者的盾牌，试图使其受到保护。";
    p2.innerHTML = "功能：召唤一面绕自身旋转的盾牌，能挡下绝大部分的远程攻击，碰到敌人会造成一次等同于当前骨钉伤害的伤害，然后盾牌消失，约3s恢复";
    p3.innerHTML = "获得方式：安息之地的隐藏房间获得";
    p4.innerHTML = "特殊搭配：与舞梦者盾的大小增加15%，恢复速度加快";
    choose.style.top = "42vw";
    choose.style.left = "44.45vw";
    pri();
    if (prime == 0 || time38 % 2 == 1) {
        time38++;
        saver = 3;
        if (time38 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein38 == 0) {
                end++;
                n38.style.backgroundImage = 'url(图片素材/hf/38s.png)';
                nowspend += saver;
                spent(nowspend);
                primein38 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/38.jpg)';
                ptime38 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time38 % 2 == 0 && primein38 == 1 && ptime38 == end) {
            n38.style.backgroundImage = 'url(图片素材/hf/38.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein38 = 0;
            puttoptime--;
            puttop[ptime38] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n39.onclick = function () {
    hfname.innerHTML = "格林之子";
    big.style.backgroundImage = 'url(图片素材/hf/39.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take2.png)';
    p1.innerHTML = "参与格林剧团的仪式需要佩戴的护符。持有者需要寻找格林亲族并收集它们的火焰。尚未收集的火焰将会标记在持有者的地图上。";
    p2.innerHTML = "功能：召唤小格林在身后发呆，在地图上显示火焰位置";
    p3.innerHTML = "获得方式：呼啸山崖点火后返回德特茅斯；格林给与";
    p4.innerHTML = "";
    choose.style.top = "42vw";
    choose.style.left = "49.5vw";
    pri();
    if (prime == 0 || time39 % 2 == 1) {
        time39++;
        saver = 2;
        if (time39 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein39 == 0) {
                end++;
                n39.style.backgroundImage = 'url(图片素材/hf/39s.png)';
                nowspend += saver;
                spent(nowspend);
                primein39 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/39.jpg)';
                ptime39 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time39 % 2 == 0 && primein39 == 1 && ptime39 == end) {
            n39.style.backgroundImage = 'url(图片素材/hf/39.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein39 = 0;
            puttoptime--;
            puttop[ptime39] = null;
            topf();
            end--;
            newtime--;
        }
    }
}

n40.onclick = function () {
    hfname.innerHTML = "国王之魂";
    big.style.backgroundImage = 'url(图片素材/hf/40.jpg)';
    spend.style.backgroundImage = 'url(图片素材/hf/take5.png)';
    p1.innerHTML = "象征着高等生灵相互结合的圣洁护符。持有者能慢慢吸收其中无限的灵魂。能打开通往出生地的道路。";
    p2.innerHTML = "功能：每2s回复4点灵魂，打开深渊的隐藏区域";
    p3.innerHTML = "获得方式：左半部分由王后花园白色女士给与，右半部分由白色宫殿白王给与";
    p4.innerHTML = "";
    choose.style.top = "42vw";
    choose.style.left = "54.55vw";
    pri();
    if (prime == 0 || time40 % 2 == 1) {
        time40++;
        saver = 5;
        if (time40 % 2 == 1 && 9 - nowspend >= saver) {
            if (primein40 == 0) {
                end++;
                n40.style.backgroundImage = 'url(图片素材/hf/40s.png)';
                nowspend += saver;
                spent(nowspend);
                primein40 = 1;
                puttop[puttoptime] = 'url(图片素材/hf/40.jpg)';
                ptime40 = puttoptime;
                puttoptime++;
                topf();
                newtime++;
            }
        } else if (time40 % 2 == 0 && primein40 == 1 && ptime40 == end) {
            n40.style.backgroundImage = 'url(图片素材/hf/40.jpg)';
            nowspend -= saver;
            spent(nowspend);
            primein40 = 0;
            puttoptime--;
            puttop[ptime40] = null;
            topf();
            end--;
            newtime--;
        }
    }
}


function spent(nowspend) {
    switch (nowspend) {
        case 0:
            putbottom.style.backgroundImage = '';
            break;
        case 1:
            putbottom.style.backgroundImage = 'url(图片素材/hf/take1.png)';
            break;
        case 2:
            putbottom.style.backgroundImage = 'url(图片素材/hf/take2.png)';
            break;
        case 3:
            putbottom.style.backgroundImage = 'url(图片素材/hf/take3.png)';
            break;
        case 4:
            putbottom.style.backgroundImage = 'url(图片素材/hf/take4.png)';
            break;
        case 5:
            putbottom.style.backgroundImage = 'url(图片素材/hf/take5.png)';
            break;
        case 6:
            putbottom.style.backgroundImage = 'url(图片素材/hf/take6.png)';
            break;
        case 7:
            putbottom.style.backgroundImage = 'url(图片素材/hf/take7.png)';
            break;
        case 8:
            putbottom.style.backgroundImage = 'url(图片素材/hf/take8.png)';
            break;
        case 9:
            putbottom.style.backgroundImage = 'url(图片素材/hf/take9.png)';
            break;
    }
}

var gltime = 0;

hfname.onclick = function () {
    if (hfname.innerHTML == '易碎心脏') {
        hfname.innerHTML = '坚固心脏';
        p1.innerHTML = '加持有者的生命值，承受更多伤害。';
        p2.innerHTML = '功能：增加2点生命上限，死亡后不会损坏';
        p3.innerHTML = '获得方式：将护符给予格林剧团的迪万，再花12000G买回即可'
        big.style.backgroundImage = 'url(图片素材/hf/11+.jpg)';
    } else if (hfname.innerHTML == '坚固心脏') {
        hfname.innerHTML = '易碎心脏';
        p1.innerHTML = '加持有者的生命值，承受更多伤害。这个护符十分脆弱，如果它的持有者被杀死就会损坏。';
        p2.innerHTML = '功能：增加2点生命上限，死亡后会损坏，需要在食腿者处花200G修复';
        p3.innerHTML = '获得方式：真菌荒地的食腿者350G出售（携带防御者纹章可以打八折）';
        big.style.backgroundImage = 'url(图片素材/hf/11.jpg)';
    }
    if (hfname.innerHTML == '易碎贪婪') {
        hfname.innerHTML = '坚固贪婪';
        p1.innerHTML = '使得持有者在击败敌人时能找到更多的吉欧。'
        p2.innerHTML = '功能：杀怪掉落额外20%~60%的吉欧，死亡后不会损坏';
        p3.innerHTML = '获得方式：将护符给予格林剧团的迪万，再花9000G买回即可'
        big.style.backgroundImage = 'url(图片素材/hf/12+.jpg)';
    } else if (hfname.innerHTML == '坚固贪婪') {
        hfname.innerHTML = '易碎贪婪';
        p1.innerHTML = '使得持有者在击败敌人时能找到更多的吉欧。这个护符十分脆弱，如果它的持有者被杀死就会损坏。';
        p2.innerHTML = '功能：杀怪掉落额外20%~60%的吉欧，死亡后会损坏，需要在食腿者处花150G修复';
        p3.innerHTML = '获得方式：真菌荒地的食腿者350G出售（携带防御者纹章可以打八折）';
        big.style.backgroundImage = 'url(图片素材/hf/12.jpg)';
    }
    if (hfname.innerHTML == '易碎力量') {
        hfname.innerHTML = '坚固力量';
        p1.innerHTML = '增强持有者的攻击力，使其骨钉能够对敌人造成更多伤害。'
        p2.innerHTML = '功能：增加50%的平A伤害，死亡后不会损坏';
        p3.innerHTML = '获得方式：将护符给予格林剧团的迪万，再花15000G买回即可'
        big.style.backgroundImage = 'url(图片素材/hf/13+.jpg)';
    } else if (hfname.innerHTML == '坚固力量') {
        hfname.innerHTML = '易碎力量';
        p1.innerHTML = '增强持有者的攻击力，使其骨钉能够对敌人造成更多伤害。这个护符十分脆弱，如果它的持有者被杀死就会损坏。';
        p2.innerHTML = '功能：增加50%的平A伤害，死亡后会损坏，需要在食腿者处花350G修复';
        p3.innerHTML = '获得方式：真菌荒地的食腿者350G出售（携带防御者纹章可以打八折）';
        big.style.backgroundImage = 'url(图片素材/hf/13.jpg)';
    }
    if (hfname.innerHTML == '无忧旋律') {
        hfname.innerHTML = "格林之子";
        spend.style.backgroundImage = "url(图片素材/hf/take2.png)"
        big.style.backgroundImage = 'url(图片素材/hf/39.jpg)';
        p1.innerHTML = "参与格林剧团的仪式需要佩戴的护符。持有者需要寻找格林亲族并收集它们的火焰。尚未收集的火焰将会标记在持有者的地图上。";
        p2.innerHTML = "功能：功能：召唤小格林在身后发呆，在地图上显示火焰位置";
        p3.innerHTML = "获得方式：呼啸山崖点火后返回德特茅斯；格林给与";
    }
    if (gltime == 0 && hfname.innerHTML == "格林之子") {
        big.style.backgroundImage = 'url(图片素材/hf/39+.jpg)';
        p2.innerHTML = "功能：召唤小格林在身后，小格林会吐出火球攻击敌人，伤害为5，在地图上显示火焰位置";
        p3.innerHTML = "获得方式：搜集3枚火焰后返回德特茅斯；格林给与";
        gltime++;
    } else
        if (gltime == 1 && hfname.innerHTML == "格林之子") {
            big.style.backgroundImage = 'url(图片素材/hf/39++.jpg)';
            p2.innerHTML = "功能：召唤小格林在身后，小格林会吐出火球攻击敌人，伤害为8，在地图上显示火焰位置";
            p3.innerHTML = "获得方式：搜集6枚火焰后返回德特茅斯；打败格林给与";
            gltime++;
        } else
            if (gltime == 2 && hfname.innerHTML == "格林之子") {
                big.style.backgroundImage = 'url(图片素材/hf/39+++.jpg)';
                p2.innerHTML = "功能：召唤小格林在身后，小格林会吐出火球攻击敌人，伤害为11";
                p3.innerHTML = "获得方式：搜集9枚火焰后返回德特茅斯；打败梦魇之王格林给与";
                gltime++;
            } else
                if (gltime == 3 && hfname.innerHTML == "格林之子") {
                    big.style.backgroundImage = 'url(图片素材/hf/39-.jpg)';
                    spend.style.backgroundImage = "url(图片素材/hf/take3.png)"
                    hfname.innerHTML = "无忧旋律";
                    p1.innerHTML = '驱逐格林剧团后尼姆赠与的护符';
                    p2.innerHTML = "功能：有几率抵消一次伤害，几率与受伤次数有关。";
                    p3.innerHTML = "获得方式：打败格林团长之后，去遥远的村庄与布鲁姆对话；再到呼啸悬崖灭火，最后到德特茅斯与尼姆对话获得";
                    gltime = 0;
                }
    if (hfname.innerHTML == '国王之魂') {
        hfname.innerHTML = '虚空之心';
        p1.innerHTML = "";
        spend.style.backgroundImage = "";
        big.style.backgroundImage = "url(图片素材/hf/40+.jpg)";
        p2.innerHTML = "功能：阴影和兄弟不会攻击你，你可以一击干掉他们，虚空卷须不再出现，可以打开其他四个结局。";
        p3.innerHTML = "获得方式：装备国王之魂后进入深渊底部的隐藏区域，用觉醒的梦钉攻击里面的黑卵，再从深渊爬上来触发剧情后由国王之魂转化。";
    } else if (hfname.innerHTML == '虚空之心') {
        hfname.innerHTML = '国王之魂';
        spend.style.backgroundImage = "url(图片素材/hf/take5.png)";
        big.style.backgroundImage = "url(图片素材/hf/40.jpg)";
        p1.innerHTML = '象征着高等生灵相互结合的圣洁护符。持有者能慢慢吸收其中无限的灵魂。能打开通往出生地的道路。';
        p2.innerHTML = "功能：每2s回复4点灵魂，打开深渊的隐藏区域";
        p3.innerHTML = "获得方式：左半部分由王后花园白色女士给与，右半部分由白色宫殿白王给与";
    }
}

big.onclick = function () {
    if (hfname.innerHTML == '易碎心脏') {
        hfname.innerHTML = '坚固心脏';
        p1.innerHTML = '加持有者的生命值，承受更多伤害。';
        p2.innerHTML = '功能：增加2点生命上限，死亡后不会损坏';
        p3.innerHTML = '获得方式：将护符给予格林剧团的迪万，再花12000G买回即可'
        big.style.backgroundImage = 'url(图片素材/hf/11+.jpg)';
    } else if (hfname.innerHTML == '坚固心脏') {
        hfname.innerHTML = '易碎心脏';
        p1.innerHTML = '加持有者的生命值，承受更多伤害。这个护符十分脆弱，如果它的持有者被杀死就会损坏。';
        p2.innerHTML = '功能：增加2点生命上限，死亡后会损坏，需要在食腿者处花200G修复';
        p3.innerHTML = '获得方式：真菌荒地的食腿者350G出售（携带防御者纹章可以打八折）';
        big.style.backgroundImage = 'url(图片素材/hf/11.jpg)';
    }
    if (hfname.innerHTML == '易碎贪婪') {
        hfname.innerHTML = '坚固贪婪';
        p1.innerHTML = '使得持有者在击败敌人时能找到更多的吉欧。'
        p2.innerHTML = '功能：杀怪掉落额外20%~60%的吉欧，死亡后不会损坏';
        p3.innerHTML = '获得方式：将护符给予格林剧团的迪万，再花9000G买回即可'
        big.style.backgroundImage = 'url(图片素材/hf/12+.jpg)';
    } else if (hfname.innerHTML == '坚固贪婪') {
        hfname.innerHTML = '易碎贪婪';
        p1.innerHTML = '使得持有者在击败敌人时能找到更多的吉欧。这个护符十分脆弱，如果它的持有者被杀死就会损坏。';
        p2.innerHTML = '功能：杀怪掉落额外20%~60%的吉欧，死亡后会损坏，需要在食腿者处花150G修复';
        p3.innerHTML = '获得方式：真菌荒地的食腿者350G出售（携带防御者纹章可以打八折）';
        big.style.backgroundImage = 'url(图片素材/hf/12.jpg)';
    }
    if (hfname.innerHTML == '易碎力量') {
        hfname.innerHTML = '坚固力量';
        p1.innerHTML = '增强持有者的攻击力，使其骨钉能够对敌人造成更多伤害。'
        p2.innerHTML = '功能：增加50%的平A伤害，死亡后不会损坏';
        p3.innerHTML = '获得方式：将护符给予格林剧团的迪万，再花15000G买回即可'
        big.style.backgroundImage = 'url(图片素材/hf/13+.jpg)';
    } else if (hfname.innerHTML == '坚固力量') {
        hfname.innerHTML = '易碎力量';
        p1.innerHTML = '增强持有者的攻击力，使其骨钉能够对敌人造成更多伤害。这个护符十分脆弱，如果它的持有者被杀死就会损坏。';
        p2.innerHTML = '功能：增加50%的平A伤害，死亡后会损坏，需要在食腿者处花350G修复';
        p3.innerHTML = '获得方式：真菌荒地的食腿者350G出售（携带防御者纹章可以打八折）';
        big.style.backgroundImage = 'url(图片素材/hf/13.jpg)';
    }
    if (hfname.innerHTML == '无忧旋律') {
        hfname.innerHTML = "格林之子";
        spend.style.backgroundImage = "url(图片素材/hf/take2.png)"
        big.style.backgroundImage = 'url(图片素材/hf/39.jpg)';
        p1.innerHTML = "参与格林剧团的仪式需要佩戴的护符。持有者需要寻找格林亲族并收集它们的火焰。尚未收集的火焰将会标记在持有者的地图上。";
        p2.innerHTML = "功能：功能：召唤小格林在身后发呆，在地图上显示火焰位置";
        p3.innerHTML = "获得方式：呼啸山崖点火后返回德特茅斯；格林给与";
    }
    if (gltime == 0 && hfname.innerHTML == "格林之子") {
        big.style.backgroundImage = 'url(图片素材/hf/39+.jpg)';
        p2.innerHTML = "功能：召唤小格林在身后，小格林会吐出火球攻击敌人，伤害为5，在地图上显示火焰位置";
        p3.innerHTML = "获得方式：搜集3枚火焰后返回德特茅斯；格林给与";
        gltime++;
    } else
        if (gltime == 1 && hfname.innerHTML == "格林之子") {
            big.style.backgroundImage = 'url(图片素材/hf/39++.jpg)';
            p2.innerHTML = "功能：召唤小格林在身后，小格林会吐出火球攻击敌人，伤害为8，在地图上显示火焰位置";
            p3.innerHTML = "获得方式：搜集6枚火焰后返回德特茅斯；打败格林给与";
            gltime++;
        } else
            if (gltime == 2 && hfname.innerHTML == "格林之子") {
                big.style.backgroundImage = 'url(图片素材/hf/39+++.jpg)';
                p2.innerHTML = "功能：召唤小格林在身后，小格林会吐出火球攻击敌人，伤害为11";
                p3.innerHTML = "获得方式：搜集9枚火焰后返回德特茅斯；打败梦魇之王格林给与";
                gltime++;
            } else
                if (gltime == 3 && hfname.innerHTML == "格林之子") {
                    big.style.backgroundImage = 'url(图片素材/hf/39-.jpg)';
                    spend.style.backgroundImage = "url(图片素材/hf/take3.png)"
                    hfname.innerHTML = "无忧旋律";
                    p1.innerHTML = '驱逐格林剧团后尼姆赠与的护符';
                    p2.innerHTML = "功能：有几率抵消一次伤害，几率与受伤次数有关。";
                    p3.innerHTML = "获得方式：打败格林团长之后，去遥远的村庄与布鲁姆对话；再到呼啸悬崖灭火，最后到德特茅斯与尼姆对话获得";
                    gltime = 0;
                }
    if (hfname.innerHTML == '国王之魂') {
        hfname.innerHTML = '虚空之心';
        p1.innerHTML = "";
        spend.style.backgroundImage = "";
        big.style.backgroundImage = "url(图片素材/hf/40+.jpg)";
        p2.innerHTML = "功能：阴影和兄弟不会攻击你，你可以一击干掉他们，虚空卷须不再出现，可以打开其他四个结局。";
        p3.innerHTML = "获得方式：装备国王之魂后进入深渊底部的隐藏区域，用觉醒的梦钉攻击里面的黑卵，再从深渊爬上来触发剧情后由国王之魂转化。";
    } else if (hfname.innerHTML == '虚空之心') {
        hfname.innerHTML = '国王之魂';
        spend.style.backgroundImage = "url(图片素材/hf/take5.png)";
        big.style.backgroundImage = "url(图片素材/hf/40.jpg)";
        p1.innerHTML = '象征着高等生灵相互结合的圣洁护符。持有者能慢慢吸收其中无限的灵魂。能打开通往出生地的道路。';
        p2.innerHTML = "功能：每2s回复4点灵魂，打开深渊的隐藏区域";
        p3.innerHTML = "获得方式：左半部分由王后花园白色女士给与，右半部分由白色宫殿白王给与";
    }
}