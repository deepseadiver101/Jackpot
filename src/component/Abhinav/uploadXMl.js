import React, { Component } from 'react';

class uploadXMl extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedFile:null
        }
    }
    
    onChangeHandler=event=>{

        this.setState({
            selectedFile:event.target.files[0]
        })
    
    }
    onClickHandler = () => {
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        console.log(data.get('file'))
    }
    render() {
        return (
            <div>
                 <input type="file" name="file" onChange={this.onChangeHandler}/>
                 <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
            </div>
        );
    }
}

export default uploadXMl;