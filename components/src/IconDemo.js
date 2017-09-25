import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Icon, { createIconSet } from 'rax-icon';

const IconFont1 = createIconSet({}, 'iconfont', 'https://at.alicdn.com/t/font_pkm0oq8is8fo5hfr.ttf');
const IconFont2 = createIconSet({
    hello: '\uE60f',
}, 'iconfont', 'https://at.alicdn.com/t/font_pkm0oq8is8fo5hfr.ttf');
const icon = 'https://gw.alicdn.com/tfs/TB1KRRuQXXXXXbwapXXXXXXXXXX-200-200.png';

class IconDemo extends Component {
    state = {
    };

    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        return (
            <View>
                <Icon source={{uri: icon}}/>
                <Icon fontFamily="iconfont" source={{uri: 'https://at.alicdn.com/t/font_pkm0oq8is8fo5hfr.ttf', codePoint: '\uE60f'}}/>
                <IconFont1 codePoint={'\uE60f'}/>
                <IconFont2 name={'hello'}/>
            </View>
        );
    }
}
export default IconDemo;