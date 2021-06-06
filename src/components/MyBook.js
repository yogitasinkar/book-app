import React, {useRef, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import FlipPage from "react-flip-page";
import FrontPage from './FrontPage';
import PageComp from './PageComp';
import {pages} from '../content/pages';
import BackPage from './BackPage';
import TOC from './TOC';

const MyBook = () => {
  const [currentPageState, setCurrentPageState] = useState(null)

  const flipPage = useRef();

  const handleNextClick = () => {
    // flipPage.current.incrementPage()
    flipPage.current.incrementPage()
    setCurrentPageState(flipPage.current)
    console.log(flipPage.current.gotoPage)
    // flipPage.current.state.page = 3
  }

  const handlePrevClick = () => {
    flipPage.current.decrementPage()
    setCurrentPageState(flipPage.current)
  }

  return (
    <>
      <Row className='h-100'>
      <Col/>
      <Col lg={8} sm={10} className='h-90' >
      <FlipPage
        ref={flipPage}
        className="book"
        showHint
        uncutPages
        responsive
        orientation="horizontal"
        pageBackground="#D06255"
        animationDuration="400"
      >
        <FrontPage />
        <TOC currentPageState={currentPageState}/>
        {pages.map((page)=> <PageComp page={page} key={page.id}/>)}
        <BackPage/>
      </FlipPage>
      <div className='text-center'>
        <button 
          className='m-2 btn btn-sm btn-primary' 
          onClick={handlePrevClick}
        > 
          Previous Page
        </button>
        <button 
          className='m-2 btn btn-sm btn-primary' 
          onClick={handleNextClick}
        >
          Next Page
        </button>
      </div>
      </Col>
      <Col/>
      </Row>
    </>
  );
}

export default MyBook