const WS_HOST = import.meta.env.VITE_WS_HOST
export const ws = new WebSocket(WS_HOST)

ws.onopen = () => {
  console.log("🟢 Connected to the WS")
}

ws.onmessage = (event) => {
  console.log("Received msg:", event)
}

ws.onerror = (err) => {
  console.error("Error WS:", err)
}

ws.onclose = () => {
  console.log("Closed connection")
}