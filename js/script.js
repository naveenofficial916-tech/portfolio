const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];

const R=[
{
  n:"Data Analytics",
  pl:"DATA<br>ANALYST",
  c:"#25408f",
  sub:"From raw data to actionable business intelligence",
  d:"Core technical competencies across the modern data stack — specializing in automated ETL pipelines, distributed big data processing, relational querying, and executive KPI dashboarding.",
  b:["Python, SQL & PySpark data engineering","Interactive Power BI & Excel KPI dashboards","Databricks cloud workflows & Delta tables","ETL pipeline automation & data wrangling","Exploratory data analysis & statistical modeling"],
  p:[
    ["Technical Skill","PySpark & Databricks Big Data","Data Engineering · Distributed Computing","Architecting high-throughput distributed data pipelines using PySpark on Databricks clusters. Specializing in DataFrame optimizations, transformations, and scalable data processing.","Distributed Data at Scale","assets/projects/legacy-code-modernization.jpg"],
    ["Technical Skill","SQL & Relational Databases","PostgreSQL · MySQL · Query Tuning","Designing normalized database schemas, complex analytical queries, indexing strategies, CTEs, and window functions to query massive datasets with sub-second latency.","High-Performance Queries",""],
    ["Technical Skill","Power BI & Executive Dashboards","Business Intelligence · Visual Analytics","Designing executive dashboards with DAX calculations, interactive drill-downs, dynamic filters, and KPI scorecards that enable stakeholders to make swift, data-driven decisions.","Actionable Business Metrics",""],
    ["Technical Skill","Python for Data Science","Pandas · NumPy · Scikit-Learn","Automating repetitive data extraction, exploratory data analysis (EDA), anomaly detection, and statistical hypothesis testing with clean, reproducible scripts.","End-to-End Automation",""]
  ]
},
{
  n:"UI/UX Design",
  pl:"UI/UX<br>DESIGNER",
  c:"#7c3aed",
  sub:"From wireframes to intuitive, accessible user interfaces",
  d:"Specializing in user-centered digital product design, component architecture, interactive prototyping, and cross-platform design systems with high accessibility standards.",
  b:["Food Delivery Platform (Figma UI/UX)","Figma component systems & auto-layout","User journey mapping & rapid wireframing","Interactive high-fidelity prototyping","Accessibility standards (WCAG 2.1 AA)"],
  p:[
    ["Featured UI/UX Project","Foodie – Food Delivery Platform","Figma · UI/UX Design · Full Product Journey","Designed an end-to-end food ordering platform interface in Figma focused on cognitive ease, frictionless checkout flows, and accessibility. Includes restaurant listings, customizable food menus, cart management, address selection, payment, and real-time delivery tracking screens.","Figma UI Kit · Food Delivery App","assets/projects/food-delivery-figma.jpg"],
    ["Design Skill","Figma Design Systems & Components","Atomic Design · Reusable UI Kits","Building scalable design systems with structured color tokens, auto-layout variants, responsive component libraries, and detailed typography scales.","Scalable Design Architecture",""],
    ["Design Skill","User Journey & Wireframing","Information Architecture · UX Flows","Crafting intuitive user paths that minimize cognitive load, eliminating friction points from initial onboarding through multi-step checkout workflows.","Frictionless Experiences",""],
    ["Design Skill","Interactive Prototyping & Micro-interactions","Figma Smart Animate · Motion Specs","Creating realistic clickable prototypes with fluid micro-interactions, state transitions, and tactile feedback to validate user satisfaction prior to development.","Tactile Interaction Design",""],
    ["Design Skill","Accessibility & Usability Evaluation","WCAG 2.1 AA · Contrast & Readability","Conducting heuristic evaluations and designing high-contrast, screen-reader-friendly interfaces ensuring accessibility for diverse users and devices.","Inclusion-First Thinking",""]
  ]
},
{
  n:"Projects",
  pl:"PROJECTS",
  c:"#0284c7",
  sub:"Engineered systems, AI models & data infrastructure",
  d:"Hands-on engineered systems addressing cybersecurity vulnerabilities, legacy enterprise code restructuring, and AI-driven agricultural health monitoring with complete architectural visual blueprints.",
  b:["Attack Path Prediction for Campus Networks","Legacy Code Modernization System","Cattle Diseases Detection System","Graph Algorithms (DFS & Dijkstra) & CVE Mapping","TensorFlow, OpenCV, Databricks & PySpark"],
  p:[
    ["Cybersecurity Project","Attack Path Prediction for Campus Network","Graph Theory · DFS & Dijkstra · CVE / NVD Mapping","A campus-focused attack graph framework that maps network assets, CVE vulnerabilities, and multi-step lateral movement. Uses graph theory and Dijkstra's algorithm to compute minimum-cost attack paths and prioritize critical security remediations across campus IT infrastructure.","Campus Attack Graph Blueprint","assets/projects/attack-path-prediction.jpg"],
    ["Data Engineering Project","Legacy Code Modernization System","Databricks · PySpark · PostgreSQL · Cloud Pipelines","An enterprise data and code restructuring platform using PySpark and Databricks. Automatically parses monolithic legacy code, identifies outdated dependencies, and refactors it into scalable, modular cloud architectures to cut maintenance costs and eliminate technical debt.","Legacy Code Rebuilt Modern","assets/projects/legacy-code-modernization.jpg"],
    ["AI & IoT Project","Cattle Diseases Detection System","Computer Vision · TensorFlow · OpenCV · IoT Sensors","An intelligent early-detection system combining computer vision with IoT wearables to diagnose cattle health. Employs deep learning (CNNs) and KNN classification to detect Foot-and-Mouth Disease (FMD) and Lumpy Skin Disease (LSD) before outbreaks occur.","AI Livestock Health Monitoring","assets/projects/cattle-disease-detection.jpg"]
  ]
},
{
  n:"Achievements",
  pl:"ACHIEVE<br>MENTS",
  c:"#d99b16",
  sub:"National hackathons, awards & international credentials",
  d:"Honors, national hackathon podium finishes, and certified international qualifications demonstrating engineering excellence, leadership, and continuous learning.",
  b:["eMudhra National Hackathon 2nd Runner-Up","₹50,000 Cash Prize Winner","Goethe-Zertifikat A1 German Language (86.5%)","Campus Network Attack Graph Engineering","Enterprise Legacy Code Modernization"],
  p:[
    ["National Hackathon Podium","eMudhra Hackathon 2nd Runner-Up","National Hackathon · ₹50,000 Cash Prize · Team Innovativezzz","Secured 2nd Runner-Up at the prestigious National eMudhra Hackathon with project OptiPilot. Designed and built an intelligent autonomous system that solves critical operational hurdles. Won ₹50,000 cash prize and national recognition.","Naveenkumar · Holding National Trophy","assets/achievements/emudhra-hackathon-trophy-16x10.jpg","assets/achievements/emudhra-hackathon-trophy.jpg"],
    ["International Certification","Goethe-Zertifikat A1: Start Deutsch 1","Goethe-Institut / Max Mueller Bhavan Chennai · 86.5/100 (Sehr Gut)","Successfully completed and certified in German Language Level A1 from Goethe-Institut with an outstanding score of 86.5/100 (Prädikat: Sehr Gut / Pass with Merit), demonstrating high multilingual and international communication proficiency.","Goethe-Institut Certified · Sehr Gut","assets/achievements/goethe-a1-german-certificate.jpg"],
    ["Engineering Achievement","Attack Path Prediction for Campus Network","Cybersecurity & Graph Intelligence Milestone","Designed and implemented graph-based vulnerability prediction and prioritized cybersecurity remediation for university networks, presented at SRM Valliammai Engineering College.","Campus Network Cybersecurity","assets/projects/attack-path-prediction.jpg"],
    ["Engineering Achievement","Legacy Code Modernization System","Enterprise Cloud Data Engineering Milestone","Engineered and validated an automated legacy-to-modern data pipeline using Databricks and PySpark to modernize legacy systems and reduce technical debt.","Enterprise Modernization Architecture","assets/projects/legacy-code-modernization.jpg"]
  ]
}
];

