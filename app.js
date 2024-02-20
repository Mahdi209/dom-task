//element declare
const spaceContainer = document.getElementById("space-container");
const title = document.createElement("h1");
const planetsContainer = document.createElement("div");
const planetsListTitle = document.createElement("h3");
const planetsList = document.createElement("ul");
const universeImg = document.createElement("img");

//img src
universeImg.src =
  "https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP-1200-80.jpg";

// img attribute
universeImg.setAttribute(
  "style",
  "width: 70% ;height: 600px;background-color: gray;border: 2px solid black"
);
//title text
title.textContent = "The Universe.";
title.style.color = "purple";

//planetsListTitle text
planetsListTitle.textContent = "Our Planets.";

//planetsContainer attribute
planetsContainer.setAttribute(
  "style",
  "width: 68.3% ;height: 200px;background-color: gray;border: 2px solid black; padding-left: 30px;font-size:20px"
);

// append to container
planetsList.innerHTML = "<li> Mars </li> <li> Venus </li> <li> Earth </li>";
spaceContainer.appendChild(title);
spaceContainer.appendChild(universeImg);
spaceContainer.appendChild(planetsContainer);
planetsContainer.appendChild(planetsListTitle);
planetsContainer.appendChild(planetsList);
