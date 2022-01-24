import {render, screen, cleanup} from '@testing-library/react'
import NavBar from '../NavBar/NavBar.jsx'

test('should render navbar component', () => {
    render(<NavBar />)
    const navBarElement = screen.getByTestId('navbar-1');

    expect(navBarElement).toBeInTheDocument();
})