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
        filename: '.mainSQLlite'
    },
    useNullAsDefault: true
}

export {
    mysql,
    sqlite3
}