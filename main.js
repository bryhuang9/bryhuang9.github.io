// Highlighting active nav-link
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', event => {
    let fromTop = window.scrollY;
    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('nav-link-active');
        } else {
            link.classList.remove('nav-link-active');
        }
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 0) {
        navbar.classList.remove('top');
    } else {
        navbar.classList.add('top');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let mainText = 'Brian Huang';
let subText = 'Aspiring Software Engineer';
let i = 0, j = 0;

function typeWriter() {
    if (i < mainText.length) {
        document.getElementById("main-heading").innerHTML += mainText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else if (j < subText.length) { // start typing the subText after the mainText is finished
        document.getElementById("sub-heading").innerHTML += subText.charAt(j);
        j++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

// Defining all modals, buttons, close buttons, back buttons in arrays
const modals = [
    document.getElementById("project1-modal"),
    document.getElementById("project2-modal"),
    document.getElementById("project3-modal"),
    document.getElementById("project4-modal")
];

const btns = [
    document.getElementById("project1-button"),
    document.getElementById("project2-button"),
    document.getElementById("project3-button"),
    document.getElementById("project4-button")
];

const closes = [
    document.querySelector(".close-project1"),
    document.querySelector(".close-project2"),
    document.querySelector(".close-project3"),
    document.querySelector(".close-project4")
];

const backButtons = [
    document.querySelector(".back-button1"),
    document.querySelector(".back-button2"),
    document.querySelector(".back-button3"),
    document.querySelector(".back-button4")
];

// Event listeners for all buttons
btns.forEach((btn, index) => {
    btn.onclick = function(event) {
        event.stopPropagation();
        modals[index].style.display = "block";
        document.body.classList.add('modal-open');
        setTimeout(function() {
            modals[index].classList.add("show");
        }, 50);
    }
});

// Event listeners for all close buttons
closes.forEach((close, index) => {
    close.onclick = function(event) {
        event.stopPropagation();
        closeModals(index);
    }
});

// Event listeners for all back buttons
backButtons.forEach((backButton, index) => {
    backButton.onclick = function(event) {
        event.stopPropagation();
        closeModals(index);
    }
});

// Handling the case where user clicks outside the modal
window.onclick = function(event) {
    modals.forEach((modal, index) => {
        if (!modal.contains(event.target)) {
            closeModals(index);
        }
    });
}

// Function to close modals
function closeModals(index) {
    modals[index].classList.remove("show");
    document.body.classList.remove('modal-open');
    setTimeout(function() {
        modals[index].style.display = "none";
    }, 100);
}

$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();

        var formData = $(this).serialize();

        $.ajax({
            url: 'https://formspree.io/f/xyyqgeja',
            method: 'POST',
            data: formData,
            dataType: 'json',
            success: function() {
                $('#form-message').show();

                // Hide the message after 5 seconds
                setTimeout(function() {
                    $('#form-message').hide();
                }, 5000);  // 5000 milliseconds = 5 seconds
            },
            error: function() {
                alert('Oops! There was a problem with your submission. Please try again. Make sure all boxes are filled out');
            }
        });
    });
});

let currentOpen = null;

function toggleDescription(descId, boxId, plusMinusId) {
    if (currentOpen) {
        currentOpen.description.style.maxHeight = '0';
        currentOpen.description.style.padding = '0 50px';
        currentOpen.box.classList.remove('open');
        currentOpen.plusMinus.children[0].style.transform = "translateY(-50%)";
        currentOpen.plusMinus.children[1].style.transform = "translateY(-50%) rotate(90deg)";
    }

    if (!currentOpen || currentOpen.descId !== descId) {
        let description = document.getElementById(descId);
        let box = document.getElementById(boxId);
        let plusMinus = document.getElementById(plusMinusId);

        description.style.maxHeight = '1000px';
        description.style.padding = '30px 50px';
        box.classList.add('open');
        plusMinus.children[0].style.transform = "translateY(-50%) rotate(0)";
        plusMinus.children[1].style.transform = "translateY(-50%) rotate(0)";

        currentOpen = {descId, description, box, plusMinus};
    } else {
        currentOpen = null;
    }
}

modals.forEach((modal, index) => {
    modal.onclick = function(event) {
        event.stopPropagation();
    }
});
