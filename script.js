// Unsplash API
const count = 10;
const apiKey = "LsBCgA5l-8Z8sMXZEeR0uTjZr5TX2ZnUl8lt4vm0xf0";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos frm Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getPhotos();
