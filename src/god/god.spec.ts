import { God } from "./god";
import { SVG } from "./god-svg";

describe('God initialized for the very first time', () => {

    it("should say 'God is running...'", () => {
        expect(new God().name).toEqual("God is running...");
        console.log('God initialized for the very first time');
    });

    it("God should return a 'SVG.create()'", function () {
        expect(SVG.create()).toEqual(jasmine.any(Object));
    });
});