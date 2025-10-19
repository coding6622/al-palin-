// داده‌های اولیه پنل‌ها
const initialPanels = [
    {
        name: "پنل تست",
        description: "shayan878",
        number: 1,
        link: "https://shayansheykhi.github.io/-shayan878-ah_6622/",
    }
    
    {
        name: "DNS",
        description: "تلگرام=shayan878",
        number: 2,
        link:"https://atlas878.github.io/Gami/",
            }

];
// تابع برای مقداردهی اولیه localStorage
function initializeData() {
    if (!localStorage.getItem('panels')) {
        localStorage.setItem('panels', JSON.stringify(initialPanels));
    }
}
