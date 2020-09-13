import { Component } from "react";
import HomeView from '../../component/views/dashboard/homeView';
import DashboardHead from '../../component/layouts/Dashboard/DashboardHead';
import DashboardBody from '../../component/layouts/Dashboard/DashboardBody';

class Dashboard extends Component {

    static async getInitialProps({query}){

        return {query: query};
    }

    render(){
        return(
            <div>
                <DashboardHead title="Dashboard Home"/>
                <DashboardBody >
                    <HomeView token={this.props.query.token}/>
                </DashboardBody>
            </div>
        )
    }

}

export default Dashboard;