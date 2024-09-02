/* eslint-disable react/prop-types */
import Header from './subcomponents/Header'
import Featured from './subcomponents/Featured'
import Results from './subcomponents/Results';
// import { useState } from 'react'
const options = {
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzBjOGE4MGVmNTE3ODVlZTNjMjExMWIyZWRjNTU4OSIsIm5iZiI6MTcyNTEyODcxNS41NzUzNDUsInN1YiI6IjY2ZDM1ZDkxNGE3NzlkMmE1Y2IxNjkyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ny_zoZFkI4K7g-QjaUohRno-UiOlPvLcgaNRSiq7H0I"
    }
};

const Home = () => {
    // const [currentSearch] = useState();

    return (
        <>
            <Header ApiKey={options} />

            <Results />
            <Featured ApiKey={options}/>
        </>
    );
};

export default Home;
