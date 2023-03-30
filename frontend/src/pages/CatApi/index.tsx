import { ChangeEvent, useState } from 'react';
import { HttpCatContainer, HttpCatItem } from './styles';
import Spinner from 'react-bootstrap/Spinner';

interface HttpCatProps {
  statusCode: string;
}

export function CatApi({ statusCode }: HttpCatProps) {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = e.target.value;
    if (input.trim() === '') {

    }
    if (input >= '100' && input <= '599') {
      setImageUrl(`https://http.cat/${input}.jpg`);

    } else {
      setImageUrl(`https://http.cat/404.jpg`);
      setIsLoading(false);
    }

  };

  if (isLoading) {
    return (
      <div className="load">
        <img src="loading" alt="" />
        <h1>Loading..</h1>
      </div>
    );
  }
  return (
    <HttpCatContainer>
      {
        isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <HttpCatItem>
            <img src={imageUrl} alt="Random dog" />
            <input type="text" onChange={handleRefresh} placeholder={`Status code ${statusCode}`} />
          </HttpCatItem>
        )
      }
    </HttpCatContainer>
  );
}
