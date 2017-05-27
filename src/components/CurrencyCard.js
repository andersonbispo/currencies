import React from 'react';
import { Card, Image, Icon, Statistic } from 'semantic-ui-react';

import './CurrencyCard.css';

const CurrencyCard = ({icon, image, acronym, abbreviation, name, quantity, totalValue, website}) => (
  <Card centered>
    <Icon className="card__icon" name={icon} size="massive"/>
    <Card.Content>
      <Card.Header>
        <Image
          className="card__image"
          src={image}
        />
        {acronym}
      </Card.Header>
      <Card.Meta>
        {`${name} - ${abbreviation}`}
      </Card.Meta>
      <Card.Description>
        <Statistic.Group>
          <Statistic className="card__values" size='tiny' color='orange'>
            <Statistic.Value>{quantity}</Statistic.Value>
            <Statistic.Label><Icon name='calculator'/>Quantity</Statistic.Label>
          </Statistic>
          <Statistic className="card__values" size='tiny' color='olive'>
            <Statistic.Value>{totalValue}</Statistic.Value>
            <Statistic.Label><Icon name='money'/>Total Quotation</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={website}>
        <Icon name='user' />
        Website
      </a>
    </Card.Content>
  </Card>
);

export default CurrencyCard;
