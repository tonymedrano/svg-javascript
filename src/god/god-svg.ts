export class SVG {
    private xmlns = "http://www.w3.org/2000/svg";
    private svg = document.createElementNS(this.xmlns, "svg");

    constructor(canvas: any) {
        this.svg.setAttribute('width', canvas.width);
        this.svg.setAttribute('height', canvas.height);
        this.svg.setAttribute('style', `background: ${canvas.color}`);
        this.svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        document.body.appendChild(this.svg);
    }

    static create(canvas: any): SVG {
        return new SVG(canvas);
    }

    /*
    <svg>
       <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
    </svg>
    */
    rect(attribute: any) {
        let rect = document.createElementNS(this.xmlns, "rect");
        rect.setAttribute('id', attribute.id);
        rect.setAttribute('width', attribute.width);
        rect.setAttribute('height', attribute.height);
        rect.setAttribute('x', attribute.x);
        rect.setAttribute('y', attribute.y);
        rect.setAttribute('stroke', attribute.stroke || '#000000');
        rect.setAttribute('stroke-width', attribute.strokeWidth || 1);
        rect.setAttribute('stroke-opacity', attribute.strokeOpacity || 1.0);
        rect.setAttribute('fill', attribute.fill || '#ffffff');
        rect.setAttribute('fill-opcatity', attribute.fillOpacity || 1.0);
        this.svg.appendChild(rect);
    }

    /*
    <svg>
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>
    */
    circle(attribute: any) {
        let circle = document.createElementNS(this.xmlns, "circle");
        circle.setAttribute('id', attribute.id);
        circle.setAttribute('cx', attribute.cx);
        circle.setAttribute('cy', attribute.cy);
        circle.setAttribute('r', attribute.radius);
        circle.setAttribute('stroke', attribute.stroke || '#000000');
        circle.setAttribute('stroke-opacity', attribute.strokeOpacity || 1.0);
        circle.setAttribute('stroke-width', attribute.strokeWidth || 1);
        circle.setAttribute('fill', attribute.fill || '#ffffff');
        circle.setAttribute('fill-opcatity', attribute.fillOpacity || 1.0);
        this.svg.appendChild(circle);
    }

    /*
    <svg>
        <ellipse cx="200" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" />
    </svg>
    */
    ellipse(attribute: any) {
        let ellipse = document.createElementNS(this.xmlns, "ellipse");
        ellipse.setAttribute('id', attribute.id);
        ellipse.setAttribute('cx', attribute.cx);
        ellipse.setAttribute('cy', attribute.cy);
        ellipse.setAttribute('rx', attribute.rx);
        ellipse.setAttribute('ry', attribute.ry);
        ellipse.setAttribute('stroke', attribute.stroke || '#000000');
        ellipse.setAttribute('stroke-opacity', attribute.strokeOpacity || 1.0);
        ellipse.setAttribute('stroke-width', attribute.strokeWidth || 1);
        ellipse.setAttribute('fill', attribute.fill || '#ffffff');
        ellipse.setAttribute('fill-opcatity', attribute.fillOpacity || 1.0);
        this.svg.appendChild(ellipse);
    }

    /*
    <svg>
      <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
    </svg>
    */
    line(attribute: any) {
        let line = document.createElementNS(this.xmlns, "line");
        line.setAttribute('id', attribute.id);
        line.setAttribute('x1', attribute.x1);
        line.setAttribute('y1', attribute.y1);
        line.setAttribute('x2', attribute.x2);
        line.setAttribute('y2', attribute.y2);
        line.setAttribute('stroke', attribute.stroke || '#000000');
        line.setAttribute('stroke-opacity', attribute.strokeOpacity || 1.0);
        line.setAttribute('stroke-width', attribute.strokeWidth || 1);
        line.setAttribute('fill', attribute.fill || '#ffffff');
        line.setAttribute('fill-opcatity', attribute.fillOpacity || 1.0);
        this.svg.appendChild(line);
    }

    /*
    <svg>
    <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
    </svg>
    */
    polygon(attribute: any) {
        let polygon = document.createElementNS(this.xmlns, "polygon");
        polygon.setAttribute('id', attribute.id);
        polygon.setAttribute('points', attribute.points);
        polygon.setAttribute('stroke', attribute.stroke || '#000000');
        polygon.setAttribute('stroke-opacity', attribute.strokeOpacity || 1.0);
        polygon.setAttribute('stroke-width', attribute.strokeWidth || 1);
        polygon.setAttribute('fill', attribute.fill || '#ffffff');
        polygon.setAttribute('fill-opcatity', attribute.fillOpacity || 1.0);
        this.svg.appendChild(polygon);
    }

    /*
    <svg>
    <path d="M150 0 L75 200 L225 200 Z" />
    </svg>
    */
    path(attribute: any) {
        let path = document.createElementNS(this.xmlns, "path");
        path.setAttribute('id', attribute.id);
        path.setAttribute('path', attribute.path);
        path.setAttribute('stroke', attribute.stroke || '#000000');
        path.setAttribute('stroke-opacity', attribute.strokeOpacity || 1.0);
        path.setAttribute('stroke-width', attribute.strokeWidth || 1);
        path.setAttribute('fill', attribute.fill || '#ffffff');
        path.setAttribute('fill-opcatity', attribute.fillOpacity || 1.0);
        this.svg.appendChild(path);
    }

    /*
    <svg>
      <text x="0" y="15" fill="red">I love SVG!</text>
    </svg>
    */
    text(attribute: any) {
        let text = document.createElementNS(this.xmlns, "text");
        text.appendChild(document.createTextNode(attribute.text));
        text.setAttribute('x', attribute.x);
        text.setAttribute('y', attribute.y);
        text.setAttribute('stroke', attribute.stroke || '#000000');
        text.setAttribute('stroke-opacity', attribute.strokeOpacity || 1.0);
        text.setAttribute('stroke-width', attribute.strokeWidth || 1);
        text.setAttribute('fill', attribute.fill || '#ffffff');
        text.setAttribute('fill-opcatity', attribute.fillOpacity || 1.0);
        text.setAttribute('transfom', attribute.transfom || '');
        this.svg.appendChild(text);
    }

    /*
    <g fill="none">
        <path stroke="red" d="M5 20 l215 0" />
        <path stroke="black" d="M5 40 l215 0" />
        <path stroke="blue" d="M5 60 l215 0" />
    </g>
    */
}