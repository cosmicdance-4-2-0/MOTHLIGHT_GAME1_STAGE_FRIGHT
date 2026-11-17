// Artifact checks only. No human usability, game physics, timing or accessibility certification.
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const require=createRequire(import.meta.url);
const sharp=require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES?process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES+'/sharp':'sharp');
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const results=[];
function check(name,ok,details){results.push({name,pass:!!ok,details});if(!ok)process.exitCode=1}
const manifest=JSON.parse(await fs.readFile(path.join(root,'source/comparison-manifest.json')));
const colors=JSON.parse(await fs.readFile(path.join(root,'source/palette.json'))).colors;
const allowed=new Set(colors.map(h=>h.toLowerCase()));
const sha=async f=>createHash('sha256').update(await fs.readFile(path.join(root,f))).digest('hex');
async function raster(f){return sharp(path.join(root,f)).ensureAlpha().raw().toBuffer({resolveWithObject:true})}
for(const name of ['shot-wing-01-normal','shot-wing-01-common-initial','stagehand-pose-scale-sheet','outcome-1','outcome-2','outcome-3','outcome-4']){
 const big=await raster(name+'.png'),small=await raster('logical/'+name+'.png');
 check(name+' dimensions',big.info.width===1280&&big.info.height===720&&small.info.width===320&&small.info.height===180,'1280x720 display, 320x180 logical');
 let mismatches=0,offPalette=0,partialAlpha=0;
 for(let y=0;y<720;y++)for(let x=0;x<1280;x++)for(let k=0;k<4;k++)if(big.data[(y*1280+x)*4+k]!==small.data[(Math.floor(y/4)*320+Math.floor(x/4))*4+k])mismatches++;
 for(let p=0;p<small.data.length;p+=4){let h='#'+small.data.subarray(p,p+3).toString('hex');if(!allowed.has(h))offPalette++;if(small.data[p+3]!==255)partialAlpha++}
 check(name+' nearest-neighbor grid',mismatches===0,{channelMismatches:mismatches});
 check(name+' opaque palette',offPalette===0&&partialAlpha===0,{offPalettePixels:offPalette,nonopaquePixels:partialAlpha});
}
check('A/B initial single image reference',manifest.cases.A.initial===manifest.cases.B.initial&&manifest.cases.A.initial===manifest.commonInitial.image,manifest.commonInitial);
check('A/B initial single caption reference',manifest.cases.A.captionKey===manifest.cases.B.captionKey,'Both resolve to commonInitial.caption');
check('Held A/B same physical rendering',await sha('outcome-2.png')===await sha('outcome-3.png'),'Different case captions are review annotations in the contact sheet.');
const normal=await raster('logical/shot-wing-01-normal.png'),initial=await raster('logical/shot-wing-01-common-initial.png');
let outside=0,changed=0;
for(let y=0;y<180;y++)for(let x=0;x<320;x++){let p=(y*320+x)*4;let differs=normal.data.subarray(p,p+4).compare(initial.data.subarray(p,p+4))!==0;if(differs){changed++;if(!(y>=169||(x>=148&&x<=194&&y>=26&&y<=70)))outside++}}
check('Normal/initial camera and scenery unchanged',outside===0,{changedPixels:changed,outsideChandelierOrCaption:outside});
const a1=await raster('logical/outcome-1.png'),a4=await raster('logical/outcome-4.png');let outcomeOutside=0;
for(let y=0;y<180;y++)for(let x=0;x<320;x++){let p=(y*320+x)*4;if(a1.data.subarray(p,p+4).compare(a4.data.subarray(p,p+4))!==0&&!(x>=148&&x<=213&&y>=26&&y<=73))outcomeOutside++}
check('No-Hold outcome background unchanged outside fixture',outcomeOutside===0,{outsideChandelierAndTrim:outcomeOutside});
for(const pose of ['three-quarter','profile','rear','braced'])for(const h of [32,40,48]){const {data,info}=await raster('layers/stagehand-'+pose+'-'+h+'.png');let bad=0;for(let p=3;p<data.length;p+=4)if(data[p]!==0&&data[p]!==255)bad++;check(pose+' '+h+'px binary alpha',info.height===h&&bad===0,{height:info.height,partialAlpha:bad})}
const files=['composition-guide.svg','style-board.png','shot-wing-01-normal.png','shot-wing-01-common-initial.png','evidence-contact-sheet.png','outcomes-contact-sheet.png','shot-rig-detail-01.png','stagehand-pose-scale-sheet.png'];
const hashes={};for(const f of files)hashes[f]=await sha(f);
// Grayscale is an inspection aid, not a color-vision simulation or validation.
for(const f of ['shot-wing-01-common-initial','evidence-contact-sheet'])await sharp(path.join(root,f+'.png')).grayscale().png().toFile(path.join(root,'source/check-'+f+'-grayscale.png'));
const report={checkedAt:new Date().toISOString(),method:'Node + sharp decoded-pixel comparisons; not human trials',results,hashes};
await fs.writeFile(path.join(root,'source/verification.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({checks:results.length,failed:results.filter(r=>!r.pass),hashes},null,2));
