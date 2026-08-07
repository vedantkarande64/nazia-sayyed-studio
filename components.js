// Function to load Header and Footer
async function loadComponents() {
    try {
        // Fetch and inject the Header
        const headerRes = await fetch('header.html');
        const headerHtml = await headerRes.text();
        document.getElementById('header-placeholder').innerHTML = headerHtml;

        // Fetch and inject the Footer
        const footerRes = await fetch('footer.html');
        const footerHtml = await footerRes.text();
        document.getElementById('footer-placeholder').innerHTML = footerHtml;

        // Run the navbar logic after the header is injected
        setupNavbarLogic();

    } catch (error) {
        console.error("Error loading components:", error);
    }
}

// Function to handle the transparent vs solid navbar
function setupNavbarLogic() {
    const nav = document.getElementById('navbar');
    // Checks if the current page has the "homepage" class on the body tag
    const isHomepage = document.body.classList.contains('homepage');

    if (isHomepage) {
        // Apply glassmorphism initially on the homepage
        nav.classList.add('navbar-glass');

        // HOMEPAGE LOGIC: Glass at top, solid on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
                nav.classList.remove('navbar-glass'); // Remove glass effect
            } else {
                nav.classList.remove('scrolled');
                nav.classList.add('navbar-glass'); // Bring back glass effect
            }
        });
    } else {
        // OTHER PAGES LOGIC: Immediately solid, disable the transition delay
        nav.classList.add('scrolled');
        nav.style.transition = 'none'; 
    }
}

// Smart WhatsApp Link (Web for Desktop, App for Mobile)
function openWhatsApp() {
    const phone = "919960578360";
    const message = "Hello Nazia Sayyed Studio, I would like to inquire about interior design services.";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    } else {
        window.open(`https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`, '_blank');
    }
}

// Start the loading process when the page loads
document.addEventListener('DOMContentLoaded', loadComponents);