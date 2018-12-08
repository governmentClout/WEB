import React, { Component } from "react";

class ChatInterface extends Component {
    
    render() {
        return(
            <div className="chat-interface">
                <OtherChat />
                <OwnerChat />
                <OtherChat />
                <OtherChat />
                <OwnerChat />
                <OtherChat />
                <OwnerChat />
                <ChatInput />
            </div>
        )
    }
}
const OtherChat = () => (
    <div className="chat-message-wrapper">
        <div className="message-owner">
        <img src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="chat head" />
        </div>
        <div className="message-wrapper">
        <p className="other-chat-message">Lorem ipsum dolor sit amet</p>
        <p>1 day ago</p>
        </div>
    </div>
)

const OwnerChat = () => (
    <div className="chat-message-wrapper owner">
        <div className="message-wrapper">
            <p className="owner-chat-message">{this.props.message ? this.props.message : "Lorem ipsum dolor sit amet, consectetuer fid adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet do"}</p>
            <p className="message-time">1 day ago</p>
        </div>
        <div className="message-owner">
            <img src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="chat head" />
        </div>
    </div>
)

class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            loading: false
        }
    }

    dataChange(ev) {
        this.setState({
            message: ev.target.value
        });
    }
    keyPress = e => {
        if(e.keyCode == 13){
            alert(this.state.message)
        }
     }

    sendMessage = () => {
        alert(this.state.message)
    }
    
    render() {
        return  (
            <div className="chat-input-wrapper">
                <input
                    className="form-control"
                    type="text" value={this.state.message}
                    onChange={this.dataChange.bind(this)}
                    name="message"
                    placeholder="Enter message here..."
                    onKeyDown={this.keyPress} 
                />
                <button className="btn btn-gclout-blue" onClick={this.sendMessage}>SEND</button>
            </div>
        )
    }
}
export default ChatInterface;