import "./dashboard.css"
import {useFetchQuery} from '../../hooks/useFetchQuery.js'
import Users from "../../components/Icon/Users.jsx";
import Subscriptions from "../../components/Icon/Subscriptions.jsx";
import ActiveUsers from "../../components/Icon/ActiveUsers.jsx";

const Dashboard = () => {

  const {data:users, loading:usersLoading, error:usersError} = useFetchQuery('/users.json');
  const {data:subscriptions, loading:subscriptionsLoading, error:subscriptionsError} = useFetchQuery('/subscriptions.json');

  const cardItems = [
    {
      id: 1,
      name: "Total Users",
      data: users?.length || 0,
      icon: <Users />
    },
    {
      id: 2,
      name: "Total Subscriptions",
      data: subscriptions?.length || 0,
      icon: <Subscriptions />
    },
    {
      id: 3,
      name: "Active Users",
      data: users?.filter((user) => user.active === "1").length,
      icon: <ActiveUsers />
    }
  ]

  if(usersLoading || subscriptionsLoading){
    return <div>Loading...</div>
  }

if (usersError || subscriptionsError) {
    return (
      <div>
        <p>{usersError && `Error fetching users: ${usersError}`}</p>
        <p>{subscriptionsError && `Error fetching subscriptions: ${subscriptionsError}`}</p>
      </div>
    );
  }

  return (
    <>
      <div className='cards'>
        {
          cardItems.map((item) => (
            <div className="card-item" key={item.id}>
              <div>
                {item.icon}
              </div>
              <div>
                <p>{item.name.toLocaleUpperCase()}</p>
                <h3>{item.data}</h3>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Dashboard
