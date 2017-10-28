import 'react-select/dist/react-select.css';

import AxiosHelper from '../../helpers/AxiosHelper';
import FormRow from '../shared/FormRow';
import Page from '../shared/Page';
import React from 'react';
import ReactSelect from 'react-select';
import T from 'i18n-react';

class SendMessagePage extends React.Component {
  constructor() {
    super();

    this.state = {
      dataRecipients: [],
      dataSubject: '',
      dataContent: ''
    };
  }

  getUsers = (input) => {
    return AxiosHelper.findUsers()
      .then(response => {
        var mappedUsers = response.data.map(user => ({
          label: user.UserName,
          value: user.Id
        }));
        return { options: mappedUsers };
      })
      .catch(error => {
        alert('ERROR');
      });
  };

  handleRecipientsValueChange = (e) => {
    this.setState(prevState => ({
      ...prevState,
      dataRecipients: e
    }));
  };

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
    const recipientIds = this.state.dataRecipients.map(data => data.value);

    AxiosHelper.sendMessage(this.state.dataSubject, this.state.dataContent, recipientIds)
      .then(response => {
        alert('SUCCESS');
      })
      .catch(error => {
        alert('ERROR');
      });
  }

  render = () => (
    <Page>
      <h1>{T.translate('SendMessage')}</h1>
      <form onSubmit={this.handleFormSubmit}>
        <FormRow>
          <label>{T.translate('Recipients')}</label>
          <ReactSelect.Async
            className="react-select"
            placeholder=""
            loadingPlaceholder={T.translate('Loading')}
            loadOptions={this.getUsers}
            multi={true}
            value={this.state.dataRecipients}
            onChange={this.handleRecipientsValueChange} />
        </FormRow>
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