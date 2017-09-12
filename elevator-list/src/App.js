import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './App.css';
import ListView from 'rax-listview';
import Picture from 'rax-picture';

import GoTop from 'rax-gotop';
import TopSlider from './TopSlider';
import Tabs from './Tabs';
import List from './List';

class App extends Component {
  render() {
    return (
      <View>
        <TopSlider />
        <Tabs />
        
        <List />
      </View>
    );
  }
}

export default App;
