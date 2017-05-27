import React from 'react';
import { Card, Image, Icon, Statistic } from 'semantic-ui-react';

import './CurrencyCard.css';

const CurrencyCard = ({}) => (
  <Card centered>
    <Icon className="card__icon" name="dollar" size="massive"/>
    <Card.Content>
      <Card.Header>
        <Image
          className="card__image"
          src="https://s3-sa-east-1.amazonaws.com/beecambioimages/currency-flags/USD.png"
        />
        US$
      </Card.Header>
      <Card.Meta>
        Dólar Americano - USD
      </Card.Meta>
      <Card.Description>
        <Statistic.Group>
          <Statistic className="card__values" size='tiny' color='orange'>
            <Statistic.Value>1500.00</Statistic.Value>
            <Statistic.Label><Icon name='calculator'/>Quantity</Statistic.Label>
          </Statistic>
          <Statistic className="card__values" size='tiny' color='olive'>
            <Statistic.Value>4932.47</Statistic.Value>
            <Statistic.Label><Icon name='money'/>Total Quotation</Statistic.Label>
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
