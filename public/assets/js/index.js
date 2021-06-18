const handleSignupSubmit = () => {
  // POST request with username and password
  // /auth/sign-up
  // on success window location to /login
};

const handleLoginSubmit = (event) => {
  event.preventDefault();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = $("#username").val();
    const password = $("#password").val();

    const requestBody = {
      username: username,
      password: password,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify({
        requestBody,
      }),
    };

    const response = await fetch("/auth/login", options);

    if (response.status !== 200) {
      console.log("FAILED LOGIN");
    } else {
      window.location.replace("/dashboard");
    }
  };

  $("#login-form").submit(handleSubmit);
  // POST request with username and password
  // /auth/login
  // on success window location to /dashboard
};

const handleLogoutClick = () => {
  // POST request with username and password
  // /auth/logout
  // on success window location to /
};

const handleCommentSubmit = () => {
  // POST request with comment message
  // /api/posts/{postId}/comments
  // on success window location to /posts/{postId}
};

const handlePostSubmit = () => {
  // POST request with title and body
  // /api/posts
  // on success window location to /dashboard
};

const handlePostDelete = () => {
  // DELETE request for post id
  // /api/posts/{postId}
  // on success window location to /dashboard
};

console.log("client-side JS");
$("#loginForm").submit(handleLoginSubmit);
