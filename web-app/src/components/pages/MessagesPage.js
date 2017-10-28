import AxiosHelper from '../../helpers/AxiosHelper';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
import Page from '../shared/Page';
import React from 'react';
import T from 'i18n-react';

class MessagesPage extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      hasMoreItems: true
    };
  }

  loadMessages = (page) => {
    AxiosHelper.findMessages(page)
      .then(response => {
        this.setState(prevState => {
          var prevMessages = prevState.messages;
          return ({
            ...prevState,
            messages: [...prevMessages, ...response.data],
            hasMoreItems: response.data.length === 10
          });
        });
      })
      .catch(error => {
        alert('ERROR');
      });
  };

  render = () => {
    const loader = (
      <div>{T.translate('Loading')}</div>
    );

    const messages = this.state.messages.map(message => (
      <div className="message-info" key={message.Id}>
        <div className="recipients">
          {message.RecipientNames.join(', ')}
        </div>
        <div className="subject">
          <Link to={`/messages/${message.Id}`}>
            {message.Subject}
          </Link>
        </div>
        <div className="sent-on">
          {message.SentOn}
        </div>
      </div>
    ));

    return (
      <Page>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMessages}
          hasMore={this.state.hasMoreItems}
          loader={loader}>
          <div className="messages-list">
            {messages}
          </div>
        </InfiniteScroll>
      </Page>
    );
  }
}

export default MessagesPage;