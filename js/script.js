// Get users

function addUsersToDOM(users) {
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
    document.querySelector('.lds-spinner').classList.add('show');

    if (!response.ok) {
      throw new Error('HTTP error: ' + response.status);
    }
    const data = await response.json();
    document.querySelector('.lds-spinner').classList.remove('show');

    addUsersToDOM(data);
  } catch (error) {
    console.log(error);
  }
}

// Get posts
function addPostsToDOM(posts) {
  const postsContainer = document.getElementById('posts-container');

  for (post of posts) {
    const li = document.createElement('li');
    const title = document.createElement('h3');
    const body = document.createElement('p');

    title.textContent = post.title;
    body.textContent = post.body;
    li.append(title, body);
    postsContainer.append(li);
  }
}

async function getPosts() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/?_limit=5'
    );
    document.querySelector('.lds-spinner').classList.add('show');

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    document.querySelector('.lds-spinner').classList.remove('show');

    addPostsToDOM(data);
  } catch (error) {
    console.log(error);
  }
}

// Get photos
function addPhotosToDOM(photos) {
  const photosContainer = document.getElementById('photos-container');

  for (photo of photos.photos) {
    const li = document.createElement('li');
    const title = document.createElement('h3');
    const img = document.createElement('img');
    img.src = photo.url;
    img.alt = photo.description;
    img.loading = 'lazy';

    title.textContent = photo.title;

    li.append(title, img);
    photosContainer.append(li);
  }
}

const getPhotos = async () => {
  const response = await fetch(
    'https://api.slingacademy.com/v1/sample-data/photos'
  );
  document.querySelector('.lds-spinner').classList.add('show');

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();
  document.querySelector('.lds-spinner').classList.remove('show');

  addPhotosToDOM(data);
};

const currentPage = window.location.pathname;

function hightlightCurrentLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('current-page');
    }
  });
}

switch (currentPage) {
  case '/index.html':
    getUsers();
    break;
  case '/posts.html':
    getPosts();
    break;
  case '/photos.html':
    getPhotos();
    break;
}

document.addEventListener('DOMContentLoaded', hightlightCurrentLink);
