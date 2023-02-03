import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Card } from "./Card"
import InfiniteScroll from "react-infinite-scroll-component";
import { BasicSpinner } from './BasicSpinner';

export const Home = ({ list , nextPage, hasMore = true}) => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <section className="py-4 py-lg-5 container pt-5">
      <InfiniteScroll
        dataLength={list?.length || 0}
        next={nextPage}
        hasMore={hasMore}
        loader={<BasicSpinner/>}
      >
        <div className="row">
          {list.length ? list.map((item) => <Card key={item.id} img={item} />) : null}
        </div>
      </InfiniteScroll>
    </section>
  );
};

