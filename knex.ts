import knex from 'knex';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './db/Chinook_Sqlite.sqlite',
  },
});

export default db;
