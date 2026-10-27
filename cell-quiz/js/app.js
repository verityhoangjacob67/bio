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
{n:"Microfilaments",aka:"actin filaments",a:["microfilament","actin filament"],x:195,y:665,w:170,d:D.mf},
{n:"Intermediate filaments",a:["intermediate filament"],x:185,y:711,w:190,d:"Rope-like cytoskeleton fibers of medium thickness that reinforce cell shape and anchor organelles."},
{n:"Microtubules",a:["microtubule"],x:190,y:756,w:170,d:D.mt},
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
{n:"Microfilaments",aka:"actin filaments",a:["microfilament","actin filament"],x:868,y:505,w:115,d:D.mf},
{n:"Microtubules",a:["microtubule"],x:862,y:532,w:105,d:D.mt},
{n:"Mitochondrion",a:["mitochondrion","mitochondria"],x:152,y:695,w:110,d:D.mi},
{n:"Peroxisome",a:["peroxisome"],x:178,y:737,w:100,d:D.pe},
{n:"Plasma membrane",a:["plasma membrane","cell membrane"],x:176,y:777,w:120,d:D.pm},
{n:"Cell wall",a:["cell wall"],x:228,y:853,w:140,d:"Outer layer that maintains the cell’s shape and protects it from mechanical damage; made of cellulose, other polysaccharides, and protein."},
{n:"Chloroplast",a:["chloroplast"],x:835,y:790,w:130,d:"Photosynthetic organelle; converts energy of sunlight to chemical energy stored in sugar molecules."},
{n:"Plasmodesmata",a:["plasmodesmata","plasmodesma"],x:620,y:910,w:130,d:"Cytoplasmic channels through cell walls that connect the cytoplasms of adjacent cells."}
]}
,prokaryote:{label:"Bacteria cell",img:"images/prokaryotic-cell.jpg",W:921,H:872,alt:"Cutaway diagram of a rod-shaped bacterium with pili and a flagellum, plus an electron micrograph of a bacterium, with labels removed",T:[
{n:"Pilus",a:["pilus","pili","fimbriae","fimbria"],x:322,y:110,w:110,d:"Hairlike surface appendage (also called a fimbria) that helps the cell attach to surfaces and other cells."},
{n:"Cytoplasm",a:["cytoplasm"],x:655,y:296,w:130,d:"Semifluid interior of the cell, enclosed by the plasma membrane, that contains the ribosomes and nucleoid."},
{n:"Ribosomes",a:["ribosome"],x:655,y:334,w:130,d:"Complexes that synthesize proteins."},
{n:"Nucleoid",a:["nucleoid"],x:622,y:375,w:140,d:"Region where the cell’s DNA is located (not enclosed by a membrane)."},
{n:"Plasma membrane",a:["plasma membrane","cell membrane"],x:605,y:451,w:170,d:"Membrane enclosing the cytoplasm."},
{n:"Cell wall",a:["cell wall"],x:552,y:482,w:110,d:"Rigid structure outside the plasma membrane."},
{n:"Capsule",a:["capsule","glycocalyx"],x:550,y:512,w:110,d:"Sticky outer coating (a glycocalyx) of many prokaryotes that protects the cell and helps it adhere."},
{n:"Flagellum",a:["flagellum","flagella"],x:316,y:688,w:130,d:"Long whiplike locomotion organelle of some prokaryotes."}
]}};
var KEY="cell-quiz-v2", PREF="cell-quiz-prefs-v1";
var ORDER=["animal","plant","prokaryote"];
var store={animal:{},plant:{},prokaryote:{}}, cur="animal", hints=false, openId=null, els=[];
var pref={theme:"auto",hints:false,tab:"animal"};
function norm(s){return s.toLowerCase().replace(/[^a-z]/g,"").replace(/s$/,"");}
try{var raw=localStorage.getItem(KEY);
  if(raw){store=JSON.parse(raw)||store;}
  else{var old=localStorage.getItem("animal-cell-quiz-v1"); if(old)store.animal=JSON.parse(old)||{};}
}catch(e){}
store.animal=store.animal||{}; store.plant=store.plant||{}; store.prokaryote=store.prokaryote||{};
try{var pRaw=JSON.parse(localStorage.getItem(PREF)||"null");
  if(pRaw){
    if(pRaw.theme==="light"||pRaw.theme==="dark"||pRaw.theme==="auto") pref.theme=pRaw.theme;
    pref.hints=!!pRaw.hints;
    if(C[pRaw.tab]) pref.tab=pRaw.tab;
  }
}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(store));}catch(e){}}
function savePrefs(){try{localStorage.setItem(PREF,JSON.stringify(pref));}catch(e){}}
var stage=document.getElementById("stage"), cards=document.getElementById("cards"), img=document.getElementById("pic");
var barEl=document.getElementById("bar"), barWrap=document.getElementById("barWrap"), countEl=document.getElementById("count");
var banner=document.getElementById("banner"), bannerTitle=document.getElementById("bannerTitle"), bannerNote=document.getElementById("bannerNote"), nextBtn=document.getElementById("nextBtn");
var live=document.getElementById("live"), hintBtn=document.getElementById("hintBtn"), themeBtn=document.getElementById("themeBtn");
var panel=document.getElementById("panel"), tabs=Array.prototype.slice.call(document.querySelectorAll(".tab"));
var pop=document.createElement("div"); pop.className="pop"; pop.setAttribute("role","status");
function announce(msg){live.textContent=""; live.textContent=msg;}
function tally(k){
  var d=store[k]||{}, T=C[k].T, f=0, r=0;
  for(var i=0;i<T.length;i++){ if(d[i]===1)f++; else if(d[i]===2)r++; }
  return {f:f,r:r};
}
function nm(t){return t.aka?t.n+" ("+t.aka+")":t.n;}
function hint(t){return t.n.split(" ").map(function(w){return w[0]+"_".repeat(w.length-1);}).join(" ");}
function isRight(t,v){return !!v&&t.a.some(function(a){return norm(a)===v;});}
function applyTheme(){
  var r=document.documentElement;
  if(pref.theme==="auto") r.removeAttribute("data-theme"); else r.setAttribute("data-theme",pref.theme);
  themeBtn.textContent=pref.theme.charAt(0).toUpperCase()+pref.theme.slice(1);
  themeBtn.setAttribute("aria-label","Colour theme: "+pref.theme+". Change theme");
  var tc=document.getElementById("themeColor");
  if(tc){var bg=getComputedStyle(r).getPropertyValue("--bg").trim(); if(bg)tc.setAttribute("content",bg);}
}
function focusNext(i){
  var T=C[cur].T, d=store[cur], n=T.length;
  for(var k=1;k<=n;k++){
    var j=(i+k)%n;
    if(!d[j]){
      var inp=els[j].inp;
      try{inp.focus({preventScroll:true});}catch(e){inp.focus();}
      inp.scrollIntoView({block:"nearest",inline:"nearest"});
      return;
    }
  }
}
function solve(i){
  if(store[cur][i]===1) return;
  var t=C[cur].T[i], wasRevealed=store[cur][i]===2, total=C[cur].T.length;
  store[cur][i]=1; save(); render();
  if(wasRevealed) announce("Correct — "+t.n+".");
  if(tally(cur).f===total) announce("All "+total+" structures found in the "+C[cur].label.toLowerCase()+".");
  focusNext(i);
}
function build(){
  var c=C[cur], T=c.T;
  Array.prototype.slice.call(stage.querySelectorAll(".slot")).forEach(function(n){n.remove();});
  cards.innerHTML=""; els=[]; hidePop();
  img.src=c.img; img.alt=c.alt; img.width=c.W; img.height=c.H;
  stage.appendChild(pop);
  T.forEach(function(t,i){
    var s=document.createElement("div"); s.className="slot";
    s.style.left=(t.x/c.W*100)+"%"; s.style.top=(t.y/c.H*100)+"%"; s.style.width=(t.w/c.W*100)+"cqw";
    var inp=document.createElement("input");
    inp.type="text"; inp.placeholder="?"; inp.setAttribute("aria-label","Structure "+(i+1)+" of "+T.length);
    inp.autocomplete="off"; inp.spellcheck=false; inp.autocapitalize="off";
    var chip=document.createElement("button"); chip.type="button"; chip.className="chip";
    var cd=document.createElement("div"); cd.className="card";
    s.appendChild(inp); s.appendChild(chip); stage.appendChild(s); cards.appendChild(cd);
    els[i]={s:s,inp:inp,chip:chip,cd:cd};
    inp.addEventListener("input",function(){
      var v=norm(inp.value);
      if(isRight(t,v)) solve(i);
    });
    inp.addEventListener("keydown",function(e){
      if(e.key!=="Enter") return;
      e.preventDefault();
      if(isRight(t,norm(inp.value))) solve(i);
      else if(inp.value.trim()){
        s.classList.remove("shake"); void s.offsetWidth; s.classList.add("shake");
        announce("Not quite — that is not structure "+(i+1)+".");
      }
    });
    inp.addEventListener("focus",function(){cd.classList.add("hot");});
    inp.addEventListener("blur",function(){cd.classList.remove("hot");});
    chip.addEventListener("click",function(e){e.stopPropagation(); openId===i?hidePop():showPop(i);});
  });
  render();
}
function render(){
  var c=C[cur], T=c.T, d=store[cur], n=0, rv=0;
  T.forEach(function(t,i){
    var e=els[i], st=d[i]||0, ok=st===1, rev=st===2;
    if(ok)n++; if(rev)rv++;
    e.s.className="slot"+(ok?" done":"")+(rev?" revealed":"");
    if(st) e.inp.value=t.n;
    e.inp.placeholder=hints?hint(t):"?";
    e.chip.textContent=nm(t);
    e.chip.setAttribute("aria-label",nm(t)+", "+(ok?"correct":"revealed")+". Show definition");
    e.cd.className="card"+(ok?" on":"")+(rev?" rev":"");
    while(e.cd.firstChild) e.cd.removeChild(e.cd.firstChild);
    if(ok||rev){
      var h=document.createElement("h3"); h.textContent=nm(t); e.cd.appendChild(h);
      if(rev){var g=document.createElement("span"); g.className="tag"; g.textContent="Revealed"; e.cd.appendChild(g);}
      var pd=document.createElement("p"); pd.textContent=t.d; e.cd.appendChild(pd);
    }else{
      var q=document.createElement("p"); q.className="locked"; q.textContent="Not found yet"; e.cd.appendChild(q);
    }
  });
  countEl.textContent=n+" / "+T.length+(rv?" · "+rv+" revealed":"");
  barEl.style.width=(n/T.length*100)+"%";
  barWrap.setAttribute("aria-valuemax",T.length);
  barWrap.setAttribute("aria-valuenow",n);
  tabs.forEach(function(b){
    var k=b.getAttribute("data-k"), t=tally(k);
    b.textContent=C[k].label+" ("+t.f+"/"+C[k].T.length+")";
    b.classList.toggle("is-done",t.f===C[k].T.length);
  });
  showBanner(n===T.length&&T.length>0);
}
function nextCell(){
  var i=ORDER.indexOf(cur);
  for(var k=1;k<=ORDER.length;k++){
    var j=ORDER[(i+k)%ORDER.length], t=tally(j);
    if(t.f+t.r<C[j].T.length) return j;
  }
  return null;
}
function showBanner(done){
  banner.hidden=!done;
  if(!done) return;
  var nx=nextCell();
  bannerTitle.textContent="All "+C[cur].T.length+" structures found in the "+C[cur].label.toLowerCase()+".";
  if(nx){
    bannerNote.textContent="Keep going — the "+C[nx].label.toLowerCase()+" still has gaps.";
    nextBtn.hidden=false;
    nextBtn.textContent="Open the "+C[nx].label.toLowerCase();
    nextBtn.setAttribute("data-next",nx);
  }else{
    bannerNote.textContent="That is every diagram. Reset one to practise again.";
    nextBtn.hidden=true;
  }
}
function showPop(i){
  var c=C[cur], t=c.T[i]; openId=i;
  pop.innerHTML="<b></b><span></span>"; pop.firstChild.textContent=nm(t); pop.lastChild.textContent=t.d;
  var px=t.x/c.W*100, py=t.y/c.H*100, tx="-50%", ty="0", lx=px;
  if(px<30){tx="0";lx=(t.x-t.w/2)/c.W*100;} else if(px>70){tx="-100%";lx=(t.x+t.w/2)/c.W*100;}
  var top=py+2.2; if(py>72){ty="-100%";top=py-2.2;}
  pop.style.left=lx+"%"; pop.style.top=top+"%"; pop.style.transform="translate("+tx+","+ty+")";
  pop.classList.add("on");
}
function hidePop(){openId=null;pop.classList.remove("on");}
function go(k){
  cur=k; pref.tab=k; savePrefs();
  tabs.forEach(function(b){
    var on=b.getAttribute("data-k")===k;
    b.setAttribute("aria-selected",on?"true":"false");
    b.tabIndex=on?0:-1;
    if(on) panel.setAttribute("aria-labelledby",b.id);
  });
  build();
}
document.addEventListener("click",function(e){if(!pop.contains(e.target))hidePop();});
document.addEventListener("keydown",function(e){if(e.key==="Escape")hidePop();});
tabs.forEach(function(b){
  b.addEventListener("click",function(){go(b.getAttribute("data-k"));});
  b.addEventListener("keydown",function(e){
    var i=tabs.indexOf(b), n=null;
    if(e.key==="ArrowRight"||e.key==="ArrowDown") n=tabs[(i+1)%tabs.length];
    else if(e.key==="ArrowLeft"||e.key==="ArrowUp") n=tabs[(i-1+tabs.length)%tabs.length];
    else if(e.key==="Home") n=tabs[0];
    else if(e.key==="End") n=tabs[tabs.length-1];
    if(n){e.preventDefault(); go(n.getAttribute("data-k")); n.focus();}
  });
});
hintBtn.addEventListener("click",function(){
  hints=!hints; pref.hints=hints; savePrefs();
  this.setAttribute("aria-pressed",hints?"true":"false");
  this.textContent=hints?"Hide hints":"Show hints";
  render();
});
document.getElementById("revealBtn").addEventListener("click",function(){
  var d=store[cur], changed=false;
  C[cur].T.forEach(function(t,i){if(!d[i]){d[i]=2;changed=true;}});
  if(!changed) return;
  save(); hidePop(); render();
  announce("Answers revealed for the "+C[cur].label.toLowerCase()+".");
});
document.getElementById("resetBtn").addEventListener("click",function(){
  var label=C[cur].label.toLowerCase();
  store[cur]={}; save(); hidePop();
  els.forEach(function(e){e.inp.value="";});
  render();
  announce("Cleared the answers for the "+label+".");
});
nextBtn.addEventListener("click",function(){
  var k=this.getAttribute("data-next");
  if(k) go(k);
});
themeBtn.addEventListener("click",function(){
  pref.theme=pref.theme==="auto"?"light":pref.theme==="light"?"dark":"auto";
  savePrefs(); applyTheme();
});
hints=pref.hints;
hintBtn.setAttribute("aria-pressed",hints?"true":"false");
hintBtn.textContent=hints?"Hide hints":"Show hints";
applyTheme();
go(pref.tab);
