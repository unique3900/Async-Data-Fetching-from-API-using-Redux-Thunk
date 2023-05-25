import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/Slices/slice';

import '../App.css'
const HomePage = () => {
    const dispatcher = useDispatch();
    const selector = useSelector((state) => state);

    if (selector.loadingStatus) {
        return (
            <h1>Loading Data.........</h1>
        )
    }
    else if (selector.errorStatus) {
        return (
            <h1>Error Fetching Data</h1>
        )
    }
  return (
      <div>
          {
              !selector.datas ? (
                <button onClick={(e) => {
                    dispatcher(fetchData())
            }}>Fetch</button>
              ) : ("")
          }
 <div className="container" >
          
          {
              
             selector.datas && selector.datas.slice(0,30).map((item, idex) => {
                  return (
                   
                    <div className="card" key={idex}>
                        <div className="imageBox">
                            <img src={item.thumbnailUrl
} alt="" />
                        </div>
                        <div className="title">
                              <h3>{item.title}</h3>
                        </div>
                    </div>
          
               
                  )
             })
                  
              }
               </div>  

    </div>
  )
}

export default HomePage
