import AxiosHelper from '../../helpers/AxiosHelper';
import Page from '../shared/Page';
import React from 'react';
import T from 'i18n-react';

class MessagePage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount = () => {
    if(!this.state.message) {
      AxiosHelper.getMessage(this.props.match.params.messageId)
        .then(response => {
          this.setState(prevState => ({ ...prevState, message: response.data }));
        })
        .catch(error => {
          alert('ERROR');
        });
    }
  };

  render = () => (
    <Page>
      <div className="message-page">
        <div className="info">
          <label>{T.translate('Subject')}</label>
          <div className="content">
            {this.state.message ? this.state.message.Subject : null}
          </div>
        </div>
        <div className="info">
          <label>{T.translate('Recipients')}</label>
          <div className="content">
            {this.state.message ? this.state.message.RecipientNames.join(', ') : null}
          </div>
        </div>
        <div className="info">
          <label>{T.translate('SentOn')}</label>
          <div className="content">
            {this.state.message ? this.state.message.SentOn : null}
          </div>
        </div>
        <div className="info">
          <label>{T.translate('Content')}</label>
          <div className="content">
            {this.state.message ? this.state.message.Content : null}
          </div>
        </div>
      </div>
    </Page>
  )
}

export default MessagePage;