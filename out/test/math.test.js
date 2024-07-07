"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("../math");
describe("Math functions", () => {
    const col1 = [2, 8, 9, 45];
    const col2 = [71, 56, 43, 2, 7];
    const col3 = [0, 1, 45, 56];
    const expectAns = [0, 1, 2, 2, 7, 8, 9, 43, 45, 45, 56, 56, 71];
    it("should be the same as Expect value", () => {
        expect(expectAns === (0, math_1.sortArray)(col1, col2, col3));
    });
});
//# sourceMappingURL=math.test.js.map