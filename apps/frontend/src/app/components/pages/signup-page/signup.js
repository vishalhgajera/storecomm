import React from 'react';
import './signup.scss'; 
import SignupForm from '../../blocks/form/signup-form';

const Signup = () => {
  return (
    <div>
      {/* <h2 className={styles.myBlock}>Signup</h2> */}
      <SignupForm/>
    </div>
  );
};

export default Signup;