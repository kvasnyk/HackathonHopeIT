import AxiosHelper from '../../helpers/AxiosHelper';
import Page from '../shared/Page';
import React from 'react';
import T from 'i18n-react';

class SendMessagePage extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();

    AxiosHelper.sendMessage()
      .then(response => {
        alert('SUCCESS');
      })
      .catch(error => {
        alert('ERROR');
      });
  }

  render = () => (
    <Page>
      <form onSubmit={this.handleFormSubmit}>
        <button type="submit">{T.translate('Send')}</button>
      </form>
    </Page>
  );
}

export default SendMessagePage;