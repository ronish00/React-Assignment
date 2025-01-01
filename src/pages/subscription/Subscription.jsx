import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Subscription = () => {
    const [subscription, setSubscription] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { id } = useParams();

    const userSubscription = subscription.find((plan) => plan.user_id === id);
    const subscriber = users.find((user) => user.id == id);
    console.log(subscriber)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [subscriptionResponse, userResponse] = await Promise.all([
                    fetch('/subscriptions.json'),
                    fetch('/users.json')
                ]);

                if (!subscriptionResponse.ok) throw new Error('Failed to get subscription');
                if (!userResponse.ok) throw new Error('Failed to get users');

                const subscriptionData = await subscriptionResponse.json();
                const userData = await userResponse.json();

                setSubscription(subscriptionData);
                setUsers(userData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {
                userSubscription == null ? (
                    <div>No Plan Found</div>
                ) : (
                    <div>
                        <p><strong>User ID:</strong> {userSubscription.user_id}</p>
                        <p><strong>Package:</strong> {userSubscription.package}</p>
                        <p><strong>Expires On:</strong> {new Date(userSubscription.expires_on).toLocaleDateString()}</p>
                    </div>
                )
            }
            {
                subscriber && (
                    <div>
                        <h3>Subscriber Info:</h3>
                        <p><strong>Name:</strong> {subscriber.first_name} {subscriber.middle_name} {subscriber.last_name}</p>
                        <p><strong>Email:</strong> {subscriber.email}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Subscription;
