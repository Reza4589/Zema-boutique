// ۱. دیتابیس محصولات و ترجمه‌ها
const translations = {
    fa: {
        p1: { title: "لباس سنتی آرا", desc: "دوخت دستی", btn: "سفارش" },
        p2: { title: "شال بهار", desc: "نخی اعلا", btn: "سفارش" },
        p3: { title: "جلیقه سنتی", desc: "طرح دار", btn: "سفارش" },
        p4: { title: "دامن پلیسه", desc: "مجلسی", btn: "سفارش" },
        p5: { title: "شومیز حریر", desc: "دوخت سفارشی", btn: "سفارش" },
        p6: { title: "سارافون کتان", desc: "مناسب فصل", btn: "سفارش" },
        p7: { title: "روسری ابریشم", desc: "طرح اسلیمی", btn: "سفارش" },
        p8: { title: "مانتو خنک", desc: "مدل تابستانه", btn: "سفارش" },
        footerText: "بوتیک زِما - ۱۴۰۵"
    },
    en: {
        p1: { title: "Ara Dress", desc: "Handmade", btn: "Order" },
        p2: { title: "Bahar Scarf", desc: "Premium Cotton", btn: "Order" },
        p3: { title: "Classic Vest", desc: "Patterned", btn: "Order" },
        p4: { title: "Pleated Skirt", desc: "Formal", btn: "Order" },
        p5: { title: "Silk Blouse", desc: "Custom Sewn", btn: "Order" },
        p6: { title: "Cotton Sarafon", desc: "Seasonal", btn: "Order" },
        p7: { title: "Silk Scarf", desc: "Islamic Pattern", btn: "Order" },
        p8: { title: "Summer Manto", desc: "Cool Style", btn: "Order" },
        footerText: "Zema Boutique - 2026"
    },
    de: {
        p1: { title: "Ara Kleid", desc: "Handgefertigt", btn: "Bestellen" },
        p2: { title: "Bahar Schal", desc: "Baumwolle", btn: "Bestellen" },
        p3: { title: "Traditionelle Weste", desc: "Gemustert", btn: "Bestellen" },
        p4: { title: "Faltenrock", desc: "Formal", btn: "Bestellen" },
        p5: { title: "Seidenbluse", desc: "Maßgeschneidert", btn: "Bestellen" },
        p6: { title: "Baumwoll-Sarafon", desc: "Saisonal", btn: "Bestellen" },
        p7: { title: "Seidenschal", desc: "Islamisches Muster", btn: "Bestellen" },
        p8: { title: "Sommermantel", desc: "Cooler Stil", btn: "Bestellen" },
        footerText: "Zema Boutique - 2026"
    }
};

let currentLang = 'fa';

// ۲. تابع جادویی برای ساختن کارت‌های محصول در صفحه
function renderProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = ''; // خالی کردن ظرف برای چیدمان جدید

    for (let i = 1; i <= 8; i++) {
        const product = translations[currentLang][`p${i}`];
        // این خط دقیقا با اسم عکس‌های تو (fotos01, fotos02, ...) هماهنگ است
        const photoNumber = i < 10 ? `0${i}` : i;

        const card = `
            <div class="product-card">
                <img src="fotos${photoNumber}.jpg" alt="Product ${i}" class="product-img">
                <div class="product-info">
                    <h3 id="p${i}-title">${product.title}</h3>
                    <p id="p${i}-desc">${product.desc}</p>
                    <button class="order-btn" id="p${i}-btn" onclick="sendOrder('p${i}')">
                        ${product.btn}
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += card;
    }
}

function changeLang(lang) {
    currentLang = lang;
    renderProducts();

    // جابه‌جایی کلاس active بین دکمه‌ها
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        // اگر متن دکمه با زبانی که انتخاب کردیم یکی بود، فعالش کن
        if (btn.innerText.toLowerCase() === lang.toLowerCase()) {
            btn.classList.add('active');
        }
    });

    document.getElementById('footer-text').innerText = translations[lang].footerText;
    document.documentElement.dir = (lang === 'fa') ? 'rtl' : 'ltr';

    const menu = document.getElementById('lang-menu');
    if (menu) menu.classList.remove('show');
}

// ۴. تابع ارسال سفارش به تلگرام
function sendOrder(productId) {
    const productTitle = document.getElementById(`${productId}-title`).innerText;
    const message = `سلام! قصد سفارش این محصول را دارم: ${productTitle}`;
    const myID = "reza_username"; // آی‌دی تلگرامت را اینجا چک کن

    const tg = window.Telegram?.WebApp;
    const url = `https://t.me/${myID}?text=${encodeURIComponent(message)}`;

    if (tg?.openTelegramLink) {
        tg.openTelegramLink(url);
    } else {
        window.open(url, '_blank');
    }
}

// ۵. تابع منوی همبرگری
function toggleMenu() {
    const menu = document.getElementById('lang-menu');
    if (menu) menu.classList.toggle('show');
}

// ۶. اجرای اولیه به محض لود شدن سایت
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
    }
});