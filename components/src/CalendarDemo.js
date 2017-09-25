import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Calendar from 'rax-calendar';

class CalendarDemo extends Component {
    state = {
        selectedDate: '2017-10-01',
    };

    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        return (
            <View>
                <Calendar
                    titleFormat={'YYYY年MM月'}
                    prevButtonText={'上一月'}
                    nextButtonText={'下一月'}
                    onDateSelect={(date) => this.setState({ selectedDate: date })}
                />
            </View>
        );
    }
}
export default CalendarDemo;