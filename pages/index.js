import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <img 
          className="big-sig"
          src="/signature.png"
      ></img>
      {/* <h1>home</h1> */}
      <p className="bio-text">Tara is a singer, writer, host, maker, and activist all but unable to live without red lipstick, black nail polish, and her two cats.</p>
      {/* <img className="bio-pic" src="/tararainbow.jpeg"></img> */}
      
    </Layout>
  )
}