const dr=$("#dr");let tm;
R.forEach((r,i)=>{
  const s=document.createElement("div");
  s.className="slot"+(i?"":" act");
  s.innerHTML=`<button class="door" aria-label="Open ${r.n}"><div class="dp"></div><div class="lf" style="--c:${r.c}"><em>${r.pl}</em><u class="hd"></u><u class="kh"></u></div></button><div class="info"><h3>${r.n}</h3><small>${r.sub}</small><ul>${r.b.map(x=>`<li>${x}</li>`).join("")}</ul></div>`;
  const b=s.querySelector(".door");
  b.onclick=()=>enter(i,b);
  ["mouseenter","focusin"].forEach(ev=>s.addEventListener(ev,()=>$$(".slot").forEach(x=>x.classList.toggle("act",x===s))));
  dr.append(s);
});

const cio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("v")}),{root:$("#room"),threshold:.15});

function fill(i){
  const r=R[i];
  $("#rt").textContent=r.n;
  $("#rd").textContent=r.d;
  $("#cards").innerHTML=r.p.map(p=>{
    const hasImg = p[5] && p[5].startsWith("assets/");
    const fullImg = p[6] || p[5];
    const mediaHtml = hasImg 
      ? `<div class="mk has-img" data-img="${fullImg}" data-title="${p[1]}"><img src="${p[5]}" alt="${p[1]}" loading="lazy"><span class="img-badge">${p[4]}</span></div>`
      : `<div class="mk skill-mk" style="background:${p[5] || 'linear-gradient(135deg, #1b1e24 0%, #101216 100%)'}"><i></i><em><span>Skill</span><span>Verified</span></em><b>${p[4]}</b></div>`;
    return `<article class="cd"><div><span class="lb">${p[0]}</span><h3>${p[1]}</h3><div class="st">${p[2]}</div><p>${p[3]}</p></div>${mediaHtml}</article>`;
  }).join("");

  $$(".cd").forEach(c=>cio.observe(c));
  $$(".mk.has-img").forEach(el=>{
    el.onclick=()=>{
      openLightbox(el.dataset.img, el.dataset.title);
    };
  });
  $("#room").scrollTop=0;
  $$("#nv a").forEach(a=>a.classList.toggle("on",a.dataset.r==i));
}

