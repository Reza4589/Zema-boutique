const translations = {
    fa: {
        p1Title: "لباس سنتی مدل آرا", p1Desc: "طراحی منحصر به فرد با دوخت دستی", p1Price: "۱,۲۰۰,۰۰۰ تومان", p1Btn: "ثبت سفارش",
        p2Title: "شال محلی طرح بهار", p2Desc: "پارچه نخی اعلا با رنگ ثابت", p2Price: "۴۵۰,۰۰۰ تومان", p2Btn: "ثبت سفارش",
        p3Title: "جلیقه سنتی", p3Desc: "مناسب برای ست کردن با انواع لباس", p3Price: "۸۹۰,۰۰۰ تومان", p3Btn: "ثبت سفارش",
        footerText: "بوتیک زِما - عرضه کننده پوشاک سنتی و مدرن"
    },
    en: {
        p1Title: "Ara Traditional Dress", p1Desc: "Unique design with handmade stitching", p1Price: "€ 45.00", p1Btn: "Order Now",
        p2Title: "Bahar Local Scarf", p2Desc: "Premium cotton with fixed colors", p2Price: "€ 15.00", p2Btn: "Order Now",
        p3Title: "Traditional Vest", p3Desc: "Perfect for matching with various outfits", p3Price: "€ 30.00", p3Btn: "Order Now",
        footerText: "Zema Boutique - Traditional & Modern Clothing"
    },  
    de: {
        p1Title: "Kleid Ara", p1Desc: "Einzigartiges Design mit Handnaht", p1Price: "€ 45,00", p1Btn: "Bestellen",
        p2Title: "Schal Bahar", p2Desc: "Hochwertige Baumwolle", p2Price: "€ 15,00", p2Btn: "Bestellen",
        p3Title: "Traditionelle Weste", p3Desc: "Ideal zum Kombinieren", p3Price: "€ 30,00", p3Btn: "Bestellen",
        footerText: "Zema Boutique - Traditionelle und moderne Kleidung"
    }
};

function changeLang(lang) {
    // محصول ۱
    document.getElementById('p1-title').innerText = translations[lang].p1Title;
    document.getElementById('p1-desc').innerText = translations[lang].p1Desc;
    document.getElementById('p1-price').innerText = translations[lang].p1Price;
    document.getElementById('p1-btn').innerText = translations[lang].p1Btn;

    // محصول ۲
    document.getElementById('p2-title').innerText = translations[lang].p2Title;
    document.getElementById('p2-desc').innerText = translations[lang].p2Desc;
    document.getElementById('p2-price').innerText = translations[lang].p2Price;
    document.getElementById('p2-btn').innerText = translations[lang].p2Btn;

    // محصول ۳
    document.getElementById('p3-title').innerText = translations[lang].p3Title;
    document.getElementById('p3-desc').innerText = translations[lang].p3Desc;
    document.getElementById('p3-price').innerText = translations[lang].p3Price;
    document.getElementById('p3-btn').innerText = translations[lang].p3Btn;

    // مدیریت ظاهر دکمه‌ها
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        }
        
    });
    document.getElementById('footer-text').innerText = translations[lang].footerText;

    // تنظیم جهت صفحه (RTL برای فارسی، LTR برای بقیه)
    document.body.style.direction = (lang === 'fa') ? 'rtl' : 'ltr';
}