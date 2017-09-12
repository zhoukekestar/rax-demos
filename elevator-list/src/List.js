import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import GoTop from 'rax-gotop';
import ListView from 'rax-listview';

class List extends Component {
    state = {
        data: [{key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'}, 
        {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'}, 
        {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'}, 
        {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'}, 
        {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'}, 
        {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'}, 
        {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'}, 
        {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'}, 
        {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'}, 
        {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'}, 
        {key: 'tom'}, {key: 'jeck'}],
    };

    constructor(props, ctx) {
        super(props, ctx);
    }
    listItem = (item) => {
        return <Text>{item.key}</Text>; // 定义每行的结构
    }
    handleLoadMore = () => {
        setTimeout(() => {
            this.setState({
                data: [...this.state.data, { key: '我是新添加的' }]
            }); // 异步请求追加数据
        }, 3000);
    }
    render() {
        return (
            <View>
                <ListView
                    renderRow={this.listItem} 
                    dataSource={this.state.data}
                    onEndReached={this.handleLoadMore} >
                </ListView>
                <GoTop name="顶部" style={{width: 100, height: 100}}
                    onTop={() => { 
                        this.scrollview.scrollTo({y: 0});
                    }}
                    icon="//gtms03.alicdn.com/tps/i3/TB1rrfVJVXXXXalXXXXGEZzGpXX-40-40.png" />
            </View>
        );
    }
}
export default List;