var D={
ne:"Double membrane enclosing the nucleus; perforated by pores and continuous with the ER.",
nu:"Nonmembranous structure involved in production of ribosomes; a nucleus has one or more nucleoli.",
ch:"Material consisting of DNA and proteins; visible in a dividing cell as individual condensed chromosomes.",
rer:"Part of the endoplasmic reticulum studded with ribosomes. The ER is a network of membranous sacs and tubes active in membrane synthesis and other synthetic and metabolic processes.",
ser:"Part of the endoplasmic reticulum without ribosomes. The ER is a network of membranous sacs and tubes active in membrane synthesis and other synthetic and metabolic processes.",
ri:"Complexes that make proteins; free in the cytosol or bound to the rough ER or nuclear envelope.",
go:"Organelle active in synthesis, modification, sorting, and secretion of cell products.",
mf:"The thinnest cytoskeleton fibers, built from protein; they help the cell hold its shape and move.",
mt:"Hollow protein tubes, the thickest cytoskeleton fibers; they shape the cell and guide movement inside it.",
mi:"Organelle where cellular respiration occurs and most ATP is generated.",
pe:"Organelle with various specialized metabolic functions; produces hydrogen peroxide as a by-product and then converts it to water.",
pm:"Membrane enclosing the cell."
};
var C={
animal:{label:"Animal cell",img:"images/animal-cell.jpg",W:1387,H:1148,alt:"Cutaway diagram of a generalized animal cell with its labels removed",T:[
{n:"Flagellum",a:["flagellum","flagella"],x:205,y:235,w:170,d:"Motility structure present in some animal cells, made of a cluster of microtubules inside an extension of the plasma membrane."},
{n:"Centrosome",a:["centrosome"],x:205,y:405,w:170,d:"Region where the cell’s microtubules are initiated; contains a pair of centrioles."},
{n:"Microfilaments",a:["microfilament","actin filament"],x:195,y:665,w:170,d:D.mf},
{n:"Intermediate filaments",a:["intermediate filament"],x:185,y:711,w:190,d:"Rope-like cytoskeleton fibers of medium thickness that reinforce cell shape and anchor organelles."},
{n:"Microtubules",a:["microtubule"],x:190,y:756,w:170,d:D.mt},
{n:"Microvilli",a:["microvilli","microvillus"],x:155,y:855,w:150,d:"Projections that increase the cell’s surface area."},
{n:"Peroxisome",a:["peroxisome"],x:190,y:962,w:190,d:D.pe},
{n:"Mitochondrion",a:["mitochondrion","mitochondria"],x:317,y:1105,w:190,d:D.mi},
{n:"Rough ER",a:["rough er","rough endoplasmic reticulum","rer"],x:468,y:246,w:140,d:D.rer},
{n:"Smooth ER",a:["smooth er","smooth endoplasmic reticulum","ser"],x:596,y:246,w:140,d:D.ser},
{n:"Nuclear envelope",a:["nuclear envelope","nuclear membrane"],x:1010,y:128,w:190,d:D.ne},
{n:"Nucleolus",a:["nucleolus","nucleoli"],x:1030,y:225,w:190,d:D.nu},
{n:"Chromatin",a:["chromatin"],x:1030,y:322,w:190,d:D.ch},
{n:"Plasma membrane",a:["plasma membrane","cell membrane"],x:1200,y:468,w:180,d:D.pm},
{n:"Ribosomes",a:["ribosome"],x:1160,y:782,w:190,d:D.ri},
{n:"Golgi apparatus",a:["golgi apparatus","golgi","golgi body","golgi complex"],x:1115,y:912,w:190,d:D.go},
{n:"Lysosome",a:["lysosome"],x:1000,y:1018,w:170,d:"Digestive organelle where macromolecules are hydrolyzed."}
]},
plant:{label:"Plant cell",img:"images/plant-cell.jpg",W:1155,H:978,alt:"Cutaway diagram of a generalized plant cell with its labels removed",T:[
{n:"Nuclear envelope",a:["nuclear envelope","nuclear membrane"],x:240,y:98,w:130,d:D.ne},
{n:"Nucleolus",a:["nucleolus","nucleoli"],x:245,y:127,w:120,d:D.nu},
{n:"Chromatin",a:["chromatin"],x:245,y:155,w:120,d:D.ch},
{n:"Rough ER",a:["rough er","rough endoplasmic reticulum","rer"],x:505,y:118,w:110,d:D.rer},
{n:"Smooth ER",a:["smooth er","smooth endoplasmic reticulum","ser"],x:633,y:185,w:110,d:D.ser},
{n:"Ribosomes",a:["ribosome"],x:885,y:326,w:130,d:D.ri},
{n:"Central vacuole",a:["central vacuole","vacuole","large central vacuole"],x:910,y:396,w:140,d:"Prominent organelle in older plant cells; functions include storage, breakdown of waste products, and hydrolysis of macromolecules; enlargement of the vacuole is a major mechanism of plant growth."},
{n:"Golgi apparatus",a:["golgi apparatus","golgi","golgi body","golgi complex"],x:145,y:412,w:120,d:D.go},
{n:"Microfilaments",a:["microfilament","actin filament"],x:868,y:505,w:115,d:D.mf},
{n:"Microtubules",a:["microtubule"],x:862,y:532,w:105,d:D.mt},
{n:"Mitochondrion",a:["mitochondrion","mitochondria"],x:152,y:695,w:110,d:D.mi},
{n:"Peroxisome",a:["peroxisome"],x:178,y:737,w:100,d:D.pe},
{n:"Plasma membrane",a:["plasma membrane","cell membrane"],x:176,y:777,w:120,d:D.pm},
{n:"Cell wall",a:["cell wall"],x:228,y:853,w:140,d:"Outer layer that maintains the cell’s shape and protects it from mechanical damage; made of cellulose, other polysaccharides, and protein."},
{n:"Wall of adjacent cell",a:["wall of adjacent cell","adjacent cell wall","cell wall of adjacent cell","neighboring cell wall"],x:296,y:919,w:145,d:"The cell wall of a neighboring cell, which sits next to this cell’s own wall."},
{n:"Chloroplast",a:["chloroplast"],x:835,y:790,w:130,d:"Photosynthetic organelle; converts energy of sunlight to chemical energy stored in sugar molecules."},
{n:"Plasmodesmata",a:["plasmodesmata","plasmodesma"],x:620,y:910,w:130,d:"Cytoplasmic channels through cell walls that connect the cytoplasms of adjacent cells."}
]}
,prokaryote:{label:"Prokaryotic cell",img:"images/prokaryotic-cell.jpg",W:1735,H:1052,alt:"Diagram of a rod-shaped prokaryotic cell and a colorized TEM of a bacterium, with labels removed",T:[
{n:"Fimbriae",a:["fimbriae","fimbria"],x:790,y:170,w:190,d:"Attachment structures on the surface of some prokaryotes (not visible on TEM)."},
{n:"Nucleoid",a:["nucleoid"],x:818,y:275,w:170,d:"Region where the cell’s DNA is located (not enclosed by a membrane)."},
{n:"Ribosomes",a:["ribosome"],x:890,y:372,w:170,d:"Complexes that synthesize proteins."},
{n:"Plasma membrane",a:["plasma membrane","cell membrane"],x:908,y:453,w:190,d:"Membrane enclosing the cytoplasm."},
{n:"Cell wall",a:["cell wall"],x:970,y:538,w:170,d:"Rigid structure outside the plasma membrane."},
{n:"Glycocalyx",a:["glycocalyx","capsule"],x:1025,y:650,w:170,d:"Outer coating of many prokaryotes, consisting of a capsule or a slime layer."},
{n:"Flagella",a:["flagella","flagellum"],x:955,y:780,w:150,d:"Locomotion organelles of some prokaryotes."}
]}};
var KEY="cell-quiz-v2", store={animal:{},plant:{},prokaryote:{}}, cur="animal", hints=false, openId=null, els=[];
function norm(s){return s.toLowerCase().replace(/[^a-z]/g,"").replace(/s$/,"");}
try{var raw=localStorage.getItem(KEY);
  if(raw){store=JSON.parse(raw)||store;}
  else{var old=localStorage.getItem("animal-cell-quiz-v1"); if(old)store.animal=JSON.parse(old)||{};}
}catch(e){}
store.animal=store.animal||{}; store.plant=store.plant||{}; store.prokaryote=store.prokaryote||{};
function save(){try{localStorage.setItem(KEY,JSON.stringify(store));}catch(e){}}
var stage=document.getElementById("stage"), cards=document.getElementById("cards"), img=document.getElementById("pic");
var pop=document.createElement("div"); pop.className="pop"; pop.setAttribute("role","status");
function hint(t){return t.n.split(" ").map(function(w){return w[0]+"_".repeat(w.length-1);}).join(" ");}
function build(){
  var c=C[cur], T=c.T;
  Array.prototype.slice.call(stage.querySelectorAll(".slot")).forEach(function(n){n.remove();});
  cards.innerHTML=""; els=[]; hidePop();
  img.src=c.img; img.alt=c.alt; stage.appendChild(pop);
  T.forEach(function(t,i){
    var s=document.createElement("div"); s.className="slot";
    s.style.left=(t.x/c.W*100)+"%"; s.style.top=(t.y/c.H*100)+"%"; s.style.width=(t.w/c.W*100)+"cqw";
    var inp=document.createElement("input"); inp.type="text"; inp.placeholder="?"; inp.setAttribute("aria-label","Structure "+(i+1));
    inp.autocomplete="off"; inp.spellcheck=false; inp.autocapitalize="off";
    var chip=document.createElement("button"); chip.className="chip"; chip.textContent=t.n; chip.type="button";
    s.appendChild(inp); s.appendChild(chip); stage.appendChild(s);
    var cd=document.createElement("div"); cd.className="card"; cards.appendChild(cd);
    els[i]={s:s,inp:inp,cd:cd};
    function check(force){
      var v=norm(inp.value); if(!v) return;
      if(t.a.some(function(a){return norm(a)===v;})){store[cur][i]=1; save(); render(); showPop(i);}
      else if(force){s.classList.remove("shake"); void s.offsetWidth; s.classList.add("shake");}
    }
    inp.addEventListener("input",function(){check(false);});
    inp.addEventListener("keydown",function(e){if(e.key==="Enter")check(true);});
    chip.addEventListener("click",function(e){e.stopPropagation(); openId===i?hidePop():showPop(i);});
  });
  render();
}
function render(){
  var T=C[cur].T, d=store[cur], n=0;
  T.forEach(function(t,i){
    var e=els[i], ok=!!d[i]; if(ok)n++;
    e.s.classList.toggle("done",ok);
    e.inp.placeholder=hints?hint(t):"?";
    e.cd.className="card"+(ok?" on":"");
    e.cd.innerHTML=ok?"<h3></h3><p></p>":"<p></p>";
    if(ok){e.cd.firstChild.textContent=t.n; e.cd.lastChild.textContent=t.d;}
    else e.cd.firstChild.textContent="Structure "+(i+1)+" – not found yet";
  });
  document.getElementById("count").textContent=n+" / "+T.length;
  document.getElementById("bar").style.width=(n/T.length*100)+"%";
  ["animal","plant","prokaryote"].forEach(function(k){
    var done=Object.keys(store[k]).length, b=document.querySelector('[data-k="'+k+'"]');
    b.textContent=C[k].label+" ("+done+"/"+C[k].T.length+")";
  });
}
function showPop(i){
  var c=C[cur], t=c.T[i]; openId=i;
  pop.innerHTML="<b></b><span></span>"; pop.firstChild.textContent=t.n; pop.lastChild.textContent=t.d;
  var px=t.x/c.W*100, py=t.y/c.H*100, tx="-50%", ty="0", lx=px;
  if(px<30){tx="0";lx=(t.x-t.w/2)/c.W*100;} else if(px>70){tx="-100%";lx=(t.x+t.w/2)/c.W*100;}
  var top=py+2.2; if(py>72){ty="-100%";top=py-2.2;}
  pop.style.left=lx+"%"; pop.style.top=top+"%"; pop.style.transform="translate("+tx+","+ty+")";
  pop.classList.add("on");
}
function hidePop(){openId=null;pop.classList.remove("on");}
document.addEventListener("click",function(e){if(!pop.contains(e.target))hidePop();});
document.addEventListener("keydown",function(e){if(e.key==="Escape")hidePop();});
Array.prototype.forEach.call(document.querySelectorAll(".tab"),function(b){
  b.addEventListener("click",function(){
    cur=b.getAttribute("data-k");
    Array.prototype.forEach.call(document.querySelectorAll(".tab"),function(x){x.setAttribute("aria-selected",x===b);});
    build();
  });
});
document.getElementById("hintBtn").addEventListener("click",function(){
  hints=!hints; this.setAttribute("aria-pressed",hints); this.textContent=hints?"Hide hints":"Show hints"; render();});
document.getElementById("revealBtn").addEventListener("click",function(){C[cur].T.forEach(function(t,i){store[cur][i]=1;}); save(); hidePop(); render();});
document.getElementById("resetBtn").addEventListener("click",function(){
  store[cur]={}; save(); hidePop(); els.forEach(function(e){e.inp.value="";}); render();});
build();
