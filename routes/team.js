
const express = require('express');
const router = express.Router();
const { Team, Member, Project } = require('../models');

// GET /teams – Alle Teams abrufen
router.get('/', async (req, res) => {
  try {
    const teams = await Team.findAll({
      include: [
        { model: Member },
        { model: Project }
      ]
    });

    res.status(200).json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Fehler beim Abrufen der Teams.' });
  }
});

// GET /teams/:id – Ein Team abrufen
router.get('/:id', async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id, {
      include: [
        { model: Member },
        { model: Project }
      ]
    });

    if (!team) {
      return res.status(404).json({ error: 'Team nicht gefunden.' });
    }

    res.status(200).json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Fehler beim Abrufen des Teams.' });
  }
});

// POST /teams – Neues Team erstellen
router.post('/', async (req, res) => {
  try {
    const { name, klasse } = req.body;

    if (!name || !klasse) {
      return res.status(400).json({
        error: 'name und klasse sind erforderlich.'
      });
    }

    const team = await Team.create({ name, klasse });
    res.status(201).json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Fehler beim Erstellen des Teams.' });
  }
});

// PUT /teams/:id – Team aktualisieren
router.put('/:id', async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);

    if (!team) {
      return res.status(404).json({ error: 'Team nicht gefunden.' });
    }

    const { name, klasse } = req.body;

    if (name !== undefined) team.name = name;
    if (klasse !== undefined) team.klasse = klasse;

    await team.save();
    res.status(200).json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Fehler beim Aktualisieren des Teams.' });
  }
});

// DELETE /teams/:id – Team löschen
router.delete('/:id', async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);

    if (!team) {
      return res.status(404).json({ error: 'Team nicht gefunden.' });
    }

    await team.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Team konnte nicht gelöscht werden. Prüfe vorhandene Beziehungen.'
    });
  }
});

module.exports = router;
