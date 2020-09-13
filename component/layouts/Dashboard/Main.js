import {  Component } from "react";

class Main extends Component {
    
    constructor(props){
        super(props);

        this.state = ({
            home: null,
            history: null,
            userRole: null,
            logout: async () => {
                await confirm('Continue logout?') ?
                location.replace('/logout')
                :null
            }
        })
    }

    componentDidMount(){
        this.activeLink();
        
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
                userRole: res.data.role_id
            })
        })
    }


    activeLink(){
        const currentUrl = window.location.href;
        const uriSegment = currentUrl.split('/');
        const pageActive = uriSegment[4];
        const fillterUrl = pageActive.replace(/[^a-zA-Z0-9-_]/g, '');

        this.setState({
            [fillterUrl]: 'active'
        })
    }
    
    render(){
        return(
            
            <div>
                <div className="wrapper ">
                        <div className="sidebar" data-color="purple" data-background-color="white" data-image="/mdAssets/img/sidebar-1.jpg">

                        <div className="logo"><a href="#" className="simple-text logo-normal">
                            DigiNet Pedia
                            </a></div>
                        <div className="sidebar-wrapper">
                            <ul className="nav">
                            { this.state.userRole === 1 ?
                                <li className={"nav-item " + this.state.admin }>
                                    <a className="nav-link" href="/dashboard/admin">
                                    <i className="material-icons">admin_panel_settings</i>
                                    <p >Admin</p>
                                    </a>
                                </li>
                                :
                                null
                            }
                            
                                <li className={"nav-item " + this.state.home }>
                                    <a className="nav-link" href="/dashboard/home">
                                    <i className="material-icons">dashboard</i>
                                    <p >Dashboard</p>
                                    </a>
                                </li>

                                <li className={"nav-item " + this.state.history}>
                                    <a className="nav-link" href="/dashboard/history">
                                    <i className="material-icons">print</i>
                                    <p >History</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="main-panel">
            
                        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                            <div className="container-fluid">
                            <div className="navbar-wrapper">
                                <a className="navbar-brand" href="#">Dashboard</a>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="navbar-toggler-icon icon-bar"></span>
                                <span className="navbar-toggler-icon icon-bar"></span>
                                <span className="navbar-toggler-icon icon-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end">
                                <form className="navbar-form">
                                <div className="input-group no-border">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                    <i className="material-icons">search</i>
                                    <div className="ripple-container"></div>
                                    </button>
                                </div>
                                </form>
                                <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    <i className="material-icons">dashboard</i>
                                    <p className="d-lg-none d-md-block">
                                        Stats
                                    </p>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="material-icons">notifications</i>
                                    <span className="notification">5</span>
                                    <p className="d-lg-none d-md-block">
                                        Some Actions
                                    </p>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">#</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="material-icons">person</i>
                                    <p className="d-lg-none d-md-block">
                                        Account
                                    </p>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                                    <a className="dropdown-item" href="#">Profile</a>
                                    <a className="dropdown-item" href="#">Settings</a>
                                    <div className="dropdown-divider" ></div>
                                    <a className="dropdown-item" onClick={() => {
                                        this.state.logout()
                                    }} href="#" >Log out</a>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </nav>

                            <div className="content">
                                <div className="container-fluid">
                                <div className="row">
                                    {this.props.children}
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="fixed-plugin">
                        <div className="dropdown show-dropdown">
                        <a href="#" data-toggle="dropdown">
                            <i className="fa fa-cog fa-2x"> </i>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="header-title"> Sidebar Filters</li>
                            <li className="adjustments-line">
                            <a href="#" className="switch-trigger active-color">
                                <div className="badge-colors ml-auto mr-auto">
                                <span className="badge filter badge-purple" data-color="purple"></span>
                                <span className="badge filter badge-azure" data-color="azure"></span>
                                <span className="badge filter badge-green" data-color="green"></span>
                                <span className="badge filter badge-warning" data-color="orange"></span>
                                <span className="badge filter badge-danger" data-color="danger"></span>
                                <span className="badge filter badge-rose active" data-color="rose"></span>
                                </div>
                                <div className="clearfix"></div>
                            </a>
                            </li>
                            <li className="header-title">Images</li>
                            <li className="active">
                            <a className="img-holder switch-trigger" href="#">
                                <img src="/mdAssets/img/sidebar-1.jpg" alt="" />
                            </a>
                            </li>
                            <li>
                            <a className="img-holder switch-trigger" href="#">
                                <img src="/mdAssets/img/sidebar-2.jpg" alt="" />
                            </a>
                            </li>
                            <li>
                            <a className="img-holder switch-trigger" href="#">
                                <img src="/mdAssets/img/sidebar-3.jpg" alt="" />
                            </a>
                            </li>
                            <li>
                            <a className="img-holder switch-trigger" href="#">
                                <img src="/mdAssets/img/sidebar-4.jpg" alt="" />
                            </a>
                            </li>
                            <li className="header-title">DigiNet Pedia</li>
                            <li className="button-container text-center">
                            <button id="twitter" className="btn btn-round btn-twitter"><i className="fa fa-twitter"></i> </button>
                            <button id="facebook" className="btn btn-round btn-facebook"><i className="fa fa-facebook-f"></i> </button>
                            <br />
                            <br />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
