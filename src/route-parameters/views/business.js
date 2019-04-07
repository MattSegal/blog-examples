import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'

import { withBusiness } from '../wrapper'

const _BusinessView = ({ business }) => (
  <Container text>
    <Header as="h1">Business - {business.name}</Header>
    <Link to="/">Back to home</Link>
  </Container>
)

export const BusinessView = withBusiness(_BusinessView)
