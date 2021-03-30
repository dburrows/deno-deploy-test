addEventListener("fetch", (event) => {
  const response = new Response("Hello Dave!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
