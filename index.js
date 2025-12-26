const sizeYoho = document.querySelector('.kinobox');
const sizeYohoIframe = document.querySelector('.kinobox');
let contento = document.querySelector('.content').style.height;
window.addEventListener('resize', reSize);
function reSize() {
    sizeYoho.style.height = contento;
    sizeYohoIframe.style.height = contento;
}
reSize();

let atrTopAdMb = document.querySelector('#TopAdMb');
window.addEventListener('resize', sss);
let wTopAdMb = document.documentElement.clientWidth;
if (parseInt(wTopAdMb) <= 900) {
    atrTopAdMb.style.display = 'block';
}
function sss() {
    let wTopAdMb = document.documentElement.clientWidth;
    if (parseInt(wTopAdMb) >= 900) {
        atrTopAdMb.style.display = 'none';
    }
}
sss();

document.getElementById('toCloseTopAdMb').onclick = function () {
    atrTopAdMb.style.display = 'none';
}

document.getElementById('tgClose').onclick = function () {
    document.getElementById('tgWrapper').style.display = 'none';
}
