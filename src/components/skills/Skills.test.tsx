import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JS'];

  // getByRole
  test('renders correctly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  // getAllByRole
  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });

  // getByRole
  test('renders Login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', {
      name: 'Login'
    });
    expect(loginButton).toBeInTheDocument();
  });

  // queryByRole
  test('start learning button is not render', () => {
    render(<Skills skills={skills} />);
    const startLeanringButton = screen.queryByRole('button', {
      name: 'Start learning'
    });
    expect(startLeanringButton).not.toBeInTheDocument();
  });

  // findByRole
  test('Start learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole('button', {
      name: 'Start learning'
    });
    expect(startLearningButton).toBeInTheDocument();
  });
});
