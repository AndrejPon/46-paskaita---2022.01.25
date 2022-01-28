fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(res => res.json())
.then(post => {
  // console.log(post);
  const singlePost = document.createElement('div');
  singlePost.classList.add('single-post-wrapper');
  // console.log(singlePost)
  const singlePostTitle = document.createElement('h3');
  singlePostTitle.classList.add('single-post-title');
  singlePostTitle.textContent = `Post title: ${post.title}`;
  const singlePostBody = document.createElement('p');
  singlePostBody.classList.add('single-post-body');
  singlePostBody.textContent = post.body;

  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.json())
  .then(user => {
    // console.log(user);
    const singlePostUserName = document.createElement('h4');
    singlePostUserName.classList.add('single-post-user-name');
    singlePostUserName.innerHTML = `<span>Author: <a href="#">${user.name}</a></span>`;
    // console.log(user.name);


    singlePost.prepend(singlePostTitle, singlePostUserName, singlePostBody);
    
  })

  fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(res => res.json())
  .then(comments => {
    console.log(comments);
    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments-container');
    singlePost.append(commentsContainer);
    const commentsHeader = document.createElement('h3');
    commentsHeader.classList.add('comments-header');
    commentsHeader.textContent = `Comments (${comments.length})`;
    comments.map(comment => {
      const commentTitle = document.createElement('h3');
      commentTitle.classList.add('comment-title');
      commentTitle.textContent = `${comment.name}`;
      console.log(comment.name)
      const commentAuthor = document.createElement('p');
      commentAuthor.classList.add('comment-author');
      commentAuthor.textContent = `Author email: ${comment.email}`
      commentsContainer.prepend(commentTitle, commentAuthor);  
    })
    
    commentsContainer.prepend(commentsHeader);   

  })

  document.body.prepend(singlePost);

  })


