const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Movies',
  password: '12345',
  port: 5432,
});

const getTitles = (request, response) => {
  pool.query('SELECT * FROM titles WHERE startyear>2021', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results);
  });
};

const getTitleById = (request, response) => {
  // eslint-disable-next-line radix
  const tconst = parseInt(request.params.id);

  pool.query(
    'SELECT * FROM titles WHERE tconst = $1 AND startyear>2021',
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
  const {
    tconst,
    titleType,
    primaryTitle,
    originalTitle,
    isAdult,
    startYear,
    endYear,
    runtimeMinutes,
    genres,
  } = request.body;

  pool.query(
    'INSERT INTO titles (tconst, titleType, primaryTitle, originalTitle, isAdult, startYear, endYear, runtimeMinutes, genres) VALUES ($1, $2, $1, $2, $1, $2,$1, $2,$1) RETURNING *',
    [
      tconst,
      titleType,
      primaryTitle,
      originalTitle,
      isAdult,
      startYear,
      endYear,
      runtimeMinutes,
      genres,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateTitle = (request, response) => {
  const tconst = parseInt(request.params.id);
  const {
    titleType,
    primaryTitle,
    originalTitle,
    isAdult,
    startYear,
    endYear,
    runtimeMinutes,
    genres,
  } = request.body;

  pool.query(
    'UPDATE titles SET titleType = $1,primaryTitle= $1,originalTitle= $1,isAdult= $1,startYear= $1,endYear= $1,runtimeMinutes= $1,genres= $1 WHERE tconst = $3',
    [
      tconst,
      titleType,
      primaryTitle,
      originalTitle,
      isAdult,
      startYear,
      endYear,
      runtimeMinutes,
      genres,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${tconst}`);
    }
  );
};

const deleteTitle = (request, response) => {
  // eslint-disable-next-line radix
  const tconst = parseInt(request.params.id);

  pool.query(
    'DELETE FROM titles WHERE tconst = $1',
    [tconst],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User deleted with ID: ${tconst}`);
    }
  );
};

module.exports = {
  getTitles,
  getTitleById,
  createTitle,
  updateTitle,
  deleteTitle,
};
