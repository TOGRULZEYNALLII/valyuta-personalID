// const rubl = document.getElementById("rubl");
// const azn = document.getElementById("azn");
// const usd = document.getElementById("usd");
// const euro = document.getElementById("euro");

// function nese(data) {
//   azn.textContent = data.rates.AZN;
//   usd.textContent = data.rates.USD;
//   euro.textContent = data.rates.EUR;
//   rubl.textContent = data.rates.RUB;
// }
const image = document.getElementById("img");
const fullname = document.getElementById("fullname");
const gender = document.getElementById("gender");
const location = document.getElementById("location");
const country = document.getElementById("country");
const email = document.getElementById("email");
const registered = document.getElementById("registered");
const phone = document.getElementById("phone");
const config = {
  URL: "https://randomuser.me/api/",
};

async function userfetch() {
  const response = await fetch(config.URL);
  const data = await response.json();
  //   nese(data);
  // gets(data);
  console.log(data);
}

userfetch();
// function gets(data) {
//   fullname.textContent = `${data.results[0].name.first} ${data.results[0].name.last}`;
// }
