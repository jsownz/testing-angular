var pg = require('pg').native,
    config = require('./private/config'),
  connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/'+config.PG_DATABASE,
  client,
  query;

client = new pg.Client(connectionString);
client.connect();
query = client.query('CREATE TABLE visits (date date)');
query.on('end', function() { client.end(); });