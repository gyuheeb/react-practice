import React from 'react';
import Task from './Task';
const TaskList = ({tasks}) => {
    console.log(tasks);
    return (
        <div>
            <ul>
                {tasks.map(task => <Task 
                                    key={task.no}
                                    no={task.no}
                                    name={task.name}
                                    done={task.done} />)}
            </ul>
        </div>
    );
};

export default TaskList;