

(() => {
  const canvas = document.getElementById('scene');
  const ctx = canvas.getContext('2d');
  const $ = id => document.getElementById(id);
  const controls = ['gravity','bounce','ramp','speed'];
  let running = false, last = 0, elapsed = 0, ball, bounceCount = 0, trail = [];
  const W = canvas.width, H = canvas.height;
  const floorY = 405, radius = 13;
  const rampStart = {x:72,y:300};
  let rampEnd = {x:260,y:300};
  function values(){
    return {g:+$('gravity').value, e:+$('bounce').value/100, angle:+$('ramp').value*Math.PI/180, speed:+$('speed').value};
  }
  function updateLabels(){
    $('gravityVal').textContent = (+$('gravity').value).toFixed(1)+' m/s²';
    $('bounceVal').textContent = $('bounce').value+'%';
    $('rampVal').textContent = $('ramp').value+'°';
    $('speedVal').textContent = (+$('speed').value).toFixed(1)+' m/s';
    if(!running) draw();
  }
  function reset(){
    const v=values();
    elapsed=0; bounceCount=0; trail=[];
    rampEnd={x:260,y:rampStart.y-Math.tan(v.angle)*188};
    // Start at the upper end of the ramp, with the launch speed directed down the ramp.
    ball={x:rampEnd.x-5,y:rampEnd.y-radius,vx:v.speed*Math.cos(v.angle),vy:v.speed*Math.sin(v.angle),startY:rampEnd.y-radius};
    running=false; last=0;
    $('playBtn').textContent='▶ Play';
    $('status').textContent='READY';
    updateStats(); draw();
  }
  function physics(dt){
    const v=values();
    elapsed+=dt;
    const oldX=ball.x, oldY=ball.y;
    ball.vy += v.g*dt*27; // visual scale: gravity is expressed in m/s²
    ball.x += ball.vx*dt*27;
    ball.y += ball.vy*dt*27;
    // Main floor collision
    if(ball.y+radius>=floorY){
      ball.y=floorY-radius;
      if(Math.abs(ball.vy)>0.55 && v.e>0){
        ball.vy=-Math.abs(ball.vy)*v.e;
        ball.vx*=0.985;
        bounceCount++;
      } else {
        ball.vy=0; ball.vx*=0.985;
      }
    }
    // A small platform at the right creates another surface to experiment with.
    const platform={x:480,y:315,w:175,h:13};
    if(ball.vy>0 && oldY+radius<=platform.y && ball.y+radius>=platform.y &&
       ball.x+radius>platform.x && ball.x-radius<platform.x+platform.w){
      ball.y=platform.y-radius;
      ball.vy=-Math.abs(ball.vy)*v.e;
      bounceCount++;
    }
    // Keep the ball within the visible lab.
    if(ball.x-radius>W){ball.x=-radius;trail=[];}
    if(ball.x< -radius) ball.x=-radius;
    if(ball.x+radius>W-8){ball.x=W-8-radius;ball.vx=-Math.abs(ball.vx)*0.7;}
    trail.push({x:ball.x,y:ball.y});
    if(trail.length>24) trail.shift();
    updateStats();
  }
  function updateStats(){
    $('timeStat').textContent=elapsed.toFixed(2)+' s';
    $('heightStat').textContent=Math.max(0,(floorY-radius-ball.y)/27).toFixed(2)+' m';
    $('bounceStat').textContent=bounceCount;
    $('velocityStat').textContent=Math.hypot(ball.vx,ball.vy).toFixed(2)+' m/s';
  }
  function draw(){
    const v=values();
    ctx.clearRect(0,0,W,H);
    // Background grid
    ctx.fillStyle='#09182a';ctx.fillRect(0,0,W,H);
    ctx.strokeStyle='rgba(116,157,197,.10)';ctx.lineWidth=1;
    for(let x=20;x<W;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(let y=20;y<H;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
    // Floor
    const grad=ctx.createLinearGradient(0,floorY,W,H);
    grad.addColorStop(0,'#173755');grad.addColorStop(1,'#0c2138');
    ctx.fillStyle=grad;ctx.fillRect(0,floorY,W,H-floorY);
    ctx.strokeStyle='#58e1ef';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(0,floorY);ctx.lineTo(W,floorY);ctx.stroke();
    // Ramp
    rampEnd={x:260,y:rampStart.y-Math.tan(v.angle)*188};
    ctx.strokeStyle='#6f86a5';ctx.lineWidth=13;ctx.lineCap='round';
    ctx.beginPath();ctx.moveTo(rampStart.x,rampStart.y);ctx.lineTo(rampEnd.x,rampEnd.y);ctx.stroke();
    ctx.strokeStyle='#a78bfa';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(rampStart.x,rampStart.y-7);ctx.lineTo(rampEnd.x,rampEnd.y-7);ctx.stroke();
    // Platform
    ctx.fillStyle='#254969';ctx.fillRect(480,315,175,13);
    ctx.fillStyle='#58e1ef';ctx.fillRect(480,315,175,3);
    // Labels
    ctx.fillStyle='#9db0c9';ctx.font='12px system-ui';ctx.fillText('RAMP',95,340);
    ctx.fillText('BOUNCE PLATFORM',480,302);
    ctx.fillText('GROUND',16,430);
    // Trail
    for(let i=0;i<trail.length;i++){
      const p=trail[i], alpha=(i+1)/trail.length;
      ctx.beginPath();ctx.arc(p.x,p.y,radius*alpha*.72,0,Math.PI*2);
      ctx.fillStyle=`rgba(88,225,239,${alpha*.25})`;ctx.fill();
    }
    // Ball and shadow
    ctx.beginPath();ctx.ellipse(ball.x,floorY-2,18,5,0,0,Math.PI*2);ctx.fillStyle='rgba(0,0,0,.25)';ctx.fill();
    const ballGrad=ctx.createRadialGradient(ball.x-5,ball.y-6,2,ball.x,ball.y,radius+2);
    ballGrad.addColorStop(0,'#ffffff');ballGrad.addColorStop(.22,'#9af3fa');ballGrad.addColorStop(1,'#0ea5b7');
    ctx.beginPath();ctx.arc(ball.x,ball.y,radius,0,Math.PI*2);ctx.fillStyle=ballGrad;ctx.fill();
    ctx.strokeStyle='#d6fcff';ctx.lineWidth=1.5;ctx.stroke();
    // Gravity arrow
    if(v.g>0.1){
      const ax=Math.min(W-45,Math.max(42,ball.x+30)), ay=Math.min(H-80,Math.max(45,ball.y+25));
      ctx.strokeStyle='#fbad68';ctx.fillStyle='#fbad68';ctx.lineWidth=2;
      ctx.beginPath();ctx.moveTo(ax,ay-25);ctx.lineTo(ax,ay+15);ctx.stroke();
      ctx.beginPath();ctx.moveTo(ax-5,ay+8);ctx.lineTo(ax,ay+16);ctx.lineTo(ax+5,ay+8);ctx.stroke();
      ctx.font='bold 11px system-ui';ctx.fillText('g',ax+8,ay+2);
    }
  }
  function frame(ts){
    if(!running)return;
    if(!last)last=ts;
    let dt=Math.min((ts-last)/1000,.035);last=ts;
    // Substeps improve collision stability.
    const n=Math.max(1,Math.ceil(dt/.008));
    for(let i=0;i<n;i++)physics(dt/n);
    draw();
    requestAnimationFrame(frame);
  }
  $('playBtn').addEventListener('click',()=>{
    running=!running;
    $('playBtn').textContent=running?'❚❚ Pause':'▶ Play';
    $('status').textContent=running?'RUNNING':'PAUSED';
    if(running){last=0;requestAnimationFrame(frame);}
  });
  $('resetBtn').addEventListener('click',reset);
  $('stepBtn').addEventListener('click',()=>{
    if(running){running=false;$('playBtn').textContent='▶ Play';}
    $('status').textContent='STEPPING';
    for(let i=0;i<10;i++)physics(.01);
    draw();
    if(!running)$('status').textContent='PAUSED';
  });
  controls.forEach(id=>$(id).addEventListener('input',()=>{
    updateLabels();
    if(id==='ramp' || id==='speed') reset();
  }));
  reset();
})();
