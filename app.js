// ۱. لغت‌نامه ترجمه‌ها
const translations = {
    fa: {
        p1Title: "لباس سنتی مدل آرا",
        p1Desc: "طراحی منحصر به فرد با دوخت دستی",
        p1Btn: "ثبت سفارش (تلگرام)"
    },
    en: {
        p1Title: "Ara Traditional Dress",
        p1Desc: "Unique design with handmade stitching",
        p1Btn: "Order on Telegram"
    },
    de: {
        p1Title: "Traditionelles Kleid Ara",
        p1Desc: "Einzigartiges Design mit Handناht",
        p1Btn: "Auf Telegram bestellen"
    }
};

// ۲. تابع اصلی برای تغییر زبان
function changeLang(lang) {
    // تغییر متن عنوان محصول اول
    document.getElementById('p1-title').innerText = translations[lang].p1Title;
    // تغییر متن توضیحات محصول اول
    document.getElementById('p1-desc').innerText = translations[lang].p1Desc;
    // تغییر متن دکمه محصول اول
    document.getElementById('p1-btn').innerText = translations[lang].p1Btn;

    // تنظیم جهت صفحه (راست به چپ برای فارسی، چپ به راست برای بقیه)
    if (lang === 'fa') {
        document.body.style.direction = 'rtl';
    } else {
        document.body.style.direction = 'ltr';
    }
}