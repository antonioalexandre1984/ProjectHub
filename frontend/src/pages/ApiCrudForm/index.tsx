import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container, Submit, ButtonGroup } from './styles';
import { Task } from '../../components/Interfaces/Task';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { api } from '../../services/api';



export function ApiCrudForm() {
  const id = useParams();
  const navigate = useNavigate()
  const [model, setModel] = useState<Task>({
    id: '',
    name: '',
    email: '',
    telephone: '',
    cpf: '',
    address: '',
  });

  useEffect(() => {
    if (id.id != undefined)
      findUsers(id.id);
  }, [id]);

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value
    });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await api.post(`/clients`, model);
    if (res.status === 201) {
      alert('Client created successfully!')
      navigate('/crud');
    }
  }

  async function onEdit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await api.put(`/clients/${id.id}`, model);
    console.log(res);
    if (res.status === 200) {
      alert('Client updated successfully!')
      navigate('/crud');
    }
  }

  async function findUsers(id: string) {
    const res = await api.get(`/clients/${id}`);
    console.log(res.data);
    setModel({
      id: res.data.id,
      name: res.data.name,
      email: res.data.email,
      telephone: res.data.telephone,
      cpf: res.data.cpf,
      address: res.data.address,
    });
  }

  function BackClient() {
    navigate('/crud');
  }

  return (
    <Container>
      <div className="container">
        <Form onSubmit={id.id == undefined ? onSubmit : onEdit}>
          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3 "
            >
              <Form.Control
                type="text"
                name="name"
                value={model.name}
                onChange={updateModel}
                placeholder="Enter the name!"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="email"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="email"
                value={model.email}
                onChange={updateModel}
                placeholder="Enter the email address"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="telephone"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="telephone"
                value={model.telephone}
                onChange={updateModel}
                placeholder="(xx) - xxxxx-xxxx)"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="cpf"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="cpf"
                value={model.cpf}
                onChange={updateModel}
                placeholder="Enter the CPF"
              />

            </FloatingLabel>
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="address"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="address"
                value={model.address}
                onChange={updateModel}
                placeholder="Enter the Address"
              />

            </FloatingLabel>
          </Form.Group>
          <ButtonGroup>
            <Submit
              type="submit"
            >
              Submit
            </Submit>
          </ButtonGroup>
        </Form>
      </div>
    </Container >
  );
}
