import { useState, type Key } from 'react'
import './App.css'
import type { ConfigData } from './types/fields'
import StringInput from './components/inputs/StringInput'
import inputStyle from './styles/formStyle'
import IntegerInput from './components/inputs/IntegerInput'
import FloatInput from './components/inputs/FloatInput'

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
  const update = <K extends keyof ConfigData>(key:K ,value:ConfigData[K]) => {
    setData((d)=>({...d,[key] : value}))
  }

  return (
    <div className='flex'>
      <div className='flex-1'>
        <StringInput inputStyle={inputStyle} label='Name' value={data.name} onChange={(v)=>update('name',v)} minLength={0} maxLength={30}/>
        <IntegerInput inputStyle={inputStyle} label='Integer' value={data.integer} onChange={(v)=>update('integer',v)} maxValue={10000}/>
        <FloatInput inputStyle={inputStyle} label='Float' value={data.float} onChange={(v)=>update('float',v)} />
        {/* ... */}
      </div>
      <div className='flex-1'>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  )
}

export default App
