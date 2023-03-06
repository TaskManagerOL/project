// 音乐盒制作开始
var previous = document.getElementById('previous');
var pause = document.getElementById('pause');
var next = document.getElementById('next');
var loop = document.getElementById('loop');
var music = document.getElementById('music');
var musiclibrary = new Array('游戏原声/Christopher Larkin - Hollow Knight.mp3', '游戏原声/Christopher Larkin - City of Tears.mp3', '游戏原声/Christopher Larkin - Crossroads.mp3', '游戏原声/Christopher Larkin - Greenpath.mp3', '游戏原声/Christopher Larkin - Dream.mp3', '游戏原声/Christopher Larkin - Soul Sanctum.mp3', "游戏原声/Christopher Larkin - Kingdom's Edge.mp3")
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


//boss背景图制作

var bosstime = 0;
var picture = document.getElementById('picture');
var leftbutton = document.getElementById('leftbutton');
var rightbutton = document.getElementById('rightbutton');
var bossname = document.getElementById('name');
var des1 = document.getElementById('des1');
var des2 = document.getElementById('des2');
var des3 = document.getElementById('des3');
var des4 = document.getElementById('des4');

var picturelibrary = new Array('url(图片素材/boss/fg.jpg)', 'url(图片素材/boss/dhf.jpg)', 'url(图片素材/boss/ccrq.jpg)', 'url(图片素材/boss/myzw.jpg)', 'url(图片素材/boss/ptlz.jpg)');
var namelibrary = new Array('辐光', '大黄蜂', '纯粹容器', '梦魇之王', '叛徒领主');
var des1library = new Array(
    '纠缠着圣巢昆虫尸骸的瘟疫、感染、疯狂……从这个衰败王国的子民眼中尖啸而出的光芒。这是源自何处？我这样的凡夫大概永远不会明白吧。',
    '我见过这个敏捷的小生物。我以为她是猎物，于是扑了过去，但她在一瞬间就用飞刀刺伤了我，随后绝尘而去。她也是……猎人吗？',
    '“神圣外壳中最深处之沉寂，予以骨钉，冠以骑士之名，为锁链、卵与法术所束缚，聆听吾等之祈愿！显露汝之光芒！”——容器祷词',
    '过去梦境的广阔天空被割裂，有一块领域永远被分离一旁，深不可见之处，跳动的猩红，沉眠之恐惧。梦魇之心。 —— 先知',
    '我感受过那种渴望。让感染进入自身的渴望。变得更强大，更威猛……这些想法在最黑暗的时候一直萦绕在我的梦中。这是虚假的希望，但能在人的脑海中熊熊燃烧。'
)
var des2library = new Array(
    '辐光是一道光芒，很像是精华，属于高等生灵。虚空与她对立，是她的宿敌。飞蛾部落是从她的光芒中诞生的，他们十分崇敬她。',
    '大黄蜂是深邃巢穴的女王野兽赫拉与苍白之王的女儿。她的出生是母亲赫拉与苍白之王交易的结果，被白色夫人称之为不忠举动。作为交换赫拉与圣巢结盟并成为了一名守梦者，因此大黄蜂与她的母亲共同度过的时间很短。她和小骑士及其他容器们是同胞，因为他们有同一位父亲。',
    '空洞骑士是被苍白之王选中封印辐光并拯救圣巢不受感染侵害的容器。与它的容器同胞们一样，它是圣巢的国王与王后的造物，生于深渊，被注入虚空的力量，且没有性别。根据需求，它们应当成为没有心智，没有意志，没有声音的容器，才能封印辐光的感染，在众多同胞们中，只有空洞骑士最后被选出，并被冠以“纯粹容器”之名被养育和训练，最终完全成长，达到容器的最强形态。',
    '格林是一个神秘的巡演剧团，格林剧团的团长。实际上，格林和他的剧团来自于噩梦，会去往任何梦魇之灯被侍从点亮的地方。他们从废土之上收集梦魇火焰，献给实际掌控剧团的那不祥存在，梦魇之心。',
    '叛徒领主曾与他的姐妹们一样，是螳螂部落的领导者。他有些厌恶圣巢。此外，他还不认同他的女儿和灰色哀悼者的爱情关系。'
)
var des3library = new Array(
    '后来，苍白之王到达圣巢，并且以扩张思想的方式发展了新的臣民，结果飞蛾部落背叛了辐光，转而崇拜白王。因此，辐光几乎完全被遗忘了。不过，她的信仰还是留下了踪迹，例如圣巢之冠上的雕像。这时，圣巢正值鼎盛时期，辐光的记忆却开始在王国里传播。',
    '大黄蜂在深邃巢穴被编织者们养育长大，在瘟疫降临，她守护着王国边缘的遗弃外壳，那里有能打开深渊的王之印记。她在呼啸悬崖遇到了刚刚抵达圣巢的奎若。大黄蜂试图攻击奎若，但她的攻击被奎若头上所戴的莫诺蒙的面具挡下了。奎若自己并不清楚，但在认出面具后，大黄蜂意识到对方是被莫诺蒙召唤来的，于是停止攻击并离开了。她的针是为她特别打造的，并没有多少虫子拥有自如挥舞这根针的技巧。',
    '最终，它封印了辐光：辐光被封印在它体内，而它又被封印在黑卵圣殿内，被锁链束缚着，被期望着能够永远地封印感染。然而，因为它已经不再纯粹，所以辐光仍能继续在众人梦中散布瘟疫。最终，瘟疫复苏，王国覆灭，只留下一片废墟。',
    '格林团长的性格迷人而有趣。在噩梦之中的他，梦魇之王的思想完全专注于他所臣服的梦魇之心。他们的仪式目的就是供养梦魇之心，用梦魇火焰喂养格林之子就是其中开始的一环。也是为此，他们之后会杀死梦魇之王，然后格林之子便将会成为新一任梦魇之王。',
    '螳螂领主们的三个座位右侧有一把已被毁坏的椅子，可能原先就是属于他的。他和他的追随者们主动接受了感染，变得更加强大，也背叛了他的姐妹。很可能是因为感染而被驱逐出了螳螂村，但也有可能在感染前。经过一段时间的漂泊，他们最终抵达了王后花园并在那里安身。他们想设法占领花园，将王后花园变成只属于自己的领地，因此想把白色王后从她的寓所驱逐出去，但都被她的守护者，骑士德莱娅阻挡下了。尽管在这件事上没能成功，但被驱逐的叛徒领主和其他叛徒螳螂们仍留在花园中。如今驱使他们行动的神志中只剩下了基本的领地意识与野性本能。'
)
var des4library = new Array(
    '不久，圣巢的所有虫子都开始梦到她，那一道耀眼的光芒。这种梦会使虫子的心智破碎，最终意志也受辐光役使。但是，白王和他的臣民试图抵抗这种梦境，于是记忆的扩散就形成了感染。辐光通过感染让虫子实现统一，然而代价是失去思考的能力。 。她促使感染恢复全盛状态，再次危害到圣巢的土地，同时也使得小骑士回到圣巢。',
    '和奎若与小骑士一样，大黄蜂感知到了瘟疫的复苏，并在圣巢四处寻找答案。在《空洞骑士》中，她试着阻止圣巢阴魂不散的覆灭命运。',
    '之后，辐光的力量再次从空洞骑士体内爆发，使它的外壳出现裂痕，也使它彻底被感染。已死王国的废墟之中再次传播起了致命的瘟疫。这使小骑士回到圣巢的废墟中。小骑士在杀死三位封印黑卵入口的守梦者后，就能解除空洞骑士的束缚，与它战斗，并让它解脱。',
    '格林认识沃姆，知道小骑士是被抛弃的容器',
    '叛徒领主有一个女儿，但早已逝去。她的坟墓位于王后花园内的鹿角虫站上方一个布满层层藤蔓的洞穴中。在神居中他的战斗场地背景里也能看到她的坟墓与许多娇嫩的花。'
)


