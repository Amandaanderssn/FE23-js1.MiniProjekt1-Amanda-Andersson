//De fem raderna
const h1Rubriker = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];

console.log(h1Rubriker);

for (let i = 0; i < h1Rubriker.length; i++) {
  const h1Element = document.createElement("h1");
  document.body.appendChild(h1Element);
  h1Element.innerText = h1Rubriker[i];
  console.log(h1Rubriker[i]);
  h1Element.style.textAlign = "center";

  const hue = 147 + i * 10;
  h1Element.style.backgroundColor = `hsl(${hue}, 60%, 80%)`;
  h1Element.style.innerText = hue;
  h1Element.style.fontSize = 10 + 10 * i + "px";
}

//En container för de tre olika listorna
const divContainer = document.createElement("div");
divContainer.style.width = "100%";
document.body.appendChild(divContainer);
divContainer.style.border = "solid black";
divContainer.style.borderWidth = "1px";
divContainer.style.display = "flex";
divContainer.style.justifyContent = "space-evenly";

//Box till listorna som ska ligga i den övre diven
for (let i = 0; i < 3; i++) {
  console.log(i);
  const section = document.createElement("div");
  divContainer.appendChild(section);
  section.style.backgroundColor = "purple";
  section.style.border = "solid purple";
  section.style.borderWidth = "10px";
  section.style.margin = "40px";

  for (let j = 0; j <= 9; j++) {
    console.log(j);
    const p = document.createElement("p");
    section.appendChild(p);
    p.innerText = j;
    p.style.width = "3rem";
    p.style.backgroundColor = "white";
    p.style.margin = "0";

    if (i == 1) {
      section.prepend(p);
      p.style.textAlign = "center";
    } else {
      section.appendChild(p);
    }
    if (j % 2) {
      p.style.backgroundColor = "black";
      p.style.color = "white";
    }

    if (i == 0 && j == 4) {
      p.style.backgroundColor = "purple";
      p.style.color = "white";
    } else if (i == 1 && j == 8) {
      p.style.backgroundColor = "purple";
      p.style.color = "white";
    }

    if (i == 2) {
      const numbersArray = [
        "Ett",
        "Två",
        "Tre",
        "Fyra",
        "Fem",
        "Sex",
        "Sju",
        "Åtta",
        "Nio",
        "Tio",
      ];
      p.style.textAlign = "right";
      p.innerText = numbersArray[j];
      if (numbersArray[j] == "Sex") {
        p.style.backgroundColor = "purple";
      }
    }
  }
}
