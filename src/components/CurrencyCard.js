import React from 'react';
import { Card, Image, Icon, Statistic } from 'semantic-ui-react';

const CurrencyCard = ({}) => (
  <Card centered>
    <Icon style={{margin: '20px auto'}} name="dollar" size="massive"/>
    <Card.Content>
      <Card.Header>
        <Image 
          src="https://s3-sa-east-1.amazonaws.com/beecambioimages/currency-flags/USD.png"
          style={{marginRight: '10px'}}
        />
        US$
      </Card.Header>
      <Card.Meta>
        Dólar Americano - USD
      </Card.Meta>
      <Card.Description>
        <Statistic.Group>
          <Statistic color='orange' style={{width: '100%'}}>
            <Statistic.Value style={{textAlign: 'center', width: '100%'}}>1500.00</Statistic.Value>
            <Statistic.Label style={{textAlign: 'center', width: '100%'}}><Icon name='calculator'/>Quantity</Statistic.Label>
          </Statistic>                  
          <Statistic color='olive' style={{width: '100%', margin: '0'}}>
            <Statistic.Value style={{textAlign: 'center', width: '100%'}}>4932.47</Statistic.Value>
            <Statistic.Label style={{textAlign: 'center', width: '100%'}}><Icon name='money'/>Total Quotation</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="http://www.federalreserve.gov">
        <Icon name='user' />
        Website
      </a>
    </Card.Content>
  </Card>
);

export default CurrencyCard;
