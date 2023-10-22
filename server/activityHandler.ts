import { getToken } from './tokenManager';
import { getActivity, updateActivity } from './network';
import { getUserById } from './db';
import { Activity, User, WebhookRequest } from './types';

export const getActivityAndDoStuff = async (req: WebhookRequest) => {
  try {
    const { object_id, owner_id } = req.body;
    const userResp = (await getUserById(owner_id)) as User;
    if (!userResp) return;
    const accessToken = await getToken(userResp.strRefreshToken);
    const activity = (await getActivity(object_id, accessToken)) as Activity;
    if (!activity) return;

    let newDescription = activity.description + '\n This is a test';
    // * Do stuff with activity here *
    await updateActivity(object_id, accessToken, {
      description: newDescription,
    });
  } catch (err) {
    console.log('Error in imageCreator', err);
  }
};