rightbutton.onclick = function () {
    bosstime++;
    if (bosstime == 5) {
        bosstime = 0;
    }
    picture.style.backgroundImage = picturelibrary[bosstime];
    bossname.innerHTML = namelibrary[bosstime];
    des1.innerHTML = des1library[bosstime];
    des2.innerHTML = des2library[bosstime];
    des3.innerHTML = des3library[bosstime];
    des4.innerHTML = des4library[bosstime];
}

leftbutton.onclick = function () {
    if (bosstime == 0) {
        bosstime = 5;
    }
    bosstime--;
    picture.style.backgroundImage = picturelibrary[bosstime];
    bossname.innerHTML = namelibrary[bosstime];
    des1.innerHTML = des1library[bosstime];
    des2.innerHTML = des2library[bosstime];
    des3.innerHTML = des3library[bosstime];
    des4.innerHTML = des4library[bosstime];
}

//结束

//生命籽跑动制作开始

var smz = document.getElementById('smz');
var saver = 0;
smz.onclick = function () {
    smz.style.animation = 'line 0.2s linear infinite, run 10s linear infinite';
    setTimeout(() => {
        smz.style.animation = "line 0.45s linear infinite, run 10s linear infinite";
    }, 1500);
}

// 结束

//map滚动制作开始
var over = document.getElementById('over');
var behind = document.getElementById('behind');
var scroll = document.getElementById('scroll');
over.onclick = function () {
    if (scroll.offsetTop == 0) {
        scroll.style.top = - 800 + 'px';
        scroll.style.transition = 'all 0s ease-in-out';
        scroll.style.top = scroll.offsetTop + 100 + 'px';
        scroll.style.transition = 'all 0.5s ease-in-out';
    } else {
        scroll.style.top = scroll.offsetTop + 100 + 'px';
        scroll.style.transition = 'all 0.5s ease-in-out';
    }
    over.disabled = true;
    window.setTimeout(function () {
        over.disabled = false;
    }, 500);
}

