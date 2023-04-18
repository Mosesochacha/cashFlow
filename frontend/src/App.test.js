import { render, screen, cleanup } from '@testing-library/react';
import Login from './Components/register/Login';
import Navigation from './Components/userNavbar/Navigation';

afterEach(() => {
    cleanup();
})

test('should render Login component', () =>{
    render(<Login />);
    const LoginElement = screen.getByTestId('login-1');
    expect(LoginElement).toBeInTheDocument();
    expect(LoginElement).toHaveTextContent('Welcome Back')
    // expect(LoginElement).toContainHTML('<input type="email" id="inputEmail1" placeholder="youremail@gmail.com" />')
    // expect(LoginElement).toContainHTML('<Button type="submit">Login</Button>')
})
test('should render Naviagtion component', () =>{
    render(<Navigation />);
    const NavigationElement = screen.getByTestId('Navigation-1');
    expect(NavigationElement).toBeInTheDocument();
    expect(NavigationElement).toContainHTML('<Siwtch>')
    expect(NavigationElement).toContainHTML('<Route />')
})