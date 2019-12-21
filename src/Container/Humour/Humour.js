import React, {Component} from 'react';
import axios from "axios";
import NavBar from "../../Component/NavBar/NavBar";

class Humour extends Component {
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
        const a = this.state.quote;
        console.log(a);
        const q = [];
        console.log(this.state.quote);
        for (let key in a){
            key ={
                author: a[key].author,
                category: a[key].category,
                text: a[key].text
            }
            q.push(key)
        }
        return (

            <div>
                <NavBar/>
                {q.map(quote => {
                    if (quote.category === 'Humour'){
                        return(
                            <div style={{border: '1px solid #ccc'}} key={quote.id}>
                                <p>Author:{quote.author}</p>
                                <p>Categories:{quote.category}</p>
                                <p>text:{quote.text}</p>
                            </div>
                        )
                    }
                })}
            </div>
        );
    }
}

export default Humour;