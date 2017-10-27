import AxiosHelper from '../../helpers/AxiosHelper';
import FormRow from '../shared/FormRow';
import Page from '../shared/Page';
import React from 'react';
import T from 'i18n-react';

class SendMessagePage extends React.Component {
  constructor() {
    super();

    this.state = {
      dataSubject: ''
    };
  }

  handleSubjectValueChange = (e) => {
    const newValue = e.target.value;
    this.setState(prevState => ({ ...prevState, dataSubject: newValue }));
  };

  handleContentValueChange = (e) => {
    const newValue = e.target.value;
    this.setState(prevState => ({ ...prevState, dataContent: newValue }));
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    AxiosHelper.sendMessage(this.state.dataSubject, this.state.dataContent)
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
        <FormRow>
          <label>{T.translate('Subject')}</label>
          <input type="text" value={this.state.dataSubject} onChange={this.handleSubjectValueChange} autoFocus />
        </FormRow>
        <FormRow>
          <label>{T.translate('Content')}</label>
          <textarea value={this.state.dataContent} onChange={this.handleContentValueChange} />
        </FormRow>
        <button type="submit">{T.translate('Send')}</button>
      </form>
    </Page>
  );
}

export default SendMessagePage;