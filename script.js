
let game_field = document.querySelector('#game-field');
let emptyDiv = document.createElement('div');
for (let i = 0; i < 200; i++) {
  game_field.appendChild(
    emptyDiv.cloneNode(true)
  );

  document.getElementById('example-field').appendChild(
    emptyDiv.cloneNode(true)
  );
}

figureManger.game_field = game_field;

figureManger.createFigureOne(4, 7, 1);
figureManger.createFigureTwo(7, 9, 3);
figureManger.createFigureThree(3, 12, 1);

figureManger.createFigureFour(8, 15, 2);
figureManger.createFigureFive(3, 17, 1);

figureManger.game_field = document.getElementById('example-field');
figureManger.createFigureOne(2, 3, 1);
figureManger.createFigureTwo(5, 6, 1);
figureManger.createFigureThree(8, 9, 1);
figureManger.createFigureFour(5, 12, 1);
figureManger.createFigureFive(3, 13, 1);
figureManger.createFigureSix(3, 16, 1);
figureManger.createFigureSeven(7, 20, 1);


let cars = function() {
  this.specification = {
    size: 32,
    number: 34214
  };
};

let audi = new cars();
audi.specification.size = 50;
console.log(audi.specification);



audi = new cars();

console.log(audi.specification);
