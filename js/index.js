// JavaScript fayli
document.addEventListener("DOMContentLoaded", () => {
  const row = document.querySelector("#row");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      row.innerHTML = "";

      // Performansni oshirish uchun DocumentFragment'dan foydalanish
      const fragment = document.createDocumentFragment();

      data.forEach((user) => {
        const item = col(user);
        // HTML'ni parse qilish uchun vaqtincha div yaratish
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = item;
        // Yangi yaratilgan elementlarni fragmentga qo'shish
        Array.from(tempDiv.children).forEach(child => fragment.appendChild(child));
      });

      // Fragmentni row'ga qo'shish
      row.appendChild(fragment);

      // Dinamik qo'shilgan elementlarga click voqealarini qo'shish
      row.querySelectorAll(".cola-mdv-4s").forEach((user) => {
        user.addEventListener("click", () => {
          let id = user.getAttribute("data-id");
          window.location.assign(`about.html?id=${id}`);
        });
      });
    })
    .catch((error) => {
      console.error("Foydalanuvchilarni olishda xatolik:", error);
    });
});

function col(user) {
  return `
    <div class="cola-mdv-4s mb-3" style="flex: 0 0 auto; width: 33.33333333%;" data-id="${user.id || ""}">
      <div class="card-img-top">
        <img src="https://picsum.photos/300/200" alt="">
      </div>
      <div class="card-body">
        <h2 class="card-title">${user.name || ""}</h2>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium at cupiditate distinctio veritatis, iusto architecto nam pariatur dignissimos atque.
        </p>
      </div>
    </div>
  `;
}
