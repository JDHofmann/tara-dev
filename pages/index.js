// import '../public/tararainbow'

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <h1>home</h1>
      <p>Signature bigger on this page</p>
      <img className="bio-pic" src="/tararainbow.jpeg"></img>
      <p>about section</p>
      <style jsx>{`
        .bio-pic {
          width: 100%;
          display: block;
          max-width: 500px;
          margin: 2vh auto;
        }
      `}</style>
    </Layout>
  )
}
