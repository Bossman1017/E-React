import React from 'react';
import Footer from '../Footer/Footer'
import HomeData from '../Home/HomeData'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Slider/>
                <Navbar />
                <HomeData />

                <Footer />
            </div>

        )
    }
}

export default Home;