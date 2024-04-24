import React, { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';

export const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000 milliseconds (2 seconds)
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        {loading ? (
          <PropagateLoader color="#36d7b7" />
        ) : (
          <div className="">
            <h2 className="text-3xl font-semibold mb-4 text-center">Order Successfully</h2>
            <p>Your order has been successfully placed</p>
          </div>
        )}
      </div>
    </>
  );
};
