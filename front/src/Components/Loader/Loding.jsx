import React from 'react';
import { ColorRing } from  'react-loader-spinner'

const Loding = () => {
    return (
        <div>
  <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#5FBDFF', '#7B66FF', '#B31312', '#000000', '#FFFB73']}
/>
        </div>
    );
};

export default Loding;