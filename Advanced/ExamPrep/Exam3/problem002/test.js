const createList=require('./list');
const expect=require('chai').expect;


describe('createList',function () {
    let list
    beforeEach(function () {
        list=createList()
    })


    describe('add',function () {
        it('can add multiple', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)

            expect(list.toString()).to.be.equal('pesho, gosho, 5')
        });
    })
    describe('shiftLeft',function () {
        it('can add multiple', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.shiftLeft()
            expect(list.toString()).to.be.equal('gosho, 5, pesho')
        });
    })
    describe('shiftRight',function () {
        it('shift correctly', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.shiftRight()
            expect(list.toString()).to.be.equal('5, pesho, gosho')
        });
    })
    describe('swap', function () {
        it('swap correctly', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output=list.swap(-1,2)
            expect(output).to.be.false
            expect(list.toString()).to.be.equal('pesho, gosho, 5, 6')
        });
        it('swap correctly', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output=list.swap(4,2)
            expect(output).to.be.false
            expect(list.toString()).to.be.equal('pesho, gosho, 5, 6')
        });
        it('swap correctly', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output=list.swap('1',2)
            expect(output).to.be.false
            expect(list.toString()).to.be.equal('pesho, gosho, 5, 6')
        });
        it('swap correctly', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output=list.swap(0,2)
            expect(output).to.be.true
            expect(list.toString()).to.be.equal('5, gosho, pesho, 6')
        });
        it('second index correctly', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output=list.swap(2,-1)
            expect(output).to.be.false
            expect(list.toString()).to.be.equal('pesho, gosho, 5, 6')
        });
        it('second index correctly', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output=list.swap(2,4)
            expect(output).to.be.false
            expect(list.toString()).to.be.equal('pesho, gosho, 5, 6')
        });
        it('second index correctly', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output=list.swap(2,'1')
            expect(output).to.be.false
            expect(list.toString()).to.be.equal('pesho, gosho, 5, 6')
        });
        it('second index correctly', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output=list.swap(2,2)
            expect(output).to.be.false
            expect(list.toString()).to.be.equal('pesho, gosho, 5, 6')
        });
    });

})