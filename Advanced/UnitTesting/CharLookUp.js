function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


describe('lookupChar',function () {
    it('with a non string first parameter, should return undefined',function () {
        expect(lookupChar(13,0)).to.equal(undefined,"Function did not return the correct result!");
    });
    it('with a non number second parameter, should return undefined',function () {
        expect(lookupChar("pesho","gosho")).to.equal(undefined,"Function did not return the correct result!");
    });
    it('with a floating point number second parameter, should return undefined',function () {
        expect(lookupChar("pesho",3.12)).to.equal(undefined,"Function did not return the correct result!");
    });
    it('with incorrect index value, should return incorrect index',function () {
        expect(lookupChar("pesho",13)).to.equal("Incorrect index","Function did not return the correct result!");
    });
    it('with incorrect index value equal to string length, should return incorrect index',function () {
        expect(lookupChar("pesho",5)).to.equal("Incorrect index","Function did not return the correct result!");
    });
    it('with correct parameters, should return correct value',function () {
        expect(lookupChar("pesho",0)).to.equal("p","Function did not return the correct result!");

    });
    it('with correct parameters, should return correct value',function () {
        expect(lookupChar("stamat",3)).to.equal("m","Function did not return the correct result!");

    });
    it('with negative index value, should return correct value',function () {
        expect(lookupChar("stamat",-1)).to.equal("Incorrect index","Function did not return the correct result!");

    });

})