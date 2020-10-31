import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import './Layout.styles.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="content-wrapper">{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
