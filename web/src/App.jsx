import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      {/* Show the user button when the user is signed in */}
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}

export default App;
