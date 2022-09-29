const profileBtn = document.querySelector(".head_icon");
const profileContent = document.querySelector(".head_profile");

profileBtn.addEventListener('click', () => {
  profileContent .classList.toggle("profile_desp")
});

const heartBtn = document.querySelector(".mark_icons_fav");
const heart = document.querySelector('.heart_icon');

heartBtn.addEventListener('click', () => {
  heart.classList.toggle("red_heart")
});

