import AxiosHelper from '../../helpers/AxiosHelper';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
import Page from '../shared/Page';
import React from 'react';
import T from 'i18n-react';

class UsersPage extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      hasMoreItems: true
    };
  }

  loadUsers = (page) => {
    AxiosHelper.findUsers(page)
      .then(response => {
        this.setState(prevState => {
          var prevUsers = prevState.users;
          return ({
            ...prevState,
            users: [...prevUsers, ...response.data],
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

    const users = this.state.users.map(user => (
      <div className="user-info" key={user.Id}>
        <div className="username">
          <Link to={`/users/${user.Id}`}>
            {user.UserName}
          </Link>
        </div>

        <div className="email">
          {user.Email}
        </div>

        <div className="donations-count">
          {user.DonationsCount}
        </div>

        <div className="messages-count">
          {user.MessagesCount}
        </div>
      </div>
    ));

    return (
      <Page>
        <h1>{T.translate('Users')}</h1>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadUsers}
          hasMore={this.state.hasMoreItems}
          loader={loader}>
          <div className="users-list">
            {users}
          </div>
        </InfiniteScroll>
      </Page>
    );
  }
}

export default UsersPage;