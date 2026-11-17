// S1-02P-FULL-PIXEL: disposable art compositor, not game/runtime code.
// Run with a host-provided sharp; no repository dependency changes.
import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const sharp = require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES ? process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES + '/sharp' : 'sharp');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const C = {
  ink:'#171821', dark:'#252631', slate:'#383c46', blue:'#4f626e', paleBlue:'#829398',
  wood0:'#30282b', wood1:'#493332', wood2:'#60413a', wood3:'#7b5544', wood4:'#9c7151', wood5:'#bb9064',
  red0:'#301f29', red1:'#512b33', red2:'#753d40', red3:'#9b5150',
  gold0:'#665032', gold1:'#8a6a40', gold2:'#ad884d', gold3:'#d3b478',
  cream0:'#766858', cream1:'#9a8870', cream2:'#bdab8d', cream3:'#dfcfaa', cream4:'#f2e3be',
  glass0:'#3c454a', glass1:'#5b6769', glass2:'#87908a',
  skin0:'#93684f', skin1:'#bd9270', skin2:'#e0b98b',
  black:'#101219', white:'#f2e3be'
};
const palette=[...new Set(Object.values(C))].map(h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)));
const G={
 A:['01110','10001','10001','11111','10001','10001','10001'],B:['11110','10001','10001','11110','10001','10001','11110'],C:['01111','10000','10000','10000','10000','10000','01111'],D:['11110','10001','10001','10001','10001','10001','11110'],E:['11111','10000','10000','11110','10000','10000','11111'],F:['11111','10000','10000','11110','10000','10000','10000'],G:['01111','10000','10000','10111','10001','10001','01110'],H:['10001','10001','10001','11111','10001','10001','10001'],I:['111','010','010','010','010','010','111'],J:['00111','00010','00010','00010','10010','10010','01100'],K:['10001','10010','10100','11000','10100','10010','10001'],L:['10000','10000','10000','10000','10000','10000','11111'],M:['10001','11011','10101','10101','10001','10001','10001'],N:['10001','11001','11001','10101','10011','10011','10001'],O:['01110','10001','10001','10001','10001','10001','01110'],P:['11110','10001','10001','11110','10000','10000','10000'],Q:['01110','10001','10001','10001','10101','10010','01101'],R:['11110','10001','10001','11110','10100','10010','10001'],S:['01111','10000','10000','01110','00001','00001','11110'],T:['11111','00100','00100','00100','00100','00100','00100'],U:['10001','10001','10001','10001','10001','10001','01110'],V:['10001','10001','10001','10001','10001','01010','00100'],W:['10001','10001','10001','10101','10101','11011','10001'],X:['10001','10001','01010','00100','01010','10001','10001'],Y:['10001','10001','01010','00100','00100','00100','00100'],Z:['11111','00001','00010','00100','01000','10000','11111'],
 '0':['01110','10001','10011','10101','11001','10001','01110'],'1':['010','110','010','010','010','010','111'],'2':['01110','10001','00001','00010','00100','01000','11111'],'3':['11110','00001','00001','01110','00001','00001','11110'],'4':['00010','00110','01010','10010','11111','00010','00010'],'5':['11111','10000','10000','11110','00001','00001','11110'],'6':['01110','10000','10000','11110','10001','10001','01110'],'7':['11111','00001','00010','00100','01000','01000','01000'],'8':['01110','10001','10001','01110','10001','10001','01110'],'9':['01110','10001','10001','01111','00001','00001','01110'],
 ' ':['000','000','000','000','000','000','000'],'.':['0','0','0','0','0','1','1'],',':['00','00','00','00','00','01','10'],':':['0','1','1','0','1','1','0'],'-':['000','000','000','111','000','000','000'],'/':['00001','00001','00010','00100','01000','10000','10000'],'(':[ '01','10','10','10','10','10','01'],')':['10','01','01','01','01','01','10'],'+':['000','010','010','111','010','010','000'],"'":['1','1','0','0','0','0','0'],'?':['01110','10001','00001','00010','00100','00000','00100'],'=':['000','111','000','111','000','000','000']
};
G['_']=['00000','00000','00000','00000','00000','00000','11111'];
G[';']=['00','01','01','00','01','01','10'];
function rgb(c){return c==='transparent'?[0,0,0,0]:[...([1,3,5].map(i=>parseInt(c.slice(i,i+2),16))),255]}
class Raster{
 constructor(w,h,c='transparent'){this.w=w;this.h=h;this.b=Buffer.alloc(w*h*4); if(c!=='transparent')this.rect(0,0,w,h,c)}
 pixel(x,y,c){x=Math.round(x);y=Math.round(y);if(x<0||y<0||x>=this.w||y>=this.h)return;const a=Array.isArray(c)?c:rgb(c);this.b.set(a,(y*this.w+x)*4)}
 rect(x,y,w,h,c){for(let j=y;j<y+h;j++)for(let i=x;i<x+w;i++)this.pixel(i,j,c)}
 line(x1,y1,x2,y2,c){let n=Math.max(Math.abs(x2-x1),Math.abs(y2-y1));for(let i=0;i<=n;i++)this.pixel(x1+(x2-x1)*i/(n||1),y1+(y2-y1)*i/(n||1),c)}
 text(x,y,t,c=C.white,s=1){for(const ch of t.toUpperCase()){const a=G[ch];if(!a)throw Error('Missing glyph '+ch);a.forEach((r,j)=>[...r].forEach((p,i)=>{if(p==='1')this.rect(x+i*s,y+j*s,s,s,c)}));x+=(a[0].length+1)*s}return x}
 blit(a,x,y){for(let j=0;j<a.h;j++)for(let i=0;i<a.w;i++){const p=(j*a.w+i)*4;if(a.b[p+3])this.pixel(i+x,j+y,[...a.b.subarray(p,p+4)])}}
 clone(){let a=new Raster(this.w,this.h);this.b.copy(a.b);return a}
 crop(x,y,w,h){let a=new Raster(w,h);for(let j=0;j<h;j++)for(let i=0;i<w;i++){let p=((j+y)*this.w+i+x)*4;a.b.set(this.b.subarray(p,p+4),(j*w+i)*4)}return a}
 async save(name,scale=1){let p=sharp(this.b,{raw:{width:this.w,height:this.h,channels:4}});if(scale!==1)p=p.resize(this.w*scale,this.h*scale,{kernel:'nearest'});await p.png().toFile(path.join(root,name))}
}
async function decode(file,w,h,crop){let p=sharp(file);if(crop)p=p.extract(crop);if(w||h)p=p.resize(w,h,{kernel:'nearest',fit:'fill'});let {data,info}=await p.ensureAlpha().raw().toBuffer({resolveWithObject:true});let a=new Raster(info.width,info.height);for(let i=0;i<data.length;i+=4){if(data[i+3]<128)continue;let best=palette[0],d=Infinity;for(let col of palette){let n=0;for(let k=0;k<3;k++)n+=(data[i+k]-col[k])**2;if(n<d){d=n;best=col}}a.b.set([...best,255],i)}return a}
async function atlasCrop(box,height,name){let {data,info}=await sharp(path.join(root,'source/atlas-generated.png')).extract(box).ensureAlpha().raw().toBuffer({resolveWithObject:true});let x0=info.width,y0=info.height,x1=0,y1=0;for(let y=0;y<info.height;y++)for(let x=0;x<info.width;x++){if(data[(y*info.width+x)*4+3]>=128){x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y)}}const tight={left:box.left+x0,top:box.top+y0,width:x1-x0+1,height:y1-y0+1};const width=Math.round(tight.width*height/tight.height);let a=await decode(path.join(root,'source/atlas-generated.png'),width,height,tight);await a.save('layers/'+name+'.png');return {a,tight}}
const plate=await decode(path.join(root,'source/environment-generated.png'),320,180);await plate.save('layers/environment-320.png');
const boxes=[{left:100,top:20,width:250,height:410},{left:550,top:20,width:230,height:410},{left:990,top:20,width:220,height:410},{left:1300,top:20,width:430,height:410},{left:350,top:440,width:250,height:430},{left:970,top:450,width:560,height:410}];
const names=['stagehand-three-quarter','stagehand-profile','stagehand-rear','stagehand-braced','performer','chandelier'];
const assets=[];const cropManifest={};
for(let i=0;i<names.length;i++){let r=await atlasCrop(boxes[i],i===4?32:i===5?22:40,names[i]);assets.push(r.a);cropManifest[names[i]]=r.tight}
await fs.writeFile(path.join(root,'source/atlas-crops.json'),JSON.stringify(cropManifest,null,2)+'\n');
const [idle,profile,rear,braced,performer,chandelier]=assets;
function mark(a,x,y,label){let width=[...label].reduce((n,c)=>n+G[c][0].length+1,0);a.rect(x-Math.floor(width/2)-2,y-2,width+3,11,C.ink);a.text(x-Math.floor(width/2),y,label,C.cream3)}
function fixtureLayer(state){const a=new Raster(320,180);const dx=state==='normal'?0:state==='disturbed'?9:2;const centerX=170+dx,centerY=55;
 a.line(170,27,centerX,44,C.ink);a.line(171,27,centerX+1,44,C.gold2);
 // One-logical-pixel outline preserves the chandelier against bright scenic plaster.
 for(let j=0;j<chandelier.h;j++)for(let i=0;i<chandelier.w;i++)if(chandelier.b[(j*chandelier.w+i)*4+3]){
   const xx=centerX-Math.floor(chandelier.w/2)+i,yy=centerY-11+j;
   for(const [ox,oy] of [[-1,0],[1,0],[0,-1],[0,1]])a.pixel(xx+ox,yy+oy,C.ink);
 }
 a.blit(chandelier,centerX-Math.floor(chandelier.w/2),centerY-11);
 if(state==='initial'){a.line(149,52,151,50,C.cream3);a.line(191,56,193,54,C.cream3)}
 return a}
