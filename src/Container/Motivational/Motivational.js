import React, {Component} from 'react';
import axios from "axios";
import NavBar from "../../Component/NavBar/NavBar";
import {NavLink} from "react-router-dom";

class Motivational extends Component {
    state = {
        quote: [],
    };
    async componentDidMount() {
        const response = await axios.get('https://ayan-quotes.firebaseio.com/post.json')
        if (response.data){
            this.setState({quote: response.data})
        }
    }

    render() {


        const q = [];
        console.log(this.state.quote);
        for (let key in this.state.quote){
            key ={
                author: this.state.quote[key].author,
                category: this.state.quote[key].category,
                text: this.state.quote[key].text,
                id: key
            }
            q.push(key)
        }
        return (

            <div>
                <NavBar/>
                {q.map(quote => {
                    if (quote.category === 'Motivation'){
                        return(
                            <div style={{border: '1px solid #ccc'}} key={quote.id}>
                                <p>Author:{quote.author}</p>
                                <p>Categories:{quote.category}</p>
                                <p>text:{quote.text}</p>
                                <NavLink to={`/${quote.id}`}>edit</NavLink>

                            </div>
                        )
                    }
                })}
            </div>
        );
    }
}

export default Motivational;