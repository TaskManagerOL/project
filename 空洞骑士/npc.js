// 音乐盒制作开始
var previous = document.getElementById('previous');
var pause = document.getElementById('pause');
var next = document.getElementById('next');
var loop = document.getElementById('loop');
var music = document.getElementById('music');
var musiclibrary = new Array('游戏原声/Christopher Larkin - Greenpath.mp3', '游戏原声/Christopher Larkin - Dream.mp3', '游戏原声/Christopher Larkin - Soul Sanctum.mp3', "游戏原声/Christopher Larkin - Kingdom's Edge.mp3", '游戏原声/Christopher Larkin - Hollow Knight.mp3', '游戏原声/Christopher Larkin - City of Tears.mp3', '游戏原声/Christopher Larkin - Crossroads.mp3')
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
var topbutton = document.getElementById('topbutton');
var buttombutton = document.getElementById('bottombutton');
var allmove = document.getElementById("allmove");
var vacation = 0;
var part = "jq";
var partnum = -60;
var big = document.getElementById("big");
var npcname = document.getElementById("npcname");
var des = document.getElementById("des");
var txt = document.getElementById("txt");
var tou = document.getElementById("tou");
topbutton.onclick = function () {
    if (vacation == 0) {
        topbutton.disabled = true;
    } else {
        vacation = vacation + 5;
        allmove.style.top = vacation + 'vw';
        remeber();
    }
    topbutton.disabled = true;
    window.setTimeout(function () {
        topbutton.disabled = false;
    }, 500);
}
bottombutton.onclick = function () {
    if (vacation == partnum) {
        buttombutton.disabled = true;
    } else {
        vacation = vacation - 5;
        allmove.style.top = vacation + 'vw';
        remeber();
    }
    buttombutton.disabled = true;
    window.setTimeout(function () {
        buttombutton.disabled = false;
    }, 500);
}


function remeber() {
    if (part == "sj") {
        partnum = -30;
        tou.innerHTML = "神居";
        if (vacation == 0) {
            big.style.backgroundImage = "url(图片素材/NPC/sj/gdxd.png) ";
            npcname.innerHTML = "骨钉兄弟奥罗&马托";
            des.innerHTML = "相遇地点：神居一门";
            txt.innerHTML = "经过伟大的骨钉贤者的战斗训练，精通骨钉技艺的兄弟。"
        } else if (vacation == -5) {
            big.style.backgroundImage = "url(图片素材/NPC/sj/hhds.png) ";
            npcname.innerHTML = "绘画大师席奥";
            des.innerHTML = "相遇地点：神居二门";
            txt.innerHTML = "技艺娴熟且受人尊敬的骨钉大师。总是渴望学习新事物。"
        } else if (vacation == -10) {
            big.style.backgroundImage = "url(图片素材/NPC/sj/gdxz.png) ";
            npcname.innerHTML = "骨钉贤者斯莱";
            des.innerHTML = "相遇地点：神居三门";
            txt.innerHTML = "传奇级别的骨钉技艺贤者，最近作为商人也赚了不少钱。"
        } else if (vacation == -15) {
            big.style.backgroundImage = "url(图片素材/NPC/sj/zdjm.png) ";
            npcname.innerHTML = "战斗姐妹";
            des.innerHTML = "相遇地点：螳螂领主雕像";
            txt.innerHTML = "相较螳螂领主速度更快，第二阶段变为三只螳螂共同进攻。"
        } else if (vacation == -20) {
            big.style.backgroundImage = "url(图片素材/NPC/sj/yysnk.png) ";
            npcname.innerHTML = "有翼斯诺克";
            des.innerHTML = "相遇地点：斯诺克雕像";
            txt.innerHTML = "有翼斯诺克具有飞行的能力，在空中俯冲而下，也可以召唤感染气球。"
        } else if (vacation == -25) {
            big.style.backgroundImage = "url(图片素材/NPC/sj/ccrq.png) ";
            npcname.innerHTML = "纯粹容器";
            des.innerHTML = "相遇地点：神居五门";
            txt.innerHTML = "被选中的容器，被养育和训练到最强形态；"
        } else if (vacation == -30) {
            big.style.backgroundImage = "url(图片素材/NPC/sj/wsfg.png) ";
            npcname.innerHTML = "无上辐光";
            des.innerHTML = "相遇地点：神居五门";
            txt.innerHTML = "相较辐光，变为了四个阶段，攻击节奏明显加快。"
        }
    }
    if (part == "zszm") {
        partnum = -30;
        tou.innerHTML = "战士";
        if (vacation == 0) {
            big.style.backgroundImage = "url(图片素材/NPC/zszm/zr.png) ";
            npcname.innerHTML = "泽若";
            des.innerHTML = "相遇地点：安息之地";
            txt.innerHTML = "一位阵亡战士的残梦，因犯下冒犯国王的罪行而被处决。"
        } else if (vacation == -5) {
            big.style.backgroundImage = "url(图片素材/NPC/zszm/gb.png) ";
            npcname.innerHTML = "戈布";
            des.innerHTML = "相遇地点：呼啸山崖";
            txt.innerHTML = "一位阵亡战士的残梦，神秘的生命形式，据说它膨胀的大脑中包含世界上所有知识。"
        } else if (vacation == -10) {
            big.style.backgroundImage = "url(图片素材/NPC/zszm/hzl.png) ";
            npcname.innerHTML = "胡长老";
            des.innerHTML = "相遇地点：真菌荒地";
            txt.innerHTML = "一位阵亡战士的残梦，一边环游世界一边照料为瘟疫所苦的人。"
        } else if (vacation == -15) {
            big.style.backgroundImage = "url(图片素材/NPC/zszm/wy.png) ";
            npcname.innerHTML = "无眼";
            des.innerHTML = "相遇地点：苍绿小径石之庇护所";
            txt.innerHTML = "一位阵亡战士的残梦，消失在瘟疫发生的时候。"
        } else if (vacation == -20) {
            big.style.backgroundImage = "url(图片素材/NPC/zszm/jla.png) ";
            npcname.innerHTML = "加利安";
            des.innerHTML = "相遇地点：深邃巢穴";
            txt.innerHTML = "一位阵亡战士的残梦，在国王边缘的荒野修行希望成为骑士。"
        } else if (vacation == -25) {
            big.style.backgroundImage = "url(图片素材/NPC/zszm/mem.png) ";
            npcname.innerHTML = "马尔穆";
            des.innerHTML = "相遇地点：王后花园";
            txt.innerHTML = "一位阵亡战士的残梦，王后花园的守护者。"
        } else if (vacation == -30) {
            big.style.backgroundImage = "url(图片素材/NPC/zszm/mks.png) ";
            npcname.innerHTML = "马科斯";
            des.innerHTML = "相遇地点：王国边缘";
            txt.innerHTML = "一位阵亡战士的残梦，他是被遗忘的部族中唯一拿起武器的。"
        }
    }
    if (part == "mjboss") {
        partnum = -25;
        tou.innerHTML = "梦境";
        if (vacation == -0) {
            big.style.backgroundImage = "url(图片素材/NPC/mjboss/sbgj.png)";
            npcname.innerHTML = "失败冠军";
            des.innerHTML = "相遇地点：假骑士的梦境";
            txt.innerHTML = "攻击变为造成2点血，砸出的波更高更快。"
        } else if (vacation == -5) {
            big.style.backgroundImage = "url(图片素材/NPC/mjboss/lhbj.png) ";
            npcname.innerHTML = "灵魂暴君";
            des.innerHTML = "相遇地点：灵魂大师梦境";
            txt.innerHTML = "闪烁频率更快，每次基本只能A到一下，下砸更快，法术球环绕变为6颗。"
        } else if (vacation == -10) {
            big.style.backgroundImage = "url(图片素材/NPC/mjboss/sljq.png) ";
            npcname.innerHTML = "失落近亲";
            des.innerHTML = "相遇地点：残破容器梦境";
            txt.innerHTML = "召唤感染球更频繁，冲刺更快，下砸出6颗感染球"
        } else if (vacation == -15) {
            big.style.backgroundImage = "url(图片素材/NPC/mjboss/hswz.png) ";
            npcname.innerHTML = "灰色王子左特";
            des.innerHTML = "相遇地点：小迷妹梦境";
            txt.innerHTML = "为情所困而产生的幻想，尽管形象不太高雅，但是每次被击败之后都会变得更强大。"
        } else if (vacation == -20) {
            big.style.backgroundImage = "url(图片素材/NPC/mjboss/bsfyz.png) ";
            npcname.innerHTML = "白色防御者";
            des.innerHTML = "相遇地点：粪虫战士梦境";
            txt.innerHTML = "无法再被下砸砸出，攻击方式增加。"
        } else if (vacation == -25) {
            big.style.backgroundImage = "url(图片素材/NPC/mjboss/myzwgl.png) ";
            npcname.innerHTML = "梦魇之王格林";
            des.innerHTML = "相遇地点：剧团团长格林";
            txt.innerHTML = "所有攻击更快，火鸟变为4只，技能基本都会滞留火焰。"
        }
    }
    if (part == "boss") {
        partnum = -125;
        tou.innerHTML = "BOSS";
        if (vacation == 0) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/glzzm.png)";
            npcname.innerHTML = "格鲁兹之母";
            des.innerHTML = "相遇地点：遗忘的十字路口底部";
            txt.innerHTML = "成熟的格鲁兹。腹部携带着自己的幼崽。攻击的方式是用巨大的身体发起冲撞。"
        } else if (vacation == -5) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/zydmlk.png)";
            npcname.innerHTML = "燥郁的毛里克";
            des.innerHTML = "相遇地点：遗忘的十字路口左方底部";
            txt.innerHTML = "凶猛但社会性极高的生物。如果不能和小伙伴一起玩耍，就会变得暴躁忧郁。"
        } else if (vacation == -10) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/jqs.png)";
            npcname.innerHTML = "假骑士";
            des.innerHTML = "相遇地点：遗忘的十字路口";
            txt.innerHTML = "它们的生命短小又充满恐惧，因而想得到能让他们翻身做主人的力量。"
        } else if (vacation == -10) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/jqs.png)";
            npcname.innerHTML = "假骑士";
            des.innerHTML = "相遇地点：遗忘的十字路口";
            txt.innerHTML = "它们的生命短小又充满恐惧，因而想得到能让他们翻身做主人的力量。"
        } else if (vacation == -15) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/fjyzw.png)";
            npcname.innerHTML = "反击蝇之王";
            des.innerHTML = "相遇地点：苍绿之径向正上方前进";
            txt.innerHTML = "是反击蝇栖息地的族长，会俯冲攻击入侵者。但受到威胁时会呼叫增援"
        } else if (vacation == -20) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/dxtxcfz.png)";
            npcname.innerHTML = "大型苔藓冲锋者";
            des.innerHTML = "相遇地点：绿色小径深处";
            txt.innerHTML = "学会了与苔藓聚集共生的生物家族；"
        } else if (vacation == -25) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/shzdhf.png)";
            npcname.innerHTML = "守护者大黄蜂";
            des.innerHTML = "相遇地点：这是与大黄蜂的初次见面。在苍绿之径追随她的动向，可触发boss战";
            txt.innerHTML = "其是驾轻就熟的圣巢废墟守护者。挥舞着针和线；"
        } else if (vacation == -30) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/tllz.png)";
            npcname.innerHTML = "螳螂领主"
            des.innerHTML = "相遇地点：真菌荒地底部";
            txt.innerHTML = "螳螂部落的领袖和最出色的战士。它们拥有细长的钉矛，还能以惊人的速度向敌人发起进攻"
        } else if (vacation == -35) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/lhzs.png)";
            npcname.innerHTML = "灵魂战士"
            des.innerHTML = "相遇地点：泪水之城";
            txt.innerHTML = "有学识的虫子。挥舞着精炼的刀刃，用收获的灵魂为自己提高战斗力"
        } else if (vacation == -40) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/lhds.png)";
            npcname.innerHTML = "灵魂大师"
            des.innerHTML = "相遇地点：灵魂圣殿最深处";
            txt.innerHTML = "灵魂圣所的领袖。蓄积着灵魂希望为圣巢驱赶苦难，但最终沉醉于灵魂的力量"
        } else if (vacation == -45) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/sjsw.png)";
            npcname.innerHTML = "水晶守卫"
            des.innerHTML = "相遇地点：水晶山峰高处的座椅上";
            txt.innerHTML = "水晶山峰的魁梧矿工，被生长的晶体所吞噬。可以从结晶的肢体里射出灼热的光束"
        } else if (vacation == -50) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/sjsw.png)";
            npcname.innerHTML = "暴怒守卫"
            des.innerHTML = "相遇地点：水晶守卫正上方";
            txt.innerHTML = "它从水晶牢狱向外看时，这个世界对他而言是怎么样的，它只能看见光吗？这就是它发疯的原因吗？"
        } else if (vacation == -55) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/fcfyz.png)";
            npcname.innerHTML = "粪虫防御者"
            des.innerHTML = "相遇地点：皇家水道与泪水之城连接处";
            txt.innerHTML = "粪虫防御者是生活在水道中心的老练战士，它为荣誉和忠诚而战。"
        } else if (vacation == -60) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/cprq.png)";
            npcname.innerHTML = "残破容器"
            des.innerHTML = "相遇地点：古老盆地最深处";
            txt.innerHTML = "被感染的寄生虫复活的破碎遗体"
        } else if (vacation == -65) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/snk.png)";
            npcname.innerHTML = "斯诺克"
            des.innerHTML = "相遇地点：深邃巢穴深处";
            txt.innerHTML = "斯诺克会模仿其他生物的形态，以将其诱骗到自己的巢穴。"
        } else if (vacation == -70) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/xczm.png)";
            npcname.innerHTML = "吸虫之母"
            des.innerHTML = "相遇地点：皇家水道深处";
            txt.innerHTML = "贪得无厌的繁殖者，水道里到处都是他们的族人，他们的身体内部还是幼年吸虫的巢穴。"
        } else if (vacation == -75) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/ptlz.png)";
            npcname.innerHTML = "叛徒领主"
            des.innerHTML = "相遇地点：王后花园深处。";
            txt.innerHTML = "被废黜的螳螂部落的领主。背叛了他的姐妹，投入了感染的怀抱"
        } else if (vacation == -80) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/fcqs.png)";
            npcname.innerHTML = "蜂巢骑士"
            des.innerHTML = "相遇地点：蜂巢深处";
            txt.innerHTML = "蜂巢骑士是蜂巢女王的忠实守护者。不能飞行，但是战斗时十分凶猛。"
        } else if (vacation == -85) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/scj.png)";
            npcname.innerHTML = "收藏家"
            des.innerHTML = "相遇地点：国王驿站到王国边境的爱之塔中部。";
            txt.innerHTML = "收藏家是锁在爱之塔里的黑影。把圣巢的生物保存在玻璃罐子里。特别喜欢幼虫。"
        } else if (vacation == -90) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/shzdhf.png)";
            npcname.innerHTML = "岗哨大黄蜂"
            des.innerHTML = "相遇地点：国王边缘";
            txt.innerHTML = "驾轻就熟的圣巢废墟守护者。挥舞着针和线，她将考验你是否有资格了解这个王国的一切。"
        } else if (vacation == -95) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/ablb.png)";
            npcname.innerHTML = "奥波路波"
            des.innerHTML = "相遇地点：王国边缘竞技场。";
            txt.innerHTML = "奥波的大号表亲，一生只有一个伴侣，而且要随时和伴侣相伴左右。"
        } else if (vacation == -100) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/szxfz.png)";
            npcname.innerHTML = "神之驯服者"
            des.innerHTML = "相遇地点：王国边缘竞技场";
            txt.innerHTML = "愚人斗兽场的老手，与她亲手训练出来的生物并肩作战。"
        } else if (vacation == -105) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/wm.png)";
            npcname.innerHTML = "乌姆"
            des.innerHTML = "相遇地点：教师档案所";
            txt.innerHTML = "乌姆是守卫教室档案所内室的智慧生物。"
        } else if (vacation == -110) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/swzqs.png)";
            npcname.innerHTML = "守望者骑士"
            des.innerHTML = "相遇地点：泪水之城。";
            txt.innerHTML = "共有6名守望者骑士构成了此次boss战。这些是被遗弃的守望者骑士的外壳。由一群受感染的苍蝇控制。"
        } else if (vacation == -115) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/jttzgl.png)";
            npcname.innerHTML = "剧团团长格林"
            des.innerHTML = "相遇地点：德特茅斯";
            txt.innerHTML = "格林是一个神秘的巡演剧团，格林剧团的团长。实际上，格林和他的剧团来自于噩梦，会去往任何梦魇之灯被侍从点亮的地方。"
        } else if (vacation == -120) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/kdqs.png)";
            npcname.innerHTML = "空洞骑士"
            des.innerHTML = "相遇地点：黑卵圣殿";
            txt.innerHTML = "完全成熟的容器，身体内携带着瘟疫之心。"
        } else if (vacation == -125) {
            big.style.backgroundImage = "url(图片素材/NPC/boss/fg.png)";
            npcname.innerHTML = "辐光"
            des.innerHTML = "相遇地点：空洞骑士的梦境";
            txt.innerHTML = "被遗忘的光芒，瘟疫、感染、纠缠着圣巢昆虫遗体的疯狂，从这个已死王国的眼中尖啸而出的光芒。它源自何处，大概像我这样的凡人永远不会明白；"
        }
    }
    if (part == "smz") {
        partnum = -10;
        tou.innerHTML = "守梦者";
        if (vacation == 0) {
            big.style.backgroundImage = "url(图片素材/NPC/smz/hl.jpg)";
            npcname.innerHTML = "赫拉";
            des.innerHTML = "相遇地点：遥远的村庄内的野兽巢穴，进入一个茧里坐上椅子后触发剧情进入；";
            txt.innerHTML = "游戏内三个守梦人之一，也是大黄蜂的母亲。";
        } else if (vacation == -5) {
            big.style.backgroundImage = "url(图片素材/NPC/smz/mnm.jpg)";
            npcname.innerHTML = "莫诺蒙";
            des.innerHTML = "相遇地点：雾之峡谷的教室档案室内；";
            txt.innerHTML = "游戏内三个守梦人之一，是主张解除黑卵封印的激进派。";
        } else if (vacation == -10) {
            big.style.backgroundImage = "url(图片素材/NPC/smz/lre.jpg)";
            npcname.innerHTML = "卢瑞恩";
            des.innerHTML = "相遇地点：泪水之城内守望者尖塔；";
            txt.innerHTML = "游戏内三个守梦人之一，是主张维持黑卵封印的保守派。";
        }
    }
    if (part == "gdds") {
        partnum = -10;
        tou.innerHTML = "大师";
        if (vacation == 0) {
            big.style.backgroundImage = "url(图片素材/NPC/gdds/xa.jpg)";
            npcname.innerHTML = "席奥";
            des.innerHTML = "相遇地点：苍绿之径；";
            txt.innerHTML = "三位骨钉大师之一，与他交谈可免费习得蓄力斩；";
        } else if (vacation == -5) {
            big.style.backgroundImage = "url(图片素材/NPC/gdds/al.jpg)";
            npcname.innerHTML = "奥罗";
            des.innerHTML = "相遇地点：王国边缘；";
            txt.innerHTML = "三位骨钉大师之一，与他交谈花费800G习得冲刺斩；";
        } else if (vacation == -10) {
            big.style.backgroundImage = "url(图片素材/NPC/gdds/mt.jpg)";
            npcname.innerHTML = "马托";
            des.innerHTML = "相遇地点：呼啸山崖；";
            txt.innerHTML = "三位骨钉大师之一，与他交谈可免费习得旋风斩；";
        }
    }
    if (part == "ts") {
        partnum = -80;
        tou.innerHTML = "特殊";
        if (vacation == 0) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/dhf.jpg)";
            npcname.innerHTML = "大黄蜂";
            des.innerHTML = "相遇地点：1.苍绿之径；2.泪水之城；3.国王边缘；4.深邃巢穴；5.深渊；6.黑卵圣殿；";
            txt.innerHTML = "大黄蜂是赫拉和白王和女儿，曾经白王请求赫拉做守梦者的时候，赫拉提出请求想有一个后代，白王便与其生下了大黄蜂。<p>由于赫拉做了守梦者，无法照顾女儿，便把女儿托付给了蜂巢的女王，蜂王从小养育了大黄蜂，这也是她名字的由来。</p><p>大黄蜂长大后，担负着判断容器的使命，每当有容器来到苍绿之径，大黄蜂便会与其战斗（严重放水）</p><p>小骑士战胜大黄蜂后来到泪水之城，大黄蜂会告诉小骑士来到国王边缘进行最终的考验，在国王边缘第二次战胜大黄蜂之后，小骑士成功得到王之印记，在沃姆骨架坍塌之时，大黄蜂及时把小骑士救了出来；</p>"
        } else if (vacation == -5) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/kr.jpg)";
            npcname.innerHTML = "奎若";
            des.innerHTML = "相遇地点：1.黑卵圣殿；2.苍绿之径；3.螳螂村和王后驿站；4.泪水之城；5.深邃巢穴；6.水晶山峰；7.雾之峡谷和教师档案所；8.蓝湖；";
            txt.innerHTML = "奎若是一名英勇的战士，他一直守护着莫诺蒙的面具，在圣巢之外探险；<p>在瘟疫泄露后，莫诺蒙将奎若召回了圣巢，但外面的世界使他失去了很多记忆。</p><p>初次与小骑士相遇是在黑卵圣殿，奎若在研究巨大的黑卵，打败假骑士后奎若会离开。</p><p>螳螂村需要第二次进入才可看见奎若。在教室档案所奎若会协助小骑士一起对抗乌姆，之后来到莫诺蒙旁边，奎若终于想起了自己的使命，将面具还给了莫诺蒙。</p>"
        } else if (vacation == -10) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/ts.jpg)";
            npcname.innerHTML = "提索";
            des.innerHTML = "相遇地点：1.德特茅斯；2.十字路口的鹿角虫站；3.蓝湖湖边；4.国王边缘的竞技场；";
            txt.innerHTML = "提索一直朝着自己的目标前进，他将小骑士成为苍白之物，不屑使用鹿角虫或是电车之类的机械路线。在蓝湖，他失望于此处的平静，渴望激烈的战斗。最后他到达了竞技场，与小骑士的对话中，对战的渴望如潮水般涌出。在国王边境，竞技场随意向下抛洒尸体的山路上提索倒在了那里。"
        } else if (vacation == -15) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/zt.jpg)";
            npcname.innerHTML = "左特";
            des.innerHTML = "相遇地点：1.苍绿之径；2.泪水之城；3.深巢；4.愚人斗兽场；5.德特茅斯；";
            txt.innerHTML = "左特是一个严重失败的容器，因为他被设计了嘴，而且战斗力为0；"
        } else if (vacation == -20) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/cyy.jpg)";
            npcname.innerHTML = "虫爷爷";
            des.innerHTML = "相遇地点：遗忘十字路左上；";
            txt.innerHTML = "帮虫爷爷救回毛毛虫可以得到奖励，毛毛虫分布在地图的各个角落，共计46只；<p>在打败收藏家拿到他的地图之后毛毛虫的位置便会在地图上标注出来，解救毛毛虫可获得不同奖励：（未标注均为吉欧）</p><p>5：面具碎片</p><p>10：幼虫之歌</p><p>16：腐臭蛋</p><p>23：圣巢印章</p><p>31：苍白矿石</p><p>38：国王神像</p><p>46：蜕变挽歌</p>"
        } else if (vacation == -25) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/wnsm.jpg)";
            npcname.innerHTML = "蜗牛萨满";
            des.innerHTML = "相遇地点：遗忘十字路的祖先山丘";
            txt.innerHTML = "蜗牛一组有着操纵灵魂的力量，但圣巢活着的蜗牛貌似只有她了，与她对话会送给小骑士复仇之魂，但要帮她处理一只巴德尔长者。<p>蜗牛萨满也能意识到小骑士使用梦之钉入侵自己的思想。</p>"
        } else if (vacation == -30) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/zhdljc.jpg)";
            npcname.innerHTML = "最后的鹿角虫";
            des.innerHTML = "相遇地点：遗忘十字路的鹿角虫车站";
            txt.innerHTML = "最后的鹿角虫是圣巢遗迹的鹿角虫车站中仅剩的一只<p>在过去圣巢强盛的年代里，白王建立鹿角虫车站。通过鹿角虫车站来进行物品搬运，同样虫子们也将鹿角虫作为最便利的交通工具。</p><p>对最后的鹿角虫来说，它已是高龄。但它内心责任感驱使着它在听到鹿角虫车站铃声时，不知疲倦地前来寻找需要搭乘的旅客</p>"
        } else if (vacation == -35) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/ab.jpg)";
            npcname.innerHTML = "阿布";
            des.innerHTML = "相遇地点：1.真菌荒地；2.深邃巢穴；3.古老盆地；4.王后花园或德特茅斯";
            txt.innerHTML = "阿布起初是一只很胆小的虫子，但是在得到小骑士的鼓励后，变得敢于挑战，如果和小骑士一起决战叛徒领主，她会与叛徒领主同归于尽；否则会出现在德特茅斯与小骑士道别。"
        } else if (vacation == -40) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/ml.jpg)";
            npcname.innerHTML = "米拉";
            des.innerHTML = "相遇地点：遗忘十字路右上角通往水晶山峰的矿坑内；";
            txt.innerHTML = "米拉是一只可爱的小虫子，她的职业是矿工，工作时还会唱歌。<p>在获得荒芜俯冲后，米拉会初步受到感染，此时她已经意识模糊，呆呆的站在那里，也注意不到小骑士了</p><p>在获得水晶之心后，米拉会被完全感染变为敌人，但此时她的梦语依然是那首歌</p>"
        } else if (vacation == -45) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/blt.jpg)";
            npcname.innerHTML = "布蕾塔";
            des.innerHTML = "相遇地点：真菌荒地下方";
            txt.innerHTML = "经过一小段跑酷后即可解救布蕾塔，之后她会回到德特茅斯，在她的房间里可获得一片面具碎片；"
        } else if (vacation == -50) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/lr.jpg)";
            npcname.innerHTML = "猎人";
            des.innerHTML = "相遇地点：苍绿之径";
            txt.innerHTML = "猎人趴在地上静静等待着猎物，第一次见到它时它会吓你一跳，与他对话可获得猎人日记<p>猎人日记会记录你打败的敌人共计168条，每一条打够数量后会解锁一段描述性的话</p><p>当他需要的146条都打够了，与猎人对话，他会给予你猎人印记，此时你也能见到猎人的真面目了；</p>"
        } else if (vacation == -55) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/mlbr.jpg)";
            npcname.innerHTML = "米莉贝尔";
            des.innerHTML = "相遇地点：1.雾之峡谷；2.快乐之屋；";
            txt.innerHTML = "米莉贝尔会在雾之峡谷冒充银行家，先给他100G她会帮你开户，然后可以在她这里储存4500G<p>当你给了米莉贝尔2550G或更多后，她会跑路，然后在快乐之屋泡温泉，打她会狠狠地爆金币，掉落存的1.5倍</p>"
        } else if (vacation == -60) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/xyr.jpg)";
            npcname.innerHTML = "小愚人";
            des.innerHTML = "相遇地点：愚人斗兽场";
            txt.innerHTML = "小愚人被倒挂在愚人斗兽场的入口，要给他吉欧才能获得竞技场的入场资格<p>勇者的试炼：100G</p><p>征服者的试炼：450G</p><p>愚人的试炼：800G</p>"
        } else if (vacation == -65) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/we.jpg)";
            npcname.innerHTML = "乌恩";
            des.innerHTML = "相遇地点：苍绿之径";
            txt.innerHTML = "乌恩是一只巨大的蛞蝓，他会给予小骑士乌恩之形，然后便会离开，没有任何对话<p>在神居，寻神者会对乌恩做出评价。</p>"
        } else if (vacation == -70) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/hsadz.jpg)";
            npcname.innerHTML = "灰色哀悼者";
            des.innerHTML = "相遇地点：安息之地";
            txt.innerHTML = "灰色哀悼者是五骑士之一，她的原名是泽莫尔，在她的房间里可以看见她巨大的骨钉<p>泽莫尔口中的爱人便是叛徒领主的女儿，小螳螂早就过世离开了世界，泽莫尔想要送花给她，她的墓碑在王后花园的中央</p>"
        } else if (vacation == -75) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/wxc.jpg)";
            npcname.innerHTML = "维修虫";
            des.innerHTML = "相遇地点：遗忘十字路";
            txt.innerHTML = "维修虫有2%的几率生成在德特茅斯通往遗忘十字路的水井下面，前提是要摧毁一个路牌，然后他才会来维修<p>杀死维修虫后他的房间便会打开，位置在遗忘十字路右下角，萨鲁巴的店左边，需要先解救斯莱，在房间内可以看到他的日记</p>"
        } else if (vacation == -80) {
            big.style.backgroundImage = "url(图片素材/NPC/ts/xsz.jpg)";
            npcname.innerHTML = "寻神者";
            des.innerHTML = "相遇地点：垃圾坑";
            txt.innerHTML = "寻神者来自别的国度，他来到圣巢来收集<p>在神居，寻神者会对乌恩做出评价。</p>"
        }
    }

    if (part == "sr") {
        partnum = -50;
        tou.innerHTML = "商人";
        if (vacation == 0) {
            big.style.backgroundImage = "url(图片素材/NPC/sr/knf.jpg)";
            npcname.innerHTML = "柯尼法";
            des.innerHTML = "相遇地点：1.遗忘十字路；2.苍绿之径；3.真菌荒地；4.泪水之城；5.水晶山峰；6.呼啸山崖；7.皇家水道；8.深邃巢穴；9.雾之峡谷；10.王后花园；11.古老盆地；12.国王边缘；";
            txt.innerHTML = "柯尼法是一只胖蚊子，热衷于冒险和画地图，你可以花少量吉欧买下他的地图。<p>通常他都会留下纸张，哼着自己的小曲，方便你找到他，除了深邃巢穴。</p><p>购买一张地图便会解锁德特茅斯伊塞尔达的店里睡觉。</p><p>打败该地区的BOSS后柯尼法便会离开，错过的地图可以在伊达塞尔补购</p>";
        } else if (vacation == -5) {
            big.style.backgroundImage = "url(图片素材/NPC/sr/ysed.jpg)";
            npcname.innerHTML = "伊塞尔达";
            des.innerHTML = "相遇地点：德特茅斯的小屋。需要在十字路口遇见柯尼法后他们的小店才会开张";
            txt.innerHTML = "伊塞尔达是柯尼法的妻子，曾经作为战士，拿起过锋利的骨钉。伊塞尔达十分享受放下骨钉与柯尼法一起生活的日子，但有时也会想想要不要和柯尼法一起冒险。<p>也许是伊塞尔达在过去的战场上感触颇多，她一直很担心柯尼法的生命安全。</p><p>伊塞尔达常抱怨柯尼法不在店里做生意把生意丢给她做。她对生意其实并不感兴趣。</p><p>在小骑士购买全部地图后，可以在店里的吊床上看见呼呼大睡的柯尼法。</p>"
        } else if (vacation == -10) {
            big.style.backgroundImage = "url(图片素材/NPC/sr/sl.jpg)";
            npcname.innerHTML = "斯莱";
            des.innerHTML = "相遇地点：1.遗忘十字路右下；2.德特茅斯小屋内；";
            txt.innerHTML = "斯莱曾是一名骨钉大师，退隐后做了商人。在遗忘十字路右下受到瘟疫感染后，解救他他便会返回德特茅斯。";
        } else if (vacation == -15) {
            big.style.backgroundImage = "url(图片素材/NPC/sr/slb.jpg)";
            npcname.innerHTML = "萨鲁巴";
            des.innerHTML = "相遇地点：1.遗忘十字路右下。";
            txt.innerHTML = "萨鲁巴是一名护符商人，初次相遇时萨鲁巴也会介绍护符过载的方法，只是表达的相对隐晦。"
        } else if (vacation == -20) {
            big.style.backgroundImage = "url(图片素材/NPC/sr/jj.jpg)";
            npcname.innerHTML = "吉吉";
            des.innerHTML = "相遇地点：德特茅斯右侧靠近水晶山峰的房间，门锁需要简单钥匙打开。";
            txt.innerHTML = "长期以来，忏悔师吉吉沉睡在自己的小房间里，直至小骑士打开了门锁唤醒他。吉吉习惯躲在黑暗之中，但其圆白的双眼暴露无遗。<p>吉吉最常提及“遗憾”，而小骑士进入吉吉的房间后，吉吉也会上前检查小骑士是否留有“遗憾”。而吉吉口中的“遗憾”就是小骑士被击倒后产生的阴影。</p><p>可以花一腐臭蛋召唤小骑士的阴影</p>"
        } else if (vacation == -25) {
            big.style.backgroundImage = "url(图片素材/NPC/sr/je.jpg)";
            npcname.innerHTML = "吉恩";
            des.innerHTML = "相遇地点：德特茅斯右侧靠近水晶山峰的房间，门锁需要简单钥匙打开。";
            txt.innerHTML = "钢铁之魂模式下，吉恩会替代吉吉位置，她收购腐臭蛋并支付玩家吉欧，数量为290G~450G不等；"
        } else if (vacation == -30) {
            big.style.backgroundImage = "url(图片素材/NPC/sr/lm.jpg)";
            npcname.innerHTML = "里姆";
            des.innerHTML = "相遇地点：泪水之城";
            txt.innerHTML = "里姆是一位考古学家，你可以把古董卖给他换取一些吉欧和游戏的背景故事，不同物品售价如下：<p>1.漫游者日记：200G</p><p>2.圣巢印章：450G</p><p>3.国王神像：800G</p><p>4.神秘蛋：1200G</p>"
        } else if (vacation == -35) {
            big.style.backgroundImage = "url(图片素材/NPC/sr/dzj.jpg)";
            npcname.innerHTML = "钉子匠";
            des.innerHTML = "相遇地点：泪水之城左下角。";
            txt.innerHTML = "花费吉欧和苍白矿石，钉子匠会帮你升级骨钉。费用如下：<p>1.锋利的骨钉：250G</p><p>2.开槽的骨钉：800G+苍白矿石*1</p><p>3.带螺纹的骨钉：2000G+苍白矿石*2</p><p>4.纯粹骨钉：4000G+苍白矿石*3</p><p>完成四次升级后钉子匠会说我的工作已经完成了，杀他或不杀他都有成就。</p>"
        } else if (vacation == -40) {
            big.style.backgroundImage = "url(图片素材/NPC/sr/tk.jpg)";
            npcname.innerHTML = "图克";
            des.innerHTML = "相遇地点：皇家水道。";
            txt.innerHTML = "标准模式下，图克会以80G~100G的随机价格出售腐臭蛋。<p>钢魂模式下，图克会被感染死亡，只能在他的尸体上捡到一颗腐臭蛋。</p>"
        } else if (vacation == -45) {
            big.style.backgroundImage = "url(图片素材/NPC/sr/stz.jpg)";
            npcname.innerHTML = "食腿者";
            des.innerHTML = "相遇地点：真菌荒地";
            txt.innerHTML = "食腿者是一只螳螂，他认为只要有足够的吉欧，就能够当上国王，支付他86G后会向你售卖护符；"
        } else if (vacation == -50) {
            big.style.backgroundImage = "url(图片素材/NPC/sr/dw.jpg) ";
            npcname.innerHTML = "迪万";
            des.innerHTML = "相遇地点：德特茅斯左侧格林剧团小屋";
            txt.innerHTML = "召唤格林剧团后，迪万会随着格林来到德特茅斯，他会说你的身上藏着什么好东西 ，把易碎护符装上，然后给她吃掉再买回来即可升级为坚硬护符，坚硬护符死亡后不会损坏，但价格较高。<p>坚固心脏：12000G</p><p>坚固贪婪：9000G</p><p>坚固力量：15000G</p>"
        }
    }
    if (part == "jq") {
        partnum = -60;
        tou.innerHTML = "剧情";
        if (vacation == 0) {
            big.style.backgroundImage = "url(图片素材/NPC/jq/czl.jpg)";
            npcname.innerHTML = "虫长老";
            des.innerHTML = "相遇地点：德特茅斯中央";
            txt.innerHTML = "<p>和蔼可亲的老爷爷，德特茅斯唯一一个没有下井和去探险的虫。</p><p>新手遇到的第一个NPC，他会介绍一些游戏的基本背景，不知道下一步去哪里的话也可以问问他，在获得新的道具后他也会有新的对话。</p>"
        } else if (vacation == -5) {
            big.style.backgroundImage = "url(图片素材/NPC/jq/xz.jpg)";
            npcname.innerHTML = "先知";
            des.innerHTML = "相遇地点：安息之地右上区域";
            txt.innerHTML = "<p>先知属于蛾子一族。它在寻找它们族部一直以来期盼已久的挥舞者</p><p>小骑士前进到安息之地时，被三位守梦者以最后的力量封印到隐藏的国度——梦境。之后小骑士获得梦之钉切开梦境和现实后，会在先知的房间里醒来。</p><p>（注：辐光也是蛾子）</p>"
        } else if (vacation == -10) {
            big.style.backgroundImage = "url(图片素材/NPC/jq/txyyj.jpg)";
            npcname.innerHTML = "苔藓预言家";
            des.innerHTML = "相遇地点：王后花园最右方，蘑菇孢子左边打破墙壁也可以进去。";
            txt.innerHTML = "<p>苔藓预言者讲述着有关“光”的事情，也就是辐光。</p><p>从他背上的感染球可以看出，他的心智已经完全被辐光控制了，并且在帮辐光传播他的“邪教”。</p><p>当击败残破容器或三大守梦者之一后，瘟疫泄露，苔藓预言家便会死亡。</p>";
        } else if (vacation == -15) {
            big.style.backgroundImage = "url(图片素材/NPC/jq/amlt.jpg)";
            npcname.innerHTML = "艾米丽塔";
            des.innerHTML = "相遇地点：泪水之城，但需要从皇家水道打破墙壁上去，这也给去皇家水道提供了一条捷径。";
            txt.innerHTML = "<p>艾米丽塔本来是圣巢的贵族，但却被赶了出来，独自一人坐在房间里。</p>";
        } else if (vacation == -20) {
            big.style.backgroundImage = "url(图片素材/NPC/jq/bd.jpg)";
            npcname.innerHTML = "巴东";
            des.innerHTML = "相遇地点：国王边缘上方";
            txt.innerHTML = "<p>巴东是一只非常巨大的虫子，他的身体贯穿了王国边缘的上下，但从他的对话中可得知他还远没有沃姆大。</p><p>他也提到过白王是由沃姆转生而来的，他躲在这里是为了远离被感染的虫子。</p><p>他的尾巴在国王边缘下方，攻击他的尾巴完全不会伤到他，他也会对此做出评价。</p>";
        } else if (vacation == -25) {
            big.style.backgroundImage = "url(图片素材/NPC/jq/bsns.jpg)";
            npcname.innerHTML = "白色女士";
            des.innerHTML = "相遇地点：王后花园";
            txt.innerHTML = "<p>圣巢的王后，她会给予小骑士一片白色碎片，用于合成国王之魂。</p><p>王后会告知小骑士的主要目标：取代前辈，或者重新封印辐光。由于白王对前辈的培育，使得前辈有了思想，让辐光有了可乘之机。</p>";
        } else if (vacation == -30) {
            big.style.backgroundImage = "url(图片素材/NPC/jq/bw.jpg)";
            npcname.innerHTML = "白王";
            des.innerHTML = "相遇地点：1.白色宫殿；2.白色宫殿的苦痛之路。3.使用梦钉劈黑卵。";
            txt.innerHTML = "<p>圣巢的国王，由巨大的沃姆转生而成，沃姆的尸体就是国王边缘岗哨大黄蜂所守护的巨型骨架。</p><p>白王成立了圣巢，给虫子带来理智和秩序。之后他制造了大量容器来对抗辐光，与三位守梦者达成了协议，但最终还是没能成功封印辐光。</p>";
        } else if (vacation == -35) {
            big.style.backgroundImage = "url(图片素材/NPC/jq/mjzzz.jpg)";
            npcname.innerHTML = "面具制造者";
            des.innerHTML = "相遇地点：深巢上方。";
            txt.innerHTML = "<p>面具制造者是一个很神秘的虫子，他坐在一张桌子后面，快速的制作着一个又一个的面具。</p><p>他的话很难理解，大意是说每个虫子都需要一张面具来定义自己，但没人知道那是真正的脸还是一张面具。</p>";
        } else if (vacation == -40) {
            big.style.backgroundImage = "url(图片素材/NPC/jq/zcs.jpg)";
            npcname.innerHTML = "助产妇";
            des.innerHTML = "相遇地点：深巢下方。";
            txt.innerHTML = "<p>助产妇会讲一些深巢的背景故事，她也是游戏内唯一一个可以伤到玩家的NPC</p><p>她会提出要求说让你给他咬一口，给或不给都会有新的台词。</p><p>助产妇也能意识到小骑士用梦之钉入侵她的思想。</p>";
        } else if (vacation == -45) {
            big.style.backgroundImage = "url(图片素材/NPC/jq/mgxs.jpg)";
            npcname.innerHTML = "蘑菇先生";
            des.innerHTML = "相遇地点：1.真菌荒地；2.国王边缘；3.深巢；4.呼啸山崖；5.古老盆地；6.雾之峡谷；7.国王山道。";
            txt.innerHTML = "<p>蘑菇先生说的是蘑菇语，需要全程佩戴蘑菇孢子才能听懂他的话。</p><p>按上图顺序与他交流，前六次对话结束后她会钻入地下，第七次对话结束后他便会飞走，然后会增加一段通关后的动画。</p>";
        } else if (vacation == -50) {
            big.style.backgroundImage = "url(图片素材/NPC/jq/blm.jpg)";
            npcname.innerHTML = "布鲁姆";
            des.innerHTML = "相遇地点：1.格林的帐篷里；2.深巢赫拉房间左边的小房间里；3.呼啸山崖点火的地方。";
            txt.innerHTML = "<p>布鲁姆是格林剧团的成员之一，召唤格林后他会在帐篷里悠闲的拉着他的手风琴（手风琴看起来像是某种虫子去掉头部）</p><p>当打败剧团团长后，他会去深巢帮你收集一个火焰，与其对话他会把火焰传给你，并且告诉你可以去呼啸山崖放逐格林。</p>";
        } else if (vacation == -55) {
            big.style.backgroundImage = "url(图片素材/NPC/jq/nm.jpg)";
            npcname.innerHTML = "尼姆";
            des.innerHTML = "相遇地点：德特茅斯";
            txt.innerHTML = "<p>放逐格林后，布鲁姆会卸下面具，改名为尼姆，在德特茅斯继续演奏他的手风琴。与其对话可获得无忧旋律。</p><p>布鲁姆的面具很可能具有控制心智的作用，用梦之钉劈砍尼姆可得知他失去了一部分记忆。</p>";
        } else if (vacation == -60) {
            big.style.backgroundImage = "url(图片素材/NPC/jq/xcyz.jpg)";
            npcname.innerHTML = "吸虫隐者";
            des.innerHTML = "相遇地点：垃圾坑右上方";
            txt.innerHTML = "<p>一只小吸虫，打败吸虫之母后她会说她想成为下一个母体。</p>";
        }
    }
}

