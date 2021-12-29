import React from "react";
import Leftbar from "../../components/Leftbar/Leftbar";
import "./HomeScreen.css"
import Middle from "../../components/Middle/Middle";
import Rightbar from "../../components/Rightbar/Rightbar"
class HomeScreen extends React.Component {
  render() {
    return (
      <div className="home">
        <Leftbar />
        <Middle />
        <Rightbar />
      </div>
    );
  }
}
export default HomeScreen