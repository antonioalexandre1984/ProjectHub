import { ChangeEvent, useCallback, useState } from "react";

import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Store } from "react-notifications-component";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { Background, Content, Container, FormActions, Form } from "./styles";


export function SignUpDev() {
  const navigate = useNavigate();

  const [model, setModel] = useState({
    name: '',
    email: '',
    password: '',
  });

  const updateModel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setModel({
        ...model,
        [e.target.name]: e.target.value,
      });
    },
    [model],
  );

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(model);
    try {
      const res = await api.post('http://localhost:3010/api/v1/users', model);
      Store.addNotification({
        title: "Sucesso!",
        message: "Usuário cadastrado com sucesso!",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      });
      navigate('/');
      console.log(res);
    } catch {
      Store.addNotification({
        title: "Erro!",
        message: "Falha ao cadastrar usuário",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      });
      console.log('error');
    }
  }, [model, navigate]);

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Cadastro Dev</h1>
          <Input
            icon={FaUser}
            placeholder="name"
            type="text"
            name="name"
            value={model.name}
            onChange={updateModel}

          />
          <Input
            icon={FaEnvelope}
            placeholder="email"
            type="email"
            name="email"
            value={model.email}
            onChange={updateModel}
          />
          <Input
            icon={FaLock}
            placeholder="senha"
            isPassword
            type="password"
            name="password"
            value={model.password}
            onChange={updateModel}
          />
          <Button type="submit">
            Register
          </Button>
          <FormActions>
            <Link to="/">Já tenho conta</Link>
          </FormActions>
        </Form>
      </Content>
      <Background />
    </Container>
  );
}
