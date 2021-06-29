import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Parizat. I am currently pursuing my fourth year Bachelor of Engineering in Computer Science. I have a research background with expertise in Machine Learning. Now I am working as a Full Stack Web Developer. You can contact me on {' '}
        <a href="https://twitter.com/BintaParizat">Twitter</a></p>
        <p>
          [This is my first website with nextjs - To know more about nextjs you can visit{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a> ]
        </p>
      </section>
    </Layout>
  )
}