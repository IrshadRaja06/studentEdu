import { useState } from 'react'
import './App.css'
import Menu from './Menu'
import Header from './Header'
import Card from './card'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="row">
      <div className="col-2 bg-primary">
        <Menu />
      </div>
      <div className="col-10 ">
        <Header />
        <div className="row text-center px-5 mx-5">
          <div className="col px-5 py-2">
              <Card 
                icon="fa-solid fa-user-large" 
                number="8" 
                data="Regular Students" 
                bgColor="bg-danger"
              />
          </div>
           <div className="col px-5 py-2">
                <Card 
                  icon="fa-solid fa-user-tie" 
                  number="13" 
                  data="Remedual Student" 
                  bgColor="bg-primary" className='col'
                />            
            </div> 
            <div className="col px-5 py-2">
                <Card 
                  icon="fa-solid fa-people-group" 
                  number="00" 
                  data="In paid clubs" 
                  bgColor="bg-success" className='col'
                />            
            </div> 
        </div>
       
        <Content />
      </div>
     </div>
    </>
  )
}

export default App
