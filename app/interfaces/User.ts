export interface User {
  userId: string;
  userName: string;
  userEmail: string;
  userType: string;
  userStatus: string;
  userPermissions: string;
  userPhoto?: string;
  userBio?: string;
  userLikes?: string;
  userDislikes?: string;
  userTechnologies?: string;
  userBalance: string;
}
