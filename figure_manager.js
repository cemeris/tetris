let figureManger = {
  createFigureOne: function (x, y, r) {
    let color = "yellow";

      this.changeCubeColor(x, y, color);
      this.changeCubeColor(x+1, y, color);
      this.changeCubeColor(x, --y, color);
      this.changeCubeColor(x+1, y, color);

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
    let whole_line = y-1;
    let nth = whole_line * 10 + x;

    let cube = this.game_field.querySelector(':nth-child(' + nth + ')');
    cube.style.background = color;
  }
}
