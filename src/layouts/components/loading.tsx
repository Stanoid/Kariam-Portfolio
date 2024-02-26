import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color,h,w }) => (
    <ReactLoading type={type} color={color} height={h} width={w} />
);

export default Loading;