/* Lightbox handling */
const lb=$("#lightbox"), lbImg=$("#lb-img"), lbCap=$("#lb-caption"), lbClose=$("#lb-close");
function openLightbox(src, caption){
  if(!lb)return;
  lbImg.src=src;
  lbCap.textContent=caption||"";
  lb.classList.add("open");
  lb.setAttribute("aria-hidden","false");
}
function closeLightbox(){
  if(!lb)return;
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden","true");
  lbImg.src="";
}
if(lbClose) lbClose.onclick=closeLightbox;
if(lb) lb.onclick=e=>{ if(e.target===lb) closeLightbox(); };
addEventListener("keydown",e=>{ if(e.key==="Escape") closeLightbox(); });

function enter(i,door){
  const sc=$("#scene"),rc=door.getBoundingClientRect(),sr=sc.getBoundingClientRect();
  sc.style.transformOrigin=`${rc.left+rc.width/2-sr.left}px ${rc.top+rc.height*.6-sr.top}px`;
  door.classList.add("open");
  document.body.classList.add("lock");
  setTimeout(()=>sc.classList.add("zoom"),250);
  setTimeout(()=>$("#blk").classList.add("on"),1000);
  setTimeout(()=>{fill(i);$("#room").classList.add("show");$("#room").scrollTop=0;$("#blk").classList.remove("on")},1550);
}

function quick(i){
  document.body.classList.add("lock");
  $("#blk").classList.add("on");
  setTimeout(()=>{fill(i);$("#room").classList.add("show");$("#blk").classList.remove("on")},400);
}

function leave(){
  clearInterval(tm);
  $("#blk").classList.add("on");
  setTimeout(()=>{
    $("#room").classList.remove("show");
    $("#scene").classList.remove("zoom");
    $$(".door").forEach(d=>d.classList.remove("open"));
    $$("#nv a").forEach(a=>a.classList.toggle("on",a.dataset.go=="home"&&false));
    document.body.classList.remove("lock");
    $("#doors").scrollIntoView();
    $("#blk").classList.remove("on");
  },500);
}

$("#bk").onclick=leave;

$$("#nv a").forEach(a=>a.onclick=()=>{
  if(a.dataset.r!==undefined){
    $("#room").classList.contains("show")?(fill(+a.dataset.r)):quick(+a.dataset.r);
  }else{
    if($("#room").classList.contains("show")){
      $("#room").classList.remove("show");
      $("#scene").classList.remove("zoom");
      $$(".door").forEach(d=>d.classList.remove("open"));
      document.body.classList.remove("lock");
      clearInterval(tm);
    }
    $$("#nv a").forEach(x=>x.classList.remove("on"));
    a.classList.add("on");
    $("#"+a.dataset.go).scrollIntoView({behavior:"smooth"});
  }
});

