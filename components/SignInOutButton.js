import Link from 'next/link';

const SignInOutButton = ({ isLoggedIn, onSignOut }) => {
  return isLoggedIn ? (
    <div onClick={onSignOut} className="cursor-pointer hover:scale-110 transition-transform text-xl hover:text-primary-500">
      Sign Out
    </div>
  ) : (
    <Link href="/signin">
      <div className="cursor-pointer hover:scale-110 transition-transform text-xl hover:text-primary-500">
        Sign In
      </div>
    </Link>
  );
};

export default SignInOutButton;
