const foodToEmoji = {
    'sushi': '🍣',
    'ramen': '🍜',
    'rice': '🍚',
    'onigiri': '🍙',
    'curry': '🍛'
}

const foods = Object.keys(foodToEmoji);

foods.forEach((food, index) => {
    console.log(`${food}:`, foodToEmoji[food]);
});