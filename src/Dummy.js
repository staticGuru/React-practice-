import React from 'react'
// import { Textbox } from 'react-inputs-validation';

function Dummy() {
  return (
    <div>
      
    </div>
  )
}

export default Dummy





















// // import React from 'react';
// // import { useForm } from 'react-hook-form';

// // function Dummy() {
// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm();
// //   const onSubmit = (data) => console.log(data);

// //   return (
// //     <form onSubmit={handleSubmit(onSubmit)}>
// //       <input {...register('firstName')} /> {/* register an input */}
// //       <input {...register('lastName', { required: true })} />
// //       {errors.lastName && <p>Last name is required.</p>}
// //       <input {...register('age', { pattern: /\d+/ })} />
// //       {errors.age && <p>Please enter number for age.</p>}
// //       <input type="submit" />
// //     </form>
// //   );
// // }
// // export default Dummy;



// import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
// import React, { Component } from 'react';
// import validator from 'validator';
 
// function Dummy(){
 
//   const required = (value) => {
//     if (!value.toString().trim().length) {
//       // We can return string or jsx as the 'error' prop for the validated Component
//       return 'require';
//     }
//   };
   
//   const email = (value) => {
//     if (!validator.isEmail(value)) {
//       return `${value} is not a valid email.`
//     }
//   };
   
//   const lt = (value, props) => {
//     // get the maxLength from component's props
//     if (!value.toString().trim().length > props.maxLength) {
//       // Return jsx
//       return <span className="error">The value exceeded {props.maxLength} symbols.</span>
//     }
//   };
   
//   const password = (value, props, components) => {
//     // NOTE: Tricky place. The 'value' argument is always current component's value.
//     // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
//     // But if we're changing 'confirm' component - the condition will always be true
//     // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
//     if (value !== components['confirm'][0].value) { // components['password'][0].value !== components['confirm'][0].value
//       // 'confirm' - name of input
//       // components['confirm'] - array of same-name components because of checkboxes and radios
//       return <span className="error">Passwords are not equal.</span>
//     }
//   };
 
//         return (<Form>
//             <h3>Login</h3>
//             <div>
//                 <label>
//                     Email*
//                     <Input value='email@email.com' name='email' validations={[required, email]}/>
//                 </label>
//             </div>
//             <div>
//                 <label>
//                     Password*
//                     <Input type='password' name='password' validations={[required]}/>
//                 </label>
//             </div>
//             <div>
//                 <button>Submit</button>
//             </div>
//         </Form>)

// }
// export default Dummy;