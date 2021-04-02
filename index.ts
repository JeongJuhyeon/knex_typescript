import knex from './knex';

async function helloWorld() {
  const a = await knex('Album').select('*');
  console.log(a[0].Title);
  //   const a2 = await knex('Album').insert({ Title: '3' });
  const tracks = await knex('Track').select('*');
}

helloWorld().then(() => {
  console.log('Done');
});
