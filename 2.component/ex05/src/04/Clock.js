import React, {useEffect} from 'react';
import SevenSegmentLED from "./SevenSegmentLED";
import SessionAmPm from "./SessionAmPm";
import './assets/scss/Clock.scss';

export default function Clock({message, hours, minutes, seconds}) {



    return (
        <div className={'clock-display'}>
            <h2>{message}</h2>
            <div className={'Clock'}>
                <SevenSegmentLED number={('0'+(hours>12 ? hours - 12 : hours)).slice(-2)} colon={true}/>
                <SevenSegmentLED number={('0'+ minutes).slice(-2)} colon={true}/>
                <SevenSegmentLED number={('0'+ seconds).slice(-2)} colon={false}/>
                <SessionAmPm session={parseInt(hours) >= 12 ? 'pm' : 'am'}/>
            </div>
        </div>
    );
}