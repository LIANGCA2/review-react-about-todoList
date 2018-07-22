import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./component/Title";
import AddItem from "./component/AddItem";
import TodoList from "./component/TodoList";
import Filter from "./component/Filter";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            status: "all"
        }
    }

    addItem = (content) => {
        let id = this.generateUUID();
        let todoList = this.state.todoList;
        //todoList.push({id:id,content:content,isComplete:false})
        todoList.push({id,content,isComplete:false})
        console.log(todoList);
        this.setState({
            todoList:todoList
            }
        )
    }

    generateUUID = () => {
        /*jshint bitwise:false */
        var i,
            random;
        var uuid = '';

        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12
                ? 4
                : (i === 16
                    ? (random & 3 | 8)
                    : random)).toString(16);
        }
        return uuid;
    }
    toggleCheckStatus = (id)=>{
        console.log("dddd");
        let list = this.state.todoList;
       let item = list.find((item)=>item.id ===id)
        let isComlete = item.isComplete
        list.find((item)=>item.id ===id).isComplete = !isComlete
       this.setState({
           todoList:list
       })
    }
    render() {
        return (
            <div className="container">
                <Title/>
                <AddItem addItem={(content) => this.addItem(content)}/>
                <br/>
                <TodoList todoList = {(this.showTodoList).bind(this)} toggleCheckStatus={(id)=>(this.toggleCheckStatus(id))} changeContent={(content,id)=>this.changeContent(content,id)}/>
                <Filter status = {this.state.status} changeTab={(status)=>this.changeTab(status)}/>


            </div>
        );
    }
    changeContent =(content,id)=>{
        let list = this.state.todoList;
         list.find((item)=>item.id ===id).content = content;
         this.setState({
             todoList:list
         })

    }
    changeTab = (status)=>{
        this.setState({
            status: status
        })
    }
    showTodoList = ()=>{
        console.log(this.state.todoList);
        return this.state.todoList.filter((item)=> {
            return this.state.status == 'all'?true:this.state.status == 'active'?(!item.isComplete):item.isComplete

        } )
    }
}

export default App;
