const urlGame = "http://localhost:8080/game/";
const urlGames = "http://localhost:8080/games/";

function loadForm(ListItem) {
  let id = ListItem.getAttribute("data-id");
  let title = ListItem.getAttribute("data-title");
  let year = ListItem.getAttribute("data-year");
  let price = ListItem.getAttribute("data-price");
  document.getElementById("id-edit").value = id;
  document.getElementById("title-edit").value = title;
  document.getElementById("price-edit").value = price;
  document.getElementById("year-edit").value = year;

  document.getElementById("edit-game-form").style.display = "block";
}

function updateGame() {
  const idInput = document.getElementById("id-edit");
  const { value: title } = document.getElementById("title-edit");
  const { value: year } = document.getElementById("year-edit");
  const { value: price } = document.getElementById("price-edit");

  const game = { title, year, price };

  axios
    .put(urlGame + idInput.value, game)
    .then(({ status }) => {
      if (status === 200) {
        alert("Updated game!");
        location.reload();
      }
    })
    .catch((error) => {
      alert(error);
    });
}

function deleteGame(ListItem) {
  const id = ListItem.getAttribute("data-id");
  axios
    .delete(urlGame + id)
    .then((response) => {
      alert("Game deleted!");
      location.reload();
    })
    .catch((error) => {
      alert(error);
    });
}

function createGame() {
  const { value: title } = document.getElementById("title");
  const { value: year } = document.getElementById("year");
  const { value: price } = document.getElementById("price");

  const game = { title, year, price };

  axios
    .post(urlGame, game)
    .then(({ status }) => {
      if (status === 200) {
        alert("Registered game!");
        location.reload();
      }
    })
    .catch((error) => {
      alert(error);
    });
}

axios
  .get(urlGames)
  .then(({ data: games }) => {
    const list = document.getElementById("games");

    games.forEach((game) => {
      const item = document.createElement("li");
      item.setAttribute("data-id", game.id);
      item.setAttribute("data-title", game.title);
      item.setAttribute("data-year", game.year);
      item.setAttribute("data-price", game.price);
      item.textContent = `${game.title} - $${game.price}`;
      item.className = "list-group-item";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "btn btn-danger";
      deleteBtn.style.margin = "10px";
      item.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", () => {
        deleteGame(item);
      });
      list.appendChild(item);

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.className = "btn btn-secondary";
      item.appendChild(editBtn);
      editBtn.addEventListener("click", () => {
        loadForm(item);
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
