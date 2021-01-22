import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfileImage from "../components/profile-image.js"
import AlbumImage from "../components/album-image.js"
import Video from "../components/video.js"
import styles from "../components/styles/about.module.scss"
import "../components/styles/global.scss"

const About = () => {
    return (
        <Layout>
            <SEO title="About" />
            <section id="design" className={styles.containerBio}>
                <div className={styles.profile}>
                    <ProfileImage />
                </div>
                <div className={styles.textBio}>
                    <h1>I'm a UX Designer who believes in the power of a story.</h1>
                    <p> As a musician turned designer, I believe that connecting people to a story leads to the most meaningful experiences -- it creates community.
                    I’ve always wanted to be a storyteller throughout my childhood. This led me to become a jazz musician. For nearly 12 years, I wrote my own story in New York City. There, I learned how to connect emotionally with diverse groups of people, in many a smoky jazz club (minus the smoke).</p>

                    <p>In addition to music, I’ve worked as a videographer and sound designer, helping artists and organizations increase their social media metrics by over 200% and gain nearly 10,000 unique viewers. My audiovisual work has been featured by audio industry giants like Moog Synthesizers and popular events platforms like Fever.
                    Other than that, I enjoy traveling, mushroom hunting, and photography -- all after a cup of home-roasted coffee. Thanks for reading.</p>
                </div>
            </section>

            <section id="music">
                <h2 className={styles.h2}>I like to compose jazz,</h2>
                <div className={styles.containerMusic}>
                    <div className={styles.album}>
                        <a href="https://tonewheel.bandcamp.com/album/tonewheel" target="_blank" rel="noreferrer noopener">
                            <AlbumImage />
                        </a>
                    </div>
                    <div className={styles.textAlbum}>
                        <p> In 2019, I released my debut album, <i>Tonewheel</i>. After years of writing music, I decided it was time to bring it to life. <i>Tonewheel</i> is a collection of observations and experiences of immigrating to and growing up in the U.S. Each song is based on a story, ranging from escaping the Soviet Union to witnessing the challenges of growing up in an urban neighborhood. </p>

                        <p>The idea for the name came from <a href="https://en.wikiversity.org/wiki/Motivation_and_emotion/Book/2014/Plutchik%27s_wheel_of_emotions" target="_blank" rel="noreferrer noopener">Plutchik's Wheel of Emotions</a>. But, a tonewheel can be a mechanical gear or even a color wheel. As far as the album goes, it symbolizes the detailed plot and emotional journey of each story.</p>

                        <p>I'm proud to say that the album has received wide acclaim, with over 1 million listeners as of 2020. You can check it out by following the album cover link, if you'd like.</p>
                    </div>
                </div>
            </section>

            <section id="video">
                <h2 className={styles.h2}>and create videos.</h2>
                <div className={styles.containerVideo}>
                    <Video
                        videoSrcURL="https://www.youtube.com/embed/ISUlEB8_nXI"
                        videoTitle="Parker 51 | Snap Saxophone Quartet"
                    />
                </div>
            </section>
        </Layout>
    )
}

export default About