import { Component } from "react";
import Main from '../../layouts/Dashboard/Main';
import HistoryDatable from "../../views/datatable/historyTable";

class HistoryView extends Component {

    constructor(props){
        super(props);
        this.state = {
            userHistoryAll: null,
        }
    }

    componentDidMount(){
        this.apiHistoryAll();
    }

    apiHistoryAll(){
        const currentUrl = window.location.href;
        const uriSegment = currentUrl.split('/');
        const host = uriSegment[2];

        const apiUrl = `http://${host}/api/user/info?type=history`;
        fetch(apiUrl, {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${this.props.token}`
            }
        }).then(res => res.json()).then(res => {
            this.setState({
                userHistoryAll: res.data
            })
        })
    }

    onClickDetail(trxid){

    }

    render(){
        return(
            <div>
                <Main token={this.props.token}>
                <div className="col-lg-12 col-md-12">
                    { this.state.userHistoryAll ?
                        <HistoryDatable data={this.state.userHistoryAll}/>
                        :
                        null
                    }
                </div>
                </Main>
            </div>
        )
    }

}

export default HistoryView;