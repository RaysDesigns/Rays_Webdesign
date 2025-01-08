

// Fox Hills Maps Slideshow
(function () {
    let slideIndexMap = 1;
    showSlidesMap(slideIndexMap);

    function plusSlidesMap(n) {
        showSlidesMap(slideIndexMap += n);
    }

    function showSlidesMap(n) {
        const slidesMap = document.getElementsByClassName("mySlidesMap");
        if (n > slidesMap.length) { slideIndexMap = 1; }
        if (n < 1) { slideIndexMap = slidesMap.length; }
        Array.from(slidesMap).forEach(slide => slide.style.display = "none");
        slidesMap[slideIndexMap - 1].style.display = "block";
    }

    const prevMap = document.querySelector(".prev-map");
    const nextMap = document.querySelector(".next-map");
    if (prevMap && nextMap) {
        prevMap.addEventListener("click", () => plusSlidesMap(-1));
        nextMap.addEventListener("click", () => plusSlidesMap(1));
    }
})();

// Coffee Bean and Coaster Slideshow
(function () {
    let slideIndexCoffee = 1;
    showSlidesCoffee(slideIndexCoffee);

    function plusSlidesCoffee(n) {
        showSlidesCoffee(slideIndexCoffee += n);
    }

    function showSlidesCoffee(n) {
        const slidesCoffee = document.getElementsByClassName("mySlidesCoffee");
        if (n > slidesCoffee.length) { slideIndexCoffee = 1; }
        if (n < 1) { slideIndexCoffee = slidesCoffee.length; }
        Array.from(slidesCoffee).forEach(slide => slide.style.display = "none");
        slidesCoffee[slideIndexCoffee - 1].style.display = "block";
    }

    const prevCoffee = document.querySelector(".prev-coffee");
    const nextCoffee = document.querySelector(".next-coffee");
    if (prevCoffee && nextCoffee) {
        prevCoffee.addEventListener("click", () => plusSlidesCoffee(-1));
        nextCoffee.addEventListener("click", () => plusSlidesCoffee(1));
    }
})();

// Fox Hills Menus Slideshow
(function () {
    let slideIndexMenu = 1;
    showSlidesMenu(slideIndexMenu);

    function plusSlidesMenu(n) {
        showSlidesMenu(slideIndexMenu += n);
    }

    function showSlidesMenu(n) {
        const slidesMenu = document.getElementsByClassName("mySlidesMenu");
        if (n > slidesMenu.length) { slideIndexMenu = 1; }
        if (n < 1) { slideIndexMenu = slidesMenu.length; }
        Array.from(slidesMenu).forEach(slide => slide.style.display = "none");
        slidesMenu[slideIndexMenu - 1].style.display = "block";
    }

    const prevMenu = document.querySelector(".prev-menu");
    const nextMenu = document.querySelector(".next-menu");
    if (prevMenu && nextMenu) {
        prevMenu.addEventListener("click", () => plusSlidesMenu(-1));
        nextMenu.addEventListener("click", () => plusSlidesMenu(1));
    }
})();

// Spice Merchants Main Slideshow
let slideIndexSpiceMain = 1;
showSlidesSpiceMain(slideIndexSpiceMain);

function plusSlidesSpiceMain(n) {
    showSlidesSpiceMain(slideIndexSpiceMain += n);
}

function showSlidesSpiceMain(n) {
    let slides = document.getElementsByClassName("mySlidesSpiceMain");
    if (n > slides.length) { slideIndexSpiceMain = 1 }
    if (n < 1) { slideIndexSpiceMain = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexSpiceMain - 1].style.display = "block";
}

// Spice Merchants Square Slideshow
let slideIndexSpiceSquare = 1;
showSlidesSpiceSquare(slideIndexSpiceSquare);

function plusSlidesSpiceSquare(n) {
    showSlidesSpiceSquare(slideIndexSpiceSquare += n);
}

