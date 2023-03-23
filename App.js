const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const likeBtn = document.getElementById("like-btn");
const postPlace = document.getElementById("post-place");

let postEl = "";
let likes = [];
let hasLiked = [];
for (let i = 0; i < posts.length; i++) {
  postEl += `<div class="post-wrapper">
  <div class="person">
          <img src=${posts[i].avatar} class="avatar-img" />
          <div class="person-info">
            <h4>${posts[i].name}</h4>
            ${posts[i].location}
          </div>
          <img src="images/threedots.png" alt="" class="threedots" />
        </div>
        <img src=${posts[i].post} class="post-img" />
        <div class="icons-container">
          <img src="images/icon-heart.png" alt="like" class="icon heart"  />
          <img src="images/icon-comment.png" alt="like" class="icon" />
          <img src="images/icon-dm.png" alt="like" class="icon" />
        </div>
        <div class="likes-container"><span class="likes-number">${posts[i].likes}</span> likes</div>
        <div class="likes-container">
          <span class="likes-username">${posts[i].username}</span> ${posts[i].comment}
        </div>
        </div>`;

  postPlace.innerHTML = postEl;
  likes.push(posts[i].likes);
  hasLiked.push(false);
}

const heartEls = document.querySelectorAll(".heart");
const postImages = document.querySelectorAll(".post-img");
const likesNumber = document.querySelectorAll(".likes-number");

for (let i = 0; i < heartEls.length; i++) {
  heartEls[i].addEventListener("click", () => {
    changeLikes(i);
  });
  postImages[i].addEventListener("dblclick", () => {
    changeLikes(i);
  });
}

function changeLikes(num) {
  if (hasLiked[num]) {
    likes[num]--;
    likesNumber[num].textContent = likes[num];
    heartEls[num].src =
      "https://raw.githubusercontent.com/MemoBaca/oldagram/main/images/icon-heart.png";
    hasLiked[num] = !hasLiked[num];
  } else {
    likes[num]++;
    likesNumber[num].textContent = likes[num];
    heartEls[num].src =
      "https://raw.githubusercontent.com/MemoBaca/oldagram/main/images/icon-heart2.png";
    hasLiked[num] = !hasLiked[num];
  }
}
