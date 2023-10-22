export type Activity = {
  name: string;
  description: string;
  type: string;
  distance: number;
  elapsed_time: number;
  moving_time: number;
  average_temp: number;
  device_name: string;
  average_speed: number;
  average_watts: number;
  elev_high: number;
  elev_low: number;
  calories: number;
  max_watts: number;
  max_speed: number;
  private: boolean;
  start_latlng: number[];
  sport_type: string;
  city: string;
  state: string;
  country: string;
  start_date: string;
  start_date_local: string;
  gear: {
    name: string;
  };
  segment_efforts: {
    name: string;
  }[];
  photos: {
    primary: {
      urls: {
        600: string;
      };
    };
  };
  media_metadata: {
    [key: string]: {
      [key: string]: {
        uri: string;
      };
    };
  };
};

export type User = {
  firstName: string;
  lastName: string;
  weight: number;
  sex: String;
  strUserId: string;
  strRefreshToken: string;
  profileImage: string;
};

export type WebhookRequest = {
  body: {
    object_id: number;
    aspect_type: string;
    owner_id: number;
    updates: { private: string; visibility: string };
  };
};
