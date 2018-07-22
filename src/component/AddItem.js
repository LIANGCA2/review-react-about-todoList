import React,{Component} from "react"

class AddItem extends Component{
constructor(props){
    super(props);
    this.inputValue = React.createRef();

}

addItem =()=>{
    let content = this.inputValue.current.value;
    this.props.addItem(content);
    this.inputValue.current.value = "";
}
render(){
    return(<div>
        <input className="input-text" type="text" name="ListItem" ref={this.inputValue}/>
            <div id="button" onClick={(this.addItem).bind(this)}>Add</div>
    </div>)
}

}

export default AddItem