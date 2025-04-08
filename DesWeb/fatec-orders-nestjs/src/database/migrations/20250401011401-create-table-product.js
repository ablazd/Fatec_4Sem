'use strict';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('product', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      value: {
        allowNull: false,
        type: DataTypes.FLOAT(14, 2),
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      brand_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'brand',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('product');
  },
};
