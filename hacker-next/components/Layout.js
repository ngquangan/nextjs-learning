import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
const Layout = ({ children, title, description, backButton}) => {
  return (
    <div>
      <Head>
        <meta 
          name = "description"
          content = {description}
        />
        <title>{ title }</title>
      </Head>
      <div className = "container">
        <nav>
          { backButton && (<span onClick = {() => Router.back()} className = "story__back">&#x2b05;</span>) }
          <Link href = "/">
            <a>
              <span className = "main-title" >Hacker Next</span>
            </a>
          </Link>
        </nav>
        { children }
      </div>
      <style jsx>
        {
          `
            .container {
              max-width: 80%;
              margin: 0 auto;
              background: #f6f6f6;
            }
            nav {
              background: #f60;
              padding: 1em;
            }
            nav > * {
              display: inline-block;
              color: black;
            }
            nav a {
              text-decoration: none;
            }
            nav .main-title {
              font-weight: bold;
            }
            nav .story__back {
              font-size: 0.9rem;
              padding-right: 1em;
              cursor: pointer;
            }
          `
        }
      </style>
      <style global jsx>
        {
          `
            background: #fff;
            font-family: Verdana, Geneva, sans-serif;
          `
        }
      </style>
    </div>
  )
};

export default Layout;