class Triangle extends Shape {
    setShapeType() {
        this.shapeType = `<polygon points="0,-80 70,80 -70,80" fill="${this.shapeFill}"/>`
    }
}
