// let prev = document.querySelector('.prev')
// let next = document.querySelector('.next')
// let blocks = document.querySelectorAll('.blocks .image')
// let slider = document.querySelector('.blocks')
// let circle = document.querySelectorAll('.cirsle')
// let index = 0
// next.onclick = () => {
//     blocks[index].classList.remove('active')
//     circle[index].classList.remove('active')
//     if (index == blocks.length - 1 || index == circle.length - 1) {
//         index = 0
//     } else {
//         index++
//     }
//     blocks[index].classList.add('active')
//     circle[index].classList.add('active')
// }

// prev.onclick = () => {
//     blocks[index].classList.remove('active')
//     circle[index].classList.remove('active')
//     if (index < 1) {
//         index = blocks.length - 1 && circle.length - 1
//     } else {
//         index--
//     }
//     blocks[index].classList.add('active')
//     circle[index].classList.add('active')
// }



// const activeSlide = () => {
//     for (let image of blocks) {
//         image.classList.remove('active')
//     }

//     for (let dot of circle) {
//         dot.classList.remove('active')
//     }
// }

// circle.forEach((item, indexDots) => {
//     item.onclick = () => {
//         activeSlide()

//         index = indexDots
//         blocks[index].classList.add('active')
//         circle[index].classList.add('active')
//     }
// })

import {
    products
} from "./data.js"

let container = document.querySelector('.container')

const RENDER_PRODUCTS = (arr, id, limit) => {
    //Serach render place
    let place = document.querySelector(`#${id}`)
    //render elements inside render place
    let tempArr = arr.filter(() => true);
    tempArr = tempArr.splice(0, limit)

    let buttonShow = document.createElement('button')
    let buttonHide = document.createElement('button')
    buttonShow.innerHTML = 'Show all'
    buttonHide.innerHTML = 'Hide all'
    buttonShow.classList.add('btn-show')
    buttonHide.classList.add('btn-show')
    buttonHide.classList.add('btn-hide')
    // buttonHide.style.display = "none"
    buttonShow.onclick = () => {
        // whichBtn(place, buttonShow)
        RENDER_PRODUCTS(arr, id, arr.length)

        // buttonHide.style.display = "block"
        buttonHide.classList.add('btn-hide')
        place.append(buttonHide)

    }
    buttonHide.onclick = () => {
        buttonHide.style.display = 'none'
        RENDER_PRODUCTS(arr, id, 5)
    }
    place.innerHTML = ''
    place.append(buttonShow)
    for (let item of tempArr) {
        let product = document.createElement('div')
        let likeImg = document.createElement('img')
        let productType = document.createElement('img')
        let categ = document.createElement('p')
        let productName = document.createElement('p')
        let btns = document.createElement('div')
        let grey = document.createElement('button')
        let light = document.createElement('button')
        let dark = document.createElement('button')
        let gold = document.createElement('button')
        let productDesc = document.createElement('div')
        let productPrice = document.createElement('p')
        let likeComm = document.createElement('div')
        let likes = document.createElement('p')
        let spanLike = document.createElement('span')
        let starImg = document.createElement('img')
        let comments = document.createElement('p')
        let commentImg = document.createElement('img')
        let spanComment = document.createElement('span')
        let btnBuy = document.createElement('button')
        let basketImg = document.createElement('img')
        product.classList.add('product')
        likeImg.setAttribute('src', "./images/icons/green-like.png")
        likeImg.classList.add('like_green')
        productType.setAttribute('src', item.images[0])
        productType.classList.add('product_img')
        categ.classList.add('categories')
        categ.innerText = item.category
        productName.classList.add('product_name')
        productName.innerText = item.name
        btns.classList.add('btns')
        grey.classList.add('grey')
        light.classList.add('light')
        dark.classList.add('dark')
        gold.classList.add('gold')
        productDesc.classList.add('product_desc')
        productPrice.classList.add('product_prise')
        productPrice.innerText = `${item.price}$`
        likeComm.classList.add('like_comm')
        likes.classList.add('likes')
        spanLike.classList.add('like')
        spanLike.innerText = '4'
        starImg.setAttribute('src', './images/icons/btn-star.svg')
        comments.classList.add('comments')
        commentImg.setAttribute('src', "./images/icons/btn-commend.svg")
        spanComment.classList.add('comment')
        spanComment.innerText = '25'
        btnBuy.classList.add('buy')
        btnBuy.innerText = 'Купить'
        basketImg.setAttribute('src', "./images/icons/iconcart.svg")
        basketImg.classList.add('bascet')

        place.append(product)
        product.append(likeImg, productType, categ, productName, btns, productDesc, btnBuy)
        btns.append(grey, light, dark, gold)
        productDesc.append(productPrice, likeComm)
        likeComm.append(likes, comments)
        likes.append(spanLike, starImg)
        comments.append(commentImg, spanComment)
        btnBuy.append(basketImg)
    }
}

let only_tv = []
let only_acc = []
let only_nout = []
let only_phones = []

for (let item of products) {
    item.category == 1 ? only_tv.push(item) : console.log();
    item.category == 2 ? only_phones.push(item) : console.log();
    item.category == 3 ? only_acc.push(item) : console.log();
    item.category == 4 ? only_nout.push(item) : console.log();
}

let sorted = products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
let highest = products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

if (document.body.getAttribute('id') == 'home') {
    RENDER_PRODUCTS(sorted.reverse(), 'cheapest', 5)
    RENDER_PRODUCTS(sorted.reverse(), 'highest', 5)
    RENDER_PRODUCTS(only_phones, 'phones', 5)
    RENDER_PRODUCTS(only_acc, 'access', 5)
}

if (document.body.getAttribute('id') == 'goods') {
    RENDER_PRODUCTS(only_phones, 'phones', 5)
    RENDER_PRODUCTS(only_acc, 'access', 5)
    RENDER_PRODUCTS(only_nout, 'noutes', 5)
    RENDER_PRODUCTS(only_tv, 'tv', 5)
    console.log(only_acc);
    
    container.classList.add('goods-cont')
}

// if (document.body.getAttribute('id') == 'pagination') {
//     RENDER_PRODUCTS(products, 'all', products.length)
// }



 