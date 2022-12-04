const allCatetgories = document.querySelectorAll('.item');
console.log(allCatetgories);
console.log("Number of categories :", allCatetgories.length);



const categoriesArray = [...allCatetgories].map(categories => { 
    console.log(`Category: ${categories.children[0].textContent}`);

    console.log(`Element: ${categories.children[1].children.length}`)
});
