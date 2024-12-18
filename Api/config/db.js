import oracledb from 'oracledb'

const { getConnection } = oracledb

const config = {
    user: 'C##library_user',
    password: 'library_password',
    connectString: 'localhost:1521/XE'
}

async function connectDB() {
    try {
        const connection = await getConnection(config)
        console.log('Database connection successful.')
        return connection
    } catch (err) {
        console.error('Database connection failed:', err)
        throw err
    }
}

export { connectDB }
