const CACHE = 'rural-ed-v1';
self.addEventListener('install', (e)=>{
    e.waitUntil(caches.open(CACHE).then((c)=>c.addAll([
            '/',
            '/src/index.jsx',
            '/src/App.jsx'
        ])));
});
self.addEventListener('fetch', (event)=>{
    if (event.request.method !== 'GET') return;
    event.respondWith(caches.match(event.request).then((r)=>r || fetch(event.request).then((resp)=>{
            const copy = resp.clone();
            caches.open(CACHE).then((c)=>c.put(event.request, copy));
            return resp;
        })).catch(()=>caches.match('/')));
});

//# sourceMappingURL=service-worker.js.map
