import LoginView from '../../component/views/auth/loginView';

class Login extends React.Component{

    static async getInitialProps({query}){

        return {query: query}
    }

    render(){
        return(
            <div>
                <LoginView query={this.props.query}/>
            </div>
        )
    }
}

export default Login;