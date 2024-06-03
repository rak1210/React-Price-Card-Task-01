import React from 'react';
import './App.css';

const PriceCard = ({ title, price, features, nonFeatures }) => {
    return (
        <div className="card">
            <p>{title}</p>
            <h2>${price}/month</h2>
            <hr/>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}><span role="img" aria-label="checkmark">✔️</span> {feature}</li>
                ))}
            </ul>
            <ul className="non-features">
                {nonFeatures.map((nonFeature, index) => (
                    <li key={index}><span role="img" aria-label="cross">❌</span> {nonFeature}</li>
                ))}
            </ul>
            <button>Button</button>
        </div>
    );
};

const App = () => {
    const cards = [
        {
            title: 'Free',
            price: '0',
            features: ['Single user', '50GB storage', 'Unlimited public projects', 'Community access'],
            nonFeatures: ['Unlimited private projects', 'Dedicated phone support', 'Free subdomain', 'Monthly status report']
        },
        {
            title: 'Plus',
            price: '9',
            features: ['5 users', '50GB storage', 'Unlimited public projects', 'Community access', 'Unlimited private projects', 'Dedicated phone support', 'Free subdomain'],
            nonFeatures: ['Monthly status report']
        },
        {
            title: 'Pro',
            price: '49',
            features: ['Unlimited users', '50GB storage', 'Unlimited public projects', 'Community access', 'Unlimited private projects', 'Dedicated phone support', 'Free subdomain', 'Monthly status report'],
            nonFeatures: []
        }
    ];

    return (
        <div className="App">
            <h1>Choose Your Plan</h1>
            <div className="price-cards">
                {cards.map((card, index) => (
                    <PriceCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default App;