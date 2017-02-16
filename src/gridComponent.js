import React, { Component } from 'react';

export default class GridComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber:0
    }
    this.loadMore = this.loadMore.bind(this);
  }
  loadMore() {
    console.count("loadmore")
    const pageNumber = this.state.pageNumber + 1;
    this.setState({
      pageNumber,
    })
  }
  render() {
    let allKeys = new Set();
    this.props.data.forEach(row => {
      Object.keys(row).forEach(key => {
        allKeys.add(key);
      });
    });
    allKeys = [...allKeys];
    // console.log(allKeys);
    const heading = allKeys.map((key, i) => <th key={i}> {key} </th>);
    const jsx = this.props.data.slice(0,(this.state.pageNumber+1)*10).map((row, i) => {
    const col = allKeys.map((key, i) => {
        return <td key={i}>
          {(() => {
            if (typeof row[key] !== 'object') {
              return row[key]
            } else if (key === 'images') {
              const images = row[key].map((image,i) => {
                return <img src={image} key={i} alt="car{i}" className="img-thumbnail img-responsive img"/>;
              });
              return <div className="container"> {images}</div>
            } else {
              return '';
            }
          })()
          }
        </td>
      });
    return <tr key={i}>{col}</tr>;
    });

    return (
      <div>

        <table className="table table-bordered">
          <thead>
            <tr>
            {heading}
            </tr>
          </thead>
          <tbody>
            {jsx}
          </tbody>
        </table>
        <a onClick={this.loadMore}>Load more</a>
      </div>
    );
  }
}