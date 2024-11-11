
import './App.css'
import Counter from './component/Counter'

function App() {

  return (
    <>
    <h1 className='text-center mt-5'>Counter app</h1>
      <div style={{minHeight:'70vh'}} className="d-flex justify-content-center align-items-center w-100"><Counter/></div>
    </>
  )
}

export default App
