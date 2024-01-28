import requestFunction from "./request";

const server = Bun.serve({
  async fetch(request, server) {
    const reqJ = await request.json().then((data) => {
      console.log(data);
    });
    return new Response("hi");
  },
});

// requestFunction();

console.log(`Served on ${server.url}`);
console.log(`--------------------------`);
