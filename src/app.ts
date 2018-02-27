import { God } from "./god/god";
import '../css/styles.scss';

let god = new God({
    width: '600',
    height: '600',
    color: '#000000'
});

//. god.add(shape, id)
god.add('circle', 'mi-circulo');
god.add('rect', 'mi-cuadrado');
god.add('ellipse', 'mi-elipse');
god.add('line', 'mi-line');
god.add('polygon', 'mi-polygon');
god.add('path', 'mi-path');
god.add('text', 'mi-text');
