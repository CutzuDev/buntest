export default async function main() {
  const response = await fetch("https://buntest-jyd7.onrender.com/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Hello from Bun! - script",
    }),
  });
  const resp = await response.json();
  console.log(resp);

}
