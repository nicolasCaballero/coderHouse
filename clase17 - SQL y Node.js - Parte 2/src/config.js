const mysql = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'clase17'
    }
}
const sqlite3 = {
    client: 'sqlite3',
    connection: {
        filename: './database/db.sqlite3'
    },
    useNullAsDefault: true
}

export {
    mysql,
    sqlite3
}