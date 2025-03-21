import LoginInput from "./loginInput";

const LoginForm = () => {
  return (
    <div className="space-y-7">
      <LoginInput type="email" placeholder="Your email here" />
      <LoginInput type="password" placeholder="Your password here" />
    </div>
  );
};

export default LoginForm;
