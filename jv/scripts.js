const items = [
  {
    title: "THRONE AND LIBERTY",
    img: "/img/throne-and-liberty.png",
    category: "free",
    favorite: false,
    description:
      "Explore ever-evolving environments, wage large-scale PvPvE battles, and morph into creatures to fight on land, sea, and air.",
  },
  {
    title: "Monster Hunter Wilds",
    img: "/img/mosterhunter.png",
    category: "action",
    favorite: false,
    description:
      "A story about monsters and humans facing difficulties to coexist in a world of dualities and forces of nature.",
  },
  {
    title: "Golf With Your Friends",
    img: "/img/golfwith.png",
    category: "sport",
    favorite: false,
    description:
      "In Golf With Your Friends you can play fast and exciting mini golf games with up to 12 players at a time.",
  },
  {
    title: "DARK SOULS™ III",
    img: "/img/darksouls.png",
    category: "adventure",
    favorite: false,
    description:
      "Dark Souls continues to push boundaries with the ambitious new chapter in this critically acclaimed, groundbreaking series. Get ready to be plunged into darkness!",
  },
  {
    title: "Warframe",
    img: "/img/warframe.png",
    category: "free",
    favorite: false,
    description:
      "Wake up as an unstoppable warrior and fight alongside your friends in this free online, story-based action game.",
  },
  {
    title: "Warhammer 40,000: Space Marine 2",
    img: "/img/spacemarine.png",
    category: "action",
    favorite: false,
    description:
      "Use the superhuman skills and brutality of the space marines. Use deadly skills and devastating weaponry to annihilate the relentless Tyranid swarms.",
  },
  {
    title: "NBA 2K25",
    img: "/img/nba2k25.png",
    category: "sport",
    favorite: false,
    description: "Define your legacy in My CAREER, MyTEAM, My NBA and The W.",
  },
  {
    title: "Ghost of Tsushima",
    img: "/img/ghostoftsushima.png",
    category: "adventure",
    favorite: false,
    description:
      "Forge your own path through this open-world action adventure and discover its hidden wonders.",
  },
  {
    title: "Team Fortress 2",
    img: "/img/tf2.png",
    category: "free",
    favorite: false,
    description:
      "Nine different classes offer a wide variety of tactical skills and personalities.",
  },
  {
    title: "ELDEN RING",
    img: "/img/elderring.png",
    category: "action",
    favorite: false,
    description:
      "Elden and exalt yourself as lord of the Circle in the Between Lands.",
  },
  {
    title: "EA SPORTS FC™ 24",
    img: "/img/easports.png",
    category: "sport",
    favorite: false,
    description:
      "EA SPORTS FC™ 24 welcomes you to The World's Game: the most faithful football experience yet.",
  },
  {
    title: "Terraria",
    img: "/img/terraria.png",
    category: "adventure",
    favorite: false,
    description:
      "Dig, fight, explore, build! With this action-packed adventure game nothing is impossible. Pack of Four also available!",
  },
  {
    title: "Albion Online",
    img: "/img/albion.png",
    category: "free",
    favorite: false,
    description:
      "Albion Online is a fantasy MMORPG sandbox game that has a player-driven economy, a classless combat system, and intense PvP battles.",
  },
  {
    title: "Sekiro™: Shadows Die Twice",
    img: "/img/sekiro.png",
    category: "action",
    favorite: false,
    description:
      "Chart your own path to revenge in the award-winning adventure from FromSoftware, creators of Bloodborne and the Dark Souls saga.",
  },
  {
    title: "WWE 2K24",
    img: "/img/wwe2k24.png",
    category: "sport",
    favorite: false,
    description:
      "Experience a gripping retelling of WrestleMania's greatest moments in 2K's Showcase of the Immortals in WWE 2K24.",
  },
];

const itemContainer = document.getElementById("itemContainer");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");

function renderItems(filteredItems) {
  itemContainer.innerHTML = "";
  filteredItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item";
    div.onclick = () => openPopup(item);
    div.innerHTML = `
                <span class="star" onclick="toggleFavorite(event, ${index})">${
      item.favorite ? "★" : "☆"
    }</span>
                <img src="${item.img}" alt="${item.title}">
                <h3>${item.title}</h3>
            `;
    itemContainer.appendChild(div);
  });
}

function filterItems(category) {
  const filteredItems =
    category === "all"
      ? items
      : items.filter((item) => item.category === category);
  renderItems(filteredItems);
}

function toggleFavorite(event, index) {
  items[index].favorite = !items[index].favorite;
  renderItems(items);
}

function openPopup(item) {
  popupImage.src = item.img;
  popupTitle.textContent = item.title;
  popupDescription.textContent = item.description;
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}

renderItems(items);
