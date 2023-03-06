// 音乐盒制作开始
var previous = document.getElementById('previous');
var pause = document.getElementById('pause');
var next = document.getElementById('next');
var loop = document.getElementById('loop');
var music = document.getElementById('music');
var musiclibrary = new Array('游戏原声/Christopher Larkin - Crossroads.mp3', '游戏原声/Christopher Larkin - Greenpath.mp3', '游戏原声/Christopher Larkin - Dream.mp3', '游戏原声/Christopher Larkin - Soul Sanctum.mp3', "游戏原声/Christopher Larkin - Kingdom's Edge.mp3", '游戏原声/Christopher Larkin - Hollow Knight.mp3', '游戏原声/Christopher Larkin - City of Tears.mp3')
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

var choose = document.getElementById("choose");
var mask = document.getElementById("mask");
var rq = document.getElementById("rq");
var smtxq = document.getElementById("smtxq");
var n = document.getElementById("n");
var intro = document.getElementById("intro");
var way = document.getElementById("way");
var mzd = document.getElementById("mzd");
var syjx = document.getElementById("syjx");
var hajl = document.getElementById("hajl");
var ayzh = document.getElementById("ayzh");
var lhjj = document.getElementById("lhjj");
var hjyl = document.getElementById("hjyl");
var hwfc = document.getElementById("hwfc");
var fczy = document.getElementById("fczy");
var aypf = document.getElementById("aypf");
var eypf = document.getElementById("eypf");
var dwzy = document.getElementById("dwzy");
var sjzx = document.getElementById("sjzx");
var tlz = document.getElementById("tlz");
var ysmzl = document.getElementById("ysmzl");
var azs = document.getElementById("azs");
var cbks = document.getElementById("cbks");
var cswz = document.getElementById("cswz");
var dctxz = document.getElementById("dctxz");
var dydys = document.getElementById("dydys");
var dzdys = document.getElementById("dzdys");
var fcd = document.getElementById("fcd");
var gydl = document.getElementById("gydl");
var jdys = document.getElementById("jdys");
var jndh = document.getElementById("jndh");
var hfc = document.getElementById("hfc");
var slb = document.getElementById("slb");
var scyz = document.getElementById("scyz");
var myzrj = document.getElementById("myzrj");
var gwsx = document.getElementById("gwsx");
var smd = document.getElementById("smd");
var ymb = document.getElementById("ymb");
var wzyj = document.getElementById("wzyj");
var jxmd = document.getElementById("jxmd");
var des = document.getElementById("des");

wzyj.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "39.5vw";
    choose.style.left = "40.5vw";
    n.innerHTML = "王者印记";
    intro.innerHTML = "用于打开通往深渊的大门。";
    way.innerHTML = "国王边缘打败岗哨大黄蜂后检查沃姆的遗体获得。"
    des.style.backgroundImage = ""
}

ymb.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "39.5vw";
    choose.style.left = "54.5vw";
    n.innerHTML = "羽毛笔";
    intro.innerHTML = "用于绘制地图，坐在长椅上时会将走过的部分绘制在地图上，需要先拥有改地区的地图。";
    way.innerHTML = "德特茅斯的伊塞尔达120G出售。"
    des.style.backgroundImage = ""
}

smd.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "32.5vw";
    choose.style.left = "57.5vw";
    n.innerHTML = "神秘蛋";
    intro.innerHTML = "在圣巢建立之前就有的神秘蛋，可以卖给里姆换取1200G。";
    way.innerHTML = "3个位于深渊，一个收集1200精华后先知给与。"
    des.style.backgroundImage = ""
}

gwsx.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "32.5vw";
    choose.style.left = "50.5vw";
    n.innerHTML = "国王神像";
    intro.innerHTML = "按照白王样子制作的神像，可以卖给里姆获得800G。";
    way.innerHTML = "位于圣巢各个地方，共有8个。"
    des.style.backgroundImage = ""
}