$$("[data-go]").forEach(a=>{
  if(!a.closest("nav"))a.onclick=e=>{
    e.preventDefault();
    $("#"+a.dataset.go).scrollIntoView({behavior:"smooth"});
  };
});

/* ── Hero Flip: Automated & Interactive ──────────────────────────────────── */
const roles=[
  "Data Analyst",
  "UI/UX Designer",
  "AI & Data Engineer",
  "Cybersecurity Innovator"
];
let ri=0,busy=false;
const rc=$("#role");

function flip(targetIndex){
  if(busy)return;
  busy=true;
  rc.className="pg out";
  setTimeout(()=>{
    ri=(typeof targetIndex==="number")?targetIndex:(ri+1)%roles.length;
    rc.innerHTML=`${roles[ri]}<small>0${ri+1} / 0${roles.length}</small>`;
    rc.className="pg in";
    busy=false;
  },520);
}

let autoFlipTimer=null;
function startAutoFlip(){
  if(autoFlipTimer)clearInterval(autoFlipTimer);
  autoFlipTimer=setInterval(()=>{
    if(document.visibilityState!=="hidden"&&window.scrollY<window.innerHeight*.85){
      flip();
    }
  },2800);
}
function stopAutoFlip(){
  if(autoFlipTimer){
    clearInterval(autoFlipTimer);
    autoFlipTimer=null;
  }
}
startAutoFlip();

const flipContainer=$(".flip");
if(flipContainer){
  flipContainer.addEventListener("mouseenter",stopAutoFlip);
  flipContainer.addEventListener("mouseleave",startAutoFlip);
  flipContainer.addEventListener("click",()=>{
    flip();
    startAutoFlip();
  });
}

/* clock */
function tick(){
  const d=new Date();
  $("#clk").textContent=d.toLocaleTimeString("en-IN",{hour:"numeric",minute:"2-digit"}).toLowerCase();
  $("#dt").textContent=d.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});
}
tick();
setInterval(tick,30000);

/* theme + cord pull */
const cord=$("#cord");
function syncCord(){cord.classList.toggle("lt",document.body.classList.contains("dark")||scrollY>innerHeight*.5)}
addEventListener("scroll",syncCord,{passive:true});
syncCord();

function pull(){
  document.body.classList.toggle("dark");
  syncCord();
  ropePull();
  flip();
  startAutoFlip();
}

/* ══════════════════════════════════════════════════════════════════════════
   ORNAMENTAL PHYSICS ROPE & TASSEL
   ══════════════════════════════════════════════════════════════════════════ */
const rc2=$("#rope"),rx=rc2.getContext("2d"),N=24,CW=220;
let pts=[],rest=8,lenF=1,lenV=0,CL=0,CT=0,CH=360,LEN=200,AX=110,dpr=1,pinned=null,bw=6;

function ropeInit(){
  dpr=Math.min(devicePixelRatio||1,2);
  LEN=Math.max(160,Math.min(320,innerWidth*.21));
  bw=Math.max(3,Math.min(7.5,innerWidth*.0045));
  rest=LEN/(N-1);
  CH=Math.round(LEN*1.65+140);
  rc2.width=CW*dpr;
  rc2.height=CH*dpr;
  rc2.style.width=CW+"px";
  rc2.style.height=CH+"px";
  CL=Math.round(innerWidth-Math.max(18,innerWidth*.03)-AX);
  CT=0;
  rc2.style.left=CL+"px";
  rc2.style.top="0px";
  pts=Array.from({length:N},(_,i)=>({x:AX,y:i*rest,px:AX,py:i*rest}));
}

function ropePull(){
  lenF=1.36;lenV=0;
  pts.forEach((p,i)=>{p.px-=(i/N)*3.8});
}

