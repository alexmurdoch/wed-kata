const { updateRemoteStudents } = require('./kata')


describe('Name of the group', () => {

    test('returns an empty array if passed 1', () => {
        expect(updateRemoteStudents([])).toEqual([])
        
    });
    test('should return the same array if location is given ', () => {
        expect(updateRemoteStudents([{ name: 'Hypatia', age: 31, location: 'leeds'}])).toEqual([{ name: 'Hypatia', age: 31, location: 'leeds'}])
    });
    test('should return a new array with location as remote if location isnt given', () => {
        expect(updateRemoteStudents([{ name: 'Hypatia', age: 31, }])).toEqual([{ name: 'Hypatia', age: 31, location: 'remote'}])
    });
    test('should return a new array with location as remote if location isnt given for multiple objects', () => {
        expect(updateRemoteStudents([
                { name: 'Hypatia', age: 31, location: 'leeds' },
                { name: 'Ramanujan', age: 22 },
                { name: 'Tao', age: 47, location: 'manchester' }
                ])).toEqual([    { name: 'Hypatia', age: 31, location: 'leeds' },
               { name: 'Ramanujan', age: 22, location: 'remote' },
               { name: 'Tao', age: 47, location: 'manchester' }
             ])
    });
});



