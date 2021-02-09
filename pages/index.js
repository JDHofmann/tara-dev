// import '../public/tararainbow'

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <img 
          className="big-sig"
          src="/signature.png"
      ></img>
      <img className="bio-pic" src="/tararainbow.jpeg"></img>
      {/* <h1>home</h1> */}
      <p>Signature bigger on this page</p>
      <p>about section</p>
    </Layout>
  )
}