function ropeStep(ts){
  lenV+=(1-lenF)*.16;
  lenV*=.8;
  lenF+=lenV;
  const r=rest*lenF,sw=Math.sin(ts*.0011)*.014;
  for(let i=1;i<N;i++){
    const p=pts[i],vx=(p.x-p.px)*.989,vy=(p.y-p.py)*.989;
    p.px=p.x;p.py=p.y;
    p.x+=vx+sw*i/N;
    p.y+=vy+.55;
  }
  for(let k=0;k<10;k++){
    pts[0].x=AX;pts[0].y=0;
    for(let i=0;i<N-1;i++){
      const a=pts[i],b=pts[i+1],dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1e-4,f=(d-r)/d;
      if(i===0){b.x-=dx*f;b.y-=dy*f}else{a.x+=dx*f*.5;a.y+=dy*f*.5;b.x-=dx*f*.5;b.y-=dy*f*.5}
    }
    for(let i=0;i<N-2;i++){
      const a=pts[i],b=pts[i+2],dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1e-4,f=(d-2*r*.99)/d*.18;
      if(i===0){b.x-=dx*f;b.y-=dy*f}else{a.x+=dx*f*.5;a.y+=dy*f*.5;b.x-=dx*f*.5;b.y-=dy*f*.5}
    }
    if(pinned){const e=pts[N-1];e.x=pinned.x;e.y=pinned.y}
  }
}

