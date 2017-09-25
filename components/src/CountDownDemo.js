import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Countdown from 'rax-countdown';

class CountDownDemo extends Component {
    state = {
    };

    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        return (
            <View>
                <Countdown
                    timeRemaining={100000}
                    tpl="{d}天{h}时{m}分{s}秒"
                    onComplete={() => { console.log('complete'); }}
                />  
            </View>
        );
    }
}
export default CountDownDemo;