import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('oi de dentro da mensagem')
    return (
      <div className="message">
      {
        this.props.successMessage ? <p className="success-message">{this.props.message}</p> : <p className="failure-message">{this.props.message}</p>
      }
      </div>
    )
  }


}

export default Message;
