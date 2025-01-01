import { useParams } from "react-router-dom";
import { useFetchQuery } from "../../hooks/useFetchQuery";

const Subscription = () => {

  const { data: users, loading: usersLoading, error: usersError } = useFetchQuery('/users.json');
  const { data: subscriptions, loading: subscriptionsLoading, error: subscriptionsError } = useFetchQuery('/subscriptions.json');
  const { id } = useParams();

  const userSubscription = subscriptions?.find((plan) => plan.user_id === id);
  const subscriber = users?.find((user) => user.id == id);

  if (usersLoading || subscriptionsLoading) {
    return <div>Loading...</div>;
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
    <div>
      {userSubscription == null ? (
        <div>No Plan Found</div>
      ) : (
        <div>
          <p>
            <strong>User ID:</strong> {userSubscription.user_id}
          </p>
          <p>
            <strong>Package:</strong> {userSubscription.package}
          </p>
          <p>
            <strong>Expires On:</strong>{" "}
            {new Date(userSubscription.expires_on).toLocaleDateString()}
          </p>
        </div>
      )}
      {subscriber && (
        <div>
          <h3>subscriber Info:</h3>
          <p>
            <strong>Name:</strong> {subscriber.first_name}{" "}
            {subscriber.middle_name} {subscriber.last_name}
          </p>
          <p>
            <strong>Email:</strong> {subscriber.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default Subscription;
