import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Video from 'rax-video';

class VideoDemo extends Component {
    state = {
    };

    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        return (
            <View>
                <Video 
                    style={{ width: 750, height: 400 }} 
                    //autoPlay 
                    src="https://cloud.video.taobao.com/play/u/2780279213/p/1/e/6/t/1/d/ld/36255062.mp4" 
                />
            </View>
        );
    }
}
export default VideoDemo;