scyz.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "32.5vw";
    choose.style.left = "43.5vw";
    n.innerHTML = "圣巢印章";
    intro.innerHTML = "象征着国王和他的骑士们的印章，可以卖给里姆获得450G。";
    way.innerHTML = "位于圣巢各个地方，共有17个。"
    des.style.backgroundImage = ""
}

myzrj.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "32.5vw";
    choose.style.left = "36.5vw";
    n.innerHTML = "漫游者日记";
    intro.innerHTML = "上面记载着看不懂的文字，可以卖给里姆获得200G，还有一些关于游戏的背景故事。";
    way.innerHTML = "位于圣巢各个地方，共有14个。"
    des.style.backgroundImage = ""
}

slb.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "25.5vw";
    choose.style.left = "57.5vw";
    n.innerHTML = "萨鲁巴的祝福";
    intro.innerHTML = "坐在椅子两秒后，萨鲁巴会为你缓慢恢复灵魂，速度等同于泡在温泉里。";
    way.innerHTML = "获得全部护符后在萨鲁巴处花费800G购买。"
    des.style.backgroundImage = ""
}

hfc.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "25.5vw";
    choose.style.left = "50.5vw";
    n.innerHTML = "护符槽";
    intro.innerHTML = "护符槽可以让你携带更多护符。游戏内可收集到8个护符槽，加上初始自带的3个共计11个；";
    way.innerHTML = "1.遗忘十字路萨鲁巴120G出售。需要先收集5个护符。</br>2.遗忘十字路萨鲁巴500G出售。需要先收集10个护符。</br>3.遗忘十字路萨鲁巴900G出售。需要先收集18个护符。</br>4.遗忘十字路萨鲁巴1400G出售。需要先收集25个护符。</br>5.真菌荒地击败两个磕头菇获得。</br>6.雾之峡谷位于无眼右边。</br>7.国王边境竞技场1获得。</br>8.击败剧团长格林获得。"
    des.style.backgroundImage = ""
}

jndh.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "25.5vw";
    choose.style.left = "43.5vw";
    n.innerHTML = "娇嫩的花";
    intro.innerHTML = "消耗品，从灰色哀悼者接取送花任务后获得，送到王后花园内背叛者之子的墓碑旁后再回来对话可以得到一个面具碎片。之后可以在墓碑旁无限获取娇嫩的花。";
    way.innerHTML = "枯萎条件：收到伤害；使用鹿角虫；使用梦之钉。"
    des.style.backgroundImage = ""
}

jdys.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "25.5vw";
    choose.style.left = "36.5vw";
    n.innerHTML = "简单钥匙";
    intro.innerHTML = "用于打开简单的锁，使用后会损坏。游戏中一共四个位置需要使用简单钥匙。</br>1.德特茅斯忏悔者吉吉的家。</br>2.泪水之城通往皇家水道的入口。</br>3.泪水之城的快乐之屋。</br>4.垃圾坑寻神者的棺材。</br>";
    way.innerHTML = "分别在：</br>1.德特茅斯的斯莱950G出售。</br>2.泪水之城左上角的小房间里。</br>3.古老盆地大虫子的尸体里。</br>4.愚人斗兽场右边击败小BOSS。"
    des.style.backgroundImage = ""
}

gydl.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "18.5vw";
    choose.style.left = "57.5vw";
    n.innerHTML = "光蝇灯笼";
    intro.innerHTML = "在黑暗中照亮自己周围的区域。主要用于：</br>1.未获得荒芜俯冲时去水晶山峰，没有灯的话无法开门。</br>2.呼啸山崖拿乔尼的祝福。</br>3.石之庇护所与无眼战斗。</br>4.结晶山丘拿梦之钉和黑暗降临前的一段路。</br>5.深渊拿生命血核心。</br>6.深邃巢穴。";
    way.innerHTML = "德特茅斯的斯莱1800G出售。"
    des.style.backgroundImage = ""
}

