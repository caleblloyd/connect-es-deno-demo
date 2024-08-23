import { createPromiseClient } from "@connectrpc/connect"
import { createGrpcTransport } from "@connectrpc/connect-node"
import { ElizaService } from "./proto/gen/eliza_pb.ts"

const transport = createGrpcTransport({
  httpVersion: "2",
  baseUrl: "https://demo.connectrpc.com",
})

const client = createPromiseClient(ElizaService, transport)

const response = await client.say({ sentence: "Hello" })

console.log(response.sentence)

Deno.exit(0)
