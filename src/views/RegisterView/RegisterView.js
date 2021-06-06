import { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import Container from '../../components/Container';
import styles from './RegisterView.module.css';

class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };
    
    handleSubmit = e => {
        e.preventDefault();
    
        this.props.onRegister(this.state);
    
        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        return (
            <Container>
                <Form className={styles.form}>
                    <Form.Group className={styles.form_group} controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                        <Form.Text className="text-muted">
                            We'll never share your name with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className={styles.form_group} controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className={styles.form_group} controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }

}

export default RegisterView;