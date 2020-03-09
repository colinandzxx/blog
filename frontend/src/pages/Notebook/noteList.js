import React, { Component } from "react";
import { List, message, Avatar } from "antd";

import WindowScroller from "react-virtualized/dist/commonjs/WindowScroller";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import VList from "react-virtualized/dist/commonjs/List";
import InfiniteLoader from "react-virtualized/dist/commonjs/InfiniteLoader";

import { reqFakeList } from "../../api";



class NoteList extends Component {
  state = {
    data: [],
    loading: 0
  };

  loadedRowsMap = {};

  componentDidMount() {
    this.mounted = true;
    this.setState({
      loading: this.state.loading + 1
    });
    this.fetchData(res => {
      if (this.mounted) {
        this.setState({
          data: res.results,
          loading: this.state.loading - 1
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // fetchData = callback => {
  //   reqwest({
  //     url: fakeDataUrl,
  //     type: "json",
  //     method: "get",
  //     contentType: "application/json",
  //     success: res => {
  //       callback(res);
  //     }
  //   });
  // };

  fetchData = async callback => {
    const result = await reqFakeList(5);
    console.log(result);    
    callback(result);
  };

  handleInfiniteOnLoad = ({ startIndex, stopIndex }) => {
    let { data, loading } = this.state;
    for (let i = startIndex; i <= stopIndex; i++) {
      // 1 means loading
      this.loadedRowsMap[i] = 1;
    }
    // if (data.length > 100) {
    //   message.warning("Virtualized List loaded all");
    //   // this.setState({
    //   //   loading: loading
    //   // });
    //   return;
    // }
    this.setState({
      loading: loading + 1
    });

    this.fetchData(res => {
      if (this.mounted) {
        let { data, loading } = this.state;
        data = data.concat(res.results);
        this.setState({
          data,
          loading: loading - 1
        });
      }
    });
  };

  isRowLoaded = ({ index }) => !!this.loadedRowsMap[index];

  renderItem = ({ index, key, style }) => {
    const { data } = this.state;
    const item = data[index];
    return (
      <List.Item key={key} style={style}>
        <List.Item.Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={<a href="https://ant.design">{item.name.last}</a>}
          description={item.email}
        />
      </List.Item>
    );
  };

  render() {
    const { data } = this.state;
    const vlist = ({
      height,
      isScrolling,
      onChildScroll,
      scrollTop,
      onRowsRendered,
      width
    }) => (
      <VList
        autoHeight
        height={height}
        isScrolling={isScrolling}
        onScroll={onChildScroll}
        overscanRowCount={2}
        rowCount={data.length}
        rowHeight={73}
        rowRenderer={this.renderItem}
        onRowsRendered={onRowsRendered}
        scrollTop={scrollTop}
        width={width}
      />
    );
    const autoSize = ({
      height,
      isScrolling,
      onChildScroll,
      scrollTop,
      onRowsRendered
    }) => (
      <AutoSizer disableHeight>
        {({ width }) =>
          vlist({
            height,
            isScrolling,
            onChildScroll,
            scrollTop,
            onRowsRendered,
            width
          })
        }
      </AutoSizer>
    );
    const infiniteLoader = ({
      height,
      isScrolling,
      onChildScroll,
      scrollTop
    }) => (
      <InfiniteLoader
        isRowLoaded={this.isRowLoaded}
        loadMoreRows={this.handleInfiniteOnLoad}
        rowCount={data.length}
      >
        {({ onRowsRendered }) =>
          autoSize({
            height,
            isScrolling,
            onChildScroll,
            scrollTop,
            onRowsRendered
          })
        }
      </InfiniteLoader>
    );
    return (
      <List
        loading={!!this.state.loading}
        style={{ textAlign: "left" }}
        split={false}
      >
        {data.length > 0 && <WindowScroller>{infiniteLoader}</WindowScroller>}
      </List>
    );
  }
}

export default NoteList;
