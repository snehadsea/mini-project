
//Signup 
        const signupForm = document.getElementById('btn');
        signupForm.addEventListener('click', (e) => {
          e.preventDefault();

          // //get user info
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;


    if (email !== "" && password !== "")
      {
        fetch("https://mini-project-d3fbe-default-rtdb.firebaseio.com/user.json",{
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password : password,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      
      });
          alert("signup sucessfully!");
          window.location.href = "login.html"
    }

  else {
  alert("Input fields cannot be empty!");
  };
});

