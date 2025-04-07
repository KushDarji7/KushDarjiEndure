// nav bar for top navigation in mobile to desktop

const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("active");
};

// news ticker

const loadNewsItems = async () => {
const response = await fetch('./news.txt');
const text = await response.text();
return text.split('\n').map(line => line.trim()).filter(line => line !== '').map(line => `"${line}"`);
}

const startNewsTicker = async () => {
    const newsList = await loadNewsItems();
    const newsDiv = document.querySelector('.news-item');
    let index = 0;
    
    const displayNextNews = () => {
        newsDiv.textContent = newsList[index];
        index = (index + 1) % newsList.length;
        newsDiv.style.animation = 'none';
        setTimeout(() => {
            newsDiv.style.animation = 'ticker 20s linear infinite';
        }, 20);
    }
    displayNextNews();
    setInterval(displayNextNews, 20000);
}
document.addEventListener('DOMContentLoaded', startNewsTicker);