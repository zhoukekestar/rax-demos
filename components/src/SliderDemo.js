import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Slider from 'rax-slider';
import Image from 'rax-image';

const styles = {
    image: {
        height: '100rem',
        width: '750rem',
    }
}

class SliderDemo extends Component {
    state = {
    };

    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        return (
            <View style={styles.image}>
                <Slider style={styles.image}
                    width="750rem" 
                    height="100rem"
                    autoPlay={true}
                    loop={true}
                    showsPagination={true}
                    >
                    <View style={styles.image}>
                        <Image style={styles.image} source={{uri: '//img.alicdn.com/tps/TB1m2LyJFXXXXbHXpXXXXXXXXXX-1125-352.jpg_q50.jpg'}} />
                    </View>
                    <View style={styles.image}>
                        <Image style={styles.image} source={{uri: '//img.alicdn.com/tps/TB1ogUvJFXXXXaAXXXXXXXXXXXX-1125-352.jpg_q50.jpg'}} />
                    </View>
                    <View style={styles.image}>
                        <Image style={styles.image} source={{uri: '//gw.alicdn.com/tps/i4/TB1pgxYJXXXXXcAXpXXrVZt0FXX-640-200.jpg_q50.jpg'}} />
                    </View>
                    <View style={styles.image}>
                        <Image style={styles.image} source={{uri: '//gw.alicdn.com/imgextra/i4/3/TB2STElaohnpuFjSZFPXXb_4XXa_!!3-0-yamato.jpg_q50.jpg'}} />
                    </View>
                </Slider>
            </View>
        );
    }
}
export default SliderDemo;