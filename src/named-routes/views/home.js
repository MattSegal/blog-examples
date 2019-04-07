import React from 'react'
import { Container, Header, List } from 'semantic-ui-react'

import { NamedLink, ROUTE_NAMES } from '../routes'

export const HomeView = () => (
  <Container text>
    <Header as="h1">Home</Header>
    <List>
      <List.Item>
        <NamedLink to={ROUTE_NAMES.ABOUT}>
          About Page
        </NamedLink>
      </List.Item>
      <List.Item>
        <NamedLink to={ROUTE_NAMES.DASHBOARD}>
          Dashboard Page
        </NamedLink>
      </List.Item>
      <List.Item>
        <NamedLink
          to={ROUTE_NAMES.PROFILE}
          params={{ userId: 1 }}
        >
          Profile Page
        </NamedLink>
      </List.Item>
    </List>
  </Container>
)
