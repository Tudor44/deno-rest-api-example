import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import { Book } from '../models/book.ts'

let books: Book[] = [
    {
      id: "1",
      title: "Clean Code",
      genre: "Software",
      author: "Robert Martin",
    },
    {
      id: "2",
      title: "Inferno",
      genre: "Thriller",
      author: "Dan Brown",
    },
    {
      id: "3",
      title: "Phantom Self",
      genre: "Conspiracy",
      author: "David Icke",
    },
  ];

  const getSingleBook = (id: string) => {
    return books.find(book => book.id === id) || undefined
  }

  const getBooks = () => {
      return books;
  }

 const performAdd = (newBook : Book) => {
    newBook.id = v4.generate()
    books.push(newBook)
    return newBook.id
}

const performUpdate = (id: string, bookData : Book) => {
    const book: Book | undefined = books.find(book => book.id === id)

    if(book){
        return books = books.map(book => book.id === id ? { ...book, ...bookData } : book) 
    }
    else{
        return undefined
    }

}

const performDelete = (id : string) => {
    return books = books.filter(book => book.id !== id)
}

export { getSingleBook, getBooks, performAdd, performUpdate, performDelete }