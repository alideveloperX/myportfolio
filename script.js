let words = ["Web Developer.", "Freelancer.", "Graphic Designer."];
let speed = 100;
let textIndex = 0;
let charIndex = 0;
let eraseText = () => {
  if (type.innerHTML.length > 0) {
    type.innerHTML = type.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % words.length;
    charIndex = 0;
    setTimeout(writer, 500);
  }
};
function writer() {
  if (charIndex < words[textIndex].length) {
    type.innerHTML += words[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(writer, speed);
  } else {
    setTimeout(eraseText, 1500);
  }
}
window.onload = writer;
// DescriptonBOxes
let descBox = document.querySelectorAll(".desc");
let ball = document.querySelectorAll(".ball");
descBox.forEach((e) => {
  e.addEventListener("mouseover", () => {
    if (e.getAttribute("id") === "d1") {
      document.querySelector("#bal1").classList.add("bg");
    } else if (e.getAttribute("id") === "d2") {
      document.querySelector(".bal2").classList.add("bg");
    } else if (e.getAttribute("id") === "d3") {
      document.querySelector(".bal3").classList.add("bg");
    } else if (e.getAttribute("id") === "d4") {
      document.querySelector(".bal4").classList.add("bg");
    } else if (e.getAttribute("id") === "d5") {
      document.querySelector(".bal5").classList.add("bg");
    } else if (e.getAttribute("id") === "d6") {
      document.querySelector(".bal6").classList.add("bg");
    }
  });
});
descBox.forEach((e) => {
  e.addEventListener("mouseout", () => {
    ball.forEach((ba) => {
      ba.classList.remove("bg");
    });
  });
});

let mode = "dark";
let themebtn = document.querySelector(".theme");
let fa = document.querySelector(".fa-sun");
let faa = document.querySelector(".fa-moon");
let settingbtn = document.querySelector(".dll");
let dropdown = document.querySelector(".dropdown");
// console.log(faa);
// fa.style.display ='none';
faa.style.display = "none";
let drip = 1;
settingbtn.addEventListener("click", () => {
  if (drip === 1) {
    dropdown.classList.add("drop");
    drip = 2;
  } else {
    dropdown.classList.remove("drop");
    // console.log(2)
    drip = 1;
  }
});

fa.style.display = "none";
faa.style.display = "block";
themebtn.addEventListener("click", () => {
  if (document.body.classList.contains("d")) {
    mode = "light";
    document.body.classList.remove("d");
    fa.style.display = "block";
    faa.style.display = "none";
  } else {
    faa.style.display = "block";
    fa.style.display = "none";
    mode = "dark";
    document.body.classList.add("d");
  }
});
