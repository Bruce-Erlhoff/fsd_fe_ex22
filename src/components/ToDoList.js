import {useState} from 'react'

const ToDoList = () => {
    let [tasks,setTasks] = useState([]);
    let [num,setNum] = useState(1);
    let [taskDet,setTaskDet] = useState('');

    let clickHandler = () => {
        let taskObj = {"sno":num, "details":taskDet};
        tasks.push(taskObj);
        setTasks(tasks);
        num++
        setNum(num);
    }

    let onChangeHandler = (e) => {
        //console.log(e.target.value);
        setTaskDet(e.target.value);
        //console.log(taskDet);
    }


    return ( 
        <div className='container-fluid'>
            should see table below
            <div class="table-responsive">
                <table class="table table-primary table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map( (elem) => {
                                return (
                                    <tr key={elem.sno}>
                                        <td> {elem.sno} </td>
                                        <td> {elem.details} </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            Task details <input type="text" onChange={onChangeHandler} />
            <button onClick = {clickHandler} className="bg-primary">Add</button>
        </div>
     );
}
 
export default ToDoList;