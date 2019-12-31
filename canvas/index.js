// 长方形
function draw(){
    let canvas = document.getElementById('tutorial');
    if(!canvas.getContext) return;
    let ctx = canvas.getContext("2d");

    ctx.fillRect(10, 10, 100, 50);     // 绘制矩形，填充的默认颜色为黑色
    ctx.strokeRect(10, 70, 100, 50);   // 绘制矩形边框

    ctx.clearRect(15, 15, 50, 25);     // 掏空出来一块镂空矩形

    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(210, 150);
    ctx.lineTo(210, 210);
    ctx.lineTo(150, 210);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(10, 140, 120, 110);
    ctx.stroke();
}

draw();


// 线段
function line(){
    let canvas = document.getElementById('line');
    if (!canvas.getContext) return;
    let ctx = canvas.getContext("2d");

    ctx.beginPath(); //新建一条path
    ctx.moveTo(50, 50); //把画笔移动到指定的坐标
    ctx.lineTo(200, 50);  //绘制一条从当前位置到指定坐标(200, 50)的直线.
    //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
    ctx.closePath();
    ctx.stroke(); //绘制路径。

    ctx.beginPath();
    ctx.rect(45, 45, 10, 10);
    ctx.fill();

    ctx.beginPath();
    ctx.rect(195, 45, 10, 10);
    ctx.fill();
}

line();


// 三角形
function triangle(){
    let canvas = document.getElementById('triangle');
    if (!canvas.getContext) return;
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(200, 50);
    ctx.lineTo(200, 200);
    ctx.closePath(); //虽然只绘制了两条线段，但是closePath会闭合路径，仍然是一个3角形
    ctx.stroke(); //描边。stroke不会自动闭合路径

    ctx.beginPath();
    ctx.moveTo(60, 70);
    ctx.lineTo(200, 50);
    ctx.lineTo(100, 100);
    ctx.closePath();
    ctx.fill(); // 填充闭合区域。如果path没有闭合，则fill()会自动闭合路径。
}

triangle();


// 圆弧
function arc() {
    let canvas = document.getElementById("arc");
    if (!canvas.getContext) return;
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(50, 50, 40, Math.PI / 8, Math.PI / 2, true);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(80, 50, 40, 0, -Math.PI / 2, true);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(50, 150, 40, -Math.PI / 2, Math.PI / 2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(150, 60, 40, 0, Math.PI, false);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(160, 160);
    ctx.arcTo(200, 160, 200, 200, 40);
    ctx.lineTo(200, 200);
    ctx.stroke();
}

arc();

// 贝塞尔曲线
function bezier() {
    let canvas = document.getElementById('bezier');
    if (!canvas.getContext) return; 
    let ctx = canvas.getContext('2d');

    let cp1x = 40, cp1y = 100;  //控制点
    let cp2x = 100, cp2y = 120;  //控制点2
    let x = 200, y = 200; // 结束点
    //绘制二次贝塞尔曲线
    ctx.beginPath();
    ctx.moveTo(10, 200);
    ctx.quadraticCurveTo(cp1x, cp1y, x, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(40, 200); //起始点
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    ctx.stroke();
}

bezier();


// 填充颜色
function colors() {
    let canvas = document.getElementById('colors');
    if (!canvas.getContext) return; 
    let ctx = canvas.getContext('2d');

    for (let i = 0; i < 6; i++){
        for (let j = 0; j < 6; j++){
            ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, 
                            ${Math.floor(255 - 42.5 * j)}, 0)`;
            ctx.fillRect(j * 50, i * 50, 50, 50);
        }
    }
}

colors();


// 边框颜色
/**
 返回随机的 [from, to] 之间的整数(包括from，也包括to)
 */
function randomInt(from, to){
    return parseInt(Math.random() * (to - from + 1) + from);
}
function borders() {
    let canvas = document.getElementById('borders');
    if (!canvas.getContext) return; 
    let ctx = canvas.getContext('2d');

    for (var i = 0.1; i < 6; i++){
        for (var j = 0.1; j < 6; j++){
            ctx.strokeStyle = `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
            ctx.strokeRect(j * 50, i * 50, 40, 40);
        }
    }
}

borders();


// 线条
function lines() {
    let canvas = document.getElementById('lines');
    if (!canvas.getContext) return; 
    let ctx = canvas.getContext('2d');

    // 线宽
    ctx.beginPath();
    ctx.moveTo(10, 20);
    ctx.lineTo(100, 20);
    ctx.lineWidth = 10;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(110, 20);
    ctx.lineTo(160, 20)
    ctx.lineWidth = 20;
    ctx.stroke();

    // 线条始末端形状
    let lineCaps = ["butt", "round", "square"];
 
    for (var i = 0; i < 3; i++){
        ctx.beginPath();
        ctx.moveTo(40 + 40 * i, 50);
        ctx.lineTo(40 + 40 * i, 100);
        ctx.lineWidth = 20;
        ctx.lineCap = lineCaps[i];
        ctx.stroke();
    }
    
    ctx.beginPath();
    ctx.moveTo(0, 50);
    ctx.lineTo(300, 50);
    
    ctx.moveTo(0, 100);
    ctx.lineTo(300, 100)
    
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.stroke();

    // 线条连接处形状
    let lineJoin = ['round', 'bevel', 'miter'];
    ctx.lineWidth = 20;
 
    for (let i = 0; i < lineJoin.length; i++){
        ctx.lineJoin = lineJoin[i];
        ctx.beginPath();
        ctx.moveTo(50, 130 + i * 50);
        ctx.lineTo(100, 150 + i * 50);
        ctx.lineTo(150, 120 + i * 50);
        ctx.lineTo(200, 140 + i * 50);
        ctx.lineTo(250, 110 + i * 50);
        ctx.strokeStyle = "green";
        ctx.lineWidth = 25;
        ctx.stroke();
    }

}

lines();


// 线条
function dashLine() {
    let canvas = document.getElementById('dashline');
    if (!canvas.getContext) return; 
    let ctx = canvas.getContext('2d');

    // 虚线
    ctx.setLineDash([20, 5]);  // [实线长度, 间隙长度]
    ctx.lineDashOffset = -0;
    ctx.strokeRect(50, 50, 210, 210);
}

dashLine();


// 裁剪
function clipshape() {
    let canvas = document.getElementById('clipshape');
    if (!canvas.getContext) return; 
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(20, 20, 100, 0, Math.PI * 2);
    ctx.clip(); // 裁剪后变成扇形
 
    ctx.fillStyle = "pink";
    ctx.fillRect(20, 20, 100,100);
}

clipshape();