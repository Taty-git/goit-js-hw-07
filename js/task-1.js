const categories = document.querySelectorAll('ul#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('li');

    console.log(`Category: ${categoryName}, Elements: ${elements.length}`);
});