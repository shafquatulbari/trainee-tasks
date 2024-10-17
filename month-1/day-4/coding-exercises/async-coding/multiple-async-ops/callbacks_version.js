// Simulate asynchronous operations using callbacks
function fetchUserData(callback) {
  setTimeout(() => callback(null, { userId: 1, name: "John Doe" }), 1000);
}

function fetchPosts(userId, callback) {
  setTimeout(
    () =>
      callback(null, [
        { postId: 1, title: "Post 1" },
        { postId: 2, title: "Post 2" },
      ]),
    1000
  );
}

function fetchComments(postId, callback) {
  setTimeout(
    () =>
      callback(null, [
        { commentId: 1, text: "Nice post!" },
        { commentId: 2, text: "Thanks for sharing" },
      ]),
    1000
  );
}

// Chain the operations using callbacks
fetchUserData((err, user) => {
  if (err) {
    return console.error(err);
  }
  console.log("User Data:", user);

  fetchPosts(user.userId, (err, posts) => {
    if (err) {
      return console.error(err);
    }
    console.log("User Posts:", posts);

    fetchComments(posts[0].postId, (err, comments) => {
      if (err) {
        return console.error(err);
      }
      console.log("Post Comments:", comments);
    });
  });
});
