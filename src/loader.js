import React, { useState,useEffect } from 'react';
import useSWR from 'swr'
import axios from 'axios';
export default function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  const imgbaseurl=process.env.NEXT_PUBLIC_IMAGE_BASE_API_URL
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const server_ip = process.env.NEXT_PUBLIC_BACKEND_API_BASE;
  const { data, error } = useSWR(server_ip + 'getGeneralSetting', fetcher);


   useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, data && data.length>0?data[0].splashtime:8000); 
  }, []);

  const closeLoader = () => {
    setShowLoader(false);
  };

  const loaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  };

  const contentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    position: 'relative',
  };

  const imageStyle = {
    maxWidth: '100%',
    width:'100%',
    maxHeight: '500px',
    height:'auto',
    margin: '20px 0',
    resizeMode: 'contain',
  };

  const closeStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    fontSize: '20px',
    color: '#000',
  };

  return (
    showLoader && (
      <div style={loaderStyle}>
        <div style={contentStyle}>
          <img
            src={data && data.length>0?imgbaseurl+data[0].site_splash:'assets/images/banners/banner-1.png'}
            alt="Loading"
            style={imageStyle}
          />
      <span
  style={closeStyle}
  onClick={closeLoader}
  role="button"
  tabIndex={0}
>
  &#x2716;
</span>


        </div>
      </div>
    )
  );
}
