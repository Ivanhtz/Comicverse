const { Component } = require("react");

class Footer extends Component {

    render() {

        return (
            <footer className="footer">
                <p className="footer__text">Texto Footer</p>

                <div className="footer__social">
                    <div className="fb">

                    </div>

                    <div className="ins">

                    </div>
                </div>
            </footer>
        )
    }

}

export default Footer;