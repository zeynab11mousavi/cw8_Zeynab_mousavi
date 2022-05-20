let animal = {
    speaks: true,
    walk() {
        console.log("Animal walks");
    }
}
let dog = {
    __proto__: animal
  };
console.log(dog);
console.log(dog.speaks);
dog.walk();
    