function showSlidesSpiceSquare(n) {
    let slides = document.getElementsByClassName("mySlidesSpiceSquare");
    if (n > slides.length) { slideIndexSpiceSquare = 1 }
    if (n < 1) { slideIndexSpiceSquare = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexSpiceSquare - 1].style.display = "block";
}

// Fox Hills Main Slideshow
let slideIndexFoxhillMain = 1;
showSlidesFoxhillMain(slideIndexFoxhillMain);

function plusSlidesFoxhillMain(n) {
    showSlidesFoxhillMain(slideIndexFoxhillMain += n);
}

function showSlidesFoxhillMain(n) {
    let slides = document.getElementsByClassName("mySlidesFoxhillMain");
    if (n > slides.length) { slideIndexFoxhillMain = 1 }
    if (n < 1) { slideIndexFoxhillMain = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexFoxhillMain - 1].style.display = "block";
}

// Fox Hills Square Slideshow
let slideIndexFoxhillSquare = 1;
showSlidesFoxhillSquare(slideIndexFoxhillSquare);

function plusSlidesFoxhillSquare(n) {
    showSlidesFoxhillSquare(slideIndexFoxhillSquare += n);
}

function showSlidesFoxhillSquare(n) {
    let slides = document.getElementsByClassName("mySlidesFoxhillSquare");
    if (n > slides.length) { slideIndexFoxhillSquare = 1 }
    if (n < 1) { slideIndexFoxhillSquare = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexFoxhillSquare - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    // Function to initialize galleries
    function setupGallery(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) {
            console.error(`Container not found: ${containerSelector}`);
            return;
        }

        const slides = container.querySelector(".slides");
        const dots = container.querySelectorAll(".dots .dot");
        if (!slides || dots.length === 0) {
            console.error(`Slides or dots missing in container: ${containerSelector}`);
            return;
        }

        const slideCount = dots.length;
        let currentIndex = 0;
        let interval;

        // Function to set active slide
        function setActiveSlide(index) {
            currentIndex = index;
            slides.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });
        }

        // Function to go to the next slide
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slideCount;
            setActiveSlide(currentIndex);
        }

        // Add click event listeners to dots
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                clearInterval(interval);
                setActiveSlide(index);
                startAutoCycle();
            });
        });

        // Start auto cycle
        function startAutoCycle() {
            interval = setInterval(nextSlide, 4000);
        }

        // Initialize the gallery
        setActiveSlide(0);
        startAutoCycle();
    }

    // Initialize both galleries
    setupGallery(".gallery--carousel");
    setupGallery(".house-carousel");
});

