import { God } from "./god";
import { SVG } from "./god-svg";

describe('God initialized for the very first time', () => {
    let canvas = {
        width: '600',
        height: '500',
        color: '#000000'
    };
    
    it("should say 'God is running...'", () => {
        expect(new God(canvas, null).name).toEqual("God is running...");
        console.log('God initialized for the very first time');
    });

    it("God should return a 'SVG.create()'", function () {
        expect(SVG.create(canvas, null)).toEqual(jasmine.any(Object));
    });
});