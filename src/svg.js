var draw = function(){
    var xmlns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(xmlns, "svg");
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '600');
    svg.setAttribute('height', '250');
     svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
   
    var text = document.createTextNode('A');
    
    var circle = document.createElementNS(xmlns, "circle");
    circle.setAttribute('cx', '50');
    circle.setAttribute('cy', '50');
    circle.setAttribute('r', '40');
    circle.setAttribute('stroke', 'green');
    circle.setAttribute('stroke-width', '4');
    circle.setAttribute('fill', 'yellow');
    circle.appendChild(text);
    
    svg.appendChild(circle);
    
    document.body.appendChild(svg);
  };
  
  window.onload=draw();