fcd.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "18.5vw";
    choose.style.left = "50.5vw";
    n.innerHTML = "腐臭蛋";
    intro.innerHTML = "消耗品，普通模式下给忏悔师吉吉一个腐臭蛋，她会帮你召回你的阴影，省去了跑路的麻烦。钢铁之魂模式下，吉恩会代替吉吉的位置，给他一个腐臭蛋她会随机给你290G到440G。";
    way.innerHTML = "普通模式下，皇家水道的图克出售，钢魂模式下，只能从图克的尸体上捡到一个腐臭蛋。</br>2.德特茅斯的斯莱60G出售一个。</br>3.解救16只幼虫后虫爷爷给予。</br>4.圣巢总共有18个腐臭蛋口袋，打破即可获得，不会重生。"
    des.style.backgroundImage = ""
}


dzdys.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "18.5vw";
    choose.style.left = "43.5vw";
    n.innerHTML = "店主的钥匙";
    intro.innerHTML = "交给德特茅斯的斯莱后，他会打开仓库以卖给你更多东西";
    way.innerHTML = "水晶山峰水晶守卫椅子左侧获得。"
    des.style.backgroundImage = ""
}

dydys.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "18.5vw";
    choose.style.left = "36.5vw";
    n.innerHTML = "典雅的钥匙";
    intro.innerHTML = "用于打开灵魂圣所左侧门获得暗影之魂。";
    way.innerHTML = "获得店主钥匙后德特茅斯斯莱800G出售。"
    des.style.backgroundImage = ""
}

dctxz.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "11.5vw";
    choose.style.left = "57.5vw";
    n.innerHTML = "电车通行证";
    intro.innerHTML = "允许使用电车，没有次数限制。获得后与最后的鹿角虫会有新对话。";
    way.innerHTML = "在深巢的废弃的车站内获得。"
    des.style.backgroundImage = ""
}

cswz.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "11.5vw";
    choose.style.left = "50.5vw";
    n.innerHTML = "城市纹章";
    intro.innerHTML = "用于打开真菌荒地通往泪水之城的大门。";
    way.innerHTML = "遗忘十字路打败假骑士获得。"
    des.style.backgroundImage = ""
}


cbks.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "11.5vw";
    choose.style.left = "43.5vw";
    n.innerHTML = "苍白矿石";
    intro.innerHTML = "用于升级武器，共有六块。";
    way.innerHTML = "1.古老盆地电车左边。</br>2.圣巢之冠的雕像下方。</br>3.深巢打败斯诺克。</br>4.收集300精华后先知给与。</br>5.解救31只幼虫后虫爷爷给予。</br>6.通过竞技场2。"
    des.style.backgroundImage = ""
}

azs.onclick = function () {
    choose.style.width = "6vw";
    choose.style.height = "6vw";
    choose.style.top = "11.5vw";
    choose.style.left = "36.5vw";
    n.innerHTML = "爱之钥";
    intro.innerHTML = "用于打开爱之塔的门，与收藏家战斗。";
    way.innerHTML = "王后花园右下拾取。（需要伊思玛的眼泪）"
    des.style.backgroundImage = ""
}

ysmzl.onclick = function () {
    choose.style.width = "5vw";
    choose.style.height = "5vw";
    choose.style.top = "43vw";
    choose.style.left = "26vw";
    n.innerHTML = "伊思玛之泪";
    intro.innerHTML = "允许在酸水中游泳";
    way.innerHTML = "打败粪虫防御者后在伊思玛的树林获得。"
    des.style.backgroundImage = "url(图片素材/fs/道具/ysmzl+.jpg)"
}


tlz.onclick = function () {
    choose.style.width = "5vw";
    choose.style.height = "5vw";
    choose.style.top = "43vw";
    choose.style.left = "19vw";
    n.innerHTML = "螳螂爪";
    intro.innerHTML = "在空中靠近竖直的墙面，按住朝墙面的方向键即可沿墙慢慢滑下，此时可以按跳跃键起跳，跳跃高度取决于按键的时间。";
    way.innerHTML = "在螳螂村左上方的架子上获得。"
    des.style.backgroundImage = "url(图片素材/fs/道具/tlz+.jpg)"
}


