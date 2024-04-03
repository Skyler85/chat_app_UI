const clock = document.getElementById("clock");
function getClock(){
    const date = new Date();
    const h = String(date.getHours()).padStart(2,"0");
    const m = String(date.getMinutes()).padStart(2,"0");
    const s = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${h}:${m}:${s}`;

}

getClock(); // 최초 1회 실행
setInterval(getClock, 1000); // 1초 주기로 반복 실행
