import React, { Component } from 'react';
import { Sidebar, Container, Grid, Button, Header, Menu, Message } from 'semantic-ui-react';
import axios from 'axios';

import CurrencyCard from './components/CurrencyCard';
import SubscriptionForm from './components/SubscriptionForm';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      currencies: [],
      successMessage: "",
      errorMessage: "",
    }
  }

  showMessage(type, message) {
    let newState = {visible: false};
    newState[type] = message;
    this.setState(newState);
    setTimeout(() => {
      newState = {};
      newState[type] = '';
      this.setState(newState);
    }, 2000)
  }

  toggleVisibility() {
    this.setState({visible: !this.state.visible});
  }

  fetchData() {
    axios.get(
      'http://demo3643409.mockable.io/quotations'
    ).then((response) => {
      this.setState({currencies: response.data.result});
    }).catch((error) => {
      console.log(error);
      this.showMessage('errorMessage', 'Something is wrong. Try again later.');
    });
  }

  componentDidMount() {
    this.fetchData();
    setInterval(this.fetchData.bind(this), 10000);
  }

  getIconByAbbreviation(abbreviation) {
    switch(abbreviation) {
      case 'EUR':
        return 'euro';
      case 'GBP':
        return 'pound';
      default:
        return 'dollar';
    }
  }

  getSubscribeButton() {
    if (this.state.visible) {
      return "";
    }
    return (
      <Button className="app__subscribe-button" onClick={this.toggleVisibility.bind(this)}>
        Click here to subscribe
      </Button>
    );
  }

  subscribe(name, email) {
    axios.post(
      'http://demo3643409.mockable.io/newsletter', 
      {name, email},
      {headers: {'authentication': 'desafiobeetech'}}
    ).then((response) => {
      if (response.status === 200 && response.statusText === 'OK') {
        this.showMessage('successMessage', 'Your subscription was successful');
      }
    }).catch((error) => {
      console.log(error);
      this.showMessage('errorMessage', 'Something is wrong. Try again later.');
    });
  }

  getColumns() {
    return this.state.currencies.map((currency, count) => {
      const meta = currency.currencyObj;
      const icon = this.getIconByAbbreviation(meta.abbreviation);
      return (
        <Grid.Column key={count} mobile={16} tablet={16} computer={4}>
          <CurrencyCard
            icon={icon}
            image={meta.full_flag_image}
            quantity={currency.quantity}
            totalValue={currency.total_value}
            {...meta}
          />
        </Grid.Column>
      );
    });
  }

  getMessage() {
    if (this.state.successMessage) {
      return <Message success header={this.state.successMessage} />;
    }
  }

  render() {
    return (
      <div>
        { this.getSubscribeButton() }
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            direction='right'
            visible={this.state.visible}
            vertical
          >
            <SubscriptionForm 
              toggleVisibility={this.toggleVisibility.bind(this)} 
              subscribe={this.subscribe.bind(this)}
            />
          </Sidebar>
          <Sidebar.Pusher>
            <Container fluid className="app">
              {this.getMessage()}
              <Header as="h1">Quotations</Header>
              <Grid columns={3} centered>
                <Grid.Row>
                  {this.getColumns()}
                </Grid.Row>
              </Grid>
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
