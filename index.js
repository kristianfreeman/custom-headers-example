addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch(request)
  const headers = new Headers(response.headers)

  // Add a header
  headers.append("x-workers-hello", "Hello from Cloudflare Workers")

  // Delete headers
  headers.delete("x-header-to-delete")
  headers.delete("x-header2-to-delete")

  // Change a header
  headers.set("x-header-to-change", "NewValue")

  const newResponse = new Response(response.body, {
    ...response,
    headers
  })

  return newResponse
}