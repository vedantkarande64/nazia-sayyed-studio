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
