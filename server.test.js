const data = require('./data')
const {hi,hiAll, addFullName} = require('./server');

test('Testing Hi Function', () => {
    expect(hi(data)).toBe("Greg");
});

test('Testing HiAll Function', () => {
    expect(hiAll(data)).toContain("Greg John Carl Tom Chris Danny");
});


test('Testing AddFullName', () => {
    expect(addFullName(data)).toEqual([
            {
            id: 1,
            firstName: 'Greg',
            lastName: 'Smith',
            fullName: 'Greg Smith'
        },
        {
            id: 2,
            firstName: 'John',
            lastName: 'Smith',
            parent: 'Greg Smith',
            fullName: 'John Smith'
        },
        {
            id: 3,
            firstName: 'Carl',
            lastName: 'Smith',
            parent: 'Greg Smith',
            fullName: 'Carl Smith'
        },
        {
            id: 4,
            firstName: 'Tom',
            lastName: 'Arnold',
            fullName: 'Tom Arnold'
        },
        {
            id: 5,
            firstName: 'Chris',
            lastName: 'George',
            fullName: 'Chris George'
        },
        {
            id: 6,
            firstName: 'Danny',
            lastName: 'Kiman',
            fullName: 'Danny Kiman'
        }]);
});


