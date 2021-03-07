import './App.css';
import {Paper, Container, Button} from '@material-ui/core';
import data from './data/Q&A.json';
import {useState} from 'react';

function App() {
  const stuff = Object.keys(data);
  const [showAll, setShowAll] = useState(false);
  const [rand, setRand] = useState(0);
  function nextRand() {
    setRand(Math.floor(Math.random() * stuff.length));
  }
  function handleToggle(){
    setShowAll(!showAll);
  }
  function ViewWindow(props){
    const [content, setContent] = useState("");
    if(showAll){
      setContent(stuff.map((x, i) => <PaperWrap data={data[x]} number={i}></PaperWrap>));
    }
    else {
      setContent(stuff[nextRand()]);
    }
    return (content);
  }
  return (
    <div className="App">
      <Container>
        <Button variant="contained" onClick={handleToggle}>Toggle view</Button>
        <ViewWindow/>
      </Container>
    </div>
  );
}

function PaperWrap(props){
  const data = props.data;
  const Qindex = props.number;
  data.example = data.example == "" ? "no example set at this time" : data.example;
  const [showExample, setShowExample] = useState(false);
  function handleExampleView(){
    setShowExample(!showExample);
  }
  return (
    <div className="margind">
      <Paper>
        <div>{Qindex}</div>
        {data.question}
        <br />
        <div className={showExample ? "margind": ""}>{showExample ? data.example : ""}</div>
        <br />
        <Button color="primary" variant="contained" onClick={handleExampleView}>See example</Button>
        </Paper>
    </div>
  );
}

export default App;
