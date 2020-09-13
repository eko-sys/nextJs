import ArgonMainHeader from '../../layouts/ArgonMainHeader';
import ArgonMainBody from '../../layouts/ArgonMainBody';
import RegisterModal from '../../views/auth/registerModalView';
import Loader from 'react-loader-spinner';

class LoginView extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            load: {
                isLoading: false
            },
            errForm: {
                err: false,
                msg: null
            }
        }
    }

    onChangeHandler(to, e){
        this.setState({
            [to] : e.target.value
        })
    }

    setLoading(val){
        this.setState({
            load: {
                isLoading: val
            }
        })
    }

    errFormHandler(){
        let { email, password } = this.state;
        const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email && !password){
            this.setState({
                errForm: {
                    msg: 'Email dan password tidak boleh kosong!',
                    err: true
                }
            });
        }else if(!email){
            this.setState({
                errForm: {
                    msg: 'Email tidak boleh kosong!',
                    err: true
                }
            });
        }else if(!password){
            this.setState({
                errForm: {
                    msg: 'Password tidak boleh kosong!',
                    err: true
                }
            });
        }else{
            this.handleLogin();
        }
    }

    onSubmit(){
        this.errFormHandler();
    }

    handleLogin(){
        this.setLoading(true);
        let { email, password } = this.state;
        const currentUrl = window.location.href;
        const uriSegment = currentUrl.split('/');
        const host = uriSegment[2];
        
        const url = `http://${host}/api/auth/login?email=${email}&password=${password}`;
        fetch(url, {
            method: 'post',
        }).then(res => res.json()).then(res => {
            this.setLoading(false)
            
            if(res.status === true){
                location.replace('/dashboard/home');
            }else{
                this.setState({
                    errForm: {
                        msg: 'Email atau password anda salah!',
                        err: true
                    }
                })
            }
        })

    }

    render(){
        return(
            <div>
                <ArgonMainHeader title= "Login Account" logoIconSite="/assets/img/brand/favicon"/>
                <ArgonMainBody bgClassName="bg-default">
                {/* Navbar */}
                <nav id="navbar-main" className="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light">
                    <div className="container">
                    <a className="navbar-brand" href="#">

                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse navbar-custom-collapse collapse" id="navbar-collapse">
                        <div className="navbar-collapse-header">
                        <div className="row">
                            <div className="col-6 collapse-brand">
                            <a href="/">
                                <p>DigiNet Pedia</p>
                            </a>
                            </div>
                            <div className="col-6 collapse-close">
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                            </button>
                            </div>
                        </div>
                        </div>
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <span className="nav-link-inner--text">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <span className="nav-link-inner--text">Login</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" data-toggle="modal" data-target="#registerModal" className="nav-link">
                            <span className="nav-link-inner--text">Daftar</span>
                            </a>
                        </li>
                        </ul>
                        <hr className="d-lg-none" />
                        <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                        <li className="nav-item">
                            <a className="nav-link nav-link-icon" href="#" target="_blank" data-toggle="tooltip" data-original-title="Like us on Facebook">
                            <i className="fab fa-facebook-square"></i>
                            <span className="nav-link-inner--text d-lg-none">Facebook</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-icon" href="#" target="_blank" data-toggle="tooltip" data-original-title="Follow us on Instagram">
                            <i className="fab fa-instagram"></i>
                            <span className="nav-link-inner--text d-lg-none">Instagram</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-icon" href="#" target="_blank" data-toggle="tooltip" data-original-title="Follow us on Twitter">
                            <i className="fab fa-twitter-square"></i>
                            <span className="nav-link-inner--text d-lg-none">Twitter</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-icon" href="#" target="_blank" data-toggle="tooltip" data-original-title="Star us on Github">
                            <i className="fab fa-github"></i>
                            <span className="nav-link-inner--text d-lg-none">Github</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                {/* Content */}
                <div className="main-content">
                    {/* Header */}
                    <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
                    <div className="container">
                        <div className="header-body text-center mb-7">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                            <h1 className="text-white">Selamat Datang!</h1>
                            <p className="text-lead text-white">Silahkan login untuk memulai!</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                    </div>
                    {/* Page Content */}
                    <div className="container mt--8 pb-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-7">
                            <div className="card bg-secondary border-0 mb-0">
                                <div className="card-header bg-transparent pb-5">
                                <div className="text-muted text-center mt-2 mb-3"><small>Login dengan</small></div>
                                <div className="btn-wrapper text-center">
                                    <a href="#" className="btn btn-neutral btn-icon">
                                    <span className="btn-inner--icon"><img src="/assets/img/icons/common/github.svg" /></span>
                                    <span className="btn-inner--text">Github</span>
                                    </a>
                                    <a href="#" className="btn btn-neutral btn-icon">
                                    <span className="btn-inner--icon"><img src="/assets/img/icons/common/google.svg" /></span>
                                    <span className="btn-inner--text">Google</span>
                                    </a>
                                </div>
                                </div>
                                <div className="card-body px-lg-5 py-lg-5 mb-80">

                                    <div className="fixed-bottom d-flex justify-content-center">
                                        {this.state.load.isLoading === true ?
                                            <Loader type="ThreeDots" color="#00BFFF" height={70} width={70} />
                                            :
                                            null
                                        }
                                    </div>

                                <div className="text-center text-muted mb-4">
                                    <small>Or sign in with credentials</small>
                                </div>
                                {this.state.errForm.err === true ?
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                            <span className="alert-icon"></span>
                                            <span className="alert-text"><strong>Peringatan! </strong>{this.state.errForm.msg}</span>
                                            <button onClick={() => {
                                                this.setState({
                                                    errForm:{
                                                        err: false
                                                    }
                                                })
                                            }} type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                    </div>
                                    :
                                    null
                                }
                                <div>
                                    <div className="form-group mb-3">
                                    <div className="input-group input-group-merge input-group-alternative">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                        </div>
                                        <input name='email' value={this.state.email} onChange={(e) => {
                                            this.onChangeHandler('email', e);
                                        }} className="form-control" placeholder="Email" type="email" required/>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="input-group input-group-merge input-group-alternative">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                        </div>
                                        <input name="password" value={this.state.password} onChange={(e) => {
                                            this.onChangeHandler('password', e);
                                        }} className="form-control" placeholder="Password" type="password" required/>
                                    </div>
                                    </div>
                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                    <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                                    <label className="custom-control-label" htmlFor=" customCheckLogin">
                                        <span className="text-muted">Remember me</span>
                                    </label>
                                    </div>
                                    <div className="text-center">
                                    <button type="submit" onClick={() => {
                                        this.onSubmit();
                                    }}
                                    className="btn btn-primary my-4">Sign in</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                <a href="#" className="text-light"><small>Lupa Password?</small></a>
                                </div>
                                <div className="col-6 text-right">
                                <a href="#" className="text-light"  data-toggle="modal" data-target="#registerModal"><small>Buat akun baru</small></a>
                                </div>

                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="py-5" id="footer-main">
                        <div className="container">
                        <div className="row align-items-center justify-content-xl-between">
                            <div className="col-xl-6">
                            <div className="copyright text-center text-xl-left text-muted">
                                &copy; 2019 - {new Date().getFullYear()} <a href="#" className="font-weight-bold ml-1" target="_blank">DigiNet Team</a>
                            </div>
                            </div>
                            <div className="col-xl-6">
                            <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                                <li className="nav-item">
                                <a href="#" className="nav-link" target="_blank">DigiNet Pedia</a>
                                </li>
                                <li className="nav-item">
                                <a href="#" className="nav-link" target="_blank">About Us</a>
                                </li>
                                <li className="nav-item">
                                <a href="#" className="nav-link" target="_blank">Blog</a>
                                </li>
                                <li className="nav-item">
                                <a href="#" className="nav-link" target="_blank">License</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </footer>

                    {/* Model */}
                    <RegisterModal />
                </ArgonMainBody>
            </div>
        )
    }
}

export default LoginView;