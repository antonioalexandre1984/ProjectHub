import { useEffect, useState } from 'react';
import { Container, Content, Button, ContentItem } from './styles';
import { api } from '../../services/api';

import dogImage from '../../assets/dog.jpg';

export function DogApi() {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function refreshImage() {
    setIsLoading(true);
    setError('');
    try {
      const res = await api.get('https://random.dog/woof.json')
      setImageUrl(res.data.url);
    } catch (err) {
      setError('Something went wrong while fetching the image. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRefresh() {
    refreshImage();
  }

  useEffect(() => {
    refreshImage();
  }, []);

  return (
    <Container>
      <Content>
        <ContentItem>
          <h1>Random Dog</h1>
          {isLoading ? (
            <div className="load">
              <h1>...Loading</h1>
              <h1>Loading..</h1>
            </div>
          ) : (
            <img src={imageUrl || dogImage} alt="Random dog" />
          )}
          {error && <p>{error}</p>}
          <Button onClick={handleRefresh}>Refresh</Button>
        </ContentItem>
      </Content>
    </Container>
  );
}

