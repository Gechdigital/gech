// ============================================================================
//  Typed.js Initialization (Hero animated text)
// ============================================================================
if (document.querySelector('#text')) {
  new Typed('#text', {
    strings: ['Developer.', 'Designer.', 'Writer.', 'Editor.'],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1200,
    startDelay: 500,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '|'
  });
}

// ============================================================================
//  Toggle Skills Section
// ============================================================================
const skillBtn = document.querySelector('.skill_btn');
const skillContainer = document.querySelector('.about_bottom');

if (skillBtn && skillContainer) {
  skillBtn.addEventListener('click', () => {
    skillContainer.classList.toggle('show_skills');

    // Optional: Change button text when toggled
    skillBtn.textContent = skillContainer.classList.contains('show_skills')
      ? 'Hide Skills'
      : 'Show My Skills';
  });
}

// ============================================================================
//  Sticky / Transparent Navbar on Scroll
// ============================================================================
const nav = document.querySelector('nav');

if (nav) {
  const handleScroll = () => {
    if (window.scrollY > 100) {
      nav.classList.add('sticky');
      // Optional: add shadow or other style when sticky
      // nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    } else {
      nav.classList.remove('sticky');
      // nav.style.boxShadow = 'none';
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Run once on load in case page is refreshed at bottom
  handleScroll();
}

// ============================================================================
//  Mobile Menu (Hamburger) Toggle + Close on Link Click + Outside Click
// ============================================================================
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {
  // Toggle menu
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing immediately
    menu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', menu.classList.contains('active'));
  });

  // Close when clicking any link inside menu
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
      menu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// ============================================================================
//  Smooth Scroll for Anchor Links (optional but recommended)
// ============================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerOffset = 80; // adjust for fixed nav height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================================================
//  Tab Switching (if you still use tabs somewhere)
// ============================================================================
function openTab(event, tabName) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active-tab');
  });

  // Remove active class from all tab buttons
  document.querySelectorAll('.tab-links').forEach(link => {
    link.classList.remove('active-link');
  });

  // Show selected tab and highlight button
  document.getElementById(tabName)?.classList.add('active-tab');
  event.currentTarget.classList.add('active-link');
}

// ============================================================================
//  Optional: Animate skill bars when they become visible (Intersection Observer)
// ============================================================================
// Uncomment if you want skill bars to animate when scrolled into view

/*
const skillBars = document.querySelectorAll('.percent:after');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // You can set width via JS instead of CSS pseudo-element
      // Or trigger CSS animation class
      entry.target.style.width = entry.target.dataset.width || '80%';
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => observer.observe(bar));
*/

// ============================================================================
//  Ready - DOM Content Loaded (optional wrapper)
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('GechMan Portfolio - Initialized');
});
