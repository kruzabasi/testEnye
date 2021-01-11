import React, { useState, useEffect } from "react";
import Axios from "axios";
import CardList from "./Components/CardList";
import Search from "./Components/Search";
import Select from "./Components/Select";
import Pagination from "./Components/Pagination";

function App({ initialData }) {
  const [gender, setGender] = useState("");
  const [payment, setPayment] = useState("");
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [allData, setAllData] = useState(false);

  const handleGenderChange = e => {
    setGender(e.target.value);
  };
  const handlePaymentChange = e => {
    setPayment(e.target.value);
  };

  const searchHandler = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await Axios.get("https://api.enye.tech/v1/challenge/records");
      setUserData(res.data.records.profiles);
      setLoading(false);
    };
    getData();
  }, []);
  //pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = userData.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const viewAll = () => {
    setAllData(!allData);
    console.log(allData);
  };
  return (
    <div className={"mainApp"}>
      <h1>Enye Frontend (1.1)</h1>
      This is a sample stateful and server-side rendered React application.
      <br />
      <br />
      <Select
        genderChange={handleGenderChange}
        paymentChange={handlePaymentChange}
        testData={userData}
      />
      <Search handleSearch={searchHandler} />
      <Pagination
        paginate={paginate}
        postsPerPage={postsPerPage}
        totalPosts={userData.length}
        viewAll={viewAll}
        allData={allData}
      />
      <CardList
        paymentProp={payment}
        genderProp={gender}
        searchProp={search}
        testData={userData}
        loading={loading}
        paginated={currentPost}
        allData={allData}
      />
    </div>
  );
}
export default App;
