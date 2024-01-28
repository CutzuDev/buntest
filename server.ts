import requestFunction from "./request";

const server = Bun.serve({
  async fetch(request, server) {
    try {
      const reqJ = await request.json();
      console.log(reqJ);
    } catch (error) {
      console.log("Invalid JSON:", error);
    }
    return new Response("hi");
  },
});

// requestFunction();

console.log(`Served on ${server.url}`);
console.log(`--------------------------`);
