const port = 8080;

Deno.serve({ port }, (_req: any) => {
  const currentDateTime = new Date().toISOString();
  return new Response(`Hello, World! Current date and time: ${currentDateTime}`);
});
