const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 2000);
});

const add = document.getElementById("add");
add.onclick = () => {
  randomUser();
};

randomUser = () => {
  fetch("https://random-data-api.com/api/v2/users")
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      localStorage.setItem(data.id, JSON.stringify(data));
      showUsers(data);
    });
};

const output = document.getElementById("output");

showUsers = (data) => {
  output.innerHTML += `<li><img class="avatar-img" src="${data.avatar}">
  <div class="inner-o">
    <span class="inner-name">${data.first_name} ${data.last_name}</span> <br>
    <span>${data.email}</span>
    <span class="inner-eye"><a href="form.html?${data.id}"><i class="fa-solid fa-eye"></i></a></span>
  </div></li>`;
};
