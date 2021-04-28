 canvas= document.getElementById("my_Canvas");
 ctx = canvas.getContext("2d");

 ctx.beginPath();
 ctx.strokeStyle="gray";
 ctx.rect(80,80,460,250,);
 ctx.lineWidth=2;
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle="blue";
 ctx.arc(200,170,40,0,2*Math.PI);
 ctx.lineWidth=5;
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle="black";
 ctx.arc(310,170,40,0,2*Math.PI);
 ctx.lineWidth=5;
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle="red";
 ctx.arc(420,170,40,0,2*Math.PI);
 ctx.lineWidth=5;
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle="yellow";
 ctx.arc(255,210,40,0,2*Math.PI);
 ctx.lineWidth=5;
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle="green";
 ctx.arc(365,210,40,0,2*Math.PI);
 ctx.lineWidth=5;
 ctx.stroke();
 

