import type { Payload } from "./utils";

export async function main(payload: Payload) {
  const response = await fetch(
    "https://discord.com/api/webhooks/1187483782891175957/FOMNWXsRgzurhn4VJutOIejDMOqMb9RpvuWb8o1jhA-PX8qzbWWMrO39TcYM1GLJRjBM",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
}
