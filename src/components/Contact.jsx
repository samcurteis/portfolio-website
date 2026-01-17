import emailIcon from '../assets/white-email-icon.png';
import { useInView } from 'react-intersection-observer';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { NOTIFY } from '../lib/notifications';

export default function Contact() {
  const setting = {
    triggerOnce: true
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1m0cjg4',
        'template_sc0597r',
        form.current,
        '7dVYbnJZqPDBI70P2'
      )
      .then(
        (result) => {
          console.log(result.text);
          NOTIFY.SUCCESS('Message sent');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { ref: contact, inView: contactInView } = useInView(setting);
  return (
    <div
      className={'component contact ' + (contactInView ? 'show' : 'hidden')}
      ref={contact}
    >
      <span className='m-anchor' id='m-contact'></span>
      <span className='anchor' id='contact'></span>
      <h2 className='title'>Contact</h2>
      <div className='links'>
        <a
          href='mailto:samcurteis@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='section'>
            {' '}
            <img alt='email icon' src={emailIcon} />
            <p>samcurteis@gmail.com</p>
          </div>
        </a>
        <a
          href='https://github.com/samcurteis'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='section'>
            {' '}
            <i className='devicon-github-original'></i>
            <p>/samcurteis</p>
          </div>
        </a>
        <a
          href='https://www.linkedin.com/in/samcurteis/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='section'>
            <i className='devicon-linkedin-plain'></i>
            <p>/in/samcurteis</p>
          </div>
        </a>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <h3 className='title'> Get in touch</h3>
        <label>Name</label>
        <input className='name' type='text' name='user_name' />
        <label>Email</label>
        <input type='email' name='user_email' />
        <label>Subject</label>
        <input className='subject' type='text' name='subject' />
        <label>Message</label>
        <textarea name='message' />
        <button type='submit' value='Send'>
          Send
        </button>
      </form>
    </div>
  );
}
