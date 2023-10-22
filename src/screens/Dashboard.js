import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosCodeClient } from 'src/bootstrap/axios';
import { Button, Logo } from 'src/components';
import { CenteredDiv, ButtonContainer } from 'src/components/styleComponents';
import { useUser } from 'src/hooks/user';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user] = useUser();

  const disableAccount = async () => {
    try {
      await axiosCodeClient(`/${user.stravaUserId}`, { method: 'DELETE' });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const name = useMemo(() => {
    const defaultName = 'friend';

    if (!user?.firstName) return defaultName;
    // The default name for new users is 'Strava Athlete'.
    if (
      user.firstName?.toLowerCase() === 'strava' &&
      user?.lastName?.toLowerCase() === 'athlete'
    )
      return defaultName;

    return user.firstName;
  }, [user]);

  return (
    <CenteredDiv>
      <Logo success />
      <h3>Welcome {name}, you are now set up with YOUR_APP</h3>
      <p>
        If you want to de-activate YOUR_APP integration, click below to turn off
        the integration.
      </p>
      <ButtonContainer>
        <Button onClick={disableAccount}>Deactivate my account</Button>
      </ButtonContainer>
    </CenteredDiv>
  );
}
