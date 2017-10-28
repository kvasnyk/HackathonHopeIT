import AxiosHelper from '../../helpers/AxiosHelper';
import { Link } from 'react-router-dom';
import Page from '../shared/Page';
import React from 'react';
import T from 'i18n-react';

class UserPage extends React.Component {
  constructor() {
    super();

    this.state = {
      isMessagesBoxOpen: false,
      user: {
        MessagesCount: 0
      }
    };
  }

  componentDidMount = () => {
    AxiosHelper.getUser(this.props.match.params.userId)
      .then(response => {
        this.setState(prevState => ({ ...prevState, user: response.data }));
      })
      .catch(error => {
        alert('ERROR');
      });
  };

  handleMessagesClick = () => {
    this.setState(prevState => ({ ...prevState, isMessagesBoxOpen: !prevState.isMessagesBoxOpen }));
  };

  render = () => {
    const messagesBox = (
      <div className={this.state.isMessagesBoxOpen ? "user-messages-open" : "user-messages-close"}>
        {!this.state.user || !this.state.user.Messages ?  null :
          this.state.user.Messages.map(message => (
            <div className="message-info" key={message.Id}>
              <div className="subject">
                <Link to={`/messages/${message.Id}`}>
                  {message.Subject}
                </Link>
              </div>
              <div className="sent-on">
                {message.SentOn}
              </div>
            </div>
          ))}
      </div>
    );

    return (
      <Page>
        <div className="user-page">
          <div className="info">
            <label>{T.translate('Username')}</label>
            <div className="content">
              {this.state.user ? this.state.user.UserName : null}
            </div>
          </div>
          <div className="info">
            <label>{T.translate('Email')}</label>
            <div className="content">
              {this.state.user ? this.state.user.Email : null}
            </div>
          </div>
          <div className="info">
            <label>{T.translate('Messages')}</label>
            <div className="content" onClick={this.handleMessagesClick} style={{ cursor: 'pointer' }}>
              {this.state.user ? this.state.user.MessagesCount : null}
              {this.state.isMessagesBoxOpen ? <div className="arrow-left"></div> : null}
              {!this.state.isMessagesBoxOpen && this.state.user.MessagesCount > 0 ? <div className="arrow-down"></div> : null}
            </div>
          </div>
          {messagesBox}
          <div className="info">
            <label>{T.translate('Donations')}</label>
            <div className="content">
              {this.state.user ? this.state.user.DonationsCount : null}
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default UserPage;