import React from 'react';

const Spinner = () => {
  return (
    <div className='fixed left-0 loadingBg right-0 top-0 bottom-0 flex w-full items-center justify-center z-[60]'>
      <div className="loading-bar absolute top-0">
        <div className="progress-bar"></div>
      </div>
      <div className="spinner">
        <div className="loaderans">
          <img alt="loader" src="/loadernew.webp" className='w-[200px] bounce-animation' />
        </div>
      </div>
    </div>
  );
}

export default Spinner;
