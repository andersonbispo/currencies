import React, { Component } from 'react';
import { Sidebar, Container, Grid } from 'semantic-ui-react';

import CurrencyCard from './components/CurrencyCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <Sidebar.Pushable as={Container}>
        <Sidebar
          animation='scale down'
          width='thin'
          direction='right'
          visible
          vertical
          inverted
        >
        </Sidebar>
        <Sidebar.Pusher>
          <Container fluid className="App" style={{padding: '40px'}}>
            <Grid columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <CurrencyCard />
                </Grid.Column>
                <Grid.Column>
                  <CurrencyCard />
                </Grid.Column>
                <Grid.Column>
                  <CurrencyCard />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default App;
