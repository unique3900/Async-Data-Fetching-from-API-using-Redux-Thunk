import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/Slices/slice';

const HomePage = () => {
    const dispatcher = useDispatch();
    const selector = useSelector((state) => state);
    console.log(selector);
  return (
      <div>
          {
              !selector.datas ? (
                <button onClick={(e) => {
                    dispatcher(fetchData())
            }}>Fetch</button>
            ) : " hey"
          }

          

    </div>
  )
}

export default HomePage
