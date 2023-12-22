import pg from 'pg';
import 'dotenv/config.js';

const { Pool } = pg;


class dataBaseConfiguration {
    constructor() {
        this.pool = new Pool({
            user: process.env.DBUSER,
            host: process.env.DBHOST,
            database: process.env.DBNAME,
            password: process.env.DBPASS,
            port: process.env.DBPORT
        });
    }
    
}

export default dataBaseConfiguration;