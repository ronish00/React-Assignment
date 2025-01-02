import "./subscriber.css";
import { useParams } from "react-router-dom";
import { useFetchQuery } from "../../hooks/useFetchQuery";

const Subscription = () => {
  const {
    data: users,
    loading: usersLoading,
    error: usersError,
  } = useFetchQuery("/users.json");
  const {
    data: subscriptions,
    loading: subscriptionsLoading,
    error: subscriptionsError,
  } = useFetchQuery("/subscriptions.json");
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
        <p>
          {subscriptionsError &&
            `Error fetching subscriptions: ${subscriptionsError}`}
        </p>
      </div>
    );
  }

  return (
    <>
      {subscriber && (
        <div className="user">
          <div className="user-name">
            <h2>
              {subscriber.first_name} {subscriber.middle_name}{" "}
              {subscriber.last_name}
            </h2>
            <p>{subscriber.username}</p>
          </div>
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #D0D5DD",
              height: "1px",
              width: "100%",
            }}
          />
          <div className="user-info">
            <div className="title">
              <p>Email</p>
              <p>Address</p>
              <p>Country</p>
              <p>Join Date</p>
            </div>
            <div className="value">
              <p>{subscriber.email}</p>
              <p>{subscriber.address}</p>
              <p>{subscriber.country}</p>
              <p>{subscriber.join_date}</p>
            </div>
          </div>
        </div>
      )}
      <div className="plan">
        <h2>Plan</h2>
        <div className="plan-info">
          {userSubscription == null ? (
            <p>No Plan Found</p>
          ) : (
            <>
              <div>
                <p className="caption">Your Plan</p>
                <h2>{userSubscription.package}</h2>
              </div>
              <p>
                <strong>Expires On:</strong>{" "}
                {new Date(userSubscription.expires_on).toLocaleDateString()}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Subscription;
