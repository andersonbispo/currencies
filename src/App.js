import React, { Component } from 'react';
import { Sidebar, Container, Grid, Button, Form, Header, Menu } from 'semantic-ui-react';

import CurrencyCard from './components/CurrencyCard';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  toggleVisibility() {
    this.setState({visible: !this.state.visible});
  }

  render() {
    let subscribeButton = "";
    if (!this.state.visible) {
      subscribeButton = (
        <Button className="app__subscribe-button" onClick={this.toggleVisibility.bind(this)}>
          Click here to subscribe
        </Button>
      );
    }
    return (
      <div>
        { subscribeButton }
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            direction='right'
            visible={this.state.visible}
            vertical
          >
            <Form className="app__form">
              <Header as="h3">Subscription</Header>
              <Form.Field>
                <label>Name</label>
                <input placeholder='name' />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input placeholder='Email' />
              </Form.Field>
              <Form.Group className="app__form-buttons">
                <Button secondary type='button' onClick={this.toggleVisibility.bind(this)}>Cancel</Button>
                <Button type='submit'>Submit</Button>
              </Form.Group>
            </Form>
          </Sidebar>
          <Sidebar.Pusher>
            <Container fluid className="app">
              <Header as="h1">Quotations</Header>
              <Grid columns={3} centered>
                <Grid.Row>
                  <Grid.Column mobile={16} tablet={16} computer={4}>
                    <CurrencyCard />
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={16} computer={4}>
                    <CurrencyCard />
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={16} computer={4}>
                    <CurrencyCard />
                  </Grid.Column>
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
