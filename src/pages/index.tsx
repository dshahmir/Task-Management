import React from 'react';
import TaskManagementClient from '../components/TaskManagementClient';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Task Management App</title>
        <meta name="description" content="Manage your tasks efficiently" />
      </Head>
      <TaskManagementClient />
    </>
  );
}
