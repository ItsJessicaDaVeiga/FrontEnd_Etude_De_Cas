import MoviesList from './components/moviesList';

function App() {

  return (
    <div className='h-full bg-amber-50 pb-10'>
      <div className='p-6 border-b-2 border-lavande'>
        <span className='text-5xl font-bold text-darklavende'>Hello, Djob!</span>
      </div>
      <MoviesList />
    </div>
  )
}

export default App
