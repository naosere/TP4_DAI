import express from "express";
import {horaActual} from "./src/time.js";
import {fechaActual} from "./src/time.js";
const app = express();
const port = 3000;


app.get('/',(req,res) => {
    res.send("Hello World");
})


app.get('/hora',(req,res) => {
    res.send(`La hora actual es: ${horaActual()}`);
})


app.get('/fecha-completa',(req,res) => {
    res.send(`La fecha actual es: ${fechaActual()}`);
})


app.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}`)
})

app.use((req, res) => {
    res.status(404).send("Error 404: Ruta no encontrada\nFacu y Nao te desean que lo encuentres pronto ❤️❤️❤️❤️❤️❤️");
});