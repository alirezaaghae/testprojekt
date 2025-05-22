import { useState } from 'react'
import './App.css'
import type { ConfigData } from './types/fields'
import StringInput from './components/inputs/StringInput'

const initial: ConfigData = {
  name : 'Alireza Aghaei',
  integer : 42,
  float : 3.14,
  date : '2023-10-01',
  datetime : '2023-10-01T12:00:00Z',
  duration: 3600,
  point: [1.0, 2.0],
  extent: [1.0, 2.0, 3.0, 4.0],
  select: "km",
  combobox: "3857" 
}

function App() {
  const [data, setData] = useState<ConfigData>(initial)
  return (
    <div className='flex'>
      <div className=''>
        <StringInput/>
        {/* ... */}
      </div>
      <div className=''>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  )
}

export default App