behind.onclick = function () {
    if (scroll.offsetTop == -800) {
        scroll.style.top = 0 + 'px';
        scroll.style.transition = 'all 0s ease-in-out';
        scroll.style.top = scroll.offsetTop - 100 + 'px';
        scroll.style.transition = 'all 0.5s ease-in-out';
    } else {
        scroll.style.top = scroll.offsetTop - 100 + 'px';
        scroll.style.transition = 'all 0.5s ease-in-out';
    }
    behind.disabled = true;
    window.setTimeout(function () {
        behind.disabled = false;
    }, 500);
}

// 结束

// 图片内容轮播制作开始
var changemap1 = document.getElementById('map1');
var changemap2 = document.getElementById('map2');
var changemap3 = document.getElementById('map3');
var changemap4 = document.getElementById('map4');
var changemap5 = document.getElementById('map5');
var changemap6 = document.getElementById('map6');
var changemap7 = document.getElementById('map7');
var changemap8 = document.getElementById('map8');
var changemap1s = document.getElementById('forscroll1');
var changemap2s = document.getElementById('forscroll2');
var changemap3s = document.getElementById('forscroll3');
var changemap4s = document.getElementById('forscroll4');
var changemap5s = document.getElementById('forscroll5');
var map = document.getElementById('map');
var prelode1 = document.getElementById('prelode-01');
var prelode2 = document.getElementById('prelode-02');
var prelode3 = document.getElementById('prelode-03');
window.onload = function () {
    changemap1.onclick = function () {
        map.style.animation = 'bsgd 27s ease-in-out infinite';
    }
    changemap1s.onclick = function () {
        map.style.animation = 'bsgd 27s ease-in-out infinite';
    }
    changemap2.onclick = function () {
        map.style.animation = 'glpd 27s ease-in-out infinite';
    }
    changemap2s.onclick = function () {
        map.style.animation = 'glpd 27s ease-in-out infinite';
    }
    changemap3.onclick = function () {
        map.style.animation = 'hxsy 27s ease-in-out infinite';
    }
    changemap3s.onclick = function () {
        map.style.animation = 'hxsy 27s ease-in-out infinite';
    }
    changemap4.onclick = function () {
        map.style.animation = 'lszc 27s ease-in-out infinite';
    }
    changemap4s.onclick = function () {
        map.style.animation = 'lszc 27s ease-in-out infinite';
    }
    changemap5.onclick = function () {
        map.style.animation = 'zjhd 27s ease-in-out infinite';
    }
    changemap5s.onclick = function () {
        map.style.animation = 'zjhd 27s ease-in-out infinite';
    }
    changemap6.onclick = function () {
        map.style.animation = 'ywszl 27s ease-in-out infinite';
    }
    changemap7.onclick = function () {
        map.style.animation = 'sjsf 27s ease-in-out infinite';
    }
    changemap8.onclick = function () {
        map.style.animation = 'axzd 27s ease-in-out infinite';
    }
}

// 结束