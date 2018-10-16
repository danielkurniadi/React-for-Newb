import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



class Traffic extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            seconds: 0,
            red: "#ff4135",
            yellow: "#282c34",
            green: "#282c34"
        };

        this.map_color = {
            red:  "#ff4135",
            yellow: "#eca231",
            green: "#00d480",
            off: "#282c34"
        };

    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
      this.updateTrafficLight()
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }

    updateTrafficLight(){
        
        switch (this.state.seconds%12) {
            case (0):
                this.setState({
                    red: this.map_color.red,
                    yellow: this.map_color.off,
                    green: this.map_color.off
                });
                break;

            case (4):
                this.setState({
                    red: this.map_color.off,
                    yellow: this.map_color.yellow,
                    green: this.map_color.off
                });
                break;

            case (8):
                this.setState({
                    red: this.map_color.off,
                    yellow: this.map_color.off,
                    green: this.map_color.green
                });
                break;

            default:
                break;
        }
        
    }
  
    render() {
      return (
        <div className="traffic">
        <div className= "circle" style = {{backgroundColor: this.state.red}}></div>
        <div className= "circle" style = {{backgroundColor: this.state.yellow}}></div>
        <div className= "circle" style = {{backgroundColor: this.state.green}}>Seconds: {this.state.seconds%10}</div>
        </div>
      );
    }

  }
  
ReactDOM.render(<Traffic />, document.getElementById('traffic-light'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
