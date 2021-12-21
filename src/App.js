import './App.css';
import {useState} from "react";

function App() {
    const [textInput, setTextInput] = useState("");
    const [textShow, setTextShow] = useState("");
    function handleClick () {

        setTextShow(textInput.toUpperCase());
        console.log(textInput)
    }
  return (
    <div className="App">
      <header className="App-header">
          <div container style={{textAlign:"center"}}>
              <div>
                  <label style={{maxWidth:"100%",maxHeight:"100%", marginRight:"10px"}}>
                      enter some character :
                  </label>
              </div>
              <div>
                      <input
                          type={"text"}
                          aria-label={"enter some character"}
                          color={"black"}
                          value={textInput}
                          onChange={(e)=>setTextInput(e.target.value)}
                          style={{width:"250px",height:"40px", marginRight:"10px"}}
                      />
                      <button
                          style={{width:"70px",height:"40px", marginRight:"10px"}}
                          onClick={handleClick}
                      >
                          SHOW
                      </button>
              </div>
              <div>
                  <label className='capatilize'>
                      {textShow}
                  </label>
              </div>
          </div>
      </header>
    </div>
  );
}

export default App;
