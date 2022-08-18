/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Movies',
  password: '12345',
  port: 5432,
});

const getTitles = (request, response) => {
  pool.query(
    'SELECT * FROM titles WHERE startyear>2021 ORDER BY startyear ASC',
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results);
    }
  );
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
      response.status(200).json(results.rows);
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

  console.log({ request });

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
