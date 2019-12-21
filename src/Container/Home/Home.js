import React, {Component} from 'react';
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import NavBar from "../../Component/NavBar/NavBar";
class Home extends Component {

    state = {
        quotes: [],
    };

    async componentDidMount() {
        const request = await axios.get('https://ayan-quotes.firebaseio.com/post.json');
        let quotes = [];
        for (let key in request.data){
            quotes.push({
                category: request.data[key].category,
                author: request.data[key].author,
                text: request.data[key].text,
                id: key
            })
        }
        this.setState({quotes})
    }
    delete = async (e) => {
        const quotes = [...this.state.quotes];
       await quotes.map((quo,id) => {
             axios.delete(`https://ayan-quotes.firebaseio.com/post/${e}.json`);
             quotes.splice(quo[id],1)
        });
        this.setState({quotes});

    };


    render() {


        return (
            <div>
                <NavBar/>


                {this.state.quotes.map(quote => {
                    return(
                        <div style={{border: '1px solid #ccc'}} key={quote.id}>
                            <p>Author:{quote.author}</p>
                            <p>Categories:{quote.category}</p>
                            <p>text:{quote.text}</p>
                            <NavLink to={`/${quote.id}`}>edit</NavLink>
                            <button onClick={(e) => this.delete(quote.id,e)}>delete</button>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Home;