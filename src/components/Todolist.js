import React, { useState } from 'react'
import { isDOMComponent } from 'react-dom/cjs/react-dom-test-utils.development'
import { useHistory } from 'react-router-dom'
import Todoitem from './Todoitem'

const Todolist = () => {
    const history = useHistory()

    const handleOnClick = () => {
        history.push('/home')
    }

    //set the list[]
       const [state, setState] = useState({
            todo: '',
            todolist:[] //form of array
        })
    //for edit the value of todolist
        const [edit, setEdit] = useState({
            editTodo:'',
            editId:''
        })
        const [isUpdate, setIsUpdate] = useState(false)//set the setIsUpdate into default false
        const handleOnChangeEdit = (e) => {
            const { name, value} = e.target
            setEdit({...edit, [name]: value}) //if ...state every click will spread
        }
        //set into true
        const handleOnClickEdit = (index, value) =>{
            setIsUpdate(true)//set the setIsupdate into true
            setEdit({editTodo:value, editId: index})
        }
        //set into false
        const handleOnClickCancel = () =>{
            setIsUpdate(false)
        }
        const { todo, todolist } = state    //to remove the state.todolist.length and be declare as todolist.length 
        const { editTodo, editId } = edit 
        //Create todo list
        const handleOnChange = (e) => {
            const { name, value} = e.target
            setState({...state, [name]: value}) //if ...state every click will spread
        }
    //Create the todolist
        const createTodo = () => {
            const list = todolist //current ng todolist[]
            list.push(todo)// [] push the item from todo to list[]
            //saving the list[] to todolist[]
            setState({todo: '', todolist: list}) // name="todo" value=""
        }
    //Delete the item in array
    const deleteTodo = (index) => {
        const list = todolist
        list.splice(index, 1)//removing the item in list and then the item will delete set 1

        setState({todo: '', todolist: list}) // name="todo" value=""
    }
    //function update
    const updateTodo = (index) =>{
        const list  = todolist // totodlist []
        list[index] = editTodo // updated value 
        setState({todo:'',todolist:list})//todo 
        setEdit({editTodo:'', editId:''})//clear the value of editTodo
        setIsUpdate(false)//and then hide the edit forms
    }

    return (
        <>
         <div> Todolist</div>
         <button onClick={handleOnClick}>back</button>  
         <div className="todolist-main">
            <div className="form-wrapper">
                <input 
                    type="text"
                    name="todo"
                    placeholder="Enter todolist"
                    value={todo}
                    onChange={handleOnChange} //inserting the value into the list
                />
                <button onClick={createTodo}>Add</button>
            </div>
            <div className="table-main">
                <div className="header-wrapper">
                    <span>To Do</span>
                    <span>Action</span>
                </div>
                {/* for looping in reactjs */}
                {
                    todolist.length ? //first check the length
                        todolist.map((value, index) => (
                           <Todoitem
                            key={index}
                            index={index}
                            value={value}
                            delList={deleteTodo}
                            handleOnClickEdit={handleOnClickEdit}
                           />
                        )) : // else if false 
                        <span>No Records</span>
                    
                }    
                {
                    //resume for the next study 
                    isUpdate ?
                    <div className="form-wrapper"> 
                        <input 
                            type="text"
                            name="editTodo"
                            placeholder="Update Todo"
                            value={editTodo}
                            onChange={handleOnChangeEdit} //inserting the value into the list
                        />
                        <span>Index {editId}</span>
                        <button onClick={()=>updateTodo(editId)}>Update</button>
                        <button onClick={handleOnClickCancel}>Cancel</button>
                    </div> : ''   
                }
            
            </div> 
        </div>    
        </>
    )
}

export default Todolist