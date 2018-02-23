import { God } from "./god";

describe('God initialized for the very first time', () => {

    it("should say 'God is running...'", () => {
        expect(new God().name).toEqual("God is running...");
    });
});