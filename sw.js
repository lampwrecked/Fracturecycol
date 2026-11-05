/* FRACTURE · WALL offline keeper: after one visit with internet, the piece opens with no internet at all.
   With internet it always tries for the newest version first (waits up to 4 s), then falls back to the saved copy. */
const CACHE='fracture-board-v5';
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(['./','./index.html','./manifest.json'].map(u=>fetch(new Request(u,{cache:'reload'})).then(r=>{if(r.ok)return c.put(u,r);})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin)return;      /* the public library goes straight to the network */
  e.respondWith(caches.open(CACHE).then(async c=>{
    const hit=await c.match(e.request,{ignoreSearch:true});
    const net=fetch(e.request,{cache:'no-cache'}).then(r=>{if(r&&r.ok)c.put(u.origin+u.pathname,r.clone());return r;});
    if(!hit)return net;
    const slow=new Promise(res=>setTimeout(()=>res(hit),4000));
    return Promise.race([net.catch(()=>hit),slow]);
  }));
});
