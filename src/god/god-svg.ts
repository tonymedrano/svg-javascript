export class SVG {
    private xmlns = "http://www.w3.org/2000/svg";
    private svg = document.createElementNS(this.xmlns, "svg");

    constructor(canvas: any, shapes: any) {
        this.svg.setAttribute('width', canvas.width);
        this.svg.setAttribute('height', canvas.height);
        this.svg.setAttribute('style', `background: ${canvas.color}`);
        this.svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        document.body.appendChild(this.svg);
    }

    static create(canvas: any, shapes: any): SVG {
        return new SVG(canvas, shapes);
    }
}