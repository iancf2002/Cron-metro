let segundosInicio = 0;
let interval= null;
const time = document.getElementById("time")

//função para aparecer o primeiro 0 na contagem 
function padStart(value) {
    return String(value).padStart(2, "0")
}
//função responsavel para atualizar o cronometro no front
function setarTempo() {
    const minutos = Math.floor(segundosInicio / 60)
    const segundos = segundosInicio % 60
    time.innerHTML = `${padStart(minutos)}:${padStart(segundos)}`
}
//função incrementadora ao tempo aumenta +1 
function timer() {
    segundosInicio++;
    setarTempo()
}
//função Inicia cronometro
function iniciarCronometro() {
    //condição para não atrapalhar a contagem ja iniciada  
    if (interval) pausarCronometro()
    interval = setInterval(timer, 1000)
}
//função pausa cronometro
function pausarCronometro(){
    clearInterval(interval)

}
//função Reinicia cronometro
function reiniciarCronometro(){
    pausarCronometro()
    segundosInicio = 0;
    setarTempo()
    

}