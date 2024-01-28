import requestFunction from "./request";

const server = Bun.serve({
  async fetch(request, server) {
    const reqJ = await JSON.parse(await request.json());
    console.log(reqJ);
    return new Response("hi");
  },
});

// requestFunction();

console.log(`Served on ${server.url}`);
console.log(`--------------------------`);
