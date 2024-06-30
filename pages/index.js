// pages/index.js
import TopBar from "../components/TopBar";
import UsersPage from "./users";

export default function Home() {

  return (
    <TopBar title="Home Page">
      <div>Main page</div>
      <UsersPage />
    </TopBar>
  );
}
