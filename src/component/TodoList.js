import React, {Component} from "react"


class TodoList extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let list = this.props.todoList()
        return (<ol>
            {this.genetateTodoList(list)}
        </ol>)
    }
    toggleCheckStatus = (event,id)=>{

        this.props.toggleCheckStatus(id);

}
    changeContent =(event)=>{
        event.target.contentEditable = true;
    }
    checkKey = (event,id)=>{
        let keyCode = event.keyCode==null?event.which:event.keyCode
        if(keyCode=='13'){
            console.log(event.target)
            event.target.contentEditable = false;
            this.props.changeContent(event.target.innerText,id)

        }
}
    genetateTodoList = (list)=>{
       return list.map((item)=>{
        return <li id={item.id} className={item.isComplete ? "checked" : ""} key = {item.id}  onDoubleClick={(event)=>this.changeContent(event)} onKeyDown={(event,id)=>this.checkKey(event,item.id)}>
            <input name="done-todo" type="checkbox" className="done-todo"
                   checked={item.isComplete}  onClick={(event,id)=>this.toggleCheckStatus(event,item.id)} />{item.content}</li>
        }

    )
}
}

export default TodoList