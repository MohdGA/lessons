const Dashboard = ({user}) => {
  return (
    <>
      <main>
        <h1>Welcome {user}</h1>

        <p>Only users can see this page</p>
      </main>
    </>
  )
}

export default Dashboard;