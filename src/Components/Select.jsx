import React from "react";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //go through an array and return unique values of desired attribute
  getUnique = (arr, comp) => {
    const unique = arr
      .map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e])
      .map(e => arr[e]);
    return unique;
  };

  render() {
    const userData = this.props.testData;
    //use getunique functions to get unique genders available
    const gender = this.getUnique(userData, "Gender");
    //use getunique functions to get unique paymentMethods available
    const payment = this.getUnique(userData, "PaymentMethod");
    return (
      <>
        <select onChange={this.props.genderChange} defaultValue="">
          <option value="">GENDER</option>
          {gender.map(item => (
            <option key={item.MacAddress} value={item.Gender}>
              {item.Gender}
            </option>
          ))}
        </select>
        <select onChange={this.props.paymentChange} defaultValue="">
          <option value="">PAYMENT METHOD</option>
          {payment.map(item => (
            <option key={item.MacAddress} value={item.PaymentMethod}>
              {item.PaymentMethod}
            </option>
          ))}
        </select>
      </>
    );
  }
}

export default Select;
