import React from 'react';
class MyForm4 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dob: '',
        age: null,
        err:'',
        errormessage: ''
 
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      let err = '';
    
      if (nam === "salary") {
       
        if (val !=="" && !Number(val)) {
          err = <strong style={{color: 'red'}}>numeric value only allowed</strong>;
        }
      }
   
      this.setState({errormessage: err});
  
      this.setState({[nam]: val});
    }
    render() {
      return (
        <form>
       
        <p>Enter your date of birth</p>
        <input
          type='date'
          name='dob'
          onChange={this.myChangeHandler}
        />
      
        <p>Enter your salary:</p>
        <input
          type='text'
          name='salary'
          placeholder="your salary"
          onChange={this.myChangeHandler}
        />
        {this.state.errormessage}
        </form>
      );
    }
  }
  export default MyForm4;