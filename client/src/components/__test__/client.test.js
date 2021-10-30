import { cleanup, render, screen } from '@testing-library/react';
import PostList from '../PostList';

afterEach(() => cleanup());

describe('client', () => {
  const data = [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 5,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
  ];

  test('should render PostList component', () => {
    render(<PostList post={data[0]} />);
    const cardElement = screen.getByTestId('card');

    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent(data[0].title);
  });
});
