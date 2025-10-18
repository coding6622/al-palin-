// داده‌های اولیه پنل‌ها
const initialPanels = [
    {
        name: "پنل مدیریت کاربران",
        description: "مدیریت کامل کاربران و دسترسی‌های آن‌ها",
        number: 1,
        link: "https://example.com/user-panel"
    },
    {
        name: "پنل گزارش‌گیری",
        description: "گزارش‌های تحلیلی و آماری از عملکرد سیستم",
        number: 2,
        link: ""
    },
    {
        name: "پنل تنظیمات",
        description: "تنظیمات کلی و شخصی‌سازی سیستم",
        number: 3,
        link: "https://example.com/settings"
    }
];

// تابع برای مقداردهی اولیه localStorage
function initializeData() {
    if (!localStorage.getItem('panels')) {
        localStorage.setItem('panels', JSON.stringify(initialPanels));
    }
}