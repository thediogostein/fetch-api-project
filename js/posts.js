// 'https://jsonplaceholder.typicode.com/users/?_limit=5';

function addToDOM(posts) {
  const postsContainer = document.getElementById('posts-container');

  for (post of posts) {
    console.log(post);
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

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    addToDOM(data);
  } catch (error) {
    console.log(error);
  }
}

getPosts();
