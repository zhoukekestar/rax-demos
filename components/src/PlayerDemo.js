import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Player from 'rax-player';

class PlayerDemo extends Component {
    state = {
    };

    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        return (
            <View>
                <Player
                style={{
                    width: '750rem',
                    height: '400rem'
                }}
                poster="https://gw.alicdn.com/tps/TB1QsDBKFXXXXcQXpXXXXXXXXXX-750-200.png"
                src="https://cloud.video.taobao.com/play/u/2780279213/p/1/e/6/t/1/d/ld/36255062.mp4"
                controls
                hasFullScreen
                originFullscreen={false}
                startBtn
                //autoPlay
                />
            </View>
        );
    }
}
export default PlayerDemo;