sjzx.onclick = function () {
    choose.style.width = "5vw";
    choose.style.height = "5vw";
    choose.style.top = "43vw";
    choose.style.left = "12vw";
    n.innerHTML = "水晶之心";
    intro.innerHTML = "在地面或垂直的墙面，按住超级冲刺键蓄力，蓄力完成会发出闪光，然后松开超级冲刺键即可朝小骑士面朝的方向飞出去。途中按跳跃键可以停下。飞行中尾焰有10点伤害若敌人被此伤害击杀则冲刺不停止，否则停下。";
    way.innerHTML = "水晶山峰右下角，检查废弃的挖矿机器即可。"
    des.style.backgroundImage = "url(图片素材/fs/道具/sjzx+.jpg)"
}


dwzy.onclick = function () {
    choose.style.width = "5vw";
    choose.style.height = "5vw";
    choose.style.top = "36vw";
    choose.style.left = "23vw";
    n.innerHTML = "帝王之翼";
    intro.innerHTML = "在空中按下跳跃键以展开帝王之翼进行二段跳，跳跃高度取决于按键的时间，落地后、螳螂爪爬墙、下劈机关、地刺、敌人，都会刷新二段跳。";
    way.innerHTML = "在古老盆地击败残破容器继续前进获得。"
    des.style.backgroundImage = "url(图片素材/fs/道具/dwzy+.jpg)"
}

eypf.onclick = function () {
    choose.style.width = "5vw";
    choose.style.height = "5vw";
    choose.style.top = "36vw";
    choose.style.left = "16vw";
    n.innerHTML = "蛾翼披风";
    intro.innerHTML = "按冲刺键使用，方向为小骑士面朝的方向，可以在空中使用一次，落地后、螳螂爪爬墙或下劈地刺、机关、敌人等都会刷新冲刺。";
    way.innerHTML = "在苍绿之径击败守护者大黄蜂获得。"
    des.style.backgroundImage = "url(图片素材/fs/道具/eypf+.jpg)"
}

aypf.onclick = function () {
    choose.style.width = "5vw";
    choose.style.height = "5vw";
    choose.style.top = "36vw";
    choose.style.left = "9vw";
    n.innerHTML = "暗影披风";
    intro.innerHTML = "蛾翼披风的升级版，按冲刺键使用，方向为小骑士面朝的方向，冲刺期间无敌，可穿过敌人和暗影之门，无法穿过机关。暗影冲刺有大约2s的冷却时间，这个时间内使用冲刺都会变成普通冲刺，所以要谨慎使用。";
    way.innerHTML = "在深渊的最右边，站在盛满暗影的碗里获得。"
    des.style.backgroundImage = "url(图片素材/fs/道具/aypf+.jpg)"
}

lhjj.onclick = function () {
    choose.style.width = "8vw";
    choose.style.height = "8vw";
    choose.style.top = "22.4vw";
    choose.style.left = "26vw";
    n.innerHTML = "灵魂聚集";
    intro.innerHTML = "按住聚集键会逐渐消耗灵魂，1/3主容器便可恢复一点生命值。聚集中受到伤害就会被打断，灵魂会被浪费。";
    way.innerHTML = "游戏开局自带。"
    des.style.backgroundImage = "url(图片素材/fs/法术/lhjj+.png)"
}

syjx.onclick = function () {
    choose.style.width = "5vw";
    choose.style.height = "5vw";
    choose.style.top = "28.5vw";
    choose.style.left = "19vw";
    n.innerHTML = "深渊尖啸";
    intro.innerHTML = "嚎叫灵魂的升级版，在按住上方向键时轻按聚集键或快速施法键释放，需要消耗1/3主容器的灵魂，向上放出四段冲击波，每段伤害20点。释放时小骑士会滞留在空中。";
    way.innerHTML = "在深渊左下角的房间内，释放一次嚎叫幽灵即可获得。"
    des.style.backgroundImage = "url(图片素材/fs/法术/syjx+.jpg)"
}


