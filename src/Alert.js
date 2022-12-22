import React, { useEffect } from 'react';
import { useGlobalContext } from './context';

const Alert = () => {
  const { alert, list, removeAlert } = useGlobalContext();
  const { type, msg } = alert;
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
