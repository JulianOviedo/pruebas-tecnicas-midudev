export interface Books {
  library: Library[]
}

export interface Library {
  book: Book
}

export interface Book {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
}

export interface Author {
  name: string
  otherBooks: string[]
}

export const BookList = ({ library }: Books) => {
  return (
    <>
      <ul className='flex flex-wrap gap-4'>
        {library.map((book) => {
          const { title, pages, genre, cover, synopsis, year } = book.book
          return (
            <article className='h-[400px] w-[300px] object-cover shadow-2xl relative hover:scale-105' key={title}>
              <img className='rounded-xl w-full h-full' src={cover} alt={title} />
              <div className='rounded-xl flex items-center absolute top-0 left-0 bottom-0 right-0 backdrop-blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700 w-full h-full text-white text-center'>
                <div className='flex flex-col items-center justify-center font-mono italic  absolute p-2  w-full h-full '>
                  <p className=''>{synopsis}</p>
                  <span className='text-center font-bold mt-4 underline'>{genre}</span>
                  <span className='text-center mt-4'>released {year}, {pages} pages</span>
                </div>
                <p className='absolute bottom-0 text-xs mb-6 text-center w-full animate-bounce'>Drag to the right to add to your reading list</p>
              </div>
            </article>
          )
        })}
      </ul>
    </>
  )
}
