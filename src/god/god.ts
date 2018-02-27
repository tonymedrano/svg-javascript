import { SVG } from "./god-svg";

export class God {
    name: string;
    private svg: any;
    constructor(canvas: any) {
        this.name = "God is running..."
        this.svg = SVG.create(canvas);
    }

    add(shape:string, id:string){
        if(shape === 'rect' && id){
            this.svg.rect({
                id: id,
                x: 200,
                y: 300,
                width: 100,
                height: 100,
                stroke: 'yellow',
                strokeWidth: 3,
                fill: 'green',
                strokeOpacity: .8
            });
        };

        if(shape === 'circle' && id){
            this.svg.circle({
                id: id,
                cx: 300,
                cy: 300,
                radius: 50,
                stroke: 'yellow',
                strokeWidth: 3,
                fill: 'green',
                strokeOpacity: .8
            });
        };

        if(shape === 'ellipse' && id){
            this.svg.ellipse({
                id: id,
                cx: 130,
                cy: 130,
                rx: 100,
                ry: 50,
                stroke: 'yellow',
                strokeWidth: 3,
                fill: 'green',
                strokeOpacity: .8
            });
        };

        if(shape === 'line' && id){
            this.svg.line({
                id: id,
                x1: 0,
                y1: 0,
                x2: 300,
                y2: 300,
                stroke: 'lime',
                fill: 'green',
                strokeWidth: 3,
                strokeOpacity: 1
            });
        };

        if(shape === 'polygon' && id){
            this.svg.polygon({
                id: id,
                points: '100,10 40,198 190,78 10,78 160,198',
                fill: 'green',
                stroke: 'lime',
                strokeWidth: 3,
                strokeOpacity: 1
            });
        };

        if(shape === 'path' && id){
            this.svg.path({
                id: id,
                path: 'M250 100 L175 300 L325 300 Z',
                fill: '#ffffff',
                stroke: 'lime',
                strokeWidth: 3,
                strokeOpacity: 1
            });
        };

        if(shape === 'text' && id){
            this.svg.text({
                id: id,
                text: 'Tony A. Medrano',
                x: 200,
                y: 50,
                fill: 'yellow',
                stroke: 'none',
                strokeWidth: 3,
                strokeOpacity: 1,
                transfom: 'rotate(30 20,40)'
            });
        };
    }
}