import { main as requestFunction } from "./request";
import { main as webhookFunction } from "./webhook";
import type { Payload } from "./utils";

const server = Bun.serve({
  async fetch(request, server) {
    const url = new URL(request.url);
    if (url.pathname === `/write`) {
      const jsonRequest = (await request.json()) as Payload;
      console.log(jsonRequest);
      const payload: Payload = {
        avatar_url: "",
        username: "Cutzu",
        content: jsonRequest.content,
      };
      webhookFunction(payload);
    }
    return new Response("hi");
  },
});
console.log(`--------------------------`);

// requestFunction();

console.log(`Served on ${server.url}`);
