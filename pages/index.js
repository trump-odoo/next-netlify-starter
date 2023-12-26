import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Wordclock by H-Quântico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Olá Paty este é nosso site!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
