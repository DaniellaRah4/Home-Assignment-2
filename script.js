//Part A: JavaScript Objects
//Task 1: Create a Simple Object
const person = {
    name: "Daniella",
    age: 20,
    isStudent: false
};
console.log(person)

//Task 2: Access Object Properties
console.log(person.name); 
console.log(person.age);
console.log(person["isStudent"]); 

//Task 3: Update Properties
person.age = 22;
person.hobby = "Cooking";
console.log(person);

//Task 4: Add and Update Multiple Properties
const movie = {
    title: "fruitMe Before You",  
    genre: "Romance"
};
movie.releaseYear = 2016;
movie.isPopular = true; 
console.log("Before updating genre:", movie);
movie.genre = "Drama";
console.log("After updating genre:", movie);

//Task 5: Loop Through Object Propertie
const car = {
    make: "Kia",       
    model: "Picanto",  
    year: 2022,        
    color: "White"    
};
for (const key in car) {
    console.log(`${key}: ${car[key]}`);
}

//Task 6: Combine Objects
const firstPerson = {
    name: "Benny",
    age: 24
};

const secondPerson = {
    name: "Daniella",
    age: 22
};

function combinePeople(obj1, obj2) {
    return {
        "First Person's Name": obj1.name,
        "First Person's Age": obj1.age,
        "Second Person's Name": obj2.name,
        "Second Person's Age": obj2.age
    };
}
console.log(combinePeople(firstPerson, secondPerson));

//Task 7: Count Object Properties
function countProperties(obj) {
    return Object.keys(obj).length;
}
console.log(`Number of properties in movie: ${countProperties(movie)}`);
console.log(`Number of properties in person: ${countProperties(person)}`);

//Task 8: Delete a Property
delete person.isStudent;
console.log(person);

//Task 9: Check Property Existence
function hasProperty(obj, prop) {
    return prop in obj;
}
console.log(hasProperty(car, "make")); 
console.log(hasProperty(car, "owner")); 

//Task 10: Edit an Object Using a Function
function updatePerson(person, key, value) {
    person[key] = value;
};
updatePerson(person, "age", 25);
updatePerson(person, "city", "Hadera");
console.log(person);

//Part B: JavaScript Arrays
//Task 1: Create an Array
const fruits = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];
console.log(fruits);

//Task 2: Access Array Elements
console.log("First fruit:",fruits.at(0) );
console.log("Last fruit:", fruits.at(-1));
console.log("Third fruit:", fruits[2]);

//Task 3: Add and Remove Elements
fruits.push("Pineapple");
console.log("After adding to the end:", fruits);

fruits.unshift("Mango");
console.log("After adding to the beginning:", fruits);

fruits.pop();
console.log("After removing the last fruit:", fruits);

//Task 4: Iterate Over an Array
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);}
    console.log("Using for...of loop:");
for (const fruit of fruits) {
    console.log(fruit);}

    //Task 5: Find the Length of an Array
    console.log("Number of fruits in the array:", fruits.length);

    //Task 6: Check for an Element
    function isInArray(array, element) {
        return array.includes(element);}
    console.log(isInArray(fruits, "Apple")); 
    console.log(isInArray(fruits, "Watermelon")); 

    //Task 7: Sort an Array
    fruits.sort();
    console.log("Sorted fruits:", fruits);

    //Task 8: Reverse an Array
    fruits.reverse();
    console.log("Reversed fruits:", fruits);

    //Task 9: Filter Array Elements
     const numbers = [12, 5, 8, 19, 24, 7, 16, 3, 10, 20];
     function filterEvenNumbers(array) {
         return array.filter(num => num % 2 === 0);}
    const evenNumbers = filterEvenNumbers(numbers);
    console.log("Even numbers:", evenNumbers);

    //Task 10: Combine Two Arrays
    const vegetables = ["Tomato", "Cucumber", "Carrot"];
    const groceries = fruits.concat(vegetables);
    console.log("Groceries:", groceries);