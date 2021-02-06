import Header from "../components/header";
import Layout from "../components/layout";

export default function Write() {
    return(
        <Layout>
            <h1>write</h1>
            <ul className="platform-list">
                <li className="platform-item">
                    <h2>Echoes</h2>
                    <ul className="article-list">
                        <li className="article-item">
                            <a
                                href="https://www.echoesofthestruggle.com/single-post/2019/01/10/dear-men-why"
                                className="article-link"
                            >Dear men, why?</a>
                        </li>
                        <li className="article-item">
                            <a
                                href="https://www.echoesofthestruggle.com/single-post/2017/06/15/finally-a-wonder-woman-movie"
                                className="article-link"
                            >Finally, A Wonder Woman Movie</a>
                        </li>
                    </ul>
                </li>
                <li className="platform-item">
                    <h2>The Washington Post</h2>
                    <ul className="article-list">
                        <li className="article-item">
                            <a
                                href="https://www.thelily.com/livid-about-the-rollback-of-abortion-rights-me-too-heres-how-i-use-and-soothe-my-rage/"
                                className="article-link"
                            >Livid about the rollback of abortion rights? Me too. Here’s how I use — and soothe — my rage.</a>
                        </li>
                        <li className="article-item">
                            <a
                                href="https://www.thelily.com/a-salute-to-broad-city-as-it-comes-to-a-close/"
                                className="article-link"
                            >A salute to ‘Broad City’ as it comes to a close</a>
                        </li>
                    </ul>
                </li>
                <li className="platform-item">
                    <h2>Inside Out</h2>
                    <ul className="article-list">
                        <li className="article-item">
                            <a
                                href="https://readinsideout.com/placement/finger/how-long-do-finger-tattoos-take-to-fade/"
                                className="article-link"
                            >So, How Long Do Finger Tattoos Take to Fade?</a>
                        </li>
                        <li className="article-item">
                            <a
                                href="https://readinsideout.com/culture/stories/keeping-a-tattoo-i-regret/"
                                className="article-link"
                            >I Regret My Tattoo, But I’m Keeping It—Here’s Why</a>
                        </li>
                        <li className="article-item">
                            <a
                                href="https://readinsideout.com/education/can-you-get-a-tattoo-while-pregnant/"
                                className="article-link"
                            >Can You Get a Tattoo While Pregnant?</a>
                        </li>
                    </ul>
                </li>
                <li className="platform-item">
                    <h2>Harness Magazine</h2>
                    <ul className="article-list">
                        <li className="article-item">
                            <a
                                href="https://www.harnessmagazine.com/the-a-word/"
                                className="article-link"
                            >The A Word</a>
                        </li>
                    </ul>
                </li>


            </ul>
            {/* blog nested here */}
            <style jsx>{`
                li {
                    color: #f0f0f0;
                    font-weight: 200;
                }
                p {
                    font-weight: 200;
                }
            `}</style>
        </Layout>
    )
}