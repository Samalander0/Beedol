// UI component for user profile
export default function UserProfile({ user }) {
  return (
    <div className="userProfile">
      <img src={user.photoURL} alt="User profile picture"/>
      <h1>{user.displayName}</h1>
      <p>@{user.username}</p>
    </div>
  );
}