const townForm = document.querySelector("#town-form");
const townInput = document.querySelector("#town-input");
const townList = document.querySelector("#town-list");

const API_KEY = "fb3e80700711db9ca977701b2e056bf8";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

let towns = JSON.parse(localStorage.getItem("towns"))

townForm.addEventListener("submit", e => {
  e.preventDefault();

  // Get town input
  const town = townInput.value;

  // Validate input
  if (town === "") {
    return alert("Please enter a valid town.");
  }

  // Fetch weather data
  fetch(`${API_URL}&q=${town}`)
    .then(res => res.json())
    .then(data => {
      const { main, name, weather } = data;
      const { temp, humidity } = main;

      const icon = `https://openweathermap.org/img/wn/${
        weather[0].icon
      }@2x.png`;

      // Add town to list
      addTown(name, temp, humidity, icon);

      // Clear input
      townInput.value = "";
    })
    .catch(err => {
      alert("Error getting weather data. Please try again.");
      console.error(err);
    });
});
// Add town to list
function addTown(name, temp, humidity, icon) {
  // Create list item
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${name}</span>
    <span>${temp}&deg;C</span>
    <span>${humidity}%</span>
    <img class="weather-icon" src="${icon}" alt="Weather icon" />
    <button>&times;</button>
  `;

  // Add delete button event listener
  li.querySelector("button").addEventListener("click", e => {
    e.stopPropagation();
    deleteTown(li);
  });

  // Add town to list
  townList.appendChild(li);

  // Add town to local storage
  towns.push({ name, temp, humidity, icon });
  localStorage.setItem("towns", JSON.stringify(towns));
}
// Delete town from list
function deleteTown(li) {
  // Remove town from list
  townList.removeChild(li);

  // Remove town from local storage
  towns = towns.filter(town => town.name !== li.firstChild.textContent);
  localStorage.setItem("towns", JSON.stringify(towns));
}
//   towns.push({ name, temp, humidity, icon });
// localStorage.setItem("towns", JSON.stringify(towns));
// Get towns from local storage and add to list
if (towns !== null) {
  towns.forEach(town => {
    const { name, temp, humidity, icon } = town;
    addTown(name, temp, humidity, icon);
  });
}