import React from 'react'
import { Container, Header, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const HomeView = () => (
  <Container text>
    <Header as="h1">Home</Header>
    <List>
      <List.Item>
        <Link to="/business/1/profile">Business 1</Link>
      </List.Item>
      <List.Item>
        <Link to="/business/2/profile">Business 2</Link>
      </List.Item>
      <List.Item>
        <Link to="/business/3/profile">Business 3 (does not exist)</Link>
      </List.Item>
    </List>
  </Container>
)
