//adding products into db

const show = () => {
    console.log("show button");
    const img = document.getElementById('image').files[0];
    const name = document.getElementById('name').value;
    const prize = document.getElementById('prize').value;



    fetch(`https://mini-project-d3fbe-default-rtdb.firebaseio.com/product.json`, {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            prize: prize,
            img: "/images/"+img.name,
        }),

        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }, 
      
    })
        .then((response) => response.json())
        // .then((data) => console.log(data)); 
        alert("Product details added Successfully!");
};


//fetch data

const get = () => {
    fetch("https://mini-project-d3fbe-default-rtdb.firebaseio.com/product.json")
        .then((response) => response.json())
        .then((data) => {
         console.log(this);
         for( var x in data){
             alert(`${data[x].name},  ${data[x].prize} , ${data[x].img}`)
         }
});
};

//delete

// var delet = Object.keys(data);
// console.log(delet);
var foundkey = [],namedata;
 del = async() => {

   var keyvalue = [], datavalue = [];
   var slno = 0;
   var keysdata, valuesdata;
    var getdata = await fetch("https://mini-project-d3fbe-default-rtdb.firebaseio.com/product.json")
    .then((response) => response.json())
     .then((data) => {
        //  console.log(data);
         keysdata = Object.keys(data);
        //  console.log(keysdata);
         valuesdata = Object.values(data);

         keysdata.forEach(data => {
             keyvalue.push(data);
         })
         valuesdata.forEach(data => {
             datavalue.push(data);
         })

         datavalue.forEach(newdata => {
             const name = document.getElementById('name').value;
             namedata = name;
            //  console.log(namedata);
            if(name==newdata.name){
            //  console.log(keyvalue[slno]);
               foundkey.push(keyvalue[slno]);
            }
            else{
                ++slno;
            }
            //  console.log(newdata);
         });
     }) 
    // console.log(foundkey[0]);
    //  console.log(keyvalue);
    // console.log(datavalue);

        fetch(`https://mini-project-d3fbe-default-rtdb.firebaseio.com/product/${foundkey[0]}.json`, {
        method: 'DELETE', 
        headers: {

            'Content-type': 'application/json',
            // ' Access- Control - Allow - Origin': '*'
        },
        body : JSON.stringify(namedata)

    });
    // alert("Product details deleted Successfully!");
    };

//Edit
const edit = () => {
fetch("https://mini-project-d3fbe-default-rtdb.firebaseio.com/product.json", {
    method: 'PUT',
    body: JSON.stringify({
       name: galaxy9,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
 
};
