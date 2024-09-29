const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      clickable: true,
    },
  });

const menuData = [
    {
        id:1,
        title:'Женщинам',
        data:[
            {id:10,title:'Платье и сарафаны'},
            {id:22,title:'Блузки и рубашки'}
        ]
    },
    {
        id:2,
        title:'Мужчинам',
        data:[
            {id:33,title:'Обувь'},
            {id:66,title:'Штаны'}
        ]
    }
]

let currentSecondMenuItem = 0
document.querySelector('.menu__close').addEventListener('click',()=>{
    document.querySelector('.menu').classList.add('menu_hidden')
})
document.querySelector('.header__burger').addEventListener('click',()=>{
    document.querySelector('.menu').classList.remove('menu_hidden')
    
})
const mouseOverMenu = (e)=>{
    const id = +e.currentTarget.getAttribute('data-id')
    const secondMenuItemIdx = menuData.findIndex((item)=>+item.id === id)
    const secondMenuItem = menuData[secondMenuItemIdx]
    const menu_secondEl = document.querySelector('.menu__second')
    menu_secondEl.classList.add('activate')
    menu_secondEl.innerHTML = ''
    menu_secondEl.innerHTML += `<h4>${secondMenuItem.title}</h4>`
    secondMenuItem.data.forEach((item)=>{
        menu_secondEl.innerHTML+=`
        <div><span>${item.id}</span>${item.title}</div>
        `
    })
}

const allMenuItemFirst = document.querySelectorAll('.menu__firstItem')
allMenuItemFirst.forEach((element)=>{
    element.addEventListener('mouseover',mouseOverMenu)
})

