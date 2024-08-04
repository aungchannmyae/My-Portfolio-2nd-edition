import React, { useContext } from 'react'
import { GeneralContext } from '../Context/GeneralProvider';

const Portfolio = () => {
    const {portfolio, setPortfolio} = useContext(GeneralContext);
    return (
      <section className={` ${ !portfolio && " hidden"} `}>
        <div>
          Profile
        </div>
      </section>
    )
  }

export default Portfolio