
import { getSingleBook, getBooks as listBooks, performAdd, performUpdate, performDelete } from '../services/bookService.ts'
import { Book } from '../models/book.ts';

const getBooks = ({ response }: { response: any }) => {
    response.body = {
        success: true,
        data: listBooks()
    }
}

const getBook = ({ params, response }: { params: { id: string }, response: any }) => {
    let book = getSingleBook(params.id);

    if (book) {
        response.status = 200
        response.body = {
            success: true,
            data: book
        }
    } else {
        response.status = 404
        response.body = {
            success: false,
            msg: 'No book found with id: '+params.id,
        }
    }
}


const addBook = async ({ request, response }: { request: any, response: any }) => {    

    const body : any = await request.body()

    if (!request.hasBody) {
        response.status = 400
        response.body = {
            success: false,
            message: 'No data'
        }
    } else {
        let id : string =  performAdd(body.value)
        response.status = 201
        response.body = {
            success: true,
            message: "New book added with id: "+id
        }
    }
}

const updateBook = async({ params, request, response }: { params: { id: string }, request: any, response: any }) => {

    const body = await request.body()        

    if(performUpdate(params.id,body.value)){
        response.status = 200
        response.body = {
            success: true,
            message: "Updated book with id: "+params.id
        }
    }

    else {
        response.status = 404
        response.body = {
            success: false,
            message: 'No book found'
        }
    }
}

const deleteBook = ({ params, response }: { params: { id: string }, response: any }) => {

    performDelete(params.id);
    response.body = { 
        success: true,
        message: 'Deleted book with id: '+params.id,

    }
}

export { getBooks, getBook, addBook, updateBook, deleteBook }