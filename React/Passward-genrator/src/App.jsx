import {useState, useCallback} from "react";

function App() {

  const  [length, setlength] = useState(10);
  const [isNumberAllowed, setIsNumberAllowed] =useState(false);
  const [isCharAllowed, setIsSymbolAllowed] =useState(false);
  const [passward, setPassward] = useState("");

  const passwardGenrator =useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(isNumberAllowed) str += "0123456789"
    if(isCharAllowed) str += "!@#$%^&*()_+{}[]|:;'<>,.?/"

    for(let i=1;i<length;i++){
      let charIndex = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(charIndex)
    }
    setPassward(pass)
  }, [length, isNumberAllowed, isCharAllowed])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-xl my-8 text-orange-400 bg-gray-600 px-4 py-3">
      <h1 className="text-3xl text-center text-white my-3">Passward Generator</h1>
     <div className="flex rounded-xl shadow-md overflow-hidden ab-4">
      <input 
      type="text"
      value={passward}
      className="outline-none w-full py-1 px-3"
      placeholder="passward"
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
      </div>
    </div>
    </>
  )
}

export default App;
