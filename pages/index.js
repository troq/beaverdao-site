import Head from 'next/head'

export default function Home() {

  return (
    <div className="flex h-screen justify-center items-center text-center">
      <Head>
        <title>BeaverDAO</title>
        <link rel="icon" href="/images/beaver.png" />

        <meta property="og:title" content="BeaverDAO" key="ogtitle" />
        <meta property="og:description" content="MIT in crypto." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://beaverdao.com/" key="ogurl"/>
        <meta property="og:site_name" content="https://beaverdao.com/" key="ogsitename" />
      </Head>

      <div>
        <img src="./images/beaver.png"/>
        <h1 class="text-4xl font-bold text-primary mb-6">BeaverDAO</h1>
        <a href="https://discord.gg/zD5YVkQ8x5" class="inline-block text-primary border-primary border-2 hover:text-white hover:bg-primary p-2 px-4">Discord</a>
      </div>
    </div>
    )
  }
