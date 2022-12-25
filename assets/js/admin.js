// background color
var bgColorVal = ['.header-area .sg-topbar-area, .sg-theme-btn'];
// normal color
var normalColorVal = ['.sg-section-title-wrap .sg-section-subtitle'];
// border top color
var borderTopColorVal = ['as'];
// border bottom color
var borderBottomColorVal = ['adf'];
// border color
var borderColorVal = ['asdf'];


var bgcolor = document.createElement('style');
var normalColor = document.createElement('style'); 
var borderTopColor = document.createElement('style');
var borderBottomColor = document.createElement('style');
var borderColor = document.createElement('style');

colorDomSelect = document.getElementById('admin-color-select');
colorDomSelect.addEventListener('input', function () {
    const color = this.value;
    // save color to local storage
    localStorage.setItem('Pcolor', color);
    bgcolor.innerHTML = `${bgColorVal} { background-color: ${color}}`;
    normalColor.innerHTML = `${normalColorVal} { color: ${color}}`;
    borderTopColor.innerHTML = `${borderTopColorVal} { border-top-color: ${color}}`;
    borderBottomColor.innerHTML = `${borderBottomColorVal} { border-bottom-color: ${color}}`;
    borderColor.innerHTML = `${borderBottomColorVal} { border-bottom-color: ${color}}`;
});

colorFormLocalStorage = localStorage.getItem('Pcolor');
$('.admin-color-btn-reset').on('click', function(e) {
	localStorage.setItem('Pcolor', '#F94D1C');
})
console.log(colorFormLocalStorage);
colorDomSelect.value = colorFormLocalStorage; 
bgcolor.innerHTML = `${bgColorVal} { background-color: ${colorFormLocalStorage}}`;
normalColor.innerHTML = `${normalColorVal} { color: ${colorFormLocalStorage}}`;
borderTopColor.innerHTML = `${borderTopColorVal} { border-top-color: ${colorFormLocalStorage}}`;
borderBottomColor.innerHTML = `${borderBottomColorVal} { border-bottom-color: ${colorFormLocalStorage}}`;
borderColor.innerHTML = `${borderColorVal} { border-color: ${colorFormLocalStorage}}`;



document.body.appendChild(bgcolor);
document.body.appendChild(normalColor);
document.body.appendChild(borderTopColor);
document.body.appendChild(borderBottomColor);
document.body.appendChild(borderColor);


;(function($) {
    

    $('.side-admin-settings').on('click', function() {
        $('.side-admin-panel-right').addClass('side-admin-panel-visible');
        $('.overlay').addClass('overlay-visible');
    })
    $('.cinkes-side-admin-panel-close-btn, .overlay').on('click', function() {
        $('.side-admin-panel-right').removeClass('side-admin-panel-visible');
        $('.overlay').removeClass('overlay-visible');
    })
    
})(jQuery)