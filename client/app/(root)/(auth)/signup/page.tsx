import SignupForm from "@/components/pages/auth/SignupForm";

const Signup = () => {
  return (
    <section className="pt-20 pb-8">
      <div className="bg-footer-pattern absolute w-full h-full left-0 bottom-0"></div>
      <div className="container flex justify-center mt-8">
        <SignupForm />
      </div>
    </section>
  );
};

export default Signup;
