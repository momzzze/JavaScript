let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};



describe('mathEnforcer',function () {
    describe('addFive',function () {
        it('with a non-number parameter, should return undefined',function () {
            expect(mathEnforcer.addFive('pesho')).to.be.equal(undefined);
        });
        it('with a non-number parameter, should return undefined',function () {
            expect(mathEnforcer.addFive({name:'pesho'})).to.be.equal(undefined);
        });
        it("with non-number parameter should return undefined",function () {
            assert.closeTo(mathEnforcer.addFive(5.04),10.04,0.01)
        });
        it("with non-number parameter should return undefined",function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it("with non-number parameter should return undefined",function () {
            assert.closeTo(mathEnforcer.addFive(-5.04),-0.04,0.01)
        });
        it("with non-number parameter should return undefined",function () {
            assert.closeTo(mathEnforcer.addFive(-3.04),2.96,0.01)
        });
    });
    describe('subtractTen',function () {
        it('with a non-number parameter, should return undefined',function () {
            expect(mathEnforcer.addFive('pesho')).to.be.equal(undefined);
        });
        it('with a non-number parameter, should return undefined',function () {
            expect(mathEnforcer.addFive({name:'pesho'})).to.be.equal(undefined);
        });
        it('with a non-number parameter, should return undefined',function () {
            expect(mathEnforcer.addFive(15)).to.be.equal(5);
        });
        it('with a non-number parameter, should return undefined',function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(-5);
        });
        it("with non-number parameter should return undefined",function () {
            assert.closeTo(mathEnforcer.subtractTen(5.04),-5.04,0.01)
        });
        it("with non-number parameter should return undefined",function () {
            assert.closeTo(mathEnforcer.subtractTen(-5.04),-15.04,0.01)
        });
        it("with non-number parameter should return undefined",function () {
            assert.closeTo(mathEnforcer.subtractTen(12.04),2.04,0.01)
        });

    });
    describe('sum',function () {
        it('with a even length string, should return correct result',function () {
            expect(sum("Pesho",5)).to.be.equal(undefined);
        });
        it('with a even length string, should return correct result',function () {
            expect(sum(5,"Pesho")).to.be.equal(undefined);
        });
        it('with a non-number parameter, should return undefined',function () {
            expect(mathEnforcer.sum({name:'pesho'},5)).to.be.equal(undefined);
        });
        it('with a non-number parameter, should return undefined',function () {
            expect(mathEnforcer.sum(5,{name:'pesho'})).to.be.equal(undefined);
        });
        it("with non-number parameter should return undefined",function () {
            assert.closeTo(mathEnforcer.sum(5,12.04),17.04,0.01)
        });
        it("with non-number parameter should return undefined",function () {
            expect(mathEnforcer.sum(15,-12)).to.be.equal(3)
            expect(mathEnforcer.sum(-4,-3)).to.be.equal(-7)
            expect(mathEnforcer.sum(4,3)).to.be.equal(7)
        });
        it("with non-number parameter should return undefined",function () {
            assert.closeTo(mathEnforcer.sum(-12.24,5.12),7.12,0.01)
        });
        it("with non-number parameter should return undefined",function () {
            assert.closeTo(mathEnforcer.sum(-12.24,-5.12),-17.36,0.01)
        });
        it("with non-number parameter should return undefined",function () {
            assert.closeTo(mathEnforcer.sum(12.04,5.12),17.16,0.01)
        });

    });
})