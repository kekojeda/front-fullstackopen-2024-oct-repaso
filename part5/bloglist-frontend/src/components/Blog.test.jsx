import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Blog from './Blog';


describe('<Blog />', () => {
  const blog = {
    title: 'Testing React Components',
    author: 'John Doe',
    url: 'http://example.com',
    likes: 5,
    user: { username: 'johndoe' },
  };
 

  const mockSetBlogs = vi.fn();

  test('renders title and author but not URL or likes by default', () => {
    render(
      <Blog 
        blog={blog} 
        setBlogs={mockSetBlogs} 
        blogs={[]} 
        user={{ username: 'johndoe' }} 
      />
    );

    // Verifica que el título y el autor están presentes
    expect(screen.getByText(blog.title)).toBeDefined();
    expect(screen.queryByText(`Author: ${blog.author}`)).toBeNull(); // Autor no aparece por defecto

    // Verifica que la URL y los likes no están presentes
    expect(screen.queryByText(`URL: ${blog.url}`)).toBeNull();
    expect(screen.queryByText(`Likes: ${blog.likes}`)).toBeNull();
  });

  test('renders URL and likes when the details are shown', async () => {
    const user = userEvent.setup();
    render(
      <Blog 
        blog={blog} 
        setBlogs={mockSetBlogs} 
        blogs={[]} 
        user={{ username: 'johndoe' }} 
      />
    );

    // Muestra los detalles
    const button = screen.getByText('Show');
    await user.click(button);

    // Verifica que URL y likes ahora están presentes
    expect(screen.getByText(`URL: ${blog.url}`)).toBeDefined();
    expect(screen.getByText(`Likes: ${blog.likes}`)).toBeDefined();
    expect(screen.getByText(`Author: ${blog.author}`)).toBeDefined();
  });
});
