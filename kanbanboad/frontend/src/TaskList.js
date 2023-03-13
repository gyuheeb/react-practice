import React, {useState} from 'react';
import Task from './Task';
const TaskList = ({cardNo, tasks ,callback}) => {
    return (
        <div>
            <ul>
                {tasks.map(task => <Task 
                                    key={task.no}
                                    no={task.no}
                                    cardNo ={cardNo}
                                    name={task.name}
                                    done={task.done}
                                    callback={callback} />)}
            </ul>
        </div>
    );
};

export default TaskList;