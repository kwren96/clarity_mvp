import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Button from "react-bootstrap/Button";
import "./App.css";
import Popup from "reactjs-popup";

const url =
  "https://googlemail.us20.list-manage.com/subscribe/post?u=448f77c8350ec8c06bfcb0917&amp;id=052d77d211";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showButtons: false
    };
  }

  whatToRender = () => {
    if (this.state.showButtons !== false) {
      return (
        <div className="rating-buttons">
          <Popup
            trigger={<div className="rating-button-warning">5</div>}
            modal
            closeOnDocumentClick
          >
            <div className="subscribe-info">
              <img src={require("./clarity-customer.png")} />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2>
                If you would pay £50 pcm to use this tool please enter your
                email below
              </h2>
              <MailchimpSubscribe url={url} />
            </div>
          </Popup>
          <Popup
            trigger={<div className="rating-button-safe">80</div>}
            modal
            closeOnDocumentClick
          >
            <div className="subscribe-info">
              <img src={require("./clarity-customer.png")} />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2>
                If you would pay £50 pcm to use this tool please enter your
                email below
              </h2>
              <MailchimpSubscribe url={url} />
            </div>
          </Popup>
          <Popup
            trigger={<div className="rating-button-warning">5</div>}
            modal
            closeOnDocumentClick
          >
            <div className="subscribe-info">
              <img src={require("./clarity-customer.png")} />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2>
                If you would pay £50 pcm to use this tool please enter your
                email below
              </h2>
              <MailchimpSubscribe url={url} />
            </div>
          </Popup>
          <Popup
            trigger={<div className="rating-button-safe">98</div>}
            modal
            closeOnDocumentClick
          >
            <div className="subscribe-info">
              <img src={require("./clarity-customer.png")} />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2>
                If you would pay £50 pcm to use this tool please enter your
                email below
              </h2>
              <MailchimpSubscribe url={url} />
            </div>
          </Popup>
          <Popup
            trigger={<div className="rating-button-mid">50</div>}
            modal
            closeOnDocumentClick
          >
            <div className="subscribe-info">
              <img src={require("./clarity-customer.png")} />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2>
                If you would pay £50 pcm to use this tool please enter your
                email below
              </h2>
              <MailchimpSubscribe url={url} />
            </div>
          </Popup>
          <Popup
            trigger={<div className="rating-button-warning">10</div>}
            modal
            closeOnDocumentClick
          >
            <div className="subscribe-info">
              <img src={require("./clarity-customer.png")} />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2>
                If you would pay £50 pcm to use this tool please enter your
                email below
              </h2>
              <MailchimpSubscribe url={url} />
            </div>
          </Popup>
          <Popup
            trigger={<div className="rating-button-mid">50</div>}
            modal
            closeOnDocumentClick
          >
            <div className="subscribe-info">
              <img src={require("./clarity-customer.png")} />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2>
                If you would pay £50 pcm to use this tool please enter your
                email below
              </h2>
              <MailchimpSubscribe url={url} />
            </div>
          </Popup>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="clarity-button">
            <Button
              variant="warning"
              className="btn-lg"
              onClick={e => this.setState({ showButtons: true })}
            >
              Clarity
            </Button>
            {this.whatToRender()}
          </div>
        </header>
      </div>
    );
  }
}
