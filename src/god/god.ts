import { SVG } from "./god-svg";

export class God {
    name: string;
    constructor(canvas: any, shapes: any) {
        this.name = "God is running..."
        SVG.create(canvas, shapes);
    }
}