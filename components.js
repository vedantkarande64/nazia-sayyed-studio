<<<<<<< HEAD
async function loadComponents(){
  try{
    const [headerRes,footerRes]=await Promise.all([fetch('header.html'),fetch('footer.html')]);
    document.getElementById('header-placeholder').innerHTML=await headerRes.text();
    document.getElementById('footer-placeholder').innerHTML=await footerRes.text();
    setupNavbar(); setupMobileMenu();
  }catch(e){console.error('Component loading error:',e)}
}
function setupNavbar(){
  const nav=document.getElementById('navbar'); if(!nav)return;
  const onScroll=()=>{ if(window.scrollY>40){nav.classList.add('scrolled');nav.classList.remove('navbar-glass')}else if(document.body.classList.contains('homepage')){nav.classList.remove('scrolled');nav.classList.add('navbar-glass')}else{nav.classList.add('scrolled');nav.classList.remove('navbar-glass')} };
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
  const current=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('#nav-links a').forEach(a=>{const href=a.getAttribute('href')||''; if((current==='portfolio.html'&&href.includes('portfolio'))||(current==='about.html'&&href.includes('about'))||(current==='services.html'&&href.includes('services')))a.classList.add('active')});
}
function setupMobileMenu(){
  const btn=document.getElementById('menu-toggle'),links=document.getElementById('nav-links');if(!btn||!links)return;
  btn.addEventListener('click',()=>{links.classList.toggle('active');const i=btn.querySelector('i');i.classList.toggle('fa-bars');i.classList.toggle('fa-xmark')});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('active')));
}
function openWhatsApp(){const phone='919960578360';const message='Hello Nazia Sayyed Studio, I would like to inquire about interior design services.';window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,'_blank','noopener');}
document.addEventListener('DOMContentLoaded',loadComponents);
=======
async function loadComponents() {
    try {
        const headerRes = await fetch('header.html');
        const headerHtml = await headerRes.text();
        document.getElementById('header-placeholder').innerHTML = headerHtml;

        const footerRes = await fetch('footer.html');
        const footerHtml = await footerRes.text();
        document.getElementById('footer-placeholder').innerHTML = footerHtml;

        setupNavbarLogic();
        setupMobileMenu(); // Initialize mobile hamburger menu toggle

    } catch (error) {
        console.error("Error loading components:", error);
    }
}

function setupMobileMenu() {
    const toggleBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Toggle icon between bars and close (X) icon
            const icon = toggleBtn.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
}

function setupNavbarLogic() {
    const nav = document.getElementById('navbar');
    const isHomepage = document.body.classList.contains('homepage');

    if (isHomepage) {
        nav.classList.add('navbar-glass');

        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
                nav.classList.remove('navbar-glass');
            } else {
                nav.classList.remove('scrolled');
                nav.classList.add('navbar-glass');
            }
        });
    } else {
        nav.classList.add('scrolled');
        nav.style.transition = 'none'; 
    }
}

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

document.addEventListener('DOMContentLoaded', loadComponents);
>>>>>>> ad4204b2c7229ab17af88abeff76f495488cac37
