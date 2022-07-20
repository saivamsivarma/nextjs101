import Head from 'next/head'
import SourcesList from '../components/SourcesList';
import { useState } from 'react';
export default function Home({ data }) {
  const [sources, setSources] = useState(data.sources);
  const [countryCode, setCountryCode] = useState("");
  const [resultCode,setResultCode] = useState("");
  const [loading,setLoading] = useState(false);


  const search = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (countryCode == '') return alert("Please enter country code");
      if (countryCode.length != 2) return alert("Please enter 2 charater country code");
      const searchValue = countryCode.toLowerCase();
      let news = await fetch(`https://newsapi.org/v2/top-headlines/sources?country=${searchValue}&apiKey=91bdc06d0a8a4cc6969f11a20a0b660d`)
      const data = await news.json();
      setLoading(false);
      setSources(data.sources);
      setResultCode(searchValue);
      setCountryCode('');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
      {resultCode.length!=0?<title>Result realted to {resultCode}</title>:<title>Nextjs page</title>}

        <meta name='keywords' content='Nextjs' />
      </Head>
      <form onSubmit={search} className="form">
        <input type="text" className='' placeholder='Search by country' value={countryCode} onChange={(e) => { setCountryCode(e.target.value) }} />
        <button className='btn btn-primary'>Search</button>
      </form>
      <style jsx>
        {`form{
          width:${sources?.length>0 ? '35%':'100%'};
        }`}
      </style>
      {resultCode.length!=0?<div className='result_information'>{sources.length} Sources found using <span>{resultCode}</span> Country Code</div>:<></>}
      {loading?<>Fetching the data</>:<SourcesList sources={sources} />}
      
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=91bdc06d0a8a4cc6969f11a20a0b660d`);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}
