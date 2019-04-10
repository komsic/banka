const closeModal = document.getElementById('modal-close');
const modal = document.getElementById('modal');
let containerTobeHidden = {};

closeModal.addEventListener('click', event => {
    event.preventDefault();
    modal.style.display = 'none';
    if(containerTobeHidden) {
        containerTobeHidden.style.display = 'none';
    }
});

function modalControl(containerId) {
    event.preventDefault();
    
    const container = document.getElementById(containerId);
    if(container) {
        container.style.display = 'block';
        containerTobeHidden = container;
    }
    
    modal.style.display = 'block';
}

function makeTrans(transType) {
    const sel = document.getElementById('trans-type');
    sel.selectedIndex = transType;
    
    const makeTransContainerId = 'make-trans';
    modalControl(makeTransContainerId);
}

function la(id) {
    const s = document.getElementById(id);
    s.style.display = 'none';
}

function linkToAcct() {
    location.href = "./account-details.html"
}

function linkToTrans() {
    location.href = "./transaction-details.html"
}

function linkToCashier() {
    location.href = "./cashier-dashboard.html"
}

function linkToProfile() {
    location.href = "./user-profile.html"
}