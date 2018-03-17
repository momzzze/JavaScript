const StringBuilder=require('./string-builder');
const expect=require('chai').expect;


describe("test stringBuilder function", function() {
    let stringBuilder;
    beforeEach(function () {
        stringBuilder=new StringBuilder('test');
    });

    it("if methods exists", function() {
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('append')).to.be.equal(true)
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('prepend')).to.be.equal(true)
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('insertAt')).to.be.equal(true)
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('toString')).to.be.equal(true)
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('remove')).to.be.equal(true)
    });
    it('return same string', function () {
        expect(stringBuilder.toString()).to.be.equal('test')
    });
    it('has all properties', function () {
        expect(stringBuilder.hasOwnProperty('_stringArray')).to.equal(true, "Missing _stringArray property");
    });

    it('return same string', function () {
        stringBuilder=new StringBuilder()
        expect(stringBuilder.toString()).to.be.equal('')
    });
    it('throw error', function () {
        expect(()=>{stringBuilder=new StringBuilder(5)}).to.throw(TypeError)
    });
    it('append', function () {
        stringBuilder.append(', there')
        stringBuilder.append(', there1')
        expect(stringBuilder._stringArray.length).to.be.equal(19)
        expect(stringBuilder.toString()).to.be.equal('test, there, there1')
    });
    it('append error', function () {
        expect(()=>{stringBuilder.append({})}).to.throw(TypeError)
    });
    it('prepend', function () {
        stringBuilder.prepend('there, ')
        stringBuilder.prepend('there1, ')
        expect(stringBuilder._stringArray.length).to.be.equal(19)
        expect(stringBuilder.toString()).to.be.equal('there1, there, test')
    });
    it('prepend error', function () {
        expect(()=>{stringBuilder.prepend(10)}).to.throw(TypeError)
    });
    it('insertAt', function () {
        stringBuilder.insertAt('t',2)
        expect(stringBuilder.toString()).to.be.equal('tetst')
    });
    it('insertAt error', function () {
        expect(()=>{stringBuilder.insertAt([],2)}).to.throw(TypeError)
    });
    it('remove', function () {
        stringBuilder.append(', there')
        stringBuilder.append(', there1')
        stringBuilder.remove(0,19)
        expect(stringBuilder._stringArray.length).to.be.equal(0)
        expect(stringBuilder.toString()).to.be.equal('')
    });
});
