const horaActual = () =>{
    let date = new Date();
    let hora = date.toTimeString().slice(0, 8);
    return(hora);
}
const fechaActual = () =>{
    let date = new Date();
    return(date);
}


export  {horaActual, fechaActual};