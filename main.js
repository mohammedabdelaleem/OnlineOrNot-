const title = document.querySelector(".title");
const offilineUl = document.querySelector(".offline-ul");
const reload = document.querySelector(".reload");

const onOline = () => {
  title.innerText = "Online Now";
  title.style.color = "green";
  offilineUl.classList.add("hide");
  reload.classList.add("hide");
};

const onOffline = () => {
  title.innerText = "Offline Now";
  title.style.color = "#000";
  offilineUl.classList.remove("hide");
  reload.classList.remove("hide");
};

window.addEventListener("load", (eo) => {
  if (window.navigator.onLine) {
    onOline();
  } else {
    onOffline();
  }
});

window.addEventListener("online", (eo) => {
  onOline();
});

window.addEventListener("offline", (eo) => {
  onOffline();
});

reload.addEventListener("click", (eo) => {
  window.location.reload();
});
