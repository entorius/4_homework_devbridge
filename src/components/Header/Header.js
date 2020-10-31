import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.styles.css';

export default function Header() {
  const menu = [
    { to: '/', label: 'Home', exact: true },
    { to: '/todos', label: 'Todo List', exact: false },
    { to: '/deletedTodos', label: 'Deleted Todos List', exact: false },
    { to: '/notes', label: 'Notes', exact: false },
  ];

  return (
    <header>
      <h1>Todo List</h1>
      <nav>
        {menu.map(({ to, label, exact }) => (
          <NavLink key={label} exact={exact} to={to} activeClassName="active">
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
