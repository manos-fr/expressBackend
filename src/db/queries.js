/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vqlnioqfkvocxj',
  host: 'ec2-54-229-217-195.eu-west-1.compute.amazonaws.com',
  database: 'de9mikemijit5j',
  password: '20de6fb3a0fd8e652444adbe7273c89429f28c11cc1376e46eb789cfb8474bef',
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

const getTitles = (request, response) => {
  pool.query('SELECT * FROM titles', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results);
  });
};

const getTitleById = (request, response) => {
  const tconst = request.params.id;
  pool.query(
    'SELECT * FROM titles WHERE tconst = $1 ORDER BY startyear ASC',
    [tconst],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results);
    }
  );
};

const createTitle = (request, response) => {
  const { tconst, originalTitle, startYear, genres } = request.body;

  pool.query(
    'INSERT INTO titles (tconst, originaltitle, startyear, genres) VALUES ($1, $2, $3, $4) RETURNING *',
    [tconst, originalTitle, startYear, genres],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results}`);
    }
  );
};

const updateTitle = (request, response) => {
  const tconst = request.params.id;
  const { originalTitle, startYear, genres } = request.body;

  pool.query(
    'UPDATE titles SET originaltitle= $2, startyear= $3, genres= $4 WHERE tconst = $1',
    [tconst, originalTitle, startYear, genres],
    (error) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${tconst}`);
    }
  );
};

const deleteTitle = (request, response) => {
  const tconst = request.params.id;

  pool.query('DELETE FROM titles WHERE tconst = $1', [tconst], (error) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${tconst}`);
  });
};

module.exports = {
  getTitles,
  getTitleById,
  createTitle,
  updateTitle,
  deleteTitle,
};
