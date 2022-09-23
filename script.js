const data = JSON.parse(
  localStorage.getItem(window.location.search.substring(1))
);

const username = document.getElementById("username");
const username1 = document.getElementById("username1");
const email = document.getElementById("email");
const phone_number = document.getElementById("phone_number");
const date_of_birth = document.getElementById("date_of_birth");
const city = document.getElementById("city");
const street_address = document.getElementById("street_address");
const zip_code = document.getElementById("zip_code");
const state = document.getElementById("state");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const avatar = document.getElementById("avatar");
const img = document.getElementById("avatar");

showRandomUserData = (data) => {
  first_name.innerHTML = `${data.first_name}  ${data.last_name}`;

  username1.innerHTML = `@${data.username}`;

  username.innerHTML = `${data.username}`;

  email.innerHTML = `${data.email}`;

  phone_number.innerHTML = `${data.phone_number}`;

  date_of_birth.innerHTML = `${data.date_of_birth}`;

  city.innerHTML = `${data.address.city}`;

  street_address.innerHTML = `${data.address.street_address}`;

  zip_code.innerHTML = `${data.address.zip_code}`;

  state.innerHTML = `${data.address.state}`;

  img.src = `${data.avatar}`;
  img.classList.add("avatar");
  avatar.innerHTML = `${data.avatar}>`;
};

showRandomUserData(data);
