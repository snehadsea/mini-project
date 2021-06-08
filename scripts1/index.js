const loaddata = () => {
    
var cards = document.getElementById('cards');
console.log(cards);

fetch('https://mini-project-d3fbe-default-rtdb.firebaseio.com/product.json')
    .then(response => response.json())
    .then(data => {
            // console.log(data)
            var newproduct = Object.values(data);
             newproduct.forEach(data => { 
                // console.log(data.name,data.prize,data.img);
                // console.log(data.img);
                 cards.innerHTML += loaddata1(data.name, data.prize, data.img);
                 console.log(cards);
            });
    });
};

const loaddata1 = (name,prize,img) => {
  return ` <div class="col-md-3 col-sm-6">
  <div class="card-block">
    <img class="card-img-top" src=${img} alt="mobile">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${prize}</p>
            <a href="#" class="btn btn-primary" onclick ="save()">Add to Cart</a>
        </div>
			</div>
</div>`
}
