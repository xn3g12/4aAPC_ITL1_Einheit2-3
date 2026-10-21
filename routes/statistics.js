
const express = require('express');
const router = express.Router();

const { Evaluation, Project, Criterion } = require('../models');
const { fn, col } = require('sequelize');

// GET /statistics/averages
// Durchschnittliche Punktzahl pro Projekt und Kriterium
router.get('/averages', async (req, res) => {
  try {
    const results = await Evaluation.findAll({
      attributes: [
        'projectId',
        'criterionId',
        [fn('AVG', col('score')), 'averageScore']
      ],
      include: [
        {
          model: Project,
          attributes: ['titel']
        },
        {
          model: Criterion,
          attributes: ['name', 'maxScore']
        }
      ],
      group: [
        'Evaluation.projectId',
        'Evaluation.criterionId',
        'Project.id',
        'Criterion.id'
      ],
      order: [
        ['projectId', 'ASC'],
        ['criterionId', 'ASC']
      ]
    });

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Fehler beim Berechnen der Durchschnittswerte.'
    });
  }
});

module.exports = router;
