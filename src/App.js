import './App.css';

function App() {     
  return (

    <div className="App">
      <div className="container">
      <h1 className='title'>
        Home Automation and Monitoring System
        </h1>
        <div className='graph_div'>
        <iframe style={{border: "1px solid #cccccc"}} src="https://thingspeak.com/channels/1898365/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&timescale=daily&type=line"></iframe>
        <iframe style={{border: "1px solid #cccccc"}} src="https://thingspeak.com/channels/1898365/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
        <iframe style={{border: "1px solid #cccccc"}} src="https://thingspeak.com/channels/1898365/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
        </div>
      </div>
    </div>
  );
}


export default App;

