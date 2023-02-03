
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BasicDatePicker } from './components/BasicDatePicker';
import { Home } from './components/Home'
import './App.css'
import { useState } from 'react';
import { useCards } from './hooks/cards';
import { ErrorMessage } from './components/ErrorMessage';


function App() {

  const [page, setPage] = useState(1)

  const { cards, cleanData, hasMore, error } = useCards(page)


  const nextPage = () => {
    setPage(prev => prev === 0 ? prev + 2 : prev + 1)
  }

  const handlerChange = () => {
      if (page > 1) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
      cleanData()
      setPage(prev => prev === 0 ? 1 : 0)
    }



  return (
    <>
      <div className="card-header  sticky-top bg-white">
        <h1 className='text-center mt-3'>Gallery Pictures</h1>
        <div className="py-2 text-center">
          <BasicDatePicker onChange={handlerChange} />
        </div>
      </div>
      {!error ? <Home list={cards} nextPage={nextPage} hasMore={hasMore} /> : <ErrorMessage message={error} />}
    </>
  );
}

export default App;
