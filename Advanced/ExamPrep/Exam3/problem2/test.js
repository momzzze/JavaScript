const list=require('./AddDeleteInList');
const expect=require('chai').expect;

describe('testing on list func',function () {
    let myList = {};

    beforeEach(function () {
        myList = list();
    });

    it('if functions exists', function () {
        expect(myList.add).to.exist;
        expect(myList.delete).to.exist;
        expect(myList.toString).to.exist;
    });
    it('data not undefined ', function () {
        expect(myList.data!==undefined).to.be.equal(true)
    });
    it('list should be empty at the start', function () {
        expect(myList.toString()).to.be.equal("")
    });
    it('add appends correctly', function () {
        myList.add('Drone')
        myList.add('item')
        myList.add('item1')
        expect(myList.toString()).to.be.equal('Drone, item, item1')
    });
    it('when func delete  correctly', function () {
        myList.add('Drone')
        myList.add('item')
        myList.add('item1')
        myList.delete(1)
        expect(myList.toString()).to.be.equal('Drone, item1')
    });
    it('should be valid index on delete', function () {
        myList.add('Drone')
        myList.add('item')
        myList.delete('tw')
        expect(myList.toString()).to.be.equal('cannot delete: undefined')
    });
    it('should be valid index on delete', function () {
        myList.add('Drone')
        myList.add('item')
        myList.delete(-1)
        expect(myList.toString()).to.be.equal('cannot delete: undefined')
    });
})