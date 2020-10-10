import React from "react";
//import Table from "./Table.js";
const Student = require("../../db/models/students");

class Main extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    //   this.state = {
    //     nameFull: "",
    //   };
  }
  // componentDidMount() {
  //   this.setState({
  //     nameFull: Student.fullName,
  //   });
  //}
  render() {
    return (
      <table>
        <thead>Full Name</thead>
        <tbody>{this.props.Student.fullName}</tbody>
      </table>
    );
  }
}
export default Main;
