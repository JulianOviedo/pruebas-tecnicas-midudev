export const ReadingList = () => {
  return (
    <>
      <aside className='bg-primary flex flex-col w-full h-full border-dashed border-[10px] border-secondary rounded-xl'>
        <h1 className='self-center p-4 text-2xl font-bold text-secondary'>Reading List</h1>
        <hr className='bg-secondary h-1' />
        <div className='flex flex-col gap-4 justify-center items-center font-mono mt-10 text-center'>
          <p>No books in the reading list</p>
          <p>Drag here some books to your reading list</p>
        </div>
      </aside>
    </>
  )
}
