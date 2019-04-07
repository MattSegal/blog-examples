import React from 'react'
import { Container, Header, List } from 'semantic-ui-react'

import { NamedLink, ROUTE_NAMES } from '../routes'

export const ProfileView = ({ match: { params: { userId } }}) => (
  <Container text>
    <Header as="h1">Profile for User #{userId}</Header>
    <NamedLink to={ROUTE_NAMES.HOME}>
      Back to home
    </NamedLink>
  </Container>
)
