let header = document.querySelector('header')

header.innerHTML = `
    <div class="header__top">
        <div class="header-line-top"></div>
        
            <div class="header__top_left">
                <img src="./images/Logo.svg" alt="">
                <a href="./goods.html">
                    <p class="header-nav">  Доска объявлений (товары)</p>
                </a>
                 
                <a href="./pagination.html">
                    <p class="header-nav">Step5</p>
                </a>
                                
                <a href="./pagi7.html">
                    <p class="header-nav">Step7</p>
                </a>
                <a href="./pagi15.html">
                    <p class="header-nav">Step15</p>
                </a>
                
                <p class="header-nav">Интернет-магазин Dily.ru</p>
                <p class="header-nav">Скупка</p>
            </div>
            <div class="header__top_right">
                <div class="header-r-nav">
                    <img src="./images/icons/location.svg" alt="">
                    <select class="select" name="" id="">
                        <option value="">Москва</option>
                        <option value="">Москва</option>
                        <option value="">Москва</option>
                        <option value="">Москва</option>
                    </select>
                </div>
                <div class="header-r-nav">
                    <img src="./images/icons/person.svg" alt="">
                    <p class="header-r-reg">
                        <p class="shit">Вход </p> / <p> регистрация</p>
                    </p>
                </div>
            </div>
        </div>
    
    <div class="bottom item">
        <div class="b-main">
            <div class="m-left">
                <div class="key">
                    <img src="./images/icons/menu-product.svg" class="menu">
                    <span class="active">Каталог товаров</span>
                </div>
                <div class="key">
                    <img src="./images/icons/dostavka.svg" alt="">
                    <span>Доставка и оплата</span>
                </div>
            </div>
            <div class="m-right">
                <div class="search">
                    <img src="./images/icons/search.svg">
                    <input class="searh-request" type="search" placeholder="Я хочу купить">
                    <button>Найти</button>
                </div>
                <div class="other">
                    <div class="key">
                        <p><a href="#">Поддержка</a></p>
                    </div>
                    <div class="key">
                        <img src="./images/icons/btn list.svg" alt=""><img>
                    </div>
                    <div class="key">
                        <img src="./images/icons/btn-like.svg" alt="">
                        <div class="counter_favorite">

                        </div>
                    </div>
                    <div class="key">
                        <img src="./images/icons/icon cart.svg" alt="">
                        <div class="counter_card">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`


 