import React, {Component} from 'react';
import Article from '../../Component/Article/Article';
import './Home.css';
import Header from '../../Component/Header/Header';

class Home extends Component {
    render(){
        return (
               
            <div>
                <Header/>
            <Article img="1.jpg" name="Roasted Chicken"desc="by me"harga="Rp 30.000"/><br></br>
            <Article img="2.jpg"name="Walang Bakar" desc="by me"harga="Rp 30.000"/><br></br>
            <Article img="3.jpg"name="Menu Sarapan" desc="by me"harga="Rp 30.000"/><br></br>
            <Article img="4.jpg"name="Turkish Delight" desc="by me"harga="Rp 30.000"/><br></br>
            <Article img="5.jpg"name="Sop Kaki Kambing" desc="by me"harga="Rp 30.000"/><br></br>
            </div>
            
        )

    }
}

export default Home;