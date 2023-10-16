// import React from 'react'
// import MainArea from './MainArea';
// import Cardsrow from './Cardsrow';
// import NavBar from "./NavBar";
// import Footer from "./Footer";

// const Home = () => {
//     return ( 
//         <div>
//             <NavBar />
//             <MainArea/>
//             <Cardsrow/>
//             <Footer />
//         </div>
//     );
// }
 
// export default Home;

import React, { useState, useEffect } from 'react';
import MainArea from './MainArea';
import Cardsrow from './Cardsrow';
import NavBar from './NavBar';
import Footer from './Footer';
import Loader from './Loader';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time with setTimeout (You can replace this with your actual loading process)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar/>
          <MainArea />
          <Cardsrow />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
