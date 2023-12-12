const accept = document.querySelector('.accept');
const reject = document.querySelector('.reject');
const cookieNotice = document.querySelector('.cookieNotice');

accept.addEventListener('click', () => {
  
  cookieNotice.style.display = "none";
  document.cookie = "cookiesAccepted=true";
})
reject.addEventListener('click', () => {
  cookieNotice.style.display = "none";
  document.cookie = "cookiesAccepted=false";
})

function checkCookiesAccepted() {
  const cookiesAccepted = document.cookie.includes("cookiesAccepted");
  if (cookiesAccepted === false) {
    cookieNotice.classList.remove("hidden");
  }
}

checkCookiesAccepted();

const toggleThemeButton = document.getElementById('toggleThemeButton');

toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  let text = toggleThemeButton.textContent;
  if (text = "Dark Mode") {
    text= "Light Mode";
  } else {
    text = "Dark Mode";
  }
});












