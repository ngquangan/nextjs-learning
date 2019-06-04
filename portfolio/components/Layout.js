import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', url => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default (props) => {
  return (
    <div className = "root">
      <Head>
        <title>{ props.title }</title>
      </Head>
      <header>
        <Link href="/"><a >Home</a></Link>
        <Link href="/about"><a >About</a></Link>
        <Link href="/hireme"><a >Hire me</a></Link>
        <Link href="/blog"><a >Blog</a></Link>
      </header>
      <div className = "container">
        <h1>{ props.title } </h1>
        { props.children }
      </div>
      <footer>&copy; { new Date().getFullYear() }</footer>
      <style jsx>
        {`
            .root {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
            header {
              width: 100%;
              display: flex;
              justify-content: space-around;
              padding: 1em;
              font-size: 1.2rem;
              background: indigo;
            }
            header a {
              color: darkgrey;
              text-decoration: none;
            }
            header a:hover {
              color: lightgrey;
              font-weight: 1em;
            }
            .container {
              max-width: 80%;
              margin: 0 auto;
              text-align: center
            }
            footer {
              padding: 1em
            }
          `}
      </style>
      <style global jsx>
        {`
          body {
            margin: 0;
            font-size: 110%;
            background: #FOFOFO;
          }
        `}
      </style>
    </div>
  )
}