function ropeDraw(){
  const lt=document.body.classList.contains("dark")||document.body.classList.contains("lock")||scrollY>innerHeight*.5;
  rx.setTransform(dpr,0,0,dpr,0,0);
  rx.clearRect(0,0,CW,CH);

  // 1. Ornate Ceiling Bracket Plate
  const p0=pts[0];
  rx.save();
  rx.translate(p0.x,0);
  const ceilGr=rx.createLinearGradient(-26,0,26,0);
  ceilGr.addColorStop(0,"#7a5917");
  ceilGr.addColorStop(0.35,"#fce180");
  ceilGr.addColorStop(0.65,"#d4a32a");
  ceilGr.addColorStop(1,"#593f0b");
  rx.fillStyle=ceilGr;
  rx.beginPath();
  rx.rect(-24,0,48,7);
  rx.fill();
  rx.beginPath();
  rx.arc(0,6,12,0,Math.PI);
  rx.fill();
  rx.strokeStyle="rgba(0,0,0,0.35)";
  rx.lineWidth=1;
  rx.stroke();
  rx.beginPath();
  rx.ellipse(0,14,7,3.2,0,0,Math.PI*2);
  rx.fillStyle="#f3cb4d";
  rx.fill();
  rx.stroke();
  rx.restore();

  // 2. Rope Body: Soft drop shadow
  rx.beginPath();
  rx.moveTo(pts[0].x+2.5,pts[0].y+2.5);
  for(let i=1;i<N-1;i++){
    rx.quadraticCurveTo(pts[i].x+2.5,pts[i].y+2.5,(pts[i].x+pts[i+1].x)/2+2.5,(pts[i].y+pts[i+1].y)/2+2.5);
  }
  rx.lineTo(pts[N-1].x+2.5,pts[N-1].y+2.5);
  rx.strokeStyle=lt?"rgba(0,0,0,0.6)":"rgba(0,0,0,0.18)";
  rx.lineWidth=bw+2.5;
  rx.lineCap="round";
  rx.lineJoin="round";
  rx.stroke();

  // Base braided rope strand
  const path=()=>{
    rx.beginPath();
    rx.moveTo(pts[0].x,pts[0].y);
    for(let i=1;i<N-1;i++){
      rx.quadraticCurveTo(pts[i].x,pts[i].y,(pts[i].x+pts[i+1].x)/2,(pts[i].y+pts[i+1].y)/2);
    }
    rx.lineTo(pts[N-1].x,pts[N-1].y);
  };

  path();
  rx.strokeStyle=lt?"#c59f3b":"#9c7724";
  rx.lineWidth=bw+1.2;
  rx.stroke();

  // Dual-color spiral braided ridges
  rx.save();
  rx.lineCap="round";
  for(let i=0;i<N-1;i++){
    const pA=pts[i],pB=pts[i+1];
    const dx=pB.x-pA.x,dy=pB.y-pA.y;
    const ang=Math.atan2(dy,dx);
    const nx=-Math.sin(ang)*(bw*0.48);
    const ny=Math.cos(ang)*(bw*0.48);
    for(let s=0;s<2;s++){
      const t=(s+0.5)/2;
      const px=pA.x+dx*t;
      const py=pA.y+dy*t;
      rx.beginPath();
      rx.moveTo(px-nx,py-ny);
      rx.lineTo(px+nx,py+ny);
      rx.strokeStyle=((i*2+s)%2===0)?(lt?"#fff2ab":"#f3db82"):(lt?"#785312":"#5c3d0b");
      rx.lineWidth=bw*0.52;
      rx.stroke();
    }
  }
  rx.restore();

  path();
  rx.strokeStyle="rgba(255,255,255,0.42)";
  rx.lineWidth=Math.max(1,bw*0.22);
  rx.stroke();

  // 3. Decorative Jeweled Beads along the rope (at 35% and 68%)
  [Math.floor(N*0.35),Math.floor(N*0.68)].forEach((idx,bi)=>{
    const p=pts[idx],prev=pts[idx-1],next=pts[idx+1];
    const th=Math.atan2(next.y-prev.y,next.x-prev.x)+Math.PI/2;
    rx.save();
    rx.translate(p.x,p.y);
    rx.rotate(th);

    const bGrad=rx.createLinearGradient(-bw*1.5,0,bw*1.5,0);
    bGrad.addColorStop(0,"#7a5917");
    bGrad.addColorStop(0.35,"#ffe885");
    bGrad.addColorStop(0.65,"#d4a42b");
    bGrad.addColorStop(1,"#543d0d");
    rx.fillStyle=bGrad;
    rx.beginPath();
    rx.ellipse(0,0,bw*1.3,bw*0.8,0,0,Math.PI*2);
    rx.fill();
    rx.strokeStyle="rgba(0,0,0,0.35)";
    rx.lineWidth=0.8;
    rx.stroke();

    rx.beginPath();
    rx.arc(0,0,bw*0.38,0,Math.PI*2);
    rx.fillStyle=bi===0?"#e63946":"#0284c7";
    rx.fill();

    rx.beginPath();
    rx.arc(-bw*0.12,-bw*0.12,bw*0.14,0,Math.PI*2);
    rx.fillStyle="rgba(255,255,255,0.8)";
    rx.fill();
    rx.restore();
  });

  // 4. Ornate Finial Handle & Silk Tassel at bottom
  const e=pts[N-1],q=pts[N-2];
  const th=Math.atan2(-(e.x-q.x),e.y-q.y);
  const bh=bw*5.6,bW=bw*2.8;

  rx.save();
  rx.translate(e.x,e.y-1);
  rx.rotate(th);

  const ringGrad=rx.createLinearGradient(-bW,0,bW,0);
  ringGrad.addColorStop(0,"#745112");
  ringGrad.addColorStop(0.35,"#fed766");
  ringGrad.addColorStop(0.65,"#fff5c0");
  ringGrad.addColorStop(1,"#523707");
  rx.fillStyle=ringGrad;
  rx.beginPath();
  rx.rect(-bW*0.5,-4,bW,5);
  rx.fill();
  rx.strokeStyle="rgba(0,0,0,0.3)";
  rx.lineWidth=0.8;
  rx.stroke();

  rx.beginPath();
  rx.moveTo(0,0);
  rx.bezierCurveTo(bW*0.85,bh*0.16,bW*0.75,bh*0.82,0,bh);
  rx.bezierCurveTo(-bW*0.75,bh*0.82,-bW*0.85,bh*0.16,0,0);

  const handleGrad=rx.createLinearGradient(-bW,0,bW,0);
  if(lt){
    handleGrad.addColorStop(0,"#151618");
    handleGrad.addColorStop(0.25,"#3e382d");
    handleGrad.addColorStop(0.5,"#e0ba4a");
    handleGrad.addColorStop(0.75,"#2b271f");
    handleGrad.addColorStop(1,"#111214");
  }else{
    handleGrad.addColorStop(0,"#2a1c10");
    handleGrad.addColorStop(0.28,"#784c26");
    handleGrad.addColorStop(0.5,"#f2be52");
    handleGrad.addColorStop(0.72,"#593719");
    handleGrad.addColorStop(1,"#1f1409");
  }
  rx.fillStyle=handleGrad;
  rx.fill();
  rx.strokeStyle=lt?"rgba(255,215,0,0.45)":"rgba(0,0,0,0.45)";
  rx.lineWidth=1;
  rx.stroke();

  [0.32,0.68].forEach(pos=>{
    rx.beginPath();
    rx.ellipse(0,bh*pos,bW*0.65,bw*0.32,0,0,Math.PI*2);
    rx.strokeStyle="rgba(255,225,120,0.85)";
    rx.lineWidth=1.2;
    rx.stroke();
  });

  rx.beginPath();
  rx.ellipse(0,bh+1,bW*0.58,bw*0.48,0,0,Math.PI*2);
  rx.fillStyle=ringGrad;
  rx.fill();
  rx.strokeStyle="rgba(0,0,0,0.3)";
  rx.stroke();

  const tasselLen=bw*6.8;
  const numStrands=13;
  const now=Date.now()*0.003;
  rx.lineCap="round";

  for(let s=0;s<numStrands;s++){
    const norm=(s/(numStrands-1))-0.5;
    const spreadX=norm*bW*1.2;
    const sway=Math.sin(now+s*0.45)*1.8;
    const strandEnd=bh+tasselLen+(1-Math.abs(norm)*0.4)*(bw*2.2);

    rx.beginPath();
    rx.moveTo(norm*bW*0.42,bh+2);
    rx.quadraticCurveTo(spreadX*0.75+sway,bh+tasselLen*0.5,spreadX+sway*1.2,strandEnd);

    if(s%3===0){
      rx.strokeStyle=lt?"#ffe88a":"#deb841";
      rx.lineWidth=1.3;
    }else if(s%3===1){
      rx.strokeStyle=lt?"#d4af37":"#b88922";
      rx.lineWidth=1.1;
    }else{
      rx.strokeStyle=lt?"#fff7d6":"#f7e399";
      rx.lineWidth=0.9;
    }
    rx.stroke();
  }

  rx.fillStyle=lt?"#ffe88a":"#d4af37";
  rx.fillRect(-bW*0.4,bh+3,bW*0.8,3);

  rx.restore();

  cord.style.transform=`translate(${CL+e.x-24}px,${CT+e.y-6}px)`;
}

