const queryParams = window.location.search;
const urlParams = new URLSearchParams(queryParams);
const userId = urlParams.get("user_id");
if (userId) {
  fetch("https://jsonplaceholder.typicode.com/users/" + userId)
    .then((res) => res.json())
    .then((user) => {
      const userInfo = document.createElement("div");
      userInfo.classList.add("user-info");
      const userName = document.createElement("h2");
      userName.classList.add("user-name");
      userName.textContent = `${user.name} (${user.username})`;
      const userPersonalInfo = document.createElement("ul");
      userPersonalInfo.classList.add("user-personal-info");
      userPersonalInfo.innerHTML = `<li>Email: <a href="mailto:${user.email}">${user.email}</a></li>
                                    <li>Address: <a href="#">${user.address.street} st. ${user.address.suite}, ${user.address.city} (zipcode: ${user.address.zipcode})</a></li>                                    
                                    <li>Phone: <a href="tel:${user.phone}">${user.phone}</a></li>                                    
                                    <li>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></li>                                    
                                    <li>Work: ${user.company.name}</li>`;
      userInfo.append(userName, userPersonalInfo);
      document.body.prepend(userInfo);
    });
} else {
  document.body.innerHTML = "<h1>Tokio vartotojo nėra</h1>";
}
