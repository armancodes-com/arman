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
