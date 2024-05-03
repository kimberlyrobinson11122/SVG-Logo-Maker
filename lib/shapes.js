class Shape {
    constructor(letters, textColor, shapeFill) {
        this.letters = letters;
        this.textColor = textColor;
        this.shapeFill = shapeFill;
    }

    render() {
        throw new Error('Method not implemented');
    }
}

class Circle extends Shape {
    render() {
        return `<svg class="circle"
            width="300"
            height="200"
            viewBox="-100 -100 200 200">
            <circle cx="0" cy="0" r="70" fill="${this.shapeFill}"/>
            <text x="0" y="0" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.letters}</text>
        </svg>`;
    }
}

class Square extends Shape {
    render() {
        return `<svg class="square"
            width="300"
            height="200"
            viewBox="-100 -100 200 200">
            <rect x="-70" y="-70" width="140" height="140" fill="${this.shapeFill}"/>
            <text x="0" y="0" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.letters}</text>
        </svg>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<svg class="triangle"
            width="300"
            height="200"
            viewBox="-100 -100 200 200">
            <polygon points="0,-80 70,80 -70,80" fill="${this.shapeFill}"/>
            <text x="0" y="20" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.letters}</text>
        </svg>`;
    }
}

module.exports = { Shape, Circle, Square, Triangle };