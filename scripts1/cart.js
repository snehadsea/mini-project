let tabledata = document.getElementById("row");
console.log(tabledata);
fetch('https://mini-project-d3fbe-default-rtdb.firebaseio.com/product.json')
        .then(response => response.json())
        .then(data => {
            var newproduct = Object.values(data);
            newproduct.forEach(data => {
                tabledata.innerHTML += loaddata1(data.name,data.prize,data.img);
                console.log(tabledata);
            });
        });

const loaddata1 = (name, prize, img) => {
    return `
     <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Prize</th>
                <th scope="col">Image</th>
            </tr>
        </thead>  
        <tbody>
            <tr>
                <td>${name}</td>
                <td>${prize}</td>
                <td>${img}</td>
            </tr>
            <br>
        </tbody>`   
}