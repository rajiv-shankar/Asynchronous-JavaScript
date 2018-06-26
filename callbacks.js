// mimic how to fetch from a server, getting them & creating a blog post

// array w 2 post objects
const posts = [
  { title: "Post One", body: "This is Post One" },
  { title: "Post Two", body: "This is Post Two" }
];

// get the posts and put them on the page
function getPosts() {
  setTimeout(() => {
    // setTimeout: to delay getting result by 1 sec (mimic a server)
    let output = "";
    // forEach: method executes a provided function once for each array element
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
  }, 1000);
}