function ropeLoop(ts){
  ropeStep(ts);
  ropeDraw();
  requestAnimationFrame(ropeLoop);
}

ropeInit();
addEventListener("resize",ropeInit);
requestAnimationFrame(ropeLoop);

let drag=null,noClick=false;
cord.addEventListener("pointerdown",e=>{
  drag={m:0,x:e.clientX,y:e.clientY};
  cord.setPointerCapture(e.pointerId);
});

cord.addEventListener("pointermove",e=>{
  if(!drag)return;
  drag.m=Math.max(drag.m,Math.hypot(e.clientX-drag.x,e.clientY-drag.y));
  if(drag.m>6){
    let x=e.clientX-CL,y=e.clientY-CT;
    const d=Math.hypot(x-AX,y),mx=LEN*1.5;
    if(d>mx){x=AX+(x-AX)*mx/d;y=y*mx/d}
    pinned={x,y};
  }
});

const endDrag=()=>{
  if(!drag)return;
  const st=pinned&&pinned.y>LEN*1.12,mv=drag.m>6;
  pinned=null;
  drag=null;
  if(mv){
    noClick=true;
    setTimeout(()=>noClick=false,60);
    if(st)pull();
  }
};

cord.addEventListener("pointerup",endDrag);
cord.addEventListener("pointercancel",endDrag);
cord.addEventListener("click",()=>{if(!noClick)pull()});
cord.addEventListener("keydown",e=>{if(e.key=="Enter"||e.key==" "){e.preventDefault();pull()}});

/* portrait hover */
const ptw=$("#ptw");
ptw.addEventListener("pointermove",e=>{
  const r=ptw.getBoundingClientRect();
  ptw.style.setProperty("--px",((e.clientX-r.left)/r.width*2-1).toFixed(3));
  ptw.style.setProperty("--py",((e.clientY-r.top)/r.height*2-1).toFixed(3));
});
ptw.addEventListener("pointerleave",()=>{
  ptw.style.setProperty("--px",0);
  ptw.style.setProperty("--py",0);
});
let ht;
ptw.addEventListener("click",()=>{
  ptw.classList.add("hot");
  clearTimeout(ht);
  ht=setTimeout(()=>ptw.classList.remove("hot"),2600);
});

/* story year */
const yEl=$("#year"),its=$$(".it");
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){
    its.forEach(i=>i.classList.remove("on"));
    e.target.classList.add("on");
    const k=its.indexOf(e.target);
    $("#pn").textContent=`0${k+1} / 0${its.length}`;
    $("#pb").style.width=((k+1)/its.length*100)+"%";
    if(yEl.textContent!==e.target.dataset.y){
      yEl.style.opacity=0;
      setTimeout(()=>{yEl.textContent=e.target.dataset.y;yEl.style.opacity=1},180);
    }
  }
}),{rootMargin:"-42% 0px -42% 0px"});
its.forEach(i=>io.observe(i));

