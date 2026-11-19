import fs from 'node:fs';
const provinces=['Antwerpen','Limburg','Oost-Vlaanderen','West-Vlaanderen','Vlaams-Brabant'];
const map=new Map();
for(const p of provinces)for(const row of JSON.parse(fs.readFileSync('research/'+p+'.json'))){
 const key=new URL(row.website).hostname.replace(/^www\./,'');
 row.branchContacts=[{phone:row.phone,locations:'Gepubliceerd bedrijfscontact ('+p+'); niet noodzakelijk een direct filiaalnummer'}];
 if(map.has(key)){const old=map.get(key);old.locations.push(...row.locations.filter(l=>!old.locations.some(o=>o.city===l.city&&o.province===l.province)));old.types=[...new Set([...old.types,...row.types])];old.sources=[...new Map([...old.sources,...row.sources].map(s=>[s.url,s])).values()];old.branchContacts.push(...row.branchContacts);old.evidence+=' '+row.evidence;old.additionalReviews=[...(old.additionalReviews||[]),{rating:row.rating,assessment:row.assessment,reason:row.reason}];if(row.name.includes('Rentalift'))old.name=row.name;
 }else map.set(key,row);
}
const data=[...map.values()].sort((a,b)=>(a.rating??99)-(b.rating??99)||a.name.localeCompare(b.name,'nl'));
fs.mkdirSync('public',{recursive:true});fs.writeFileSync('public/data.json',JSON.stringify(data,null,2));
const counts=Object.fromEntries(provinces.map(p=>[p,data.filter(x=>x.locations.some(l=>l.province===p)).length]));
fs.writeFileSync('public/coverage.json',JSON.stringify({reviewDate:'2026-11-19',companies:data.length,rated:data.filter(x=>x.rating!==null).length,locations:data.reduce((n,x)=>n+x.locations.length,0),provinces:counts},null,2));
fs.mkdirSync('public/research',{recursive:true});for(const p of provinces)fs.copyFileSync('research/'+p+'-coverage.md','public/research/'+p+'-coverage.md');
console.log({companies:data.length,counts});
