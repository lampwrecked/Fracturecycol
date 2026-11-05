/* FRACTURE · WALL offline keeper: after one visit with internet, the piece opens with no internet at all.
   When internet IS there, it quietly fetches the newest version for next time. */
const CACHE='fracture-wall-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.json'])).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin)return;      /* the shared library still goes straight to the network */
  e.respondWith(caches.open(CACHE).then(async c=>{
    const hit=await c.match(e.request,{ignoreSearch:true});
    const net=fetch(e.request).then(r=>{if(r&&r.ok)c.put(u.origin+u.pathname,r.clone());return r;}).catch(()=>hit);
    return hit||net;
  }));
});
