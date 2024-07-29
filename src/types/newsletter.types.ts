export interface INewsLetterSuccessResponseProps {
  data: {
    id: number;
    created_at: string;
    updated_at: string;
    uuid: string;
    email: string;
    name: string;
    attribs: null;
    status: string;
    lists: [
      {
        subscription_status: "unconfirmed" | "confirmed";
        subscription_created_at: string;
        subscription_updated_at: string;
        subscription_meta: null;
        id: number;
        uuid: string;
        name: string;
        type: string;
        optin: string;
        tags: string[];
        description: string;
        created_at: string;
        updated_at: string;
      },
    ];
  };
}

export interface INewsLetterPreExistenceResponseProps {
  message: "E-mail already exists.";
}

export interface IGetNewsLetterSubscribers {
  data: {
    id: number;
    created_at: "2024-07-02T22:49:08.022912Z";
    updated_at: "2024-07-14T07:31:22.102547Z";
    uuid: "51e87ed9-de56-450f-afe5-27b976f6004f";
    name: "armancodes.com Newsletter";
    type: "private";
    optin: "single";
    tags: ["armancodes.com"];
    description: "armancodes.com main newsletter list";
    subscriber_count: number;
    subscriber_statuses: {
      confirmed: number;
      unconfirmed: number;
    };
    subscription_created_at: null;
    subscription_updated_at: null;
  };
}

export interface IGetSubscribersResponse {
  message: string;
  totalSubscribers: number;
  status: number;
}
