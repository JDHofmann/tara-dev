// import '../public/tararainbow'

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <img 
          className="sig big-sig"
          src="/signature.png"
      ></img>
      <img className="bio-pic" src="/tararainbow.jpeg"></img>
      {/* <h1>home</h1> */}
      <p>Signature bigger on this page</p>
      <p>about section</p>
      <style jsx>{`
        .bio-pic {
          width: 100%;
          display: block;
          max-width: 500px;
          margin: 2vh auto;
          border-radius: 10px;
        }
        .big-sig {
          display: block;
          margin: 0 auto;
          padding: 2.5vmin 0;
          width: 80%;
          max-width: 800px;
          min-width: 300px;
      }
      `}</style>
    </Layout>
  )
}
