import AxiosHelper from '../../helpers/AxiosHelper';
import Page from '../shared/Page';
import React from 'react';

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
      {this.state.message ? this.state.message.Subject : null}
    </Page>
  )
}

export default MessagePage;