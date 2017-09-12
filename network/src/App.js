import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Touchable from 'rax-touchable';
import styles from './App.css';

class App extends Component {
  state = {
    data: {},
  };

  constructor(props, ctx) {
    super(props, ctx);
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    fetch('https://httpbin.org/ip')
      .then(res => res.json())
      .then(data => {
        this.setState({
          data,
        })
      });
  }

  render() {
    return (
      <View style={styles.app}>
        <Touchable onPress={ this.fetchData }>
          <Text>Click me to fetch data.</Text>
        </Touchable>
        <Text>Data: { JSON.stringify(this.state.data) }</Text>
      </View>
    );
  }
}

export default App;
