import {useState, useCallback, useEffect} from "react";

function App() {

  const  [length, setlength] = useState(10);
  const [isNumberAllowed, setIsNumberAllowed] =useState(false);
  const [isCharAllowed, setIsSymbolAllowed] =useState(false);
  const [password, setPassword] = useState("");

  const passwordGenrator = useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(isNumberAllowed) str += "0123456789"
    if(isCharAllowed) str += "!@#$%^&*()_+{}[]|:;'<>,.?"

    for(let i=0;i<length;i++){
      let charIndex = Math.floor(Math.random()*str.length)
      pass+=str.charAt(charIndex)
    }
    setPassword(pass)
  }, [length, isNumberAllowed, isCharAllowed])

  useEffect(()=>{
     passwordGenrator()
  }, [length, isNumberAllowed, isCharAllowed, passwordGenrator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-xl my-8 text-orange-400 bg-gray-600 px-4 py-3">
      <h1 className="text-3xl text-center text-white my-3">Password Generator</h1>
     <div className="flex rounded-xl shadow-md overflow-hidden ab-4">
      <input 
      type="text"
      value={password}
      className="outline-none w-full py-1 px-3"
      placeholder="password"
      readOnly
      style= {{backgroundColor : "white"}}
      />
      <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
      </div>  
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range" 
          min={10}
          max={80}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label htmlFor="">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        name=""
        id="numInput"
        checked={isNumberAllowed}
        onChange={()=> {setIsNumberAllowed((prev) => !prev)}}
        />
        <label htmlFor="numInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input
         type="checkbox"
         id="charInput"
         defaultChecked={isCharAllowed}
         onChange={() => {setIsCharAllowed((prev) => !prev)}}
        />
        <label htmlFor="charInput">Characters</label>
        </div>
        </div>
      </div>
    </>
  )
}

export default App;
