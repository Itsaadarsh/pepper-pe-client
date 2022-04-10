import React from 'react';
import { Card } from '../components/Card';
import useFetch from '../hooks/useFetch';
import { USER_API } from '../utils/consts';

export const Home = () => {
  const { isLoading, apiData, serverError } = useFetch('GET', `${USER_API}/get-user`, {});

  if (isLoading) {
    return <span>Loading!</span>;
  }
  if (!isLoading && serverError) {
    return <span>Error!</span>;
  }

  return (
    <section>
      <h1 className='text-7xl font-semibold text-center p-32'>
        Welcome To Our Mini Bank
        <br />
        <span className='italic text-sky-500'>Pepper Pe</span>
      </h1>
      <Card
        name={apiData.data.name}
        account_number={apiData.data.account_number}
        account_balance={apiData.data.account_balance}
      />
    </section>
  );
};
