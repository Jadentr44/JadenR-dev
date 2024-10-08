import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
export default function Contact() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  function handleSubmit(){
    alert("sending email")
  }
  return (
    <section
    id="contact"
    className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative max-w-6xl mx-auto px-6"
  >
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
    <div className="z-10">
      <h5 className="text-xl font-bold dark:text-white my-2">
        Let&apos;s Connect
      </h5>
      <p className="dark:text-white mb-4 max-w-md">
        {" "}
        I&apos;m currently looking for new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I&apos;ll
        try my best to get back to you!
      </p>
      <div className="socials flex flex-row gap-2">
        <Link href="github.com">
          <Image width={50} height={50} src={'/icons/github.svg'} alt="Github Icon" />
        </Link>
        <Link href="linkedin.com">
          <Image className='' width={50} height={50}  src={'/icons/linkedin.svg'} alt="Linkedin Icon" />
        </Link>
      </div>
    </div>
    <div>
      {emailSubmitted ? (
        <p className="text-green-500 text-sm mt-2">
          Email sent successfully!
        </p>
      ) : (
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="dark:text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="dark:bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="dark:text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="dark:bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="dark:text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="dark:bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 dark:text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  </section>)
}
