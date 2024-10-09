import React from "react";
import Cards from "./cards";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: [
        { id: 1, title: "Selena Boy", description1: "25.000 FCFA", description2: "01-06-2022", description3: "valide" },
        { id: 2, title: "Emma Watson", description1: "" },
        { id: 3, title: "Jhon Robert", description1: "" }
      ]
    };
  }
  render() {
    return (
      <div className="m-3">
        <Cards />
        <div className="row mt-4 gx-5">
          <div className="col-lg-6 bg-white shadow">
            <h4>Juin</h4>
            <table className="table">
              <thead style={{ backgroundColor: 'green' }}>
                <tr>
                  <th style={{ backgroundColor: '#10ef66' }}>Membres</th>
                  <th style={{ backgroundColor: '#10ef66' }}>Montant</th>
                  <th style={{ backgroundColor: '#10ef66' }}>Date</th>
                  <th style={{ backgroundColor: '#10ef66' }}>Statut</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tab.map(item => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.description1}</td>
                    <td>{item.description2}</td>
                    <td style={{ color: item.description3 === "valide" ? '#10ef66' : 'transparent',fontWeight: 'bold' }}>{item.description3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-6 bg-white shadow">
            <h4>Top progression</h4>
            <table className="table">
              <thead style={{ backgroundColor: 'red', color: 'white' }}>
                <tr>
                  <th style={{ backgroundColor: '#10ef66' }}>Membres</th>
                  <th style={{ backgroundColor: '#10ef66' }}>Dare debut</th>
                  <th style={{ backgroundColor: '#10ef66' }}>Progression</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tab.map(item => (
                  <tr key={item.id} >
                    <td>{item.title}</td>
                    <td>{item.description1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


        
      </div>
    );
  }
}

export default Dashboard;
