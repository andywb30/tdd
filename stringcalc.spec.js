/**
 * Created by awedag on 29.06.17.
 */


var StringCalc = require( "./stringcalc");


// new bank account test suite
describe("StringCalc", function() {
    beforeEach(function() {
        this.stringcalc = new StringCalc("1,2,3");
    });

    it("nicht mehr empty", function() {
        expect(this.stringcalc.myArray.length).toEqual(3);
    });



    it("adding 4 numbers", function() {

        expect(this.stringcalc.add(2)).toThrow("AD");
    });


    it("sum", function() {

        expect(this.stringcalc.sum()).toBe(6);
    });






});
