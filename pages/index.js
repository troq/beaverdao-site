import Head from 'next/head'

export default function Home() {

  return (
    <div className="flex h-screen justify-center items-center text-center">
      <Head>
        <title>BeaverDAO</title>
        <link rel="icon" href="/images/favicon.png" />

        <meta property="og:title" content="BeaverDAO" key="ogtitle" />
        <meta property="og:description" content="MIT in crypto." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://beaverdao.com/" key="ogurl"/>
        <meta property="og:site_name" content="https://beaverdao.com/" key="ogsitename" />
      </Head>

      <div>
        <h1 class="text-5xl mb-6">BeaverDAO</h1>
        <a href="https://example.com" class="inline-block bg-black text-white border-black border-2 hover:text-black hover:bg-white p-2 px-4">Discord</a>
      </div>
    </div>
    )
  }
