import * as React from 'react';
import testimonialsMock from '../api/mock/testimonials';

//TODO: Redux-ify state management

interface ITestimonialsProps {
    interval: number;
}

interface ITestimonialsState {
    pos: number;
}

export default class Testimonials extends React.Component<ITestimonialsProps, ITestimonialsState> {
    timerID: any;
    constructor(props: ITestimonialsProps) {
        super(props);
        this.state = {
            pos: 0
        };
    }
    onTimerElapsed() {
        let pos = this.state.pos;
        if (pos < testimonialsMock.length - 1) {
            pos++;
        } else {
            pos = 0;
        }
        this.setState({ pos: pos }); 
        this.timerID = setTimeout(this.onTimerElapsed.bind(this), this.props.interval);
    }
    componentDidMount() {
        this.timerID = setTimeout(this.onTimerElapsed.bind(this), this.props.interval);
    }
    componentWillUnmount() {
        clearTimeout(this.timerID);
    }
    render(): JSX.Element {
        let part = testimonialsMock[this.state.pos];
        
        return <div className="p1 rounded">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img width={320} height={320} className="block mx-auto" src={part.thumbnail} />
            </div>
            <h4 className="text-center">{part.title}</h4>
            <p className="text-center">{part.description}</p>
        </div>;
    }
}