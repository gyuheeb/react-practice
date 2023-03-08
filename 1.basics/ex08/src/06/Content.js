import React , {Fragment} from 'react';
import  Clock01 from './Clock01';
import  Clock02 from './Clock02';
function Content() {
    return (
        <Fragment>
            <p>{`JSX 표현식 표기법({js expression})`}</p>
            <Clock01/>
            <Clock02/>
        </Fragment>
    );
}

export default Content;