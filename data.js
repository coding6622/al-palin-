// داده‌های اولیه پنل‌ها
const initialPanels = [
  {
    name: "درباره ما",
    description: "جهت ارتباط با ما روی دکمه ورود به پنل کلیک بفرمایید",
    number: 1,
    link: "https://t.me/shayan878"
  },
  {
    name: "آموزش برنامه‌نویسی",
    description: "سایت آموزش برنامه‌نویسی @shayan878",
    number: 2,
    link: "https://shayansheykhi.github.io/-shayan878-ah_6622/"
  },
  {
    name: "DNS",
    description: "سایت تولید DNS @shayan878",
    number: 3,
    link: "https://atlas878.github.io/Gami/"
  },
  {
    name: "فست فودی",
    description: "نمایشی هست @shayan878",
    number: 4,
    link: "https://coding6622.github.io/food/"
  }
];

async function fetchPanels() {
  const response = await fetch("https://raw.githubusercontent.com/coding6622/al-palin-/main/panels.json");
  const panels = await response.json();
  return panels;
}
