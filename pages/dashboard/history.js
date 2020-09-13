import { Component } from "react";
import HistoryView from '../../component/views/dashboard/historyView';
import DashboardHead from '../../component/layouts/Dashboard/DashboardHead';
import DashboardBody from '../../component/layouts/Dashboard/DashboardBody';

class History extends Component {

    static async getInitialProps({query}){

        return {query: query};
    }

    render(){
        return(
            <div>
                <DashboardHead title="History"/>
                <DashboardBody >
                    <HistoryView token={this.props.query.token}/>
                </DashboardBody>
            </div>
        )
    }

}

export default History;