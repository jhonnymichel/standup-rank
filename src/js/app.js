import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import store from 'app/stores/messages';

@observer
class App extends React.Component {
  componentDidMount() {

    setTimeout(() => {
      this.props.store.changeMessage('The message Changed');
    }, 5000);
  }

  render() {
    return (
      <div>{this.props.store.message}</div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App store={store} />,
    document.querySelector('#app')
  );
});