const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),ctx=vm.createContext({Date,Intl,URL,URLSearchParams});
for(const file of ['publish-schedule.js','blog-data.js','guide-data.js','comic-data.js','event-data.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx);
const data=vm.runInContext('({article:blogPosts,"guide-article":guidePosts,"comic-detail":comicData,"comic-series":comicSeriesData,"event-detail":calendarEvents})',ctx);
const result=[];
for(const [route,rows]of Object.entries(data))for(const row of rows)result.push({key:route+':'+row.id,source:row.image||row.thumbnail||'blog/images/suion-01.png'});
fs.writeFileSync(path.join(root,'edge/image-sources.json'),JSON.stringify(result,null,2));
console.log('Images:',result.length);
