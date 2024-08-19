
let row = document.querySelector("#card-main")
let imgc = document.getElementsByClassName("imglogo")
function createUser(obj) {
  return `
     <div class="card" style="border: 2px solid black;
   box-shadow: 0px 0px 25px black;">
         <div class="card-img">
        <img src="https://picsum.photos/300/200" alt="" />
      </div>
      <br>
      <div class="card-body ">
        <h2 class="card-title">${obj.name || "Name not available"}</h2>
        <h3 class="card-email">${obj.email || "Email not available"}</h3>
        <p class="card-phone">${obj.phone || "Phone not available"}</p>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          laudantium at cupiditate distinctio veritatis, iusto architecto
          nam pariatur dignissimos atque.
        </p>
      </div> 
     </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id"), 10); // Fetch the 'id' parameter from the URL and convert it to a number

  if (id && id > 0) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // Check if the ID is within the range of available users
        if (id <= data.length) {
          const user = data[id - 1]; // Fetch the user object based on the ID (subtract 1 as array indices start from 0)
          const userHtml = createUser(user); // Use the createUser function to generate HTML representation of the user
          row.innerHTML = userHtml; // Insert the HTML into the 'row' element
        } else {
          console.error("Invalid user ID: ID is out of range");
        }
      });
    //     .catch(error => {
    //       console.error('Error fetching user data:', error);
    //     });
    // } else {
    //   console.error('Invalid ID parameter in URL');
    // }
  }
});

// carateUser funktsiyasining nomi to'g'rilangan: createUser
imgc.forEach((imgc) => {
    imgc.addEventListener("click", (event) => {
      window.location.assign(
        `http://127.0.0.1:5500/pages/korzinka.html`
      );
    });
  });