import React, {Component, useRef} from 'react';
import '../assets/scss/App.scss';

export default class App extends Component {
    onScroll(e){
        console.log(this.outerRef.clientHeight,this.innerRef.clientHeight, this.outterRef.scrollTop);
    
    }

    render() {
        return (
            <div
                className={'App'}
                ref={ref => this.outerRef = ref}
                onScroll={this.onScroll.bind(this)}
                  
                >
                <div
                    ref={ (ref) => this.innerRef = ref }>
                    <ul>
                        {Array.from({length: 100}, (_, i) => i + 1).map(i =>
                            <li key ={i}>
                                {`아이템 ${i} 입니다.`}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}