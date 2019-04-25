// add nav-scrolled class to navbar
window.onscroll = () => {
    const navbar = document.querySelector('.navbar')

    if (window.scrollY > 10) {
        navbar.classList.add('navbar-scrolled')
    } else {
        navbar.classList.remove('navbar-scrolled')
    }
}

//responsive navbar
//add style display block on click of menu toggle
const menuDisplayBtn = document.querySelector('.menu-display')

menuDisplayBtn.addEventListener('click', () => {
    responsiveMenu.style.display = 'block'  
})

// close on click of link
const responsiveMenu = document.querySelector('.responsive-links')
const respnosiveOne = document.querySelector('.responsive-one')
const respnosiveTwo = document.querySelector('.responsive-two')
const respnosiveThree = document.querySelector('.responsive-three')

respnosiveOne.addEventListener('click', () => {
    responsiveMenu.style.display = 'none';
})
respnosiveTwo.addEventListener('click', () => {
    responsiveMenu.style.display = 'none';
})
respnosiveThree.addEventListener('click', () => {
    responsiveMenu.style.display = 'none';
})

//close on x click
const menuCloseBtn = document.querySelector('.menu-close-btn')

menuCloseBtn.addEventListener('click', () => {
    responsiveMenu.style.display = 'none'
    menuDisplayBtn.style.display = 'block'
})


// template
const member = function () {
    return '<h3 class="modal-content-title">' + member.data.name
        + '</h3>' + '<img src="' + member.data.imageSrc + '" class="modal-content-img">'
        + '<p>' + member.data.description + '</p>'
        + '<a href="' +member.data.link + '" target="_blank" class="modal-content-a">Link in modal !</a>';
};

// data
member.data = {
    name: 'name',
    imageSrc: 'img/',
    description: 'description',
    link: 'https://github.com/LukeDavies12'
}

// render
const modal = document.querySelector('#modal')
const modalContent = document.querySelector('#modal-content')
modalContent.innerHTML = member()

// member modal buttons
const memberBtnOne = document.querySelector('#member-one-btn')
const memberBtnTwo = document.querySelector('#member-two-btn')
const memberBtnThree = document.querySelector('#member-three-btn')
const memberBtnFour = document.querySelector('#member-four-btn')

// close modal
const closeModal = document.querySelector('.modal-close')

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
})


// close modal on outisde click
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
})

// click listeners
memberBtnOne.addEventListener('click', () => {
    member.data = {
        name: 'Jane Doe',
        imageSrc: 'img/team-member-demo.svg',
        description: 'description 1',
        link: 'https://github.com/LukeDavies12'
    }
    modalContent.innerHTML = member()
    modal.style.display = 'block'
})

memberBtnTwo.addEventListener('click', () => {
    member.data = {
        name: 'John Doe',
        imageSrc: 'img/team-member-demo-two.svg',
        description: 'description 2',
        link: 'https://github.com/LukeDavies12'
    }
    modalContent.innerHTML = member()
    modal.style.display = 'block'
})

memberBtnThree.addEventListener('click', () => {
    member.data = {
        name: 'Jane Doe the Second',
        imageSrc: 'img/team-member-demo.svg',
        description: 'description 3',
        link: 'https://github.com/LukeDavies12'
    }
    modalContent.innerHTML = member()
    modal.style.display = 'block'
})

memberBtnFour.addEventListener('click', () => {
    member.data = {
        name: 'John Doe the Second',
        imageSrc: 'img/team-member-demo-two.svg',
        description: 'description 4',
        link: 'https://github.com/LukeDavies12'
    }
    modalContent.innerHTML = member()
    modal.style.display = 'block'
})