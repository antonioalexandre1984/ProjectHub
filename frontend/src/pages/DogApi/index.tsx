import { useEffect, useState } from 'react';
import { Container, Content, Button, ContentItem } from './styles';
import { api } from '../../services/api';

export function DogApi() {
  const [imageUrl, setImageUrl] = useState('');
  const [refresh, setRefresh] = useState(true);

  async function refreshImage() {
    try {
      const res = await api.get('https://random.dog/woof.json')
      setImageUrl(res.data.url);
      setRefresh(false);
    } catch (err) {
      console.log('err', err);
    } finally {
      setRefresh(false);
    }
  }

  async function handleRefresh() {
    try {
      const res = await api.get('https://random.dog/woof.json')
      setImageUrl(res.data.url);
      setRefresh(true);
    } catch (err) {
      console.log('err', err);
    } finally {
      setRefresh(false);
    }
  }

  useEffect(() => {
    refreshImage();
  }, []);

  if (refresh) {
    return (
      <div className="load">
        <img src="loading" alt="" />
        <h1>Loading..</h1>
      </div>
    );
  }

  return (
    <Container>
      <Content>
        <ContentItem>
          <h1>Random Dog</h1>
          <img src={imageUrl} alt="Random dog" />
          <Button onClick={handleRefresh}>Refresh</Button>
        </ContentItem>
      </Content>
    </Container>
  );
}
