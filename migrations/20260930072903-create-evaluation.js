'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Evaluations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Projects',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      criterionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Criteria',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      jurorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Jurors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      score: {
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('Evaluations', {
      fields: ['projectId', 'criterionId', 'jurorId'],
      type: 'unique',
      name: 'unique_evaluation'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Evaluations');
  }
};