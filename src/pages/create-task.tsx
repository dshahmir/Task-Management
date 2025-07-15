import React from 'react';
import CreateTaskClient from '../components/CreateTaskClient';
import Head from 'next/head';

export default function CreateTaskPage() {
  return (
    <>
      <Head>
        <title>Create New Task</title>
        <meta name="description" content="Add a new task to your task management system" />
      </Head>
      <CreateTaskClient />
    </>
  );
}
