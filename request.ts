import { sleep } from "bun";
import type { Payload } from "./utils";

export async function main() {
  const payload: Payload = {
    username: "Hi",
    avatar_url: "",
    content: "This is content",
  };
  (async () => {
    while (true) {
      const now = new Date();
      const time = now.getTime();
      if (time % 2500 === 0) {
        const response = await fetch("http://localhost:3000/write", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        await sleep(1);
      }
    }
  })();
}
