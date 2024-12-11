fetch("https://striveschool-api.herokuapp.com/books")
.then((response) => {
    console.log("response", response);
     if(response.ok) {
         return response.json();
     } else {
         throw new Error("errore nella chiamata");
    }
})
    .then((objects) => {
        const row = document.getElementById("rowCard");

        objects.forEach((object) => {
           
        const newCard = document.createElement("div");
        newCard.className = "card col-12 col-sm-5 col-md-2 col-lg-2 m-2 justify-content-center";

            
        const cardImage = document.createElement("img");
        cardImage.src = object.img;
        cardImage.className = "card-img-top";
        newCard.appendChild(cardImage);

        const cardContent = document.createElement("div");
         cardContent.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = object.title;
        cardContent.appendChild(cardTitle);

        const price = document.createElement("p");
        price.className = "card-text";
        price.innerText = `Prezzo: €${object.price}`;
        cardContent.appendChild(price);
        

        const category = document.createElement ("button")
        category.className = "btn btn-dark text-white m-2"
        category.innerText = object.category
        cardContent.appendChild(category);

 
        const btnCardDelete = document.createElement("button");
        btnCardDelete.className = "btn btn-danger";
        btnCardDelete.innerText = "Delete";
        cardContent.appendChild(btnCardDelete);

        btnCardDelete.addEventListener("click", function(e) {
            e.preventDefault();
            newCard.remove(); 
     });

          
     cardContent.appendChild(btnCardDelete);

            
    const btnCardAdd = document.createElement("button");
    btnCardAdd.className = "btn btn-primary mt-2"; 
    btnCardAdd.innerText = "Add";
    btnCardAdd.addEventListener("click", () => {
    console.log("Aggiunto alla lista!");
   
    
     });

    cardContent.appendChild(btnCardAdd);

    newCard.appendChild(cardContent);

    
         row.appendChild(newCard);
    });
})
    .catch((error) => {
        console.error("Errore durante la fetch:", error);
});
