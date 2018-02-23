export class SVG {
    private xmlns = "http://www.w3.org/2000/svg";
    private svg = document.createElementNS(this.xmlns, "svg");

    constructor() {
        this.svg.setAttribute('style', 'border: 1px dashed olive');
        this.svg.setAttribute('width', '600');
        this.svg.setAttribute('height', '250');
        this.svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        document.body.appendChild(this.svg);
    }

    static create(): any {
        return new SVG();
    }
}