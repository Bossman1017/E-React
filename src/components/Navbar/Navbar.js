import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <nav id="navbar">
                        <div class="container__nav">
                            <img class="flaming-logo"
                                src="https://cdn10.bigcommerce.com/s-ksslwy/products/3211/images/8351/Blue_flame_new__88263.1582768916.1280.1280.png?c=2"
                                alt="flamingcontroller" />

                            <ul>
                                <li><Link to = '/'>Get Some Game</Link></li>
                                <li><Link to = '/'>Home</Link></li>
                                <li><Link to = '/Product'>Merch</Link></li>
                                <li><Link to = '/Contact'>Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar;