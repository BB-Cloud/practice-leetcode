// 长方形
function draw(){
    var canvas = document.getElementById('tutorial');
    if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");

    ctx.fillRect(10, 10, 100, 50);     // 绘制矩形，填充的默认颜色为黑色
    ctx.strokeRect(10, 70, 100, 50);   // 绘制矩形边框

    ctx.clearRect(15, 15, 50, 25);     // 掏空出来一块镂空矩形
}

draw();

// 线段
function line(){
    var canvas = document.getElementById('line');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");

    ctx.beginPath(); //新建一条path
    ctx.moveTo(50, 50); //把画笔移动到指定的坐标
    ctx.lineTo(200, 50);  //绘制一条从当前位置到指定坐标(200, 50)的直线.
    //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
    ctx.closePath();
    ctx.stroke(); //绘制路径。
}

line();

// 三角形
function triangle(){
    var canvas = document.getElementById('triangle');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(200, 50);
    ctx.lineTo(200, 200);
    ctx.closePath(); //虽然只绘制了两条线段，但是closePath会闭合路径，仍然是一个3角形
    ctx.stroke(); //描边。stroke不会自动闭合路径
}

triangle();