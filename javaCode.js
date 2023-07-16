const buyBtns = document.querySelectorAll('.js-buyticket')
const modal = document.querySelector('.js-modal')
const modal_off = document.querySelector('.js-modal-close')
const modalcontainer = document.querySelector('.js-modal-container')

function addModal(){
    modal.classList.add('open')
}

function offModal() {
    modal.classList.remove('open')
}
    
for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', addModal)
}
modal_off.addEventListener('click', offModal)
modal.addEventListener("click", offModal)
modalcontainer.addEventListener("click", function (event) {
    event.stopPropagation()
})
