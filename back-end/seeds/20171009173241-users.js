'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users',
      [
        {
          name: 'Admin',
          email: 'admin@example.com',
          encryptedPassword: '2517dcf5f7fcc0d5d6ba924411bb5f699718e0001a754531fddaca25036a133fd25d8daee01ad54358578f27e0373c803e740969af04259ed0480f5176a23882',
          salt: '6614de50-aea5-11e7-a21d-3db9bcd44e30',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Aaron',
          email: 'aaron@example.com',
          encryptedPassword: '2517dcf5f7fcc0d5d6ba924411bb5f699718e0001a754531fddaca25036a133fd25d8daee01ad54358578f27e0373c803e740969af04259ed0480f5176a23882',
          salt: '6614de50-aea5-11e7-a21d-3db9bcd44e30',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Darren',
          email: 'darren@example.com',
          encryptedPassword: '2517dcf5f7fcc0d5d6ba924411bb5f699718e0001a754531fddaca25036a133fd25d8daee01ad54358578f27e0373c803e740969af04259ed0480f5176a23882',
          salt: '6614de50-aea5-11e7-a21d-3db9bcd44e30',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kathy',
          email: 'kathy@example.com',
          encryptedPassword: '2517dcf5f7fcc0d5d6ba924411bb5f699718e0001a754531fddaca25036a133fd25d8daee01ad54358578f27e0373c803e740969af04259ed0480f5176a23882',
          salt: '6614de50-aea5-11e7-a21d-3db9bcd44e30',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Keizo',
          email: 'keizo@example.com',
          encryptedPassword: '2517dcf5f7fcc0d5d6ba924411bb5f699718e0001a754531fddaca25036a133fd25d8daee01ad54358578f27e0373c803e740969af04259ed0480f5176a23882',
          salt: '6614de50-aea5-11e7-a21d-3db9bcd44e30',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Priyanka',
          email: 'priyanka@example.com',
          encryptedPassword: '2517dcf5f7fcc0d5d6ba924411bb5f699718e0001a754531fddaca25036a133fd25d8daee01ad54358578f27e0373c803e740969af04259ed0480f5176a23882',
          salt: '6614de50-aea5-11e7-a21d-3db9bcd44e30',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'John',
          email: 'john@example.com',
          encryptedPassword: '2517dcf5f7fcc0d5d6ba924411bb5f699718e0001a754531fddaca25036a133fd25d8daee01ad54358578f27e0373c803e740969af04259ed0480f5176a23882',
          salt: '6614de50-aea5-11e7-a21d-3db9bcd44e30',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Users', null, {})
    }
  }
