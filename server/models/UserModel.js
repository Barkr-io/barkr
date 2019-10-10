const { Pool } = require('pg');

const myURI = 'postgres://ncwpxxla:5nQc0bZ3V71lxRHBSsY3qDkUOwcrPSxc@salt.db.elephantsql.com:5432/ncwpxxla';

const URI = process.env.PG_URI || myURI;
const pool = new Pool({ connectionString: URI });

module.exports = pool;
