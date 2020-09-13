import Head from 'next/head';

const DashboardHead = (props) => {
    return(
        <Head>
            
            <title>{props.title}</title>
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
            <link href="/mdAssets/css/material-dashboard.css" rel="stylesheet" />
        </Head>
    )
}

export default DashboardHead;