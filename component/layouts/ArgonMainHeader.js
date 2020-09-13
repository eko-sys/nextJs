import Head from 'next/head';

const ArgonMainHeader = (props) => {

    return(
            <Head>
                
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Start your development with a Dashboard for Bootstrap 4." />
                <meta name="author" content="Creative Tim" />
                <title>{props.title}</title>
                
                <meta name="keywords" content="s" />
                <meta name="description" content="Start your development with a Dashboard for Bootstrap 4." />
                
                <meta itemProp="name" content="Argon - Premium Dashboard for Bootstrap 4 by Creative Tim" />
                <meta itemProp="description" content="Start your development with a Dashboard for Bootstrap 4." />
                <meta itemProp="image" content="/s3.amazonaws.com/creativetim_bucket/products/137/original/opt_adp_thumbnail.jpg" />
         
                <meta property="fb:app_id" content="655968634437471" />
                <meta property="og:title" content="Argon - Premium Dashboard for Bootstrap 4 by Creative Tim" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://demos.creative-tim.com/argon-dashboard/index.html" />
                <meta property="og:image" content="/s3.amazonaws.com/creativetim_bucket/products/137/original/opt_adp_thumbnail.jpg" />
                <meta property="og:description" content="Start your development with a Dashboard for Bootstrap 4." />
                <meta property="og:site_name" content="Creative Tim" />
                {/* icon */}
                <link rel="icon" href="/assets/img/brand/favicon.pnsg" type="image/png" />
                
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" />
                
                <link rel="stylesheet" href="/assets/vendor/nucleo/css/nucleo.css" type="text/css" />
                <link rel="stylesheet" href="/assets/vendor/%40fortawesome/fontawesome-free/css/all.min.css" type="text/css" />
                
                <link rel="stylesheet" href="/assets/css/argon.min9f1e.css?v=1.1.0" type="text/css" />
            </Head>
    )

}

export default ArgonMainHeader;