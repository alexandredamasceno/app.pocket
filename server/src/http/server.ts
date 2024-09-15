import fastify from "fastify";

const app = fastify(); // Criei a aplicação

app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP server is running!");
});