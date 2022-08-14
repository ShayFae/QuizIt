import { useState } from 'react';
import './Home.css';

 
export default function Home() {
  const [carousel, setCarousel] = useState('one');

  return(
      <div>
        <h1 className='home'>Welcome to Quiz It</h1>
        <section className='carousel-section'>
          <button className='carousel' onClick={() => setCarousel('one')}></button>
          <button className='carousel' onClick={() => setCarousel('two')}></button>
          <button className='carousel' onClick={() => setCarousel('three')}></button>
          <button className='carousel' onClick={() => setCarousel('four')}></button>
          <button className='carousel' onClick={() => setCarousel('five')}></button>
          </section>
        
        <section className='home'>
          {carousel === 'one' &&  <article><img src='https://www.verywellfamily.com/thmb/L0mE1NUZdJr2kRoyCmfLAXtqxic=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/iStock-607040647-5a318cfcb39d030037c8ef1a.jpg' alt='' /></article>}
          {carousel === 'two' &&  <article><img src='http://dano.com.ng/wp-content/uploads/2017/07/family-WATCHING-TV--1024x512.jpg' alt='' /></article>}
          {carousel === 'three' &&  <article><img src='https://viralsolutions.net/wp-content/uploads/2019/06/shutterstock_749036344.jpg' alt='' /></article>}
          {carousel === 'four' &&  <article><img src='https://snacknation.com/wp-content/uploads/2020/08/27-Virtual-Trivia-Ideas-For-People-Who-Know-Facts-And-Nothing-Else-copy.png' alt='' /></article>}
          {carousel === 'five' &&  <article><img src='https://www.brightful.me/content/images/2021/06/1-1.jpg' alt='' /></article>}     
        </section>
      </div>
  );
}