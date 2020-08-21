var backdrop = document.querySelector(".backdrop");
var selectPlanButton = document.querySelectorAll('.plan .button');
var modal = document.querySelector('.modal');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var modalNoButton = document.querySelector('.modal__action--negative');

for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function() {
        backdrop.style.display = 'block';
        if (modal) {
            // modal.style.display = 'block';
            modal.classList.add('animate');
        }
    });
}
backdrop.addEventListener('click', function() {
    mobileNav.style.display = 'none';
    // mobileNav.classList.remove("animate-nav");
    closeModal();
});
if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}


function closeModal() {
    backdrop.style.display = 'none';
    if (modal) {
        // modal.style.display = 'none';
        modal.classList.remove('animate');
    }
}
toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    // mobileNav.classList.add("animate-nav");
    backdrop.style.display = 'block';
});