const name = document.getElementById("name");
const num = document.getElementById("input");
const id = document.getElementById("response");
const btn = document
  .getElementById("testApiBtn")
  .addEventListener("click", async () => {
    const value = Number(num.value);
    const userName = name.value;
    const res = await fetch(
      `http://localhost:3001/api/test/${
        (value,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userName),
        })
      }`
    );
    const data = await res.json();
    const Data = await data.message;
    id.innerHTML = `
       <div>
        <h2>${Data}</h2>
       </div>
    `;
  });
