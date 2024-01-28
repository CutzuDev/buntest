import requestFunction from "./request";

const server = Bun.serve({
  async fetch(request, server) {
    if (await request.json()) {
      const reqJ = await request.json();
      console.log(reqJ);
    }
    return new Response("hi");
  },
});

// requestFunction();

console.log(`Served on ${server.url}`);
console.log(`--------------------------`);
