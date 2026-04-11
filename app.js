const translations = {
    fa: {
        p1Title: "لباس سنتی مدل آرا", p1Desc: "طراحی منحصر به فرد با دوخت دستی", p1Btn: "ثبت سفارش",
        p2Title: "شال محلی طرح بهار", p2Desc: "پارچه نخی اعلا با رنگ ثابت", p2Btn: "ثبت سفارش",
        p3Title: "جلیقه سنتی", p3Desc: "مناسب برای ست کردن با انواع لباس", p3Btn: "ثبت سفارش",
        footerText: "بوتیک زِما - عرضه کننده پوشاک سنتی و مدرن"
    },
    en: {
        p1Title: "Ara Dress", p1Desc: "Handmade traditional design", p1Btn: "Order Now",
        p2Title: "Bahar Scarf", p2Desc: "Premium cotton fabric", p2Btn: "Order Now",
        p3Title: "Traditional Vest", p3Desc: "Perfect for matching outfits", p3Btn: "Order Now",
        footerText: "Zema Boutique - Traditional & Modern Clothing"
    },
    de: {
        p1Title: "Ara Kleid", p1Desc: "Handgefertigtes traditionelles Design", p1Btn: "Jetzt bestellen",
        p2Title: "Bahar Schal", p2Desc: "Hochwertiger Baumwollstoff", p2Btn: "Jetzt bestellen",
        p3Title: "Traditionelle Weste", p3Desc: "Perfekt zum Kombinieren", p3Btn: "Jetzt bestellen",
        footerText: "Zema Boutique - Traditionelle und moderne Kleidung"
    }
};
// تابع تغییر زبان
function changeLang(lang) {
    // ترجمه متن‌های محصولات
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`p${i}-title`).innerText = translations[lang][`p${i}Title`];
        document.getElementById(`p${i}-desc`).innerText = translations[lang][`p${i}Desc`];
        document.getElementById(`p${i}-btn`).innerText = translations[lang][`p${i}Btn`];
    }

    // ترجمه فوتر
    document.getElementById('footer-text').innerText = translations[lang].footerText;

    // تغییر جهت صفحه
    document.body.style.direction = (lang === 'fa') ? 'rtl' : 'ltr';

    // استایل دکمه فعال زبان
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
    // بستن خودکار منوی موبایل بعد از انتخاب زبان
    document.getElementById('lang-menu').classList.remove('show');
}

// تابع ارسال سفارش به تلگرام
function sendOrder(productId) {
    const productTitle = document.getElementById(`${productId}-title`).innerText;
    const message = `سلام! قصد سفارش این محصول را دارم: ${productTitle}`;
    const myID = "Nicolei"; // اینجا حتما آیدی خودت رو چک کن
    
    const tg = window.Telegram.WebApp;
    const url = `https://t.me/${myID}?text=${encodeURIComponent(message)}`;
    
    if (tg && tg.openTelegramLink) {
        tg.openTelegramLink(url);
    } else {
        window.open(url, '_blank');
    }
}

// تابع همبرگر منو برای موبایل
function toggleMenu() {
    const menu = document.getElementById('lang-menu');
    menu.classList.toggle('show');
}

// تنظیمات اولیه تلگرام
if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
}