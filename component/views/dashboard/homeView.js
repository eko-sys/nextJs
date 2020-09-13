import { Component } from "react";
import Main from '../../layouts/Dashboard/Main';
import ProductModal from "../product/modalView";
import Loader from 'react-loader-spinner';
import styles from '../../moduleStyle/chat-box.module.css';

class HomeView extends Component {

    constructor(props){
        super(props)

        this.state = {
            userDataLogin: null,
            typeViewModal: null
        }
    }

    componentDidMount(){
        this.userDataApi()
    }

    userDataApi(){
        const currentUrl = window.location.href;
        const uriSegment = currentUrl.split('/');
        const host = uriSegment[2];

        const url = `http://${host}/api/user/info?type=detail`;
        fetch(url, {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${this.props.token}`
            }
        }).then(res => res.json()).then(res => {
            this.setState({
                userDataLogin: res.data
            })
        })
    }

    toRpID(value){
        var reverse = value.toString().split('').reverse().join(''),
        ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');
        return ribuan;
    }

    ProductModalView(typeProduct){
        this.setState({
            typeViewModal: typeProduct
        })
    }

    render(){
        return(
            <div>
                <Main token={this.props.token}>
                
                    <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-warning card-header-icon">
                        <div className="card-icon">
                            <i className="material-icons">apps</i>
                        </div>
                            <p className="card-category">Hello, {this.state.userDataLogin ? this.state.userDataLogin.name : null}</p>
                       
                        </div>
                        <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons text-danger">warning</i>
                            <a href="#">###</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-success card-header-icon">
                        <div className="card-icon">
                            <i className="material-icons">store</i>
                        </div>
                        <p className="card-category">Saldo anda</p>
                        <h3 className="card-title">Rp {this.state.userDataLogin ? this.toRpID(this.state.userDataLogin.saldo) : null}</h3>
                        </div>
                        <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons">date_range</i>###
                        </div>
                        </div>
                    </div>
                    </div>
                   
                <div className="col-sm-6">
                    <div className="card text-center">
                        <p>Produk</p>
                    <div className="card-body">
                        <table className="table">
                            <tbody>
                                <tr className="text-center" style={{fontSize: '14px'}}>
                                    <th >
                                        <a>
                                            <i className="material-icons text-danger" onClick={() => {
                                                this.ProductModalView('pulsa')
                                            }} data-toggle="modal" data-target="#productModal" style={{fontSize: '2rem'}}>perm_phone_msg</i>
                                            <p>Pulsa</p>
                                        </a>
                                    </th>

                                    <th>
                                        <a>
                                            <i className="material-icons text-danger" onClick={() => {
                                                this.ProductModalView('data')
                                            }} data-toggle="modal" data-target="#productModal" style={{fontSize: '2rem'}}>important_devices</i>
                                            <p>Paket Data</p>
                                        </a>
                                    </th>
                                    <th>
                                        <a>
                                            <i className="material-icons text-danger" style={{fontSize: '2rem'}}>offline_bolt</i>
                                            <p>PLN</p>
                                        </a>
                                    </th>

                                    <th >
                                        <a>
                                            <i className="material-icons text-danger" style={{fontSize: '2rem'}}>facebook</i>
                                            <p>Social Media</p>
                                        </a>
                                    </th>
                                    
                                </tr>

                                <tr>

                                    <th >
                                        <a>
                                            <i className="material-icons text-danger" onClick={() => {
                                                this.ProductModalView('vdata')
                                            }} data-toggle="modal" data-target="#productModal" style={{fontSize: '2rem'}}>language</i>
                                            <p>Voucher Data</p>
                                        </a>
                                    </th>
                                        
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Public Live Chat</h4>
                        <div className={`${styles.chatBox}`}>
                    
                            <div className={`${styles.inputBox}`}>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <input type="text" className={`form-control ${styles.chatInput}`} placeholder="Message"/>
                                        <button type="button" className="btn btn-info btn-round">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="modal" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
                <ProductModal type={this.state.typeViewModal} token={this.props.token} />
                </Main>
        </div>
        )
    }

}

export default HomeView;