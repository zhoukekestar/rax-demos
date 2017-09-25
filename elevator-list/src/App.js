import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './App.css';
import ScrollView from 'rax-scrollview';
import ListView from 'rax-listview';

import Picture from 'rax-picture';

import GoTop from 'rax-gotop';
import TopSlider from './TopSlider';
import Tabs from './Tabs';
import List from './List';

class App extends Component {
  render() {
    return (
      <ScrollView>
        <TopSlider />
        <Tabs />
        <List />
      </ScrollView>
    );
  }
}

export default App;
