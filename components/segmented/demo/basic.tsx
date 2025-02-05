import React from 'react';
import { Segmented } from 'antd';

const Demo: React.FC = () => (
  <Segmented<string>
    options={['Pending Action', 'Involves Me', 'All Request']}
    onChange={(value) => {
      console.log(value); // string
    }}
  />
);

export default Demo;
