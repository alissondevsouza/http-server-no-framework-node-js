import pg from 'pg';

const { Pool } = pg;


class dataBaseConfiguration {
    constructor() {
        this.pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'crud_products',
            password: 'postgres1234',
            port: 5432
        });
    }
}

export default dataBaseConfiguration;