const messages = require('./messages')
export async function onRequest(context) {
  const message = messages[Math.floor(Math.random() * messages.length)]
  let url = new URL(context.request.url)
  url.pathname = message

  const response = await context.env.ASSETS.fetch(url)
  return new Response(response.body)
}
