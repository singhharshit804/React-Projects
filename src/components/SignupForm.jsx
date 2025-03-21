import LoginInput from "./loginInput";

const SignupForm = () => {
  return (
    <div className="space-y-7">
      <LoginInput type="text" placeholder="Full Name" />
      <LoginInput type="email" placeholder="Your email here" />
      <LoginInput type="password" placeholder="Create password" />
    </div>
  );
};

export default SignupForm;
