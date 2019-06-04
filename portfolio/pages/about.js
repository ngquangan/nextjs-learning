import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link href = "/">
        <a>Home</a>
      </Link>
      <p>This is about page</p>
      <img src = "/static/logo.png" height = { 200} />
    </div>
  )
}

export default About;