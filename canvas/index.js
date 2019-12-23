function draw(){
    var canvas = document.getElementById('tutorial');
    if(!canvas.getContext) return;

    var ctx = canvas.getContext("2d");

    ctx.fillRect(10, 10, 100, 50);     // 绘制矩形，填充的默认颜色为黑色
    ctx.strokeRect(10, 70, 100, 50); 

    ctx.clearRect(15, 15, 50, 25);
}

draw();