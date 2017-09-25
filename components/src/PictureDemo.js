import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Picture from 'rax-picture';

class PictureDemo extends Component {
    state = {
    };

    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        return (
            <View>
                <Picture
                    source={{
                        uri: '//gw.alicdn.com/tfscom/tuitui/TB2jLF1lXXXXXc7XXXXXXXXXXXX_!!0-dgshop.jpg',
                    }}
                    style={{
                        width: 375,
                        height: 252
                    }}
                    lazyload={true}
                    resizeMode="cover"
                />
            </View>
        );
    }
}
export default PictureDemo;