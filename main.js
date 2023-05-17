

let search = document.querySelector('.item-search');
let form = document.querySelector('form');
let nav_link = document.getElementsByClassName('nav-link')

search.onclick = () => {
    search.classList.toggle('active');
    form.classList.toggle('show');
    for (let i of nav_link) {
        i.classList.toggle('expand');
    }
}

// adicionar ao carrinho

let add_cart = document.querySelector('.add-cart');
let bag = document.querySelector('.shopping-bag');

add_cart.onclick = () => {
    const n = Number(bag.getAttribute('data-count') || 0);
    bag.setAttribute('data-count', n + 1);
    bag.classList.add('item-in-box');
    if (n >= 1) {
        confirm("This iPhone is already in your cart!");
        bag.setAttribute('data-count', 1);
    }
}

// mudança de fundo dos modelos

let section = document.querySelector('section');
let single_color = document.querySelector('.color').children;
let image = document.querySelector('img');

for (let i = 0; i < single_color.length; i++) {
    single_color[i].onclick = e => {
        let n = 0;
        while (n < single_color.length) {
            single_color[n++].className = '';
        }
        e.target.className = 'active';
        section.className = '';
        image.src - '';

        if (e.target == single_color[0]) {
            section.classList.add('Graphite')
            image.src = 'images/apple-brown.png';
        }

        if (e.target == single_color[1]) {
            section.classList.add('Silver')
            image.src = 'images/apple-white.png';
        }

        if (e.target == single_color[2]) {
            section.classList.add('Pacific-Blue')
            image.src = 'images/apple-blue.png';
        }

        if (e.target == single_color[3]) {
            section.classList.add('Gold')
            image.src = 'images/apple-gold.png';
        }

    }
}