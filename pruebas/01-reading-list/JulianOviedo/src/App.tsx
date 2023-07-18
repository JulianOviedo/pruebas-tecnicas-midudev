import libraryData from '../../books.json'
import { BookList } from './components/BookList'
import { ReadingList } from './components/ReadingList'

function App () {
  const { library } = libraryData
  return (
    <>
      <header className='text-6xl font-extrabold flex justify-center underline mb-14'>Book Library</header>
      <main className='p-4 grid grid-cols-[3fr,1fr] w-full h-full flex-wrap '>
        <BookList library={library} />
        <ReadingList />
      </main>
      <footer className='flex flex-row justify-center gap-6 text-center text-small p-4 w-full text-secondary'>
        <p>© Made by Julian Oviedo</p>
        <div>
          socialmedias
        </div>
      </footer>
    </>
  )
}

export default App
