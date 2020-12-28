const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(
        [
            {
              "division": "AFC East",
              "teamName": "Buffalo Bills",
              "wins": 6,
              "loses": 2,
              "ties": 0
            },
            {
              "division": "AFC East",
              "teamName": "Miami Dolphins",
              "wins": 4,
              "loses": 3,
              "ties": 0
            },
            {
              "division": "AFC East",
              "teamName": "New England Patriots",
              "wins": 2,
              "loses": 5,
              "ties": 0
            },
            {
              "division": "AFC East",
              "teamName": "New York Jets",
              "wins": 0,
              "loses": 8,
              "ties": 0
            },
            {
              "division": "AFC South",
              "teamName": "Tennessee Titans",
              "wins": 5,
              "loses": 2,
              "ties": 0
            },
            {
              "division": "AFC South",
              "teamName": "Indianapolis Colts",
              "wins": 5,
              "loses": 2,
              "ties": 0
            },
            {
              "division": "AFC South",
              "teamName": "Houston Texans",
              "wins": 1,
              "loses": 6,
              "ties": 0
            },
            {
              "division": "AFC South",
              "teamName": "Jacksonville Jaguars",
              "wins": 1,
              "loses": 6,
              "ties": 0
            },
            {
              "division": "AFC North",
              "teamName": "Pittsburgh Steelers",
              "wins": 7,
              "loses": 0,
              "ties": 0
            },
            {
              "division": "AFC North",
              "teamName": "Baltimore Ravens",
              "wins": 5,
              "loses": 2,
              "ties": 0
            },
            {
              "division": "AFC North",
              "teamName": "Cleveland Browns",
              "wins": 5,
              "loses": 3,
              "ties": 0
            },
            {
              "division": "AFC North",
              "teamName": "Cincinnati Bengals",
              "wins": 2,
              "loses": 5,
              "ties": 1
            },
            {
              "division": "AFC West",
              "teamName": "Kansas City Chiefs",
              "wins": 7,
              "loses": 1,
              "ties": 0
            },
            {
              "division": "AFC West",
              "teamName": "Las Vegas Raiders",
              "wins": 4,
              "loses": 3,
              "ties": 0
            },
            {
              "division": "AFC West",
              "teamName": "Denver Broncos",
              "wins": 3,
              "loses": 4,
              "ties": 0
            },
            {
              "division": "AFC West",
              "teamName": "Los Angeles Chargers",
              "wins": 2,
              "loses": 5,
              "ties": 0
            }
          ]
    )
});

module.exports = router;