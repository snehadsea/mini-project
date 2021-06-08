
//Signup 
const signupForm = document.getElementById('btn-login');
signupForm.addEventListener('click' ,() => {

    // //get user info
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const select = document.getElementById('select').value;
    // console.log(email, password, select);


    if (email !== "" && password !== ""  )
    {
        var data;
        if(select == 'user')
        {
            data = "user.json";
        }
        else{
            data = "admin.json";
        }
        console.log(data);

        fetch(`https://mini-project-d3fbe-default-rtdb.firebaseio.com/${data}`)

            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                var newlogin = Object.values(data);
                var email1 = newlogin.find(data => data.email == email && data.password == password); 
                if (!email1)
                {   
                    alert("Failed Please SignUP");
                    window.location.href = "signup.html"
                    // console.log(email1);
                }

                else {
                    if(select == 'user'){
                    alert("user loginIn Suceesfully");
                    window.location.href = "index.html"
                    }

                    else{
                        alert("admin loginIn Suceesfully");
                        window.location.href = "admin.html"
                    }

                //admin login
                } 
        })

    //     .catch ((error) =>{ alert("user data not found please signup");
    //     window.location.href = "signup.html"
    // });
    }
    else{
          alert("user and password cant be empty");    
    }
});

