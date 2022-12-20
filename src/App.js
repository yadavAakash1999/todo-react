
import { useState } from 'react';
import './App.css';

function App() {
    const [task, settask] = useState('');
    const [list, setList ] = useState([]);

    function addTodo(e){
        e.preventDefault();
        if(!task) return;

        const updatedList = [...list,task];
        setList(updatedList);
        settask('');

    }

    function removeTask(i){
            const updatedListData = list.filter((ele, id)=>{
                return i!==id;
            })
            setList(updatedListData);
    }

    return (
        <div className="App">
            <header>
                <h1>Task List</h1>
                <form id="new-task-form">
                    <input type="text" id="new-task-input" placeholder="what do you have planned?" value={task} onChange={(e) => settask(e.target.value)} />
                    <input type="submit" value="submit" id="new-task-submit" onClick={(e)=>addTodo(e)} />
                </form>
            </header>

            <main>
                <section className="task-list">
                    <h2>Tasks</h2>
                    <div id="tasks">
                        {
                            list!==[] && list.map((data, i)=> {
                                return(
                                    
                                    <div key={i}>
                                        <div className='task'>{data}
                                        <div className='actions'>
                                        {/* <button className="edit" onClick={}>Edit</button> */}
                                         <button className="delete" onClick={()=>removeTask(i)}>Delete</button>
                                        </div></div>
                                    </div> 
                                    
                                )
                            })
                        }
                    </div>




                </section>
            </main>
        </div>
    );
}

export default App;
