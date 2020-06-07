import {resolve as resolvePath} from 'path'

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: resolvePath(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
        directory: resolvePath(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: resolvePath(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault:true
}