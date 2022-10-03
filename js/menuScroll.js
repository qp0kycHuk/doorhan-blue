document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        let heroTop = hero.offsetHeight / 20;
        if(scrollTop >= heroTop){
            nav.classList.add('fixed');
            nav.style.top = `-${nav.offsetHeight}px`;
            hero.style.marginTop = `${nav.offsetHeight}px`;
        }else{
            nav.classList.remove('fixed');
            nav.style.top = "auto";
            hero.style.marginTop = `0px`;
        }
        let heroCenter = hero.offsetHeight;
        if(scrollTop >= heroCenter){
            nav.style.top = "0px"
        }else{
            nav.style.top = `-${nav.offsetHeight}px`;
        }
    });
});