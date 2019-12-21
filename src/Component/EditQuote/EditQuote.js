import React, {Component} from 'react';
import axios from 'axios'
class EditQuote extends Component {
    state = {
        author:'',
        category: '',
        text: '',
    };
   async componentDidMount() {
const id = this.props.match.params.id;
       let response = await axios.get(`https://ayan-quotes.firebaseio.com/post/${id}.json`);
this.setState({
    author: response.data.author,
    category: response.data.category,
    text: response.data.text
})
    }
    changeHandler = event => {
       this.setState({
[event.target.name] : event.target.value
       })
    };
   editQuote = async (event) =>{
       const id = this.props.match.params.id
const put = {
    author: this.state.author,
    category: this.state.category,
    text: this.state.text,
};
await axios.put(`https://ayan-quotes.firebaseio.com/post/${id}.json`, put);
       this.props.history.push('/')
   };


    render() {
        return (
            <div>
                <input onChange={this.changeHandler} type="text" value={this.state.author} name="author"/>
                <input onChange={this.changeHandler} type="text" value={this.state.category} name="category"/>
                <textarea onChange={this.changeHandler} name="text"  cols="30" rows="10" value={this.state.text}></textarea>
                <button onClick={this.editQuote}>save</button>
            </div>
        );
    }
}

export default EditQuote;