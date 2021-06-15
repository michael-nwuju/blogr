const siteLinkProduct = document.querySelector('.product');
const siteLinkCompany = document.querySelector('.company');
const siteLinkConnect = document.querySelector('.connect');
const siteLinkProductUL = siteLinkProduct.nextElementSibling;
const siteLinkCompanyUL = siteLinkCompany.nextElementSibling;
const siteLinkConnectUL = siteLinkConnect.nextElementSibling;
const mobileSiteLinks = document.querySelectorAll('.mls');
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const hero = document.querySelector('.hero');

document.querySelector('body').classList.add('overflow');
document.querySelector('html').classList.add('overflow');
function menu() {
    siteLinkProduct.addEventListener('mouseenter', ()=>{
        siteLinkProduct.classList.add('toggled');
        siteLinkProductUL.classList.toggle('show');
        siteLinkProductUL.classList.add('fade-in');
        if (siteLinkProductUL.classList.contains('fade-out')) {
            siteLinkProductUL.classList.remove('fade-out');
        }
        if(siteLinkConnectUL.classList.contains('show')){
            siteLinkConnectUL.classList.remove('show');
        }
        if(siteLinkCompanyUL.classList.contains('show')){
            siteLinkCompanyUL.classList.remove('show') 
        }
    })
    siteLinkProduct.addEventListener('mouseleave', ()=>{
        siteLinkProductUL.classList.remove('fade-in');
        siteLinkProductUL.classList.add('fade-out');
        setTimeout(()=>{
            siteLinkProductUL.classList.remove('fade-out');
        })
        siteLinkProduct.classList.remove('toggled');
    });
    siteLinkCompany.addEventListener('mouseenter', ()=>{
        siteLinkCompany.classList.add('toggled');
        siteLinkCompanyUL.classList.toggle('show');
        siteLinkCompanyUL.classList.add('fade-in');
        if (siteLinkCompanyUL.classList.contains('fade-out')) {
            siteLinkCompanyUL.classList.remove('fade-out');
        }
        if(siteLinkConnectUL.classList.contains('show')){
            siteLinkConnectUL.classList.remove('show');
        }
        if(siteLinkProductUL.classList.contains('show')){
            siteLinkProductUL.classList.remove('show');
        }
    })
    siteLinkCompany.addEventListener('mouseleave',()=>{
        siteLinkCompanyUL.classList.remove('fade-in');
        siteLinkCompanyUL.classList.add('fade-out');
        setTimeout(()=>{
            siteLinkCompanyUL.classList.remove('fade-out');
        })
        siteLinkCompany.classList.remove('toggled');
    })
    siteLinkConnect.addEventListener('mouseenter', ()=>{
        siteLinkConnect.classList.add('toggled');
        siteLinkConnectUL.classList.toggle('show');
        siteLinkConnectUL.classList.add('fade-in');
        if (siteLinkConnectUL.classList.contains('fade-out')) {
            siteLinkConnectUL.classList.remove('fade-out');
        }
        if(siteLinkCompanyUL.classList.contains('show')){
            siteLinkCompanyUL.classList.remove('show') 
        }
        if(siteLinkProductUL.classList.contains('show')){
            siteLinkProductUL.classList.remove('show');
        }
    })
    siteLinkConnect.addEventListener('mouseleave',()=>{
        siteLinkConnectUL.classList.remove('fade-in');
        siteLinkConnectUL.classList.add('fade-out');
        setTimeout(()=>{
            siteLinkConnectUL.classList.remove('fade-out');
        })
        siteLinkConnect.classList.remove('toggled');
    })
    hamburger.addEventListener('click', ()=>{
        hamburger.classList.toggle('open');
        navMobile.classList.toggle('show');
        hero.classList.toggle('collapse');
        if (navMobile.classList.contains('fade-in')) {
            navMobile.classList.remove('fade-in')
            navMobile.classList.add('fade-out');
            setTimeout(()=>{
                navMobile.classList.remove('fade-out');
            }, 1000)
        }
        else{
            navMobile.classList.add('fade-in');
        }
    })
}

menu();

function openMenu() {
    mobileSiteLinks.forEach((mobileSiteLink)=>{
        const collapser = mobileSiteLink.nextElementSibling;
        mobileSiteLink.addEventListener('click', ()=>{
            mobileSiteLink.classList.toggle('open');
            if (mobileSiteLink.classList.contains('open')) {
                collapser.style.display = 'block';
                const collapserHeight = collapser.clientHeight;
                setTimeout(()=>{
                    collapser.style.height = collapserHeight + 'px';
                    collapser.style.display = '';
                }, 10)
                collapser.classList =  'collapsing';
                setTimeout(()=>{
                    collapser.classList = 'collapsed';
                    collapser.style.height = '';
                }, 500)  
            }
            else{
                setTimeout(()=>{
                    collapser.style.height = '0';
                    collapser.style.display = '';
                }, 10)
                collapser.style.height = '';
                collapser.classList = 'collapsing'
                setTimeout(()=>{
                    collapser.classList = 'collapse';
                    collapser.style.height = '';
                }, 500)
                collapser.style = ''
            }
        })
    })
}

openMenu();