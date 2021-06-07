import { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import Container from '../../components/Container';
import styles from './LoginView.module.css';

class LoginView extends Component {
    state = {
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

                    <Form.Group className={styles.form_group} controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Please write down your registered email.
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

export default LoginView;