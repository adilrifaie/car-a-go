const bcrypt = require("bcrypt");

const users = [
    {
        id: 1,
        firstName: 'Nik Adil Rifaie',
        lastName: 'Nik Rusydan',
        email: 'nikadil@carago.com',
        password: bcrypt.hashSync('123', 10),
        role: 'admin'
    },
    {
        id: 2,
        firstName: 'Hana',
        lastName: 'Omar',
        email: 'hana@carago.com',
        password: bcrypt.hashSync('456', 10),
        role: 'staff',
    },
    {
        id: 3,
        firstName: 'Aiman',
        lastName: 'Tino',
        email: 'aimanxkesah@gmail.com',
        password: bcrypt.hashSync('789', 10), 
        role: 'customer',
    },
    {
        id: 4,
        firstName: 'Bella',
        lastName: 'Astilla',
        email: 'bellasaddiq@gmail.com',
        password: bcrypt.hashSync('101', 10),
        role: 'customer',
    }
];

module.exports = users;