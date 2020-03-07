import React, { Component } from "react";
import "./index.less";
import NoteList from "./noteList";
import { Card } from "antd";

export default class Notebook extends Component {
  render() {
    return (
      <div className="notebook">
        this is Notebook page
        <Card>
          <NoteList />
        </Card>
      </div>
    );
  }
}
