
let expect=require("chai").expect;

describe("sum(arr)",function(){
    it("should return 3 for [1, 2]",function(){
        expect(sum([1,2])).to.be.equal(3);
    });
});