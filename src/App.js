import './App.css';
import {Paper, Container, Button} from '@material-ui/core';
import data from './data/Q&A.json';
import {useState} from 'react';

function App() {
  const stuff = Object.keys(data);
  return (
    <div className="App">
      <Container>
        {stuff.map((x, i) => <PaperWrap data={data[x]} number={i}></PaperWrap>)}
      </Container>
    </div>
  );
}

function PaperWrap(props){
  const data = props.data;
  const Qindex = props.number;
  data.example = data.example == "" ? "no example set at this time" : data.example;
  const [showExample, setShowExample] = useState(false);
  function showNow(){
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
        <Button color="primary" variant="contained" onClick={showNow}>See example</Button>
        </Paper>
    </div>
  );
}

export default App;
