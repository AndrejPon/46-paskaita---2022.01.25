fetch('https://jsonplaceholder.typicode.com/posts?_limit=11')
  .then(res => res.json())
  .then(posts => {
    const postsWrapper = document.createElement('div');
    postsWrapper.classList.add('posts-wrapper');
    document.body.prepend(postsWrapper);
    posts.map(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      fetch('https://jsonplaceholder.typicode.com/users/' + post.userId)
        .then(res => res.json())
        .then(userData => {
          const postContent = document.createElement('div');
          postContent.classList.add('post-content');
          postContent.innerHTML = `<h2><a href="#">${post.title}</a></h2>                                   
                                   <span>Author: <a href="user.html?user_id=${userData.id}">${userData.name}</a></span>                                   
                                   <p>${post.body}</p>`;
          postElement.prepend(postContent);
        })
      fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(res => res.json())
        .then(comments => {
          if (comments.length > 0) {
            const commentsWrapper = document.createElement('div');
            commentsWrapper.classList.add('comments-wrapper');
            postElement.append(commentsWrapper);
            const commentsHeader = document.createElement('h3');
            commentsHeader.classList.add('comments-header');
            commentsHeader.textContent = `Comments (${comments.length})`;
            const commentsList = document.createElement('div');
            commentsList.classList.add('comments-list');
            comments.map(comment => {
              const commentItem = document.createElement('div');
              commentItem.classList.add('comment-item');
              commentItem.innerHTML = `<h4>${comment.name}</h4>                                       
                                       <span>Message by: ${comment.email}</span>                                       
                                       <p>${comment.body}</p>`;
              commentsList.append(commentItem);
            })
            commentsWrapper.append(commentsHeader, commentsList);
          }
        })
      postsWrapper.append(postElement);
    })
  })

fetch('https://jsonplaceholder.typicode.com/albums')
.then(res => res.json())
.then(albums => {
  console.log(albums);
  const albumsWrapper = document.createElement('aside');
  albumsWrapper.classList.add('albums-wrapper');
  document.body.append(albumsWrapper);
  const albumsWrapperHeader = document.createElement('h2');
  albumsWrapperHeader.classList.add('albums-wrapper-header');
  albumsWrapperHeader.textContent = 'Albums';
  const albumsList = document.createElement('ul');
  albumsList.classList.add('albums-list');
  albumsWrapper.append(albumsWrapperHeader, albumsList);

  albums.map(album => {
    const albumItem = document.createElement('li');
    albumItem.innerHTML = `<a href='album.html?album_id=${album.id}'>${album.title}</a>`;
    albumsList.append(albumItem);
  })

})

