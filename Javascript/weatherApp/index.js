const townForm = document.querySelector("#town-form");
const townInput = document.querySelector("#town-input");
const townList = document.querySelector("#town-list");

const API_KEY = "3edbcf6293a9ff2c367754b19c19dfad";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

let towns = new Array();
towns = JSON.parse(localStorage.getItem("towns"))

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
  // Add town to local storage
  let townTemp = [ name, temp, humidity, icon ];
  if(towns == null){
    towns = new Array();
  }
  towns.push(townTemp);
  localStorage.setItem("towns", JSON.stringify(towns));
  towns = JSON.parse(localStorage.getItem("towns"))

  Show();
}



// Delete town from list
function deleteTown(name) {

  // Remove town from local storage
  towns = towns.filter(town => town[0] !== name);
  localStorage.setItem("towns", JSON.stringify(towns));

  Show();
}

document.querySelector('.towns').addEventListener('click', Show)

function Show(){
  townList.innerHTML = '';

  towns.forEach(town => {
    // Create list item
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${town[0]}</span>
      <span>${town[1]}&deg;C</span>
      <span>${town[2]}%</span>
      <img class="weather-icon" src="${town[3]}" alt="Weather icon" />
      <button>&times;</button>
    `;

    // Add delete button event listener
    li.querySelector("button").addEventListener("click", e => {
      e.stopPropagation();
      deleteTown(town[0]);
    });

    // Add town to list
    townList.appendChild(li);
  })
}