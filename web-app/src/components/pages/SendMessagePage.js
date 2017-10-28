import 'react-select/dist/react-select.css';

import AxiosHelper from '../../helpers/AxiosHelper';
import Dropzone from 'react-dropzone';
import FormRow from '../shared/FormRow';
import Page from '../shared/Page';
import React from 'react';
import ReactSelect from 'react-select';
import T from 'i18n-react';

class SendMessagePage extends React.Component {
  constructor() {
    super();

    this.state = {
      dataFiles: [],
      dataUrls: [],
      dataRecipients: [],
      dataSubject: '',
      dataContent: ''
    };
  }

  componentDidMount = () => {
    window.addEventListener("beforeunload", this.revokeFilePreviewUrls);
  };

  componentWillUnmount = () => {
    window.removeEventListener("beforeunload", this.revokeFilePreviewUrls);
  };

  revokeFilePreviewUrls = () => {
    this.state.dataFiles.forEach((file) => {
      URL.revokeObjectURL(file.preview);
    });
  };

  getUsers = (input) => {
    return AxiosHelper.findUsers()
      .then(response => {
        const mappedUsers = response.data.map(user => ({
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

  handleDropzoneDropAccteped = (files) => {
    this.setState(prevState => ({ ...prevState, dataFiles: prevState.dataFiles.concat(files) }));
  };

  handleFileLoad = (e) => {
    const file = {
      content: e
    }
    this.setState(prevState => ({ ...prevState, dataUrls: prevState.dataUrls.concat(file) }));
  };

  setupReader = (files) => {
    for(let x = 0, xlen = this.state.dataFiles.length; x < xlen; x++) {
      let file = files[x];
        let reader = new FileReader();
  
        reader.onload = (e) => {
          const value = e.target.result;
          this.setState(prevState => ({ ...prevState, dataUrls: prevState.dataUrls.concat({ ...{}, content: value })})); 
        };
        
        reader.readAsDataURL(file);
      }
    }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const recipientIds = this.state.dataRecipients.map(data => data.value);
    this.setupReader(this.state.dataFiles);
    
    AxiosHelper.sendMessage(this.state.dataSubject, this.state.dataContent, recipientIds, this.state.dataUrls)
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
        <FormRow>
          <label>{T.translate("AttachFiles")}</label>
          <Dropzone 
            multiple={true}
            accept="image/*"
            onDropAccepted={this.handleDropzoneDropAccteped}
            className="app-dropzone">

            {this.state.dataFiles.length > 0 ? (
            <div className="images-container">
              {this.state.dataFiles.map((file, index) => (
                <img key={index} src={file.preview} className="dropped-image" alt="" />
              ))}
            </div>) : (
              <span>{T.translate("DropFilesOrClickHereToAddAnAttachment")}</span>
            )}

          </Dropzone>
        </FormRow>
        <button type="submit">{T.translate('Send')}</button>
      </form>
    </Page>
  );
}

export default SendMessagePage;