var leftbutton = document.getElementById("changeleft");
var rightbutton = document.getElementById("changeright");
var cation = 0;

leftbutton.onclick = function () {
    if (cation == 0) {
        leftbutton.disabled = true;
    } else {
        cation = cation + 25;
        allmove.style.left = cation + 'vw';
        // remeber();
    }
    isp();
    remeber();
    leftbutton.disabled = true;
    window.setTimeout(function () {
        leftbutton.disabled = false;
    }, 500);
}
rightbutton.onclick = function () {
    if (cation == -200) {
        rightbutton.disabled = true;
    } else {
        cation = cation - 25;
        allmove.style.left = cation + 'vw';
        // remeber();
    }
    isp();
    remeber();
    rightbutton.disabled = true;
    window.setTimeout(function () {
        rightbutton.disabled = false;
    }, 500);
}

function isp() {
    if (cation == 0) {
        part = "jq";
    } else if (cation == -25) {
        part = "sr";
    } else if (cation == -50) {
        part = "ts";
    } else if (cation == -75) {
        part = "gdds";
    } else if (cation == -100) {
        part = "smz";
    } else if (cation == -125) {
        part = "boss";
    } else if (cation == -150) {
        part = "mjboss";
    } else if (cation == -175) {
        part = "zszm";
    } else if (cation == -200) {
        part = "sj";
    }
    vacation = 0;
    allmove.style.top = vacation + 'vw';
}