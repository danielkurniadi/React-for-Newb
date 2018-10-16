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
            red: {backgroundColor: "#282c34"},
            yellow: {backgroundColor: "#282c34"},
            green: {backgroundColor: "#282c34"}
        };

        this.map_color = {
            red: {backgroundColor: "#ff4135"},
            yellow: {backgroundColor: "#eca231"},
            green: {backgroundColor: "#00d480"},
            off: {backgroundColor: "#282c34"}
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
        var remainder = this.state.seconds%10
        switch (remainder) {
            case (0):
                this.setState(state => ({
                    red: {backgroundColor: this.map_color.red},
                    yellow: {backgroundColor: this.map_color.off},
                    green: {backgroundColor: this.map_color.off}
                }));
                break;
            case (3):
                this.setState(state => ({
                    red: {backgroundColor: this.map_color.off},
                    yellow: {backgroundColor: this.map_color.yellow},
                    green: {backgroundColor: this.map_color.off}
                }));
                break;
            case (6):
                this.setState(state => ({
                    red: {backgroundColor: this.map_color.off},
                    yellow: {backgroundColor: this.map_color.off},
                    green: {backgroundColor: this.map_color.green}
                }));
                break;
            default:
                console.log("None", remainder)
                break;
        }
        
    }
  
    render() {
      return (
        <div className="traffic">
        <div className= "circle" style = {this.state.red}></div>
        <div className= "circle" style = {this.state.yellow}></div>
        <div className= "circle" style = {this.state.green}>Seconds: {this.state.seconds%10}</div>
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
