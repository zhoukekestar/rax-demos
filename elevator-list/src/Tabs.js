import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TabHeader from 'rax-tabheader';

const styles = {
    container: {
      width: 750
    }
  };

  
class Tabs extends Component {
    state = {
    };

    renderItem = (item, index) => {
        return <View><Text>{item}</Text></View>;
    }
    renderSelect = (item, index) => {
        return <View><Text>{item}</Text></View>;
    }
    onSelect = (index) => {
        // do something
    }
    itemWidth = (item, index) => {
        return (item.length * 50 + 50) + 'rem';
    }

    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        return (
            <TabHeader 
                style={styles.container} 
                dataSource={['tab1','tab2','tab3','tab4']} 
                renderItem={this.renderItem} 
                renderSelect={this.renderSelect} 
                onSelect={this.onSelect}
                selected={0}
                itemWidth={this.itemWidth}
            />
        );
    }
}
export default Tabs;