/* ── Enhanced animations ─────────────────────────────────────────────────── */
(function(){
  const dot=document.createElement('div');dot.id='mdot';document.body.appendChild(dot);
  let mx=0,my=0,cx=0,cy=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.classList.add('vis')});
  document.addEventListener('mouseleave',()=>dot.classList.remove('vis'));
  const hov='a,button,.door,.links a,.it,.cd,.flip,.cord,.mk';
  document.addEventListener('mouseover',e=>{if(e.target.closest(hov))dot.classList.add('big')});
  document.addEventListener('mouseout', e=>{if(e.target.closest(hov))dot.classList.remove('big')});
  (function loop(){
    cx+=(mx-cx)*.14;cy+=(my-cy)*.14;
    dot.style.transform=`translate(calc(${cx}px - 50%),calc(${cy}px - 50%))`;
    requestAnimationFrame(loop);
  })();
})();

(function(){
  ['#doors h2','#contact h2'].forEach(sel=>{
    const el=document.querySelector(sel);if(!el)return;
    el.innerHTML=el.innerHTML.replace(/(<[^>]+>)|(\S+)/g,(m,tag,word)=>{
      if(tag)return tag;
      return `<span class="w">${word}</span> `;
    });
  });
})();

(function(){
  document.querySelectorAll('#story .yr h2, #story .yr .pr, #contact .sw, #contact .ed').forEach(el=>{
    el.classList.add('reveal');
  });
  document.querySelectorAll('#contact .links').forEach(el=>el.classList.add('reveal-scale'));

  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}
  }),{threshold:.18});
  document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(el=>io.observe(el));

  const wio=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.w').forEach((w,i)=>{
        setTimeout(()=>w.classList.add('on'),i*80);
      });
      wio.unobserve(e.target);
    }
  }),{threshold:.4});
  document.querySelectorAll('#doors h2,#contact h2').forEach(el=>wio.observe(el));
})();

(function(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){
      document.querySelectorAll('.slot').forEach((s,i)=>{
        setTimeout(()=>s.classList.add('risen'),i*100);
      });
      io.disconnect();
    }
  }),{threshold:.2});
  const sec=document.getElementById('doors');if(sec)io.observe(sec);
})();

(function(){
  const bigEl=document.getElementById('year');if(!bigEl)return;
  const obs=new MutationObserver(()=>{
    bigEl.classList.add('bump');
    setTimeout(()=>bigEl.classList.remove('bump'),320);
  });
  obs.observe(bigEl,{childList:true,characterData:true,subtree:true});
})();

const _origFill=fill;
fill=function(i){
  _origFill(i);
  setTimeout(()=>{
    document.querySelectorAll('.cd').forEach((c,j)=>{
      c.style.transitionDelay=j*80+'ms';
    });
  },50);
};

(function(){
  document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('mousemove',e=>{
      const r=btn.getBoundingClientRect();
      const x=(e.clientX-r.left-r.width/2)*.22;
      const y=(e.clientY-r.top-r.height/2)*.22;
      btn.style.transform=`translate(${x}px,${y}px)`;
    });
    btn.addEventListener('mouseleave',()=>btn.style.transform='');
  });
})();

(function(){
  const bk=document.getElementById('bk');if(!bk)return;
  const orig_enter=enter;
  enter=function(i,door){
    orig_enter(i,door);
    setTimeout(()=>{bk.style.transform='translateY(0)';bk.style.opacity='1'},1600);
  };
  const orig_leave=leave;
  leave=function(){bk.style.transform='translateY(20px)';bk.style.opacity='0';orig_leave();};
  bk.style.transform='translateY(20px)';bk.style.opacity='0';
  bk.style.transition='transform .45s cubic-bezier(.2,.8,.2,1),opacity .4s';
})();

(function(){
  const secs=['home','doors','story','contact'];
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){
      const id=e.target.id;
      document.querySelectorAll('#nv a').forEach(a=>{
        a.classList.toggle('on',a.dataset.go===id);
      });
    }
  }),{threshold:.4});
  secs.forEach(id=>{const el=document.getElementById(id);if(el)io.observe(el);});
})();
