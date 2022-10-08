import * as React from 'react';
import MonthlyRentInputForm from '../components/monthlyRentInputForm';

export interface IHomePageProps {}

const HomePage: React.FC<IHomePageProps> = (props) => {
    return (
        <div>
            <p>HomePage Page</p>
            <MonthlyRentInputForm />
        </div>
    );
};

export default HomePage;
