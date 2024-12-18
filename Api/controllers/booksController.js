import { connectDB } from '../config/Db.js'

async function getAllBooks(req, res) {
    let connection
    try {
        connection = await connectDB()
        const result = await connection.execute(
            'SELECT * FROM C##library_user.books'
        )
        res.json(result.rows)
    } catch (err) {
        console.error('Error fetching books:', err)
        res.status(500).send('Error fetching books')
    } finally {
        if (connection) await connection.close()
    }
}
async function selectBooksByKeyword(req, res) {
    const keyword = req.params.keyword
    let connection
    try {
        connection = await connectDB()
        const result = await connection.execute(
            `SELECT * FROM C##library_user.books WHERE AUTHOR LIKE :keyword OR TITLE LIKE :keyword`,
            [`%${keyword}%`]
        )
        res.json(result.rows)
    } catch (err) {
        console.error('Error searching books:', err)
        res.status(500).send('Error searching books')
    } finally {
        if (connection) await connection.close()
    }
}

async function getBookById(req, res) {
    let connection
    const bookId = req.params.id
    try {
        connection = await connectDB()
        const result = await connection.execute(
            'SELECT * FROM C##library_user.books WHERE BOOK_ID = :id',
            [bookId]
        )
        if (result.rows.length > 0) {
            res.json(result.rows[0])
        } else {
            res.status(404).send('Book not found')
        }
    } catch (err) {
        console.error('Error fetching book:', err)
        res.status(500).send('Error fetching book')
    } finally {
        if (connection) await connection.close()
    }
}

async function addBook(req, res) {
    const { title, author, genre, published_date } = req.body
    let connection
    try {
        connection = await connectDB()
        const result = await connection.execute(
            `INSERT INTO C##library_user.books (TITLE, AUTHOR, GENRE, PUBLISHED_DATE)
             VALUES (:title, :author, :genre, :published_date)`,
            [title, author, genre, published_date],
            { autoCommit: true }
        )
        res.send('Book added successfully')
    } catch (err) {
        console.error('Error inserting book:', err)
        res.status(500).send('Error inserting book')
    } finally {
        if (connection) await connection.close()
    }
}

async function updateBook(req, res) {
    const bookId = req.params.id
    const { title, author, genre, published_date } = req.body
    let connection
    try {
        connection = await connectDB()
        const result = await connection.execute(
            `UPDATE C##library_user.books
             SET TITLE = :title, AUTHOR = :author, GENRE = :genre, PUBLISHED_DATE = :published_date
             WHERE BOOK_ID = :id`,
            [title, author, genre, published_date, bookId],
            { autoCommit: true }
        )
        res.send('Book updated successfully')
    } catch (err) {
        console.error('Error updating book:', err)
        res.status(500).send('Error updating book')
    } finally {
        if (connection) await connection.close()
    }
}

async function deleteBook(req, res) {
    const bookId = req.params.id
    let connection
    try {
        connection = await connectDB()
        const result = await connection.execute(
            `DELETE FROM C##library_user.books WHERE BOOK_ID = :id`,
            [bookId],
            { autoCommit: true }
        )
        res.send('Book deleted successfully')
    } catch (err) {
        console.error('Error deleting book:', err)
        res.status(500).send('Error deleting book')
    } finally {
        if (connection) await connection.close()
    }
}

export {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
    selectBooksByKeyword
}
