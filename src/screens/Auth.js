import React, { useEffect, useState } from 'react';
import { axiosCodeClient } from 'src/bootstrap/axios';
import { Navigate } from 'react-router-dom';
import Loader from 'src/components/Loader.component';
import Error from 'src/components/Error.component';
import { useUser } from 'src/hooks/user';

export default function Auth() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useUser();

  const fetchStravaUser = async (stravaCode) => {
    try {
      const { data } = await axiosCodeClient('/', { data: { stravaCode } });
      if (data.firstName) setUser(data);
      setIsLoading(false);
    } catch (error) {
      setError(JSON.stringify(error));
    }
  };

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const stravaCode = Object.fromEntries(urlSearchParams.entries());
    if (stravaCode.error || !stravaCode.code) {
      setError(true);
      return;
    }
    fetchStravaUser(stravaCode.code);
  }, []);

  if (error) {
    return <Error error={error} />;
  }

  if (isLoading || !user.firstName) {
    return <Loader />;
  }

  return <Navigate to={'/dashboard'} />;
}
