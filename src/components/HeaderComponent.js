import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                {/*Jumbotron starts*/}
                    <div className="container-fluid text-sm-center p-5 bg-light">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1 className="display-2">Ristorante Con Fusion</h1>
                                <p className="lead">We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>

                            </div>
                        </div>
                    </div>
                {/*Jumbotron ends*/}
            </>
        );
    }
}

export default Header;