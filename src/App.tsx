import React, { useState } from 'react'

const App = () => {
  const data = [
    ['Hotel 1A', ['A']],
    ['Hotel 1B', ['B']],
    ['Hotel 1C', ['C']],
  ]

  const [clickedHotel, setClickedHotel] = useState(null)

  const changeText = (e: any, index: any, item: any) => {
    if (item[e.target.value] === item[index]) {
      setClickedHotel(index)
    }
  }
  return (
    <div className='mx-auto'>
      <div className='flex p-16'>
        {data.map((item, index) => (
          <div className='mx-16' key={index}>
            <div className='p-12'>
              <button onClick={(e) => changeText(e, index, item)} value={index}>
                {item[0]}
              </button>
              <div>{clickedHotel === index ? <div>K</div> : item[1][0]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
