$(document).ready(function () {
});
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

         // scroll spy
         $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    emailjs.init("84NwvVx3neKp32Zch");
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm('service_6mpsjyd', 'template_rk9mobm', this)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.error('Submission failed with details:', error); // Logs detailed error object
                alert("Form Submission Failed! Error: " + JSON.stringify(error));
            });
    });
    // <!-- emailjs to mail contact form data -->

    

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Birtday | lili";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Birtday";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["My Love", "My World", "My GirlFriend", "My Vampire", "My Everithing", "My Life"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->
//<!-- Add your JavaScript -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}
function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */


}


// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
  
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/673b15b02480f5b4f59fd0c3/1icvf1du0';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: false
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
let hideTimeout;

// Show pop-up when hovering over "Certification" link or the pop-up itself
function showPopup() {
    clearTimeout(hideTimeout); // Cancel any pending hide action
    document.getElementById("certificationPopup").style.display = "block";
}
// Start timeout to hide pop-up
function startHidePopupTimeout() {
    hideTimeout = setTimeout(hidePopup, 300); // Delay to allow smooth exit
}
// Hide pop-up function
function hidePopup() {
    document.getElementById("certificationPopup").style.display = "none";
}
srtop.reveal('.viewbtn .btn', { delay: 200 });
// Fungsi untuk toggle view pada box-container
document
.getElementById("toggle-view-btn")
.addEventListener("click", function () {
  // Select all hidden `.box-container` elements
  const hiddenContainers = document.querySelectorAll(
    ".box-container.hidden"
  )
  const visibleContainers = document.querySelectorAll(
    ".box-container:not(.hidden)"
  )
  // Check if there are any hidden containers to show
  const isHidden = hiddenContainers.length > 0

  if (isHidden) {
    // Show all hidden containers
    hiddenContainers.forEach((container) => {
      container.classList.remove("hidden")
      container.classList.add("visible")
    })
    console.log("Opened hidden boxes.")
  } else {
    // Hide all visible containers except the first two rows
    visibleContainers.forEach((container, index) => {
      if (index >= 3) {
        container.classList.add("hidden")
        container.classList.remove("visible")
      }
    })
    console.log("Closed extra boxes.")
  }

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".experience-item");
    const moreBtn = document.querySelector(".morebtn");
    const visibleCount = 4;
  
    // Sembunyikan semua item di atas batas
    items.forEach((item, index) => {
      if (index >= visibleCount) {
        item.style.display = "none";
      }
    });
  
    // Tampilkan semua saat tombol diklik
    moreBtn.addEventListener("click", () => {
      items.forEach(item => item.style.display = "block");
      moreBtn.style.display = "none"; // Sembunyikan tombol setelah diklik
    });
  });
  

  // Update button text and icon
  const span = this.querySelector("span")
  const icon = this.querySelector("i")

  span.textContent = isHidden ? "View Less" : "View More"
  icon.classList.toggle("fa-arrow-right", !isHidden)
  icon.classList.toggle("fa-arrow-up", isHidden)
});