hjyl.onclick = function () {
    choose.style.width = "5vw";
    choose.style.height = "5vw";
    choose.style.top = "22vw";
    choose.style.left = "19vw";
    n.innerHTML = "嚎叫幽灵";
    intro.innerHTML = "在按住上方向键时轻按聚集键或快速施法键释放，需要消耗1/3主容器的灵魂，向上放出三段冲击波，每段伤害13点。释放时小骑士会滞留在空中。";
    way.innerHTML = "在雾之峡谷长满植物的山丘内获得。"
    des.style.backgroundImage = "url(图片素材/fs/法术/hjyl+.jpg)"
}

hajl.onclick = function () {
    choose.style.width = "5vw";
    choose.style.height = "5vw";
    choose.style.top = "28.5vw";
    choose.style.left = "12vw";
    n.innerHTML = "黑暗降临";
    intro.innerHTML = "荒芜俯冲的升级版，在按住下键时轻按聚集键或快速施法释放，消耗1/3主容器的灵魂，下落时全程无敌，撞到敌人伤害为15，落地后还有0.5s无敌，并产生两段冲击波，伤害为30和15。下砸可以打开地上的玻璃、松动的地板等。";
    way.innerHTML = "在水晶山峰的结晶山丘，打碎封住蜗牛萨满的水晶获得。"
    des.style.backgroundImage = "url(图片素材/fs/法术/hajl+.jpg)"
}

ayzh.onclick = function () {
    choose.style.width = "5vw";
    choose.style.height = "5vw";
    choose.style.top = "28.5vw";
    choose.style.left = "5vw";
    n.innerHTML = "暗影之魂";
    intro.innerHTML = "复仇之魂的升级版，轻按聚集键或快速施法键释放，消耗1/3主容器的灵魂，伤害为30，方向为小骑士面朝的方向，可击退并穿透敌人，撞到墙壁或飞出大约1.5个屏幕后消失，对于吃击退的BOSS（比如所有梦境战士）可以打出两次伤害。";
    way.innerHTML = "在泪水之城用典雅的钥匙开门，打败灵魂战士，检查上面的装置即可获得。"
    des.style.backgroundImage = "url(图片素材/fs/法术/ayzh+.jpg)"
}

hwfc.onclick = function () {
    choose.style.width = "5vw";
    choose.style.height = "5vw";
    choose.style.top = "22vw";
    choose.style.left = "12vw";
    n.innerHTML = "荒芜俯冲";
    intro.innerHTML = "在按住下键时轻按聚集键或快速施法释放，消耗1/3主容器的灵魂，下落时后半段无敌，撞到敌人伤害为15，落地后还有0.5s无敌，并产生冲击波，伤害为20。下砸可以打开地上的玻璃、松动的地板等。";
    way.innerHTML = "在泪水之城打败灵魂大师获得。"
    des.style.backgroundImage = "url(图片素材/fs/法术/hwfc+.jpg)"
}

fczy.onclick = function () {
    choose.style.width = "5vw";
    choose.style.height = "5vw";
    choose.style.top = "22vw";
    choose.style.left = "5vw";
    n.innerHTML = "复仇之魂";
    intro.innerHTML = "轻按聚集键或快速施法键释放，消耗1/3主容器的灵魂，伤害为15，方向为小骑士面朝的方向，可击退并穿透敌人，撞到墙壁或飞出大约1.5个屏幕后消失，对于吃击退的BOSS（比如所有梦境战士）可以打出两次伤害。";
    way.innerHTML = "遗忘十字路打败假骑士后，在祖先山丘与蜗牛萨满对话获得。"
    des.style.backgroundImage = "url(图片素材/fs/法术/fczh+.jpg)";
}

jxmd.onclick = function () {
    choose.style.width = "6.3vw";
    choose.style.height = "10vw";
    choose.style.top = "8.5vw";
    choose.style.left = "28vw";
    n.innerHTML = "觉醒梦之钉";
    intro.innerHTML = "梦之钉的升级版保留了原来的功能，但是能打开被保护的梦境，也就是白宫。";
    way.innerHTML = "收集1800精华后与先知对话获得。</br>可以解锁不同结局。"
    des.style.backgroundImage = "url(图片素材/fs/道具/jxmd+.jpg)";
}

mzd.onclick = function () {
    choose.style.width = "6.3vw";
    choose.style.height = "10vw";
    choose.style.top = "8.5vw";
    choose.style.left = "22vw";
    n.innerHTML = "梦之钉";
    intro.innerHTML = "站在地上时按住梦之钉键朝前方挥舞梦之钉。先到安息之地中央，检查石碑，被守梦者放逐，经过一段时间获得。用途有：";
    way.innerHTML = "</br>1.阅读NPC、敌人、雕像、尸体的思想。</br>2.从活着的敌人身上获得33点灵魂，并造成击退。</br>3.使你能看见灵魂并与他们对话。</br>4.可以杀死灵魂并获得1点精华。</br>5.激活低语之根。</br>6.可以与战士之梦战斗。</br>7.进入BOSS的梦境。</br>8.进入守梦者的梦境。</br>9.秒杀阴影。</br>10.获得虚空之心。</br>11.挑战辐光。</br>12.召唤格林剧团。</br>13.进入神居。</br>14.切换万神殿的BOSS。"
    des.style.backgroundImage = "";
}

smtxq.onclick = function () {
    choose.style.width = "5vw";
    choose.style.height = "6vw";
    choose.style.top = "6.7vw";
    choose.style.left = "16.75vw";
    n.innerHTML = "神明调谐器";
    intro.innerHTML = "与圣巢诸神的力量相调谐";
    way.innerHTML = "</br>在垃圾坑用简单的钥匙打开寻神者的棺材掉落。</br>得到这个道具可以解锁神居玩法。"
    des.style.backgroundImage = "";
}
mask.onclick = function () {
    choose.style.height = "11.5vw";
    choose.style.width = "8.5vw";
    choose.style.top = "8.5vw";
    choose.style.left = "6vw";
    n.innerHTML = "面具碎片";
    intro.innerHTML = "面具碎片式提升生命上限的关键道具，4个碎片便可以增加一点生命上限，游戏中共有16片面具碎片："
    way.innerHTML = "1.德特茅斯的莱斯150G出售。" + "</br>" + "2.德特茅斯的莱斯500G出售。" + "</br>" + "3.德特茅斯的莱斯800G出售。" + "</br>" + "4.德特茅斯的莱斯1500G出售。" + "</br>" + "5.遗忘十字路击败躁郁的毛里克。" + "</br>" + "6.解救5只幼虫后虫爷爷给予。" + "</br>" + "7.遗忘十字路温泉附近。" + "</br>" + "8.王后驿站旁。" + "</br>" + "9.解救布蕾塔后在她的房间里。" + "</br>" + "10.石之庇护所内。" + "</br>" + "11.皇家水道和真菌荒地接壤处。" + "</br>" + "12.经过真菌核心在深巢获得。" + "</br>" + "13.水晶山峰击败暴怒守卫。" + "</br>" + "14.蜂巢中利用大蜜蜂把墙壁撞开。" + "</br>" + "15.收集1500精华后先知给与。" + "</br>" + "16.完成送花任务后灰色哀悼者给予。"
    des.style.backgroundImage = "";
}
rq.onclick = function () {
    choose.style.width = "5vw";
    choose.style.height = "5vw";
    choose.style.top = "13.65vw";
    choose.style.left = "16.8vw";
    n.innerHTML = "容器碎片";
    intro.innerHTML = "容器碎片式提升灵魂容量的关键道具，3个碎片便可合成一个完整的容器，小容器可容纳33点灵魂，但无法直接使用，大容器不满时会填充过去，游戏中共有9片容器碎片："
    way.innerHTML = "1.德特茅斯的斯莱550G出售。" + "</br>" + "2.德特茅斯的斯莱900G出售。" + "</br>" + "3.苍绿之径与皇后花园接壤处。" + "</br>" + "4.遗忘十字路和泪水之城接壤处。" + "</br>" + "5.泪水之城国王驿站正上方。" + "</br>" + "6.温泉右方深巢下劈蜈蚣。" + "</br>" + "7.鹿角虫巢穴。" + "</br>" + "8.收集700精华先知给与。" + "</br>" + "9.古老盆地向喷泉投入3000G获得。";
    des.style.backgroundImage = "";
}