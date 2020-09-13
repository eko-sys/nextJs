import Loader from 'react-loader-spinner';

class RegisterModal extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            email: '',
            pass: '',
            passConfirm: '',
            load: {
                isLoading: false
            },
            errForm: {
                err: false,
                msg: null
            }
        }
    }

    setLoading(val){
        this.setState({
            load: {
                isLoading: val
            }
        })
    }

    onHandleChange(to, e){
        this.setState({
            [to] : e.target.value
        });
        
    }

    errFormHandler(){
        const { email, pass, passConfirm } = this.state;
        const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email && !pass){
            this.setState({
                errForm: {
                    msg: 'Email dan password dibutuhkan!',
                    err: true
                }
            })
        }else if(!email){
            this.setState({
                errForm: {
                    msg: 'Email dibutuhkan!',
                    err: true
                }
            })
        }else if(regEmail.test(email) === false){
            this.setState({
                errForm: {
                    msg: 'Email tidak valid!',
                    err: true
                }
            })
        }else if(!pass){
            this.setState({
                errForm: {
                    msg: 'Password dibutuhkan!',
                    err: true
                }
            })
        }else if(pass != passConfirm){
            this.setState({
                errForm: {
                    msg: 'Password konfirmasi harus sama dengan password!',
                    err: true
                }
            })
        }
    }

    onSubmit(){
        this.errFormHandler();
    }

    render(){
        return(
                <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Buat akun baru!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>

                            { this.state.errForm.err === true ?
                                <div className="alert alert-warning alert-dismissible fade show  fixed-top" role="alert">
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
                        </div>
                        <div className="modal-body">

                        <div className="form-group mb-3">
                            <div className="input-group input-group-merge input-group-alternative">
                                <div className="input-group-prepend">
                                <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                </div>
                                <input name='email' value={this.state.email} onChange={(e) => {
                                    this.onHandleChange('email', e);
                                }} className="form-control" placeholder="Email" type="email" required/>
                            </div>
                            <div className="form-group">
                            </div>
                            <div className="input-group input-group-merge input-group-alternative">
                                <div className="input-group-prepend">
                                <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                </div>
                                <input value={this.state.pass} name="password" onChange={(e) => {
                                    this.onHandleChange('pass', e);
                                }} className="form-control" placeholder="Password" type="password" required/>
                            </div>
                            <div className="form-group">
                            </div>
                            <div className="input-group input-group-merge input-group-alternative">
                                <div className="input-group-prepend">
                                <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                </div>
                                <input name="password-confirm" value={this.state.passConfirm} onChange={(e) => {
                                    this.onHandleChange('passConfirm', e);
                                }} className="form-control" placeholder="Konfirmasi Password" type="password" required/>
                            </div>
                        </div>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Tutup</button>
                            <button type="button" onClick={() => {
                                this.onSubmit();
                            }} className="btn btn-primary">Buat Akun</button>
                        </div>
                        </div>
                    </div>
                    
                    <div className="fixed-bottom d-flex justify-content-center">
                        { this.state.load.isLoading === true ?
                            <Loader type="ThreeDots" color="#00BFFF" height={70} width={70} />
                            :
                            null
                        }
                    </div>
                    
                </div>
        )
    }

}

export default RegisterModal;