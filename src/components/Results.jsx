import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useStateContext } from '../contexts/StateContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.results?.map(({ link, title, description }, index) => (
            <div key={index} className="w-full">
              {/* <a href={link} rel="noreferrer">
                <p style={{ width: 'auto' }} className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                <p style={{ width: 'auto' }} className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
              </a> */}
              <p>
                <a target="_blank" className="text-sm" href={link} rel="noreferrer">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </a>
              </p>
              <p>
                <a target="_blank" className="text-lg hover:underline dark:text-blue-300 text-blue-700" href={link} rel="noreferrer">
                  {title}
                </a>
              </p>

              <div className="flex gap-4">
                <p style={{ maxWidth: '700px' }}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case '/image':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.image_results?.map(({ image, link: { href, title } }, index) => (
            <a href={href} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );
    case '/news':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
          {results?.entries?.map(({ id, links, source, title }) => (
            <div key={id} className="w-full ">

              <div className="flex gap-4">
                <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-300"> {source?.href}</a>
              </div>
              <p style={{ maxWidth: '500px' }}>
                <a className="text-lg dark:text-blue-300 text-blue-700 hover:underline" style={{ maxWidth: '500px' }} href={links?.[0].href} target="_blank" rel="noreferrer ">
                  {title}
                </a>
              </p>

            </div>
          ))}
        </div>
      );
    case '/videos':
      return (
        <div className="flex flex-wrap ">
          {results?.results?.map((video, index) => (
            <div key={index} className="p-2">
              <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
            </div>
          ))}
        </div>
      );
    default:
      return 'Error...';
  }
};
