import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/hello", (c) => c.json({ message: "Hello from Hono!" }));

const port = 3000;

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});

export type AppType = typeof app;
export default app;
