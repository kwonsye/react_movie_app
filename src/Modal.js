import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends Component{

    static propTypes = {
        onClose : PropTypes.func.isRequired,
        content : PropTypes.string.isRequired,
        show : PropTypes.bool,
    }
    render(){
        if(!this.props.show){
            return null;
        }

        return(
            <div className="backdrop">
                <div className="modal">
                    {this.props.content}
                    <p></p>
                    <div className="button_base b03_skewed_slide_in" onClick={this.props.onClose}>
                        <div>cancel</div>
                        <div></div>
                        <div>cancel</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;
