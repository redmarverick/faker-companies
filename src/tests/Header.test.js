import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: jest.fn(),
}));

describe('Header', () => {
  beforeEach(() => {
    FontAwesomeIcon.mockClear();
  });

  it('should render header with title', () => {
    const title = 'My App';
    const showBackButton = false;

    render(<Header title={title} showBackButton={showBackButton} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should render header with back button when showBackButton prop is true', () => {
    const title = 'My App';
    const showBackButton = true;

    render(
      <Router>
        <Header title={title} showBackButton={showBackButton} />
      </Router>,
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(FontAwesomeIcon).toHaveBeenCalledWith(expect.objectContaining(
      { icon: faAngleLeft },
    ), {});
  });
});
