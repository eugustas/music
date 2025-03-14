<!-- 
  Copyright (c) 2025 Gustavo Business. Todos os direitos reservados.

  Este código é fornecido sob a Licença MIT. Você pode usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias deste software, conforme permitido pela licença. Consulte o arquivo LICENSE para mais detalhes.

  Este software é fornecido "no estado em que se encontra", sem qualquer garantia expressa ou implícita, incluindo, mas não se limitando a, garantias de comercialização ou adequação a um propósito específico. O autor ou os detentores do copyright não se responsabilizam por quaisquer danos decorrentes do uso do software.
-->

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('gustavo-songs-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/script.js',
                '/icon-192x192.png',
                '/icon-512x512.png',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
