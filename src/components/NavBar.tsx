import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxSelector } from '../types/store';
import { User } from '../types/user';

export default function NavBar(): JSX.Element {
  const user: User | undefined = useSelector(
    (selector: ReduxSelector) => selector.currentUser.user,
  );

  const signedInAs = () => {
    if (user) {
      return (
        <p className="navbar-text">
          Signed in as <b>{user.full_name}</b>
        </p>
      );
    } else {
      return <div />;
    }
  };

  const customRules = () => {
    if (user) {
      return (
        <li>
          <a target="_blank" href="https://wakatime.com/settings/rules" rel="noreferrer">
            <i className="fa fa-fw fa-filter"></i>
            Custom Rules
          </a>
        </li>
      );
    } else {
      return <div />;
    }
  };

  const dashboard = () => {
    if (user) {
      return (
        <li>
          <a target="_blank" href="https://wakatime.com/dashboard" rel="noreferrer">
            <i className="fa fa-fw fa-tachometer"></i>
            Dashboard
          </a>
        </li>
      );
    } else {
      return <div />;
    }
  };

  return (
    <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <i className="fa fa-fw fa-cogs"></i>
          </button>
          <a target="_blank" className="navbar-brand" href="https://wakatime.com" rel="noreferrer">
            Wakafari
            <img src="graphics/wakatime-logo-48.png" />
          </a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          {signedInAs()}
          <ul className="nav navbar-nav">
            {customRules()}
            {dashboard()}
            <li>
              <a target="_blank" href="https://github.com/insightoptech/wakafari" rel="noreferrer">
                <i className="fa fa-fw fa-github"></i>
                View on GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
