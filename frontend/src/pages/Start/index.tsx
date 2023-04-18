import { useCallback, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { Container, Content, Form, FormActions, Background } from './styles';

import { Input } from '../../components/Input';
import { CredentialsDev } from '../../components/Interfaces/CredentialsDev';
import { useUser } from '../../components/hooks/useUser';
import { Button } from '../../components/Button';

export function Start() {
  const navigate = useNavigate();
  const { user, signInDev } = useUser();
  const [model, setModel] = useState<CredentialsDev>({
    email: '',
    password: '',
  });

  const updateModel = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setModel(prevModel => ({
      ...prevModel,
      [e.target.name]: e.target.value
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signInDev(model);
      Store.addNotification({
        title: "Wonderful!",
        message: "User authenticated successfully!",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        },

      });
      navigate('/dashboard');

    } catch (err) {
      Store.addNotification({
        title: "Error!",
        message: "Failed to authenticate user!",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        },

      });
      console.log(err);
    }
  }, [signInDev, model, navigate]);

  useEffect(() => {
    return () => {
      setModel({ email: '', password: '' });
    };
  }, []);

  useEffect(() => {
    console.log('SignInDevPage', user);
  }, [user]);
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Log In Dev</h1>
          <Input
            icon={FaEnvelope}
            placeholder="Email"
            name="email"
            type="email"
            onChange={updateModel}
          />
          <Input
            icon={FaLock}
            placeholder="Password"
            type="password"
            name="password"
            isPassword
            onChange={updateModel}
          />
          <Button type="submit">
            Log In
          </Button>
          <FormActions>
            <Link to="/sign-up/dev">Create an account</Link>
          </FormActions>
        </Form>
      </Content>
      <Background />
    </Container>
  );
}

