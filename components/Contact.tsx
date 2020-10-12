import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import classes from '../config/classes';
import H2 from './H2';

const Contact = () => {
  return (
    <section className={`${classes.wrapper} text-gray-700 body-font relative`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <H2>Contact Us</H2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="p-2 w-1/2">
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="p-2 w-full">
              <textarea
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
                placeholder="Message"></textarea>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-indigo-500">example@email.com</a>
              <p className="leading-normal my-5">
                49 Smith St.
                <br />
                Saint Cloud, MN 56301
              </p>
              <span className="inline-flex">
                <a className="text-gray-500" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} size="1x" className="" />
                </a>
                <a className="ml-4 text-gray-500" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="1x" className="" />
                </a>
                <a className="ml-4 text-gray-500" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLink} size="1x" className="" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
