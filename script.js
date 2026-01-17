 const storeData = {
    "Grocery": {
        title: "Grocery Items",
        items: [
            { id: 101, name: "Basmati Rice", price: 170, img: "image", desc: "Premium long-grain Basmati rice, aged for aroma and taste. Perfect for Biryani." },
            { id: 102, name: "Sunflower Oil", price: 250, img: "https://via.placeholder.com/400", desc: "Refined sunflower oil, rich in Vitamin E. Ideal for healthy daily cooking." },
            { id: 103, name: "Moong Dal", price: 180, img: "https://via.placeholder.com/400", desc: "High protein, unpolished yellow Moong Dal. Easy to cook and digest." }
            { id: 103, name: "chasew(kaju)", price: 1600, img: "https://via.placeholder.com/400", desc: "High protein, unpolished yellow Moong Dal. Easy to cook and digest." }
            { id: 103, name: "kismis", price: 600, img: "https://via.placeholder.com/400", desc: "High protein, unpolished yellow Moong Dal. Easy to cook and digest." }
            { id: 103, name: "Almomd", price: 1600, img: "https://via.placeholder.com/400", desc: "High protein, unpolished yellow Moong Dal. Easy to cook and digest." }
            { id: 103, name: "sugar", price: 90, img: "https://via.placeholder.com/400", desc: "High protein, unpolished yellow Moong Dal. Easy to cook and digest." }
            { id: 103, name: "salt", price: 25, img: "https://via.placeholder.com/400", desc: "High protein, unpolished yellow Moong Dal. Easy to cook and digest." }
            { id: 103, name: "green peas", price: 130, img: "https://via.placeholder.com/400", desc: "High protein, unpolished yellow Moong Dal. Easy to cook and digest." }
            { id: 103, name: "Beaten rice", price: 80, img: "https://via.placeholder.com/400", desc: "High protein, unpolished yellow Moong Dal. Easy to cook and digest." }
            { id: 103, name: "Chana", price: 130, img: "https://via.placeholder.com/400", desc: "High protein, unpolished yellow Moong Dal. Easy to cook and digest." }
            { id: 103, name: "Dal kalo", price: 180, img: "https://via.placeholder.com/400", desc: "High protein, unpolished yellow Moong Dal. Easy to cook and digest." }
              
        ]
    },
    "Beverages": {
        title: "Beverages",
        items: [
            { id: 201, name: "Masala Tea", price: 200, img: "https://via.placeholder.com/400", desc: "Authentic blend of CTC tea with ginger, cardamom, and cinnamon." },
            { id: 202, name: "Real Juice", price: 125, img: "https://via.placeholder.com/400", desc: "100% pure mixed fruit juice with no added sugar." }
            { id: 203, name: "Coke", price: 220, img: "https://via.placeholder.com/400", desc: "100% pure mixed fruit juice with no added sugar." }
            { id: 204, name: "Sprite", price: 125, img: "https://via.placeholder.com/400", desc: "100% pure mixed fruit juice with no added sugar." }
            { id: 205, name: "Fanta", price: 125, img: "https://via.placeholder.com/400", desc: "100% pure mixed fruit juice with no added sugar." }
            { id: 206, name: "Xtreme", price: 125, img: "https://via.placeholder.com/400", desc: "100% pure mixed fruit juice with no added sugar." }
            { id: 207, name: "Redbull", price: 125, img: "https://via.placeholder.com/400", desc: "100% pure mixed fruit juice with no added sugar." }
            { id: 208, name: "Frooti", price: 125, img: "https://via.placeholder.com/400", desc: "100% pure mixed fruit juice with no added sugar." }
            { id: 209, name: "Litchi  juice ", price: 125, img: "https://via.placeholder.com/400", desc: "100% pure mixed fruit juice with no added sugar." }
            { id: 210, name: "Badam juice", price: 125, img: "https://via.placeholder.com/400", desc: "100% pure mixed fruit juice with no added sugar." }
        ]
    },
    "Household Items": {
        title: "Household Essentials",
        items: [
            { id: 301, name: "Dishwash Liquid", price: 105, img: "https://via.placeholder.com/400", desc: "Tough on grease, lemon-scented dishwashing liquid." }
        ]
    },
    "Packaged Foods": {
        title: "Packaged Foods",
        items: [
            { id: 401, name: "Wai Wai Noodles", price: 20, img: "https://via.placeholder.com/400", desc: "Nepal's most famous instant brown noodles. Ready to eat!" }
        ]
    },
    "Beauty Items": {
        title: "Beauty & Care",
        items: [
            { id: 501, name: "Dove Soap", price: 75, img: "https://via.placeholder.com/400", desc: "Gentle moisturizing cream bar for soft skin." }
        ]
    }
};

let cartCount = 0;

function goHome() {
    document.getElementById('home-view').style.display = 'block';
    document.getElementById('dynamic-view').style.display = 'none';
    window.scrollTo(0,0);
}

function openCategory(cat) {
    const data = storeData[cat];
    if(!data) return;

    document.getElementById('home-view').style.display = 'none';
    const dv = document.getElementById('dynamic-view');
    dv.style.display = 'block';

    let html = `
        <section class="products">
            <h2 style="text-align:center; color:var(--red); margin-bottom:30px;">${data.title}</h2>
            <div class="product-list">
    `;

    data.items.forEach(item => {
        html += `
            <div class="product-card" onclick="openProductDetail('${cat}', ${item.id})">
                <div class="product-img"><img src="${item.img}"></div>
                <h3>${item.name}</h3>
                <p class="price">NRS ${item.price}</p>
                <button class="add-cart">View Details</button>
            </div>
        `;
    });

    html += `</div></section>`;
    dv.innerHTML = html;
    window.scrollTo(0,0);
}

function openProductDetail(cat, id) {
    const item = storeData[cat].items.find(p => p.id === id);
    const dv = document.getElementById('dynamic-view');

    dv.innerHTML = `
        <div class="product-detail-container">
            <button onclick="openCategory('${cat}')" style="margin-bottom:20px; cursor:pointer; padding:5px 15px;">← Back to ${cat}</button>
            <div class="detail-flex">
                <div class="detail-img">
                    <img src="${item.img}" style="max-width:100%; border:1px solid #ddd; border-radius:15px;">
                </div>
                <div class="detail-info">
                    <h1>${item.name}</h1>
                    <p class="detail-desc">${item.desc}</p>
                    <p class="price" style="font-size:32px;">NRS ${item.price}</p>
                    
                    <div class="qty">
                        <button onclick="changeQty(-1)">-</button>
                        <span id="detail-qty-val" style="font-size:20px; font-weight:bold;">1</span>
                        <button onclick="changeQty(1)">+</button>
                    </div>

                    <button class="add-cart" onclick="addToCart()" style="padding:15px; font-size:18px;">Add to Cart</button>

                    <div class="payment-options">
                        <h4>Secure Payment Options:</h4>
                        <p>Esewa | Khalti | Cash on Delivery</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    window.scrollTo(0,0);
}

function changeQty(amt) {
    let span = document.getElementById('detail-qty-val');
    let current = parseInt(span.innerText);
    if(current + amt >= 1) span.innerText = current + amt;
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("Added to cart!");
}

// Search dynamic placeholder
const searchBar = document.getElementById("searchBar");
const hints = ["Rice", "Oil", "Tea", "Soap", "Noodles"];
let hIdx = 0;
setInterval(() => {
    if(searchBar) searchBar.setAttribute("placeholder", `Search ${hints[hIdx]}...`);
    hIdx = (hIdx + 1) % hints.length;
}, 2500);