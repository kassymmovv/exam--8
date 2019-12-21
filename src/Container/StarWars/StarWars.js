import React, {Component} from 'react';
import axios from 'axios'
import NavBar from "../../Component/NavBar/NavBar";
import {NavLink} from "react-router-dom";
class StarWars extends Component {
    state = {
        quote: [],
    };
   async componentDidMount() {
        const response = await axios.get('https://ayan-quotes.firebaseio.com/post.json');
       if (response.data){
           this.setState({quote: response.data})
       }
    }
    delete =  () => {
        const quotes = [...this.state.quote];
         quotes.map((quo,id) => {
            axios.delete(`https://ayan-quotes.firebaseio.com/post/${id}.json`);
            quotes.splice(quo[id],1)
        });
        this.setState({quotes});

        console.log(this.state.quotes);
    };
    render() {
        console.log(this.state.quote);
      const a = this.state.quote;

        const q = [];

        for (let key in a){
            key ={
                author: a[key].author,
                category: a[key].category,
                text: a[key].text,
                id:key
            };
            q.push(key)
        }
        return (

            <div>
            <NavBar/>
                {q.map(quote => {
                    if (quote.category === 'Star Wars'){
                        return(
                            <div style={{border: '1px solid #ccc'}} key={quote.id}>
                                <p>Author:{quote.author}</p>
                                <p>Categories:{quote.category}</p>
                                <p>text:{quote.text}</p>
                                <NavLink to={`/${quote.id}`}>edit</NavLink>
                                <button onClick={ this.delete}>delete</button>
                            </div>
                        )
                    }
                })}
            </div>
        );
    }
}

export default StarWars;