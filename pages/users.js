import React from 'react';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/users');
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default function UsersPage({ users }) {
	if(!users) return <div>Loading...</div>
	
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}