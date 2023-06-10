function addToDOM(photos) {
  const photosContainer = document.getElementById('photos-container');

  for (photo of photos.photos) {
    console.log(photo);
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

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();

  addToDOM(data);
};

getPhotos();
