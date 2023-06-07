export interface FeedsResponseInterface {
  body: string;
  comments: number;
  created_at: string;
  created_at_tz: string;
  image: string;
  like_status: boolean;
  likes: number;
  pinned: boolean;
  share_status: boolean;
  shared_post: {
    uid: string
  };
  shares: number;
  uid: string;
  user: UserInterface
}


export interface UserInterface { 
  course_of_study: string;
  degree: string;
  name: string;
  profile_picture: string;
  uid: string
}