/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
const { Pool } = require('pg');

let pool;
try {
  pool = new Pool({
    // user: 'vqlnioqfkvocxj',
    // host: 'ec2-54-229-217-195.eu-west-1.compute.amazonaws.com',
    // database: 'de9mikemijit5j',
    // password: '20de6fb3a0fd8e652444adbe7273c89429f28c11cc1376e46eb789cfb8474bef',
    // user: 'postgres',
    // host: 'localhost',
    // database: 'Movies',
    // password: '12345',
    // port: 5432,
    user: 'postgres',
    host: 'localhost',
    password: 'jijikos',
    port: 5433,
  });
} catch (error) {
  console.error(error);
}

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
const createTitle = async (request, response) => {
  const { tconst, originalTitle, startYear, genres } = request.body;
  try {
    await pool.query('BEGIN');
    const results = await pool.query(`INSERT INTO titles (tconst, originaltitle, startyear, genres) VALUES (${tconst}${Math.floor(Math.random() * 1000000)}, '${originalTitle}', ${startYear}, '${genres}') RETURNING*`);
    await pool.query('COMMIT');
    response.status(201).send({ res: results.rows });
  } catch (error) {
    response.status(500).send(error);
  }
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
      response.status(200).send({ res: `User modified with ID: ${tconst}` });
    }
  );
};

const deleteTitle = (request, response) => {
  const tconst = request.params.id;

  pool.query('DELETE FROM titles WHERE tconst = $1', [tconst], (error) => {
    if (error) {
      throw error;
    }
    response.status(200).send({ res: `User deleted with ID: ${tconst}` });
  });
};

module.exports = {
  getTitles,
  getTitleById,
  createTitle,
  updateTitle,
  deleteTitle,
};
