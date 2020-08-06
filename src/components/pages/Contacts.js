import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
            <section className="my-5 py-5 container">
                <div className=" row">
                <div className="col-md-7">
                    <div className="well well-sm">
                        <h3>Our Location</h3>
                    </div>     
                    <iframe width="600" height="300" id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0" >

                    </iframe>
                    </div>
                    <div className="col-md-5">
                        <div className="well well-sm">
                            <h3>Contact Us</h3>
                        </div>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Phone Number" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Text here .........."></textarea>
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contacts;