const trimIntact=new Raster(320,180),trimPatch=new Raster(320,180);
// The separate scenic strip adjoins the chandelier travel envelope. The distant
// ornament above the right window belongs to the background, not this fixture.
trimIntact.rect(187,60,25,5,C.ink);trimIntact.rect(188,61,23,3,C.gold1);
trimIntact.line(188,61,210,61,C.cream3);trimIntact.line(188,64,210,64,C.gold3);
trimIntact.rect(188,60,2,6,C.gold2);trimIntact.rect(209,60,2,6,C.gold2);
// Local scenic strip disturbed once, still attached at the right end. No falling fixture.
trimPatch.rect(198,60,14,5,C.ink);trimPatch.rect(200,61,10,3,C.gold1);
trimPatch.line(199,61,210,61,C.cream3);trimPatch.line(199,64,210,64,C.gold3);
trimPatch.line(199,64,189,70,C.ink);trimPatch.line(199,65,189,71,C.gold3);
trimPatch.line(198,64,188,70,C.gold1);trimPatch.rect(209,60,2,6,C.gold2);
await trimIntact.save('layers/trim-intact.png');
await trimPatch.save('layers/trim-disturbed.png');
const hud=new Raster(320,180);mark(hud,42,156,'VIEW');mark(hud,105,144,'DESK');mark(hud,201,147,'RIG');mark(hud,278,151,'HOLD');await hud.save('layers/station-labels.png');
function scene(state='initial',hold=false,caption=true){let a=plate.clone();a.blit(state==='disturbed'?trimPatch:trimIntact,0,0);a.blit(fixtureLayer(state),0,0);
 a.rect(226,109,13,2,C.wood2);a.blit(performer,233-Math.floor(performer.w/2),110-performer.h);
 if(hold){a.rect(273,116,2,13,C.gold2);a.rect(273,123,7,2,C.gold3);a.blit(braced,274-braced.w,150-braced.h)}
 else{a.rect(32,149,14,2,C.wood1);a.blit(idle,38-Math.floor(idle.w/2),150-idle.h)}
 a.blit(hud,0,0);
 if(caption){a.rect(0,169,320,11,C.ink);a.text(5,171,state==='normal'?'THE CHANDELIER RESTS. THE PERFORMER WAITS.':'EARLY SWAY. A SOFT CLICK. THE PERFORMER WAITS.',C.cream3)}
 return a}
const normal=scene('normal'),initial=scene('initial');
await normal.save('logical/shot-wing-01-normal.png');await normal.save('shot-wing-01-normal.png',4);
await initial.save('logical/shot-wing-01-common-initial.png');await initial.save('shot-wing-01-common-initial.png',4);
await fixtureLayer('normal').save('layers/chandelier-normal.png');await fixtureLayer('initial').save('layers/chandelier-initial.png');
const manifest={assignment:'S1-02P-FULL-PIXEL',room:'wing-and-stage',shot:'SHOT-WING-01',logicalSize:[320,180],displayScale:4,commonInitial:{image:'shot-wing-01-common-initial.png',caption:'EARLY SWAY. A SOFT CLICK. THE PERFORMER WAITS.'},cases:{A:{initial:'shot-wing-01-common-initial.png',captionKey:'commonInitial.caption'},B:{initial:'shot-wing-01-common-initial.png',captionKey:'commonInitial.caption'}},anchorsDisplay:{chandelierNormal:[680,220],chandelierInitial:[688,220],stagehandFeet:[152,600],performerFeet:[932,440],VIEW:[180,616],DESK:[420,520],RIG:[808,528],HOLD:[1112,528]},topology:['VIEW','DESK','RIG','HOLD'],note:'Art coordinates only. Not world geometry, timing, hitboxes or runtime configuration.'};
await fs.writeFile(path.join(root,'source/comparison-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
// Evidence diagrams are authored pixel overlays. A physical mark/window is not a verdict lamp.
function rigDiagram(a,x,y,outside=false){a.rect(x,y,270,67,C.wood0);a.rect(x+3,y+3,264,61,C.wood2);a.rect(x+8,y+8,254,51,C.ink);a.rect(x+20,y+28,230,9,C.gold0);a.rect(x+20,y+28,230,2,C.gold2);
 for(let i=0;i<9;i++){a.rect(x+28+i*25,y+24,1,3,C.cream2)}
 a.line(x+85,y+17,x+177,y+17,C.cream4);a.line(x+85,y+17,x+85,y+46,C.cream4);a.line(x+177,y+17,x+177,y+46,C.cream4);
 const mx=outside?214:129;a.rect(x+mx-3,y+22,7,21,C.cream4);a.rect(x+mx-1,y+24,3,17,C.ink);a.line(x+mx-6,y+47,x+mx,y+41,C.gold3);a.line(x+mx+6,y+47,x+mx,y+41,C.gold3);
 // Rough scrape clusters present locally, without supernatural or binary colored light.
 if(outside){a.line(x+181,y+49,x+226,y+49,C.cream1);a.line(x+189,y+52,x+218,y+52,C.cream1)}
}
const evidence=new Raster(640,480,C.ink);evidence.text(12,10,'POST-ACQUISITION / LOCAL READ AND INSPECT',C.cream4,2);evidence.text(12,31,'REVIEW LABELS A/B ARE NOT INITIAL PLAYER-FACING INFORMATION.',C.paleBlue);
for(let i=0;i<4;i++){const x=12+(i%2)*314,y=52+Math.floor(i/2)*205;evidence.rect(x,y,302,195,C.dark);evidence.text(x+9,y+8,(i%2?'B':'A')+' / '+(i<2?'DESK':'RIG'),C.gold3,2);
 if(i<2){evidence.rect(x+8,y+30,286,105,C.cream3);evidence.rect(x+12,y+34,278,1,C.wood2);
 const lines=i===0?['CHAND_FLOURISH / REV 2','EARLY FLOURISH','WINDOW: EARLY WINDOW','EFFECTIVE POSTING','SIGNED: E. VALE']:['CHAND_FLOURISH / REV 1','ORDINARY FLOURISH','WINDOW: ORDINARY WINDOW','EFFECTIVE POSTING','SIGNED: E. VALE'];
 lines.forEach((l,j)=>evidence.text(x+18,y+43+j*17,l,C.wood0));evidence.line(x+17,y+123,x+140,y+123,C.wood2);
 evidence.text(x+10,y+145,i===0?'A SIGNED EARLY REVISION IS POSTED.':'THE ORDINARY SCHEDULE IS POSTED.',C.cream4);evidence.text(x+10,y+161,i===0?'THIS DESCRIBES PRODUCTION INTENT.':'NO EARLY REVISION IS POSTED.',C.cream4);evidence.text(x+10,y+178,'NO PHYSICAL LIMITER FACT IS GIVEN.',C.paleBlue);
 }else{rigDiagram(evidence,x+16,y+35,i===3);evidence.text(x+16,y+112,'BRACKETS: OBSERVED TRAVEL WINDOW',C.cream2);evidence.text(x+16,y+126,'VERTICAL SLIDER: WITNESS MARK',C.cream2);evidence.text(x+10,y+146,i===2?'MARK ALIGNED WITHIN THE WINDOW.':'MARK OUTSIDE THE WINDOW.',C.cream4);evidence.text(x+10,y+161,i===2?'TRAVEL STAYS WITHIN THE MARKS.':'TRAVEL EXTENDS BEYOND THE MARKS.',C.cream4);evidence.text(x+10,y+178,'LOCAL OBSERVATION AT INSPECT COMPLETION.',C.paleBlue)}
}
evidence.text(12,465,'ILLUSTRATIVE CUE IDs, SIGNATORY AND WINDOWS. NO TICKS OR SAFETY VERDICT.',C.cream2);await evidence.save('evidence-contact-sheet.png',2);
const rigView=new Raster(320,180,C.ink);rigView.text(6,5,'SHOT-RIG-DETAIL-01 / POST-ACQUISITION',C.gold3);rigView.text(6,16,'SAME ROOM. LOCAL INSPECT HAS COMPLETED.',C.cream2);
// A fixed crop of the exact common plate; no independent camera or unseen world view.
const crop=initial.crop(175,107,55,57);const cropBuf=await sharp(crop.b,{raw:{width:55,height:57,channels:4}}).resize(110,114,{kernel:'nearest'}).raw().toBuffer();const crop2=new Raster(110,114);crop2.b=cropBuf;rigView.blit(crop2,6,31);
rigView.text(125,35,'ACQUIRED RIG NOTE',C.cream4);rigView.text(125,49,'A: MARK ALIGNED.',C.cream4);rigView.text(125,61,'TRAVEL WITHIN MARKS.',C.cream4);rigView.text(125,82,'B: MARK OUTSIDE.',C.cream4);rigView.text(125,94,'TRAVEL BEYOND MARKS.',C.cream4);rigView.text(125,117,'A/B SHOWN FOR REVIEW.',C.paleBlue);rigView.text(125,129,'NOT SIMULTANEOUS UI.',C.paleBlue);rigView.text(6,153,'CROP OF RIG LANDMARK; EVIDENCE SHEET SHOWS',C.cream2);rigView.text(6,165,'THE ENLARGED MARK. NO FREE INSPECTION VIEW.',C.cream2);await rigView.save('shot-rig-detail-01.png',4);
const outcomes=new Raster(640,486,C.ink);outcomes.text(10,8,'LATER OUTCOMES / WORLD AND SHOW',C.cream4,2);outcomes.text(10,28,'REVIEW CONTACT SHEET. SAME CAMERA. SECURE PRIMARY SUSPENSION IN ALL PANELS.',C.paleBlue);
const stateSpecs=[['A / NO HOLD','normal',false,'WORLD: TRIM INTACT','SHOW: BEAT SATISFIED'],['A / VALID UNNECESSARY HOLD','initial',true,'WORLD: TRIM INTACT','SHOW: BEAT MISSED'],['B / TIMELY HOLD','initial',true,'WORLD: TRIM INTACT','SHOW: BEAT MISSED'],['B / NO HOLD THROUGH COMMITMENT','disturbed',false,'WORLD: TRIM DISTURBED','SHOW: BEAT BLOCKED']];
for(let i=0;i<4;i++){let [title,state,hold,world,show]=stateSpecs[i];const x=(i%2)*320,y=42+Math.floor(i/2)*215;let s=scene(state,hold,false); // The same static held panel serves both A and B.
 if(hold){s=scene('normal',true,false)}
 await s.save('logical/outcome-'+(i+1)+'.png');await s.save('outcome-'+(i+1)+'.png',4);outcomes.blit(s,x,y+13);outcomes.rect(x,y,320,13,C.dark);outcomes.text(x+5,y+3,title,C.cream4);outcomes.rect(x,y+183,320,31,C.ink);outcomes.text(x+6,y+186,world,C.cream4);outcomes.text(x+6,y+201,show,C.gold3);
}
outcomes.text(10,475,'NO INJURY. NO RETROACTIVE REPAIR. BEAT MISSED IS SHOWN AT ITS FINITE DEADLINE.',C.paleBlue);await outcomes.save('outcomes-contact-sheet.png',2);
// Art direction board with actual 32/40/48 samples, four required poses, and binary silhouette checks.
const board=new Raster(640,460,C.ink);board.text(12,10,'HARROWGLASS / STYLE P',C.cream4,3);board.text(12,38,'GRAND. WORN. WATCHFUL. / FULL PIXEL EXPLORATION',C.gold3);
const smallBuf=await sharp(normal.b,{raw:{width:320,height:180,channels:4}}).resize(320,180,{kernel:'nearest'}).raw().toBuffer();const small=new Raster(320,180);small.b=smallBuf;board.blit(small,12,59);
board.text(345,61,'MATERIAL / LIGHT',C.cream4,2);
const samples=[['OXBLOOD VELVET',[C.red0,C.red1,C.red2,C.red3]],['WORN GILT / BRASS',[C.gold0,C.gold1,C.gold2,C.gold3]],['DARK WOOD',[C.wood0,C.wood2,C.wood4,C.wood5]],['CREAM PLASTER',[C.cream0,C.cream1,C.cream2,C.cream3]],['SMOKED GLASS',[C.ink,C.glass0,C.glass1,C.glass2]]];
samples.forEach(([name,colors],i)=>{let yy=90+i*28;colors.forEach((c,j)=>board.rect(345+j*22,yy,19,15,c));board.text(440,yy+4,name,C.cream3)});
board.text(12,252,'STAGEHAND / PROPORTIONS AND POSES',C.cream4,2);
for(let i=0;i<3;i++){const h=[32,40,48][i],box=cropManifest[names[0]];const spr=await decode(path.join(root,'source/atlas-generated.png'),Math.round(box.width*h/box.height),h,box);board.blit(spr,35+i*56,325-h);await spr.save('layers/stagehand-scale-'+h+'.png');board.text(29+i*56,335,''+h+' PX',C.cream2)}
[idle,profile,rear,braced].forEach((a,i)=>{let x=235+i*94;board.blit(a,x,325-a.h);let sil=a.clone();for(let p=0;p<sil.b.length;p+=4)if(sil.b[p+3])sil.b.set(rgb(C.cream2),p);board.blit(sil,x+35,325-a.h);board.text(x-5,335,['3/4','PROFILE','REAR','BRACED'][i],C.cream2)});
board.text(12,362,'UI / EXACT BITMAP TEXT',C.cream4,2);board.text(12,389,'EARLY SWAY. A SOFT CLICK.',C.cream3,2);board.text(12,413,'MARK OUTSIDE THE WINDOW.',C.cream3,2);board.text(365,382,'31-COLOR SHARED PALETTE',C.paleBlue);board.text(365,399,'NO SOFT SHADOWS OR BLUR.',C.paleBlue);board.text(365,416,'32 / 40 / 48 ARE TESTS.',C.paleBlue);board.text(12,445,'SVG FALLBACK + OWNER COSTUME DESCRIPTION. APPROVED CONCEPT ATTACHMENT UNAVAILABLE.',C.gold3);await board.save('style-board.png',2);
await fs.writeFile(path.join(root,'source/palette.json'),JSON.stringify({colors:[...new Set(Object.values(C))],note:'Deliberately selected shared palette. All rendered logical pixels map to these colors; transparency is binary.'},null,2)+'\n');
const poses=new Raster(320,180,C.ink);
['3/4','PROFILE','REAR','BRACED'].forEach((n,i)=>poses.text(34+i*72,3,n,C.cream3));
for(let row=0;row<3;row++)for(let col=0;col<4;col++){
 const h=[32,40,48][row],box=cropManifest[names[col]],y=[53,108,165][row];
 const spr=await decode(path.join(root,'source/atlas-generated.png'),Math.round(box.width*h/box.height),h,box);
 poses.blit(spr,36+col*72,y-h);poses.line(26+col*72,y,91+col*72,y,C.slate);
 if(col===0)poses.text(4,y-7,''+h,C.cream3);
 await spr.save('layers/'+names[col]+'-'+h+'.png');
}
poses.text(4,172,'HEIGHT TRIALS / DIRECT SOURCE SAMPLING / NO ANIMATION',C.cream2);
await poses.save('logical/stagehand-pose-scale-sheet.png');await poses.save('stagehand-pose-scale-sheet.png',4);
// Self-contained editable composition guide. Dashed anchors are requested; filled anchors are rendered.
const pts=[['CHANDELIER',680,218,680,220],['PERFORMER FEET',930,440,932,440],['VIEW',150,560,180,616],['DESK',420,520,420,520],['RIG',765,520,808,528],['HOLD',1100,530,1112,528],['STAGEHAND FEET',150,600,152,600]];
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="800" viewBox="0 0 1280 800"><title>SHOT-WING-01 editable comparison anchors</title><desc>One Room. Dashed rings are requested anchors; solid crosses are actual art anchors. Coordinates are not gameplay values.</desc><rect width="1280" height="800" fill="#171821"/><g id="regions" fill-opacity=".23" stroke="#829398"><rect x="0" y="0" width="1280" height="190" fill="#4f626e"/><rect x="0" y="150" width="1280" height="255" fill="#ad884d"/><rect x="0" y="370" width="1280" height="310" fill="#7b5544"/></g><g id="architecture" fill="none" stroke="#9a8870" stroke-width="3"><path d="M0 190L350 140 1200 140 1279 320M70 680L430 400 1240 440M70 680L1240 680M430 400L1240 440"/><path d="M680 108V208"/></g><g id="labels" font-family="monospace" font-size="18" fill="#dfcfaa"><text x="20" y="32">SHOT-WING-01 / FIXED DIAGONAL WING CAMERA</text><text x="20" y="64">Fly space y=0..190 / performance y=150..405 / wing y=370..680</text><text x="20" y="95">Dashed circles = requested stencil. Solid crosses = rendered rest anchors.</text></g><g id="navigation" fill="none" stroke="#ad884d" stroke-width="2"><path d="M180 616L420 520 808 528 1112 528"/></g>${pts.map(([n,x,y,ax,ay],i)=>`<g id="anchor-${n.toLowerCase().replaceAll(' ','-')}" stroke="#dfcfaa" fill="none"><circle cx="${x}" cy="${y}" r="12" stroke-dasharray="3 3"/><path d="M${ax-7} ${ay}h14M${ax} ${ay-7}v14" stroke-width="3"/><path d="M${x} ${y}L${ax} ${ay}"/><text x="${ax+16}" y="${ay+(i===2?-20:i===6?34:-18)}" font-family="monospace" font-size="16" fill="#dfcfaa" stroke="none">${n}</text></g>`).join('')}<g id="camera" fill="none" stroke="#829398" stroke-width="3"><path d="M18 658L60 658 60 692 18 692ZM60 666L180 580M60 683L230 650"/></g><g id="notes" fill="#dfcfaa" font-family="monospace" font-size="17"><text x="20" y="744">VIEW ↔ DESK ↔ RIG ↔ HOLD. One logical Room: wing-and-stage.</text><text x="20" y="770">Top 1280×720 = comparison frame; 80px footer is guide-only. No ticks / hitboxes / physical distance.</text><text x="20" y="793">Common early sway offsets chandelier 8px right; normal and all outcomes share the same camera.</text></g></svg>`;
await fs.writeFile(path.join(root,'composition-guide.svg'),svg);
console.log('Rendered Style P assets. Palette entries: '+palette.length);
