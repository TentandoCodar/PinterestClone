module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 1234,
    database: 'PinterestNode',
    define: {
        timestamps: true,
        undescored: true,
    }
}