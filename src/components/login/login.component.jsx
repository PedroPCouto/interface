import FormInput from '../Form-Input/form-input.component';
import './login.styles.scss'
import {useState} from 'react'
import Logo from '../../assets/logo.svg'
const defaultFormFields = {
    username: '',
    password: '',
  };

const Login = () => {


  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, password } = formFields;

    const sendForm = (event) =>{
        event.preventDefault()
        clearFields()
    }

    const clearFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleOnChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]:value})
    }

    return(

        <div className="Form">
            <form onSubmit={sendForm}>
            <img src={Logo} alt="React Logo" />
                <div className="input-container">
                    <FormInput
                    label='Usuário'
                    type='username'
                    required
                    onChange={handleOnChange}
                    name='username'
                    value={username}
                    />
                </div>
                <div className="input-container">
                    <FormInput
                    label='Senha'
                    type='password'
                    required
                    onChange={handleOnChange}
                    name='password'
                    value={password}/>
                </div>
                <button className="botao" >ENTRAR</button>
            </form>
        </div>
    )
}

export default Login;

















