import RandomProduct from "./components/ProductCard.jsx"

function App() {  

  return (
    <div className="h-screen p-5">
      <div className='grid grid-cols-2 xl:grid-cols-4 gap-5'>
        <RandomProduct />
      </div>
    </div>
  )
}

export default App
