let figureManger = {
  game_field: null,
  x: 0,
  y: 0,
  figureFall: function (y) {
    let obj = this;
    setTimeout(function() {
        if (y <= 20) {
          obj.createFigureOne(5, y++, 1);
          //obj.createFigureTwo(5, y++, 1);
          obj.figureFall(y);
        }
    }, 300);
  },
  createFigureOne: function (x, y, r) {
    let color = "";

      console.log("y = " + y + ", this.y = " + this.y);

      for (let n = 1; n <= 2; n++) {
        if (n == 2) {
          color = "yellow"
        }
        this.changeCubeColor(this.x, this.y, color);
        this.changeCubeColor(this.x+1, this.y, color);
        this.changeCubeColor(this.x, --this.y, color);
        this.changeCubeColor(this.x+1, this.y, color);
        this.x = x;
        this.y = y;
      }
  },
  createFigureTwo: function (x, y, r) {
    let color = "skyblue";
    this.changeCubeColor(x, y, color);

    switch (r) {
      case 1:
      case 3:
        this.changeCubeColor(x, --y, color);
        this.changeCubeColor(x, --y, color);
        this.changeCubeColor(x, --y, color);
      break;
      case 2:
      case 4:
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(++x, y, color);
      break;
    }
  },
  createFigureThree: function(x, y, r) {
    let color = "green";
    this.changeCubeColor(x, y, color);

    switch (r) {
      case 1:
      case 3:
        this.changeCubeColor(x, --y, color);
        this.changeCubeColor(--x, y, color);
        this.changeCubeColor(x, --y, color);
        break;
      case 2:
      case 4:
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(x, --y, color);
        this.changeCubeColor(++x, y, color);
        break;
    }
  },
  createFigureFour: function(x, y, r) {
    let color = "red";
    switch (r) {
      case 1:
      case 3:
      this.changeCubeColor(x, y, color);
      this.changeCubeColor(x, --y, color);
      this.changeCubeColor(++x, y, color);
      this.changeCubeColor(x, --y, color);
      break;
      case 2:
      case 4:
      this.changeCubeColor(x, y, color);
      this.changeCubeColor(--x, y, color);
      this.changeCubeColor(x, --y, color);
      this.changeCubeColor(--x, y, color);
      break;
    }
  },
  createFigureFive: function(x, y, r) {
    let color = "purple";
    this.changeCubeColor(x, y, color);
    this.changeCubeColor(--x, ++y, color);
    this.changeCubeColor(++x, y, color);
    this.changeCubeColor(++x, y, color);
  },
  createFigureSix: function(x, y, r) {
    let color = "orange";
    this.changeCubeColor(x, y, color);
    this.changeCubeColor(x+1, y, color);
    this.changeCubeColor(x, ++y, color);
    this.changeCubeColor(x, ++y, color);
  },
  createFigureSeven: function(x, y, r) {
    let color = "blue";
    this.changeCubeColor(x, y, color);
    this.changeCubeColor(x, --y, color);
    this.changeCubeColor(x, --y, color);
    this.changeCubeColor(--x, y, color);
  },
  changeCubeColor: function(x, y, color, r) {
    if (y < 1 || y > 20 || x < 1 || x > 10 ) {
      return;
    }

    let whole_line = y-1;
    let nth = whole_line * 10 + x;

    let cube = this.game_field.querySelector(':nth-child(' + nth + ')');
    cube.style.background = color;

  }
}
