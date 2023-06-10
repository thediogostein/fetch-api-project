function addToDOM(users) {
  const postsContainer = document.getElementById('users-container');

  for (let user of users) {
    const li = document.createElement('li');
    const nameEl = document.createElement('h3');
    const userNameEl = document.createElement('p');
    const emailEl = document.createElement('p');

    nameEl.textContent = user.name;
    userNameEl.textContent = user.username;
    emailEl.textContent = user.email;

    li.append(nameEl, userNameEl, emailEl);
    postsContainer.append(li);
  }
}

async function getUsers() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/?_limit=5'
    );

    if (!response.ok) {
      throw new Error('HTTP error: ' + response.status);
    }
    const data = await response.json();

    addToDOM(data);
  } catch (error) {
    console.log(error);
  }
}

getUsers();
