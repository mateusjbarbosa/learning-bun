const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch() {
    return Response.json({
      message: "Bun!"
    });
  },
});

console.log(`Listening on http://localhost:${server.port}!`);