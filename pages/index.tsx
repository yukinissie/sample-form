import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';

function setUserNamesCache(username: string) {
  if (typeof window !== 'undefined') {
    const usernames = getUserNamesCache()
    usernames.push(username)

    localStorage.setItem('USERNAMES_CACHE', JSON.stringify(usernames));
  }
}

function getUserNamesCache(): Array<string> {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('USERNAMES_CACHE') || "[]")
  }
  return ['']
}

const Home: NextPage = () => {
  const [username, setUsername] = useState('')

  function handleChange(event: any) {
    setUsername(event.target.value);
  }

  function handleSubmit(event: any) {
    setUserNamesCache(username)
    // event.preventDefault();
  }

  return (
    <div>
      <Head>
        <title>Sample Form</title>
        <meta name="description" content="This is sample form project." />
      </Head>

      <main>
        {getUserNamesCache()}
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" value={username} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  )
}

export default Home
