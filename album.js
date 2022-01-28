const queryParams = window.location.search;
const urlParams = new URLSearchParams(queryParams);
const albumId = urlParams.get("album_id");
// console.log('https://jsonplaceholder.typicode.com/albums' + albumId);
// console.log(albumId)

fetch("https://jsonplaceholder.typicode.com/albums/" + albumId)
  .then((res) => res.json())
  .then((album) => {
    // console.log(album);
    const albumTitle = document.createElement("h3");
    albumTitle.classList.add("album-title");
    albumTitle.textContent = `Album title: ${album.title}`;
    // console.log(album.title)

    // console.log('https://jsonplaceholder.typicode.com/users/' + albumId);
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((authors) => {
        // console.log(authors);
        authors.map((author) => {
          if (album.userId == author.id) {
            // console.log(author.name);
            const albumAuthor = document.createElement("h5");
            albumAuthor.classList.add("album-author");
            albumAuthor.innerHTML = `<span> Album author: <a href="user.html?user_id=${author.id}">${author.name}</a><span>`;
            // console.log(author.name);
            albumTitle.append(albumAuthor);
          }
        });

        fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + albumId + "&_limit=1")
          .then((res) => res.json())
          .then((photos) => {
            console.log(photos);
            const photoGallery = document.createElement("div");
            photoGallery.classList.add("photo-gallery");
            const albumName = document.createElement("h4");
            albumName.classList.add("album-name");
            albumName.textContent = `Photo Gallery:`
            

            photos.map((photo) => {
              const imgLink = document.createElement('a');
              imgLink.setAttribute("href", `${photo.url}`);
              const singleThumbnail = document.createElement("img");
              singleThumbnail.setAttribute("src", `${photo.thumbnailUrl}`);
              imgLink.prepend(singleThumbnail);
              photoGallery.prepend(imgLink);
              console.log(singleThumbnail);

              document.body.append(albumTitle, albumName, photoGallery);
            });
          });
      });
    });
