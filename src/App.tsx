import { useState } from 'react'
import './App.css'
import type { ConfigData } from './types/fields'
import * as C from './components/inputs'
import { validateField } from './utils/validators'
import { validationConfig } from './utils/vconfig'
import selectItems from './data/selectItems'
import EpsgData from './data/EpsgData'

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
  const [errors, setErrors] = useState<Partial<Record<keyof ConfigData, string>>>({});
  const update = <K extends keyof ConfigData>(key:K ,value:ConfigData[K]) => {
    setData((d)=>({...d,[key] : value}))
    const error = validateField(key, value, validationConfig[key]);
    setErrors((prev) => ({ ...prev, [key]: error || "" }));  
    console.log(value);
    
  }

  return (
    <div className='flex'>
      <div className='flex-1'>
        <C.StringInput label='Name' value={data.name} onChange={(v)=>update('name',v)} error={errors.name}/>
        <C.IntegerInput label='Integer' value={data.integer} onChange={(v)=>update('integer',v)} error={errors.integer}/>
        <C.FloatInput label='Float' value={data.float} onChange={(v)=>update('float',v)} error={errors.float}/>
        <C.DateInput label='Date' value={data.date} onChange={(v)=> update('date',v)} error={errors.date} />
        <C.DateTimeInput label="DateTime" value={data.datetime} onChange={(v) => update('datetime', v)} error={errors.datetime} />
        <C.DurationInput label="Duration" value={data.duration} onChange={(v) => update('duration', v)} error={errors.duration}/>
        <C.PointInput label="Point" value={data.point} onChange={(v) => update('point', v)} error={errors.point}/>
        <C.ExtentInput label="Extent" value={data.extent} onChange={(v) => update('extent', v)} error={errors.extent}/>
        <C.SelectInput label="Select unit" value={data.select} onChange={(v) => update('select', v)} items={selectItems} error={errors.select} />
        <C.ComboboxInput label="EPSG code" value={data.combobox} onChange={(v) => update('combobox', v)} items={EpsgData()} error={errors.combobox} />
      </div>
      <div className='flex-1'>
        <pre className='text-left flex justify-center'>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  )
}

export default App
