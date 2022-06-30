// import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//     imgUrl: "https://picsum.photos/200",
//     tags: ["tag1", "tag2", "tag3"],
//   };
//   styles = {
//     fontSize: 30,
//     fontWeight: "bold",
//   };

//   render() {
//     return (
//       <div>
//         <img src={this.state.imgUrl} alt="" />
//         <span style={this.styles} className={this.getBadgeClasses()}>
//           {this.formatCount()}
//         </span>
//         <button className="btn btn-secondary btn-sm">increment</button>
//         <ul>
//           {this.state.tags.map((tag) => (
//             <li key={tag}>{tag}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

//   getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += this.state.count === 0 ? "warning" : "primary";
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? "zero" : count;
//   }
// }

// export default Counter;

// CONDITIONAL RENDERING
// import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//     tags: [],
//   };

//   renderTag() {
//     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
//     return (
//       <ul>
//         {this.state.tags.map((tag) => (
//           <li key={tag}>{tag}</li>
//         ))}
//       </ul>
//     );
//   }

//   render() {
//     return <div>{this.renderTag()}</div>;
//     // ANOTHER MTD
//     //     render() {
//     //       return <div>
//     //           {this.state.tags.length === 0 && "please create a new tag"};
//     //       </div>;
//     //   }
//   }
// }
// export default Counter;

// HANDLING AND BINDING EVENTS

import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0,
  };
  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
