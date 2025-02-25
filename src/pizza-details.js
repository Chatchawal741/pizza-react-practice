import React, { Component } from "react";
import Piz1 from "./pic/pizza1.jpg";
import Piz2 from "./pic/pizza2.jpg";
import Piz3 from "./pic/pizza3.jpg";

export default class PizzaDetails extends Component {
  render() {
    const pizzaList = [
      { pizzaName: "Richy Hammy", pic: Piz1 },
      { pizzaName: "Shrimp Extreme", pic: Piz2 },
      { pizzaName: "Seafood Extreme", pic: Piz3 },
    ];
    const PicStyles = {
      width: "300px",
    };
    return (
      <div>
        <table className="table table-striped">
          <tbody>
            {pizzaList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <span>
                      <img
                        src={item.pic}
                        style={PicStyles}
                        alt="Pizza images"
                      />
                    </span>
                  </td>
                  <td>
                    <p>{item.pizzaName}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
