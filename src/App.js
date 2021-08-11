import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';


function App() {
  console.log('app is running')
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);


  const onClickHandler = useCallback(()=> {
    if(allowToggle) {
      setShowParagraph(prevShowParagraph=> !prevShowParagraph);

    }
 
  }, [allowToggle]);  

  const allowToggleHandler = ()=>{
    setAllowToggle(true);

  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler} >allow togggling</Button>
      <Button onClick={onClickHandler} >Click here</Button>
    </div>
  );
}

export default App;
