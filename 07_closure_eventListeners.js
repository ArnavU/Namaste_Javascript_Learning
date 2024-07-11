let cntArea = document.getElementById("counter");
function incCnt() {
    let cnt = 0;
    return function() {
        cnt++;
        cntArea.innerHTML = cnt;
        console.log(cnt);
    }
}

let incBtn = document.getElementById('btnIncCnt');
incBtn.addEventListener('click', incCnt());

document.getElementById('removeEListener')
.addEventListener('click', () => {
    incBtn.removeEventListener('click', incCnt())
    console.log("btn clicked");
})