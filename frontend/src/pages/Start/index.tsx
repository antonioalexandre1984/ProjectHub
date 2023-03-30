import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container, Content, Form, Background, FormActions } from './styles';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../components/hooks/useUser';
import { CredentialsDev } from '../../components/Interfaces/CredentialsDev';
import { useCallback, useEffect, useState } from 'react';
import { Store } from 'react-notifications-component'


export function Start() {

  const { user, signInDev } = useUser();
  const navigate = useNavigate();
  const [model, setModel] = useState<CredentialsDev>({
    email: '',
    password: '',
  });

  const updateModel = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setModel({
      ...model,
      [e.target.name]: e.target.value
    });
  }, [model]);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('model', model);
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
        }
      });
      navigate('/dashboard');
      console.log('res', res);
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
        }
      });
      console.log(err);
    }
  }, [signInDev, model, navigate]);

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
            <Link to="/sign">Forgot your password?</Link>
            <Link to="/sign-up/dev">Create an account</Link>
          </FormActions>
        </Form>
      </Content>
      <Background />
    </Container>
  );
}

