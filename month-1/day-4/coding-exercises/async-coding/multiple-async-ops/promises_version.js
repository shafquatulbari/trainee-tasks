// Simulate asynchronous operations using Promises
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ userId: 1, name: "John Doe" }), 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          { postId: 1, title: "Post 1" },
          { postId: 2, title: "Post 2" },
        ]),
      1000
    );
  });
}

function fetchComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          { commentId: 1, text: "Nice post!" },
          { commentId: 2, text: "Thanks for sharing" },
        ]),
      1000
    );
  });
}

// Chain the operations using Promises
fetchUserData()
  .then((user) => {
    console.log("User Data:", user);
    return fetchPosts(user.userId);
  })
  .then((posts) => {
    console.log("User Posts:", posts);
    return fetchComments(posts[0].postId);
  })
  .then((comments) => {
    console.log("Post Comments:", comments);
  })
  .catch((err) => console.error(err));
