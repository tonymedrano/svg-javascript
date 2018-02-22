import { God } from "./god/god";
import '../css/styles.scss';

export class App {
    name:string
    constructor() { }
    run() {
        new God();
    }
}

let app = new App()
app.run()