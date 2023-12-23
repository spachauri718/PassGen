import { useCallback, useState , useEffect} from 'react'

function App() { 
  const [length, setlength ] = useState(8)  
  const [isCharAllowed,setIsCharAllowed] = useState(true)
  const [isNumberAllowed,setisNumberAllowed] = useState(true)
  const [password,setpassword] = useState("hjgcdxza")


  const passGen = useCallback(()=>{
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if(isCharAllowed) str += "!@#$%^&*-_+=[]{}~`"
    if(isNumberAllowed) str += "0123456789"

    for(let i = 1; i <= length; i++){
      let ch = Math.floor(Math.random()*str.length+1);
      console.log(str.charAt(ch));
      pass += str.charAt(ch);
    }
    setpassword(pass);
  },
  [length,isCharAllowed,isNumberAllowed])


  useEffect(()=>passGen(), [length,isCharAllowed,isNumberAllowed,passGen])
  

  return (
    <>
  <>
  <div className='flex flex-col items-center justify-center bg-gray-100 h-screen'>
    <h1 className='text-4xl font-extrabold mb-6 text-indigo-600'>Password Generator</h1>
    <p className='text-lg mb-8 text-gray-700'>{password}</p>
  </div>

  <div className='flex flex-col mt-8 mx-auto max-w-md'>
    <label className='text-lg mb-2 text-gray-800'>Password Length : {length}</label>
    <input
      type="range"
      min={1}
      max={49}
      value={length}
      onChange={(e) => { setlength(e.target.value) }}
      className='mb-4'
    />
    <div className='mb-4'>
      <input
        type="checkbox"
        defaultChecked={isCharAllowed}
        onChange={() => { setIsCharAllowed(!isCharAllowed); }}
        id='charCheckbox'
        className='mr-2'
      />
      <label htmlFor='charCheckbox' className='text-lg text-gray-800'>
        Include Special Characters
      </label>
    </div>
    <div className='mb-4'>
      <input
        type="checkbox"
        defaultChecked={isNumberAllowed}
        onChange={() => { setisNumberAllowed(!isNumberAllowed); }}
        id='numberCheckbox'
        className='mr-2'
      />
      <label htmlFor='numberCheckbox' className='text-lg text-gray-800'>
        Include Numbers
      </label>
    </div>
  </div>
</>

</>

  )
}

export default App
