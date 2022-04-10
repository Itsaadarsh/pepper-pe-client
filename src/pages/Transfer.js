import axios from 'axios';
import React, { useState } from 'react';
import { Card } from '../components/Card';
import useFetch from '../hooks/useFetch';
import { TOKEN, USER_API } from '../utils/consts';

export const Transfer = () => {
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const pay = async () => {
    console.log('hah');

    const resp = await axios({
      method: 'POST',
      url: `${USER_API}/transaction`,
      data: {
        to: +to,
        amount: +amount,
        remarks: message,
      },
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    console.log('resp');
    const data = await resp?.data;
  };

  return (
    <section>
      <div className='h-screen bg-slate-50 flex justify-center items-center w-full'>
        <div className='bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-lg'>
          <div className='space-y-4'>
            <h1 className='text-center text-5xl font-semibold text-gray-600 italic p-5'>Quick Transfer</h1>
            <div>
              <label className='block mb-1 text-gray-600 font-semibold'>To</label>
              <input
                value={to}
                onChange={event => setTo(event.target.value)}
                type='text'
                className='bg-gray-100 px-4 py-2 outline-none rounded-md w-full'
              />
            </div>
            <div>
              <label className='block mb-1 text-gray-600 font-semibold'>Amount</label>
              <input
                value={amount}
                type='text'
                onChange={event => setAmount(event.target.value)}
                className='bg-gray-100 px-4 py-2 outline-none rounded-md w-full'
              />
            </div>
            <div>
              <label className='block mb-1 text-gray-600 font-semibold'>Message</label>
              <input
                value={message}
                type='text'
                onChange={event => setMessage(event.target.value)}
                className='bg-gray-100 px-4 py-2 outline-none rounded-md w-full'
              />
            </div>
          </div>
          <button
            className='mt-10 w-full bg-sky-500 font-semibold py-2 rounded-md  tracking-wide'
            onClick={pay}
          >
            PAY
          </button>
        </div>
      </div>
    </section>
  );
};
