// داده‌های اولیه پنل‌ها
const initialPanels = [
    {
        name: "درباره ما",
        description: "جهت ارتبات با ما روی دکمه ورود ب پنل کلید بفرمایید",
        number: 1,
        link: "https://t.me/shayan878"
    },
    {
        name: "اموزش برنامه نویسی",
        description: "سایت اموزش برنامه نویسی @shayan878",
        number: 2,
        link: "https://shayansheykhi.github.io/-shayan878-ah_6622/"
    },
    {
        name: "dns",
        description: "سای تولید dns@shayan878",
        number: 3,
        link: "https://atlas878.github.io/Gami/"
    }
];

async function fetchPanels() {
  const response = await fetch("https://coding6622.github.io/al-palin-/<username>/<repo>/main/panels.json");
  const panels = await response.json();
  return panels;
}
    }
}
