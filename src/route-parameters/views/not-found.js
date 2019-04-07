import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const NotFoundView = () => (
  <Container text>
    <Header as="h1">Page Not Found</Header>
    <Link to="/">Back to home</Link>
  </Container>
)
