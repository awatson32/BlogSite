declare module models {
    interface IPost {
        title: string;
        author: string;
        content: string;
        id?: string;
    }
    interface IResponse {
        status: string;
        message?: string;
        data?: any;
        errors?: Array<Error>;
    }
}

declare module contexts {
    interface IHome {
        posts: Array<models.IPost>;
    }
}

