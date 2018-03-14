const makeList=require('./list-add-left-right-clear');
const expect=require('chai').expect;


describe("Pointy List", function() {
    let myList = {};

    beforeEach(function () {
        myList = makeList();
    });

    it("if function start empty", function() {
        expect(myList.toString()).to.be.equal("")
    });

    it('if func exist', function () {
        expect(myList.addLeft).to.exist;
        expect(myList.addRight).to.exist;
        expect(myList.clear).to.exist;
        expect(myList.toString).to.exist;
    });

    it('if func addLeft is correct',function () {
        myList.addLeft('item')
        expect(myList.toString()).to.be.equal('item')
    })
    it('if func addLeft with many properties is correct',function () {
        myList.addLeft('item')
        myList.addLeft(2)
        myList.addLeft(3)
        expect(myList.toString()).to.be.equal('3, 2, item')
    })
    it('if func addRight is correct',function () {
        myList.addRight('item')
        expect(myList.toString()).to.be.equal('item')
    })
    it('if func addRight with many properties is correct',function () {
        myList.addRight('item')
        myList.addRight(2)
        myList.addRight(3)
        expect(myList.toString()).to.be.equal('item, 2, 3')
    })
    it('if func addRight is correct',function () {
        myList.addRight('item')
        myList.addRight('item1')
        myList.clear();
        expect(myList.toString()).to.be.equal("")
    })
})