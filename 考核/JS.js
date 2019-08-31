window.onload=function () {
    //获取导航栏的6个元素
    var Div1 = document.getElementById('div1');
    var Div2 = document.getElementById('div2');
    var Div3 = document.getElementById('div3');
    var Div4 = document.getElementById('div4');
    var Div5 = document.getElementById('div5');
    var Div6 = document.getElementById('div6');
    //获取6个页面div
    var Box1 = document.getElementById('LunFan');
    var Box2 = document.getElementById('Repositories');
    var Box3 = document.getElementById('Projects');
    var Box4 = document.getElementById('Stars');
    var Box5 = document.getElementById('Followers');
    var Box6 = document.getElementById('Following');
    //获取6个小box
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    var box3 = document.getElementById('box3');
    var box4 = document.getElementById('box4');
    var box5 = document.getElementById('box5');
    var box6 = document.getElementById('box6');
    //获取Unfollow按钮
    var oBtn = document.getElementById('btn1');
    //获取box7
    var Obox7 = document.getElementById('box7');
    var Aleat=document.getElementById('alert');
    var X=document.getElementById('x');
    var XLK1=document.getElementById('xlk_top1');
    var Xiala1=document.getElementById('xiala1');

    //给6个元素绑定点击事件
    Div1.onclick = function () {
       Box1.style.display = 'block';
        Box6.style.display = 'none';
        Box5.style.display = 'none';
        Box4.style.display = 'none';
        Box3.style.display = 'none';
        Box2.style.display = 'none';
        box1.style.background = '#e34c26';
        box2.style.background = '#cccccc';
        box3.style.background = '#cccccc';
        box4.style.background = '#cccccc';
        box5.style.background = '#cccccc';
        box6.style.background = '#cccccc';
    }
    Div2.onclick = function () {
        Box2.style.display = 'block';
        Box1.style.display = 'none';
        Box6.style.display = 'none';
        Box5.style.display = 'none';
        Box4.style.display = 'none';
        Box3.style.display = 'none';
        box2.style.background = '#e34c26';
        box1.style.background = '#cccccc';
        box3.style.background = '#cccccc';
        box4.style.background = '#cccccc';
        box5.style.background = '#cccccc';
        box6.style.background = '#cccccc';
    }
    Div3.onclick = function () {
        Box3.style.display = 'block';
        Box1.style.display = 'none';
        Box2.style.display = 'none';
        Box6.style.display = 'none';
        Box5.style.display = 'none';
        Box4.style.display = 'none';
        box3.style.background = '#e34c26';
        box4.style.background = '#cccccc';
        box5.style.background = '#cccccc';
        box6.style.background = '#cccccc';
        box2.style.background = '#cccccc';
        box1.style.background = '#cccccc';
    }
    Div4.onclick = function () {
        Box4.style.display = 'block';
        Box3.style.display = 'none';
        Box1.style.display = 'none';
        Box2.style.display = 'none';
        Box6.style.display = 'none';
        Box5.style.display = 'none';
        box4.style.background = '#e34c26';
        box2.style.background = '#cccccc';
        box1.style.background = '#cccccc';
        box3.style.background = '#cccccc';
        box5.style.background = '#cccccc';
        box6.style.background = '#cccccc';
    }
    Div5.onclick = function () {
        Box5.style.display = 'block';
        Box4.style.display = 'none';
        Box3.style.display = 'none';
        Box1.style.display = 'none';
        Box2.style.display = 'none';
        Box6.style.display = 'none';
        box5.style.background = '#e34c26';
        box6.style.background = '#cccccc';
        box4.style.background = '#cccccc';
        box2.style.background = '#cccccc';
        box1.style.background = '#cccccc';
        box3.style.background = '#cccccc';
    }
    Div6.onclick = function () {
        Box6.style.display = 'block';
        Box5.style.display = 'none';
        Box4.style.display = 'none';
        Box3.style.display = 'none';
        Box1.style.display = 'none';
        Box2.style.display = 'none';
        box6.style.background = '#e34c26';
        box4.style.background = '#cccccc';
        box2.style.background = '#cccccc';
        box1.style.background = '#cccccc';
        box3.style.background = '#cccccc';
        box5.style.background = '#cccccc';
    }
    //Unfollow点击弹出框
    oBtn.onclick = function () {
        Aleat.style.display='block';
        //alert("111");

    }
    X.onclick=function()
    {
        Aleat.style.display='none';
    }
    //box7的动效
    starMove(150);

    function starMove(iTarget) {
        var Obox7 = document.getElementById('box7');
        clearInterval();
        timer = setInterval(function () {
            var speed = 0;
            if (Obox7.offsetWidth < iTarget) {
                speed =2;
            } else {
                speed =-1;
            }
            if (Math.abs(iTarget - Obox7.offsetWidth) <= 7) {
                clearInterval(timer);
                Obox7.style.width = iTarget + 'px';
            } else {
                Obox7.style.width = Obox7.offsetWidth + speed + 'px';
            }

        }, 30)

    }
    //下拉框
     var timer1=null;
    var timer2=null;
    var timer3=null;
    var timer4=null;
    Xiala1.onmouseover=function () {
        clearInterval(timer2);
        timer1=setInterval(function () {
            XLK1.style.display="block";
        },30)
    }
    Xiala1.onmouseout=function () {
        clearInterval(timer1);
       timer2=setInterval(function () {
            XLK1.style.display='none';
        },2000)

    }
    var Sort=document.getElementById('sort');
    var XLX2=document.getElementById('xlk_top2');
    Sort.onmouseover=function () {
        clearInterval(timer4);
        timer3=setInterval(function () {
            XLX2.style.display="block";
        },30)
    }
    Sort.onmouseout=function () {
        clearInterval(timer3);
        timer4=setInterval(function () {
            XLX2.style.display='none';
        },2000)

    }
    Div1.onmouseover=function () {
        box1.style.display='block';
        box2.style.display='none';
        box3.style.display='none';
        box4.style.display='none';
        box5.style.display='none';
        box6.style.display='none';

    }
    Div2.onmouseover=function () {
        box2.style.display='block';
        box3.style.display='none';
        box4.style.display='none';
        box5.style.display='none';
        box6.style.display='none';
        box1.style.display='none';
    }
    Div3.onmouseover=function () {
        box3.style.display='block';
        box2.style.display='none';
        box4.style.display='none';
        box5.style.display='none';
        box6.style.display='none';
        box1.style.display='none';

    }
    Div4.onmouseover=function () {
        box4.style.display='block';
        box1.style.display='none';
        box2.style.display='none';
        box3.style.display='none';
        box5.style.display='none';
        box6.style.display='none';

    }
    Div5.onmouseover=function () {
        box5.style.display='block';
        box1.style.display='none';
        box2.style.display='none';
        box3.style.display='none';
        box4.style.display='none';
        box6.style.display='none';

    }
    Div6.onmouseover=function () {
        box6.style.display='block';
        box1.style.display='none';
        box2.style.display='none';
        box3.style.display='none';
        box4.style.display='none';
        box5.style.display='none';


    }
}