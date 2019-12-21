import React, {Component} from 'react';
import NavBar from "../NavBar/NavBar";
import axios from 'axios'
class AddQuote extends Component {
    state = {
        author: '',
        category: '',
        text: '',
    };
    getCategory= (event)=> {
this.setState({category:event.target.value})
    };
    getAuthor = (event) => {
        this.setState({author: event.target.value})
    };
    getQuoteText =(event) => {
      this.setState({text: event.target.value})
    };
    postQuote = async (event) => {
        event.preventDefault();
        const quote = {
            author: this.state.author,
            category: this.state.category,
            text: this.state.text
        };
        await axios.post('https://ayan-quotes.firebaseio.com/post.json', quote)
        this.props.history.push('/')
    };
    render() {
        return (
            <div>
                <NavBar/>
                <form className="addPost" onSubmit={this.postQuote}>
                    <h2>Submit new quote</h2>
                    <p>Category</p>
                    <input type="text" onChange={event => this.getCategory(event)} list="category"/>
                    <datalist id="category">
                        <option>Star Wars</option>
                        <option>James Bond</option>
                        <option>John Wick</option>
                        <option>Humour</option>
                        <option>Motivation</option>
                    </datalist>
                    <p>Author</p>
                    <input type="text" onChange={event => this.getAuthor(event)}/>
                    <p>Quote text</p>
                    <textarea name="" id="" cols="30" rows="10" onChange={event => this.getQuoteText(event)}/>
                    <p><button type="submit" className="btn btn-success">Save</button></p>
                </form>

            </div>
        );
    }
}

export default AddQuote;