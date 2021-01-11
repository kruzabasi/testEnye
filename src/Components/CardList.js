import React from "react";
import Card from "./Cards";

const CardList = props => {
  const allData = props.allData;
  const testData = allData ? props.testData : props.paginated;
  //filter through data using gender attribute
  const sexFilter =
    props.genderProp === ""
      ? testData
      : testData.filter(f => {
          return f.Gender === props.genderProp;
        });
  //from already filtered data re-filter with payment type attribute
  const paymentFilter =
    props.paymentProp === ""
      ? sexFilter
      : sexFilter.filter(f => {
          return f.PaymentMethod === props.paymentProp;
        });
  const searchedUser = paymentFilter.filter(user => {
    return (
      user.LastName.toLocaleLowerCase().includes(
        props.searchProp.toLocaleLowerCase()
      ) ||
      user.FirstName.toLocaleLowerCase().includes(
        props.searchProp.toLocaleLowerCase()
      )
    );
  });
  return props.loading ? (
    <h2>loading dinn din loading...</h2>
  ) : (
    <div>
      {/*map through fully filtered data  into Card component */}
      {searchedUser.map(profile => (
        <Card key={profile.MacAddress} {...profile} />
      ))}
    </div>
  );
};

export default CardList;