// Show section function (only one function needed)
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    const menuItems = document.querySelectorAll('.menu ul li a');
    menuItems.forEach(item => item.classList.remove('active'));
    const activeItem = document.querySelector(`a[href="#${sectionId}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}


function showSection(sectionId) {
// Hide all sections and remove the active class from each
const sections = document.querySelectorAll('.content-section');
sections.forEach(section => {
    section.style.display = 'none';
    section.classList.remove('active'); // Ensure no section has the active class
});

// Immediately remove background from "Projects" section
const projectsSection = document.getElementById('projects-content'); // Replace with your actual Projects section ID
if (projectsSection) {
    projectsSection.classList.remove('active'); // Ensure "Projects" never has the active class
}

// Show the selected section
const selectedSection = document.getElementById(sectionId);
if (selectedSection) {
    selectedSection.style.display = 'block';

    // Apply the active class only if the section is not the "Projects" section
    if (sectionId !== 'projects-content') { // Ensure Projects section does not get active styling
        selectedSection.classList.add('active');
    }
}

// Update the active state for the menu items
const menuItems = document.querySelectorAll('.menu ul li a');
menuItems.forEach(item => item.classList.remove('active'));

// Apply the active class to the clicked menu item
const activeItem = document.querySelector(`a[href="#${sectionId}"]`);
if (activeItem) {
    activeItem.classList.add('active');
}
}
    

document.addEventListener("DOMContentLoaded", function() {
    // Create the lightbox overlay elements
    const lightboxOverlay = document.createElement("div");
    lightboxOverlay.className = "lightbox-overlay";
    
    const lightboxImage = document.createElement("img");
    lightboxOverlay.appendChild(lightboxImage);

    const closeButton = document.createElement("span");
    closeButton.className = "lightbox-close";
    closeButton.innerHTML = "&times;";
    lightboxOverlay.appendChild(closeButton);

    document.body.appendChild(lightboxOverlay);

    // Function to open the lightbox
    document.querySelectorAll(".lightbox-image").forEach(image => {
        image.addEventListener("click", () => {
            lightboxImage.src = image.getAttribute("data-fullsize");
            lightboxOverlay.style.display = "flex";
        });
    });

    // Function to close the lightbox
    closeButton.addEventListener("click", () => {
        lightboxOverlay.style.display = "none";
    });

    // Close the lightbox when clicking outside the image
    lightboxOverlay.addEventListener("click", (e) => {
        if (e.target === lightboxOverlay || e.target === closeButton) {
            lightboxOverlay.style.display = "none";
        }
    });
});




document.querySelectorAll('.more-info-btn').forEach(button => {
    button.addEventListener('click', () => {
        const additionalInfo = button.nextElementSibling;
        if (additionalInfo.classList.contains('hidden')) {
            additionalInfo.classList.remove('hidden');
            button.textContent = 'Show Less';
            button.classList.add('active'); // Add active class for color change
        } else {
            additionalInfo.classList.add('hidden');
            button.textContent = 'More Info';
            button.classList.remove('active'); // Remove active class to revert color
        }
    });
});

// This section handles clicking on skill bars 
document.querySelectorAll('.skill-bar').forEach(skillBar => {
    skillBar.addEventListener('click', () => {
        const skillName = skillBar.previousElementSibling.textContent.trim();
        const experienceEntries = document.querySelectorAll('.experience-entry');

        experienceEntries.forEach(entry => {
            const skills = entry.getAttribute('data-skill').split(', ').map(skill => skill.trim());
            const additionalInfo = entry.querySelector('.additional-info');
            const moreInfoBtn = entry.querySelector('.more-info-btn');

            if (skills.includes(skillName)) {
                additionalInfo.classList.remove('hidden');
                moreInfoBtn.textContent = 'Show Less';
                moreInfoBtn.classList.add('active'); // Add the active class
            } else {
                additionalInfo.classList.add('hidden');
                moreInfoBtn.textContent = 'More Info';
                moreInfoBtn.classList.remove('active'); // Remove the active class
            }
        });
    });
});

// Toggle button for collapsible content
document.getElementById('toggleButton').addEventListener('click', function() {
    const content = document.getElementById('collapsibleContent');
    const button = this;

    if (content.style.display === 'none' || content.style.display === '') {
        // Show the content
        content.style.display = 'block';
        button.textContent = 'Show Less';
        button.classList.add('active'); // Change button color
    } else {
        // Hide the content
        content.style.display = 'none';
        button.textContent = 'Show More';
        button.classList.remove('active'); // Revert button color
    }
});

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        localStorage.setItem('lastSection', targetId); // Store the last section
    });
});

window.onload = function() {
    const lastSection = localStorage.getItem('lastSection');
    if (lastSection) {
        document.querySelector(lastSection).scrollIntoView({ behavior: 'smooth' });
    }
};

function toggleExperienceDropdown(dropdownId, sectionElement) {
    const dropdowns = document.querySelectorAll('.experience .dropdown-content');
    const sections = document.querySelectorAll('.experience .section');
  
    // Identify the currently active dropdown
    const currentDropdown = document.getElementById(dropdownId);
  
    // Check if the clicked dropdown is already open
    const isAlreadyOpen = currentDropdown.classList.contains('show');
  
    // Close all dropdowns and remove active class from all icons
    dropdowns.forEach(dropdown => {
      dropdown.style.maxHeight = null;
      dropdown.classList.remove('show');
    });
    sections.forEach(section => section.classList.remove('active'));
  
    // If the clicked dropdown was not already open, open it and set active state
    if (!isAlreadyOpen) {
      currentDropdown.style.maxHeight = currentDropdown.scrollHeight + "px";
      currentDropdown.classList.add('show');
      sectionElement.classList.add('active');
    }
  }

  // Map slideshow
let slideIndexMap = 1;
showSlidesMap(slideIndexMap);

function plusSlidesMap(n) {
    showSlidesMap(slideIndexMap += n);
}

function showSlidesMap(n) {
    const slidesMap = document.getElementsByClassName("mySlidesMap");
    if (n > slidesMap.length) { slideIndexMap = 1; }
    if (n < 1) { slideIndexMap = slidesMap.length; }
    Array.from(slidesMap).forEach(slide => slide.style.display = "none");
    slidesMap[slideIndexMap - 1].style.display = "block";
}

const prevMap = document.querySelector(".prev-map");
const nextMap = document.querySelector(".next-map");
if (prevMap && nextMap) {
    prevMap.addEventListener("click", () => plusSlidesMap(-1));
    nextMap.addEventListener("click", () => plusSlidesMap(1));
}

// Coffee slideshow
let slideIndexCoffee = 1;
showSlidesCoffee(slideIndexCoffee);

function plusSlidesCoffee(n) {
    showSlidesCoffee(slideIndexCoffee += n);
}

function showSlidesCoffee(n) {
    const slidesCoffee = document.getElementsByClassName("mySlidesCoffee");
    if (n > slidesCoffee.length) { slideIndexCoffee = 1; }
    if (n < 1) { slideIndexCoffee = slidesCoffee.length; }
    Array.from(slidesCoffee).forEach(slide => slide.style.display = "none");
    slidesCoffee[slideIndexCoffee - 1].style.display = "block";
}

const prevCoffee = document.querySelector(".prev-coffee");
const nextCoffee = document.querySelector(".next-coffee");
if (prevCoffee && nextCoffee) {
    prevCoffee.addEventListener("click", () => plusSlidesCoffee(-1));
    nextCoffee.addEventListener("click", () => plusSlidesCoffee(1));
}

// Menu slideshow
let slideIndexMenu = 1;
showSlidesMenu(slideIndexMenu);

function plusSlidesMenu(n) {
    showSlidesMenu(slideIndexMenu += n);
}

function showSlidesMenu(n) {
    const slidesMenu = document.getElementsByClassName("mySlidesMenu");
    if (n > slidesMenu.length) { slideIndexMenu = 1; }
    if (n < 1) { slideIndexMenu = slidesMenu.length; }
    Array.from(slidesMenu).forEach(slide => slide.style.display = "none");
    slidesMenu[slideIndexMenu - 1].style.display = "block";
}

const prevMenu = document.querySelector(".prev-menu");
const nextMenu = document.querySelector(".next-menu");
if (prevMenu && nextMenu) {
    prevMenu.addEventListener("click", () => plusSlidesMenu(-1));
    nextMenu.addEventListener("click", () => plusSlidesMenu(1));
}

// Helper to initialize a slideshow with navigation buttons
function initializeSlideshow(slideClass, prevClass, nextClass, showSlidesFunction) {
    const prev = document.querySelector(prevClass);
    const next = document.querySelector(nextClass);

    if (prev && next) {
        prev.addEventListener("click", () => showSlidesFunction(-1));
        next.addEventListener("click", () => showSlidesFunction(1));
    }
}


document.addEventListener("DOMContentLoaded", function () {
    // Add click event listener to all project-item__link elements
    document.querySelectorAll(".project-item__link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Get the target section ID from the href attribute
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section smoothly
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

