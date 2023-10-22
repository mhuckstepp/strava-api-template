import axios from 'axios';
import { Activity } from './types';

const ACTIVITY_BASE_URL = 'https://www.strava.com/api/v3/activities';

export const getActivity = async (
  activityId: number,
  accessToken: string,
): Promise<Activity> => {
  try {
    const request = await axios.get(`${ACTIVITY_BASE_URL}/${activityId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return request.data;
  } catch (err) {
    console.log('Error in getActivity', err);
  }
};

export const updateActivity = async (
  activityId: number,
  accessToken: string,
  updates: object,
): Promise<Activity> => {
  try {
    const request = await axios.put(
      `${ACTIVITY_BASE_URL}/${activityId}`,
      updates,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return request.data;
  } catch (err) {
    console.log('Error in updateActivity', err);
  }
};
