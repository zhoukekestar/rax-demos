import { createElement, render, Component } from 'rax';
import Text from 'rax-text';
import View from 'rax-view';
import styles from './Clock.css';

class Clock extends Component {
  state = {
    time: Date.now(),
  };

  componentDidMount() {
    console.log('componentDidMount');
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log('render');
    const time = new Date(this.state.time).toLocaleTimeString();

    return (
      <View style={ styles.container }>
        <Text style={{ display: 'flex', flex: 1, justifyContent: 'center', color: '#f00' }}>{ this.props.name } { time }</Text>
      </View>
    )
  }
}

export default Clock;
