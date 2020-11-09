import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Background,
  Container,
  Picture,
  Logo,
  ButtonLink,
  Feature,
  Text,
  TextSmall,
  FeatureCallOut,
  Link,
  Group,
  Profile,
  Dropdown
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background { ...restProps }>{ children }</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container { ...restProps }>{ children }</Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to} >
      <Logo { ...restProps } />
    </ReactRouterLink>
  )
}

Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }) {
  return (
    <ButtonLink to={to} { ...restProps }>{ children }</ButtonLink>
  )
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature { ...restProps } >{ children }</Feature>
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile { ...restProps } >{ children }</Profile>
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture { ...restProps } src={`/images/users/${src}.png`} />
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group { ...restProps } >{ children }</Group>
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text { ...restProps } >{ children }</Text>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown { ...restProps } >{ children }</Dropdown>
}

Header.TextSmall = function HeaderTextSmall({ children, ...restProps }) {
  return <TextSmall { ...restProps } >{ children }</TextSmall>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut { ...restProps } >{ children }</FeatureCallOut>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link { ...restProps } >{ children }</Link>
}