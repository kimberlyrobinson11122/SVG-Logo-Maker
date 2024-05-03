class Shape {
    constructor(letters, textColor, shapeName, shapeFill) {
      this.letters = letters;
      this.textColor = textColor;
      this.shapeName = shapeName;
      this.shapeType = "";
      this.shapeFill = shapeFill;
    }
    createNewShape = function () {
          return `<svg class="${this.shapeName}"
              width="300"
              height="200"
              viewBox="-100 -100 200 200"
              >
  
              ${this.shapeType}
  
          <text
              x="0"
              y="20"
              text-anchor="middle"
              alignment-baseline="middle"
              dominant-baseline="middle"
              fill="${this.textColor}"
              font-family="Tahoma"
              font-weight="bold"
              font-size="30"
          >
              ${this.letters}</text>
  
          </g>
          </svg>`
    };
  }