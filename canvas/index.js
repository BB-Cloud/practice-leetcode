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