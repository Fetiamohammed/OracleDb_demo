import { Router } from 'express'
const router = Router()
import {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
    selectBooksByKeyword
} from '../controllers/booksController.js'

router.get('/', getAllBooks)

router.get('/:id', getBookById)

router.post('/', addBook)

router.put('/:id', updateBook)

router.get('/search/:keyword', selectBooksByKeyword)

router.delete('/:id', deleteBook)

export default router
