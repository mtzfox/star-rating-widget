import "./styles.css";
document.getElementById("app").innerHTML = `

<div class="container">
<div class="heading">Rate Your Purchase</div>
<div class="post">
  <div class="text">Thanks for rating us!</div>
  <div class="clear">Clear</div>
</div>
<div class="star-widget">
  <input type="radio" name="rate" id="rate-5">
  <label for="rate-5" class="fas fa-star"></label>
  <input type="radio" name="rate" id="rate-4">
  <label for="rate-4" class="fas fa-star"></label>
  <input type="radio" name="rate" id="rate-3">
  <label for="rate-3" class="fas fa-star"></label>
  <input type="radio" name="rate" id="rate-2">
  <label for="rate-2" class="fas fa-star"></label>
  <input type="radio" name="rate" id="rate-1">
  <label for="rate-1" class="fas fa-star"></label>
  <form action="#">
    <header></header>
    <div class="textarea">
      <textarea cols="30" placeholder="Describe your experience.."></textarea>
    </div>
    <div class="btn">
      <button type="submit">Post</button>
    </div>
  </form>
</div>
</div>

`;

const heading = document.querySelector(".heading");
const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const clearBtn = document.querySelector(".clear");

btn.onclick = () => {
  heading.style.display = "none";
  widget.style.display = "none";
  post.style.display = "block";
  clearBtn.onclick = () => {
    heading.style.display = "block";
    widget.style.display = "block";
    post.style.display = "none";
  };
  return false;
};
