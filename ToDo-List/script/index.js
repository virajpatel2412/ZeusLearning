const form = document.querySelector('form');
const recipes = document.querySelector('.recipes');
const unsubscribeBtn = document.querySelector('.disable-update');

// render recipe from the database
const addRecipe = (doc) => {
    const recipe = doc.data();
    const time = recipe.created_at.toDate();
    
    const html = 
        `<div class="recipe" id="${doc.id}">
            <h3 class="title">${recipe.title}</h3>
            <div class="time">${time}</div>
            <button class="delete">Delete</button>
        </div>`
    recipes.innerHTML += html;
}

const deleteRecipe = (doc) => {
    const recipes = document.querySelectorAll('.recipe');

    recipes.forEach(recipe => {
        if(recipe.id == doc.id){
            recipe.remove();
        }
    })
}

// delete the recipe
recipes.addEventListener('click', (e) => {
    if(e.target.tagName === "BUTTON"){
        db.collection('recipes').doc(e.target.parentElement.id).delete();
    }
})


//  Add recipe to the firestore database
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const now = new Date();
    const recipe = {
        title: form.message.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    }

    db.collection('recipes').add(recipe).then(() => {
        console.log(`${recipe.title} added`);
    })

    form.reset();
})

// real time listener
const unsub = db.collection('recipes').onSnapshot( snapshot => {
    snapshot.docChanges().forEach( change => {
        if(change.type === 'added'){
            addRecipe(change.doc);
        }
        else if(change.type === 'removed'){
            deleteRecipe(change.doc);
        }
    })
});

// unsubscribe from changes.
unsubscribeBtn.addEventListener('click', () => {
    unsub();
})