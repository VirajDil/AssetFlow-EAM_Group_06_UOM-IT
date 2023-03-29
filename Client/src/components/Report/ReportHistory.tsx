import React, { Fragment,useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Button, Table } from "react-bootstrap";
import axios from 'axios';
interface GeneratedReport {
  id: number;
  date: string;
  reportName: string;
  reportType: string;
  reportFormat: string;
  generatedBy: string;
  note: string;
}
const ReportHistory = () => {
  const [generatedReports, setGeneratedReports] = useState<GeneratedReport[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5293/api/GeneratedReport')
      .then(response => {
        setGeneratedReports(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      axios.get('http://localhost:5293/api/GeneratedReport')
      .then(response => {
        setGeneratedReports(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this data?");
    if (confirmed) {
      axios.delete(`http://localhost:5293/api/GeneratedReport/${id}`)
        .then(response => {
          console.log(response);
          setGeneratedReports(generatedReports.filter(report => report.id !== id));
          window.alert("Data successfully deleted.");
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
return (
  <Fragment>
    <h4  style={{ margin: "30px 0 0 65px" }}>Report History</h4>
  <div
    className="shadow p-3 bg-white rounded"
    style={{ margin: "30px 0 0 65px" }}
  > 
  <Table className="table w-100 small table-borderless table-responsiv align-middle align-left"
              hover
              style={{ fontSize: "13px" }} >
  <thead>
    <tr style={{ color: "#482890" }}>
      
      <th>ID</th>
      <th>Date</th>
      <th>Report Name</th>
      <th>Report Type</th>
      <th>Report Format</th>
      <th>Generated By</th>
      <th>Note</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {generatedReports.map(report => (
      <tr key={report.id}>
        <td>{report.id}</td>
        <td>{report.date}</td>
        <td>{report.reportName}</td>
        <td>{report.reportType}</td>
        <td>{report.reportFormat}</td>
        <td>{report.generatedBy}</td>
        <td>{report.note}</td>
        <td><Button variant='danger' size='sm' onClick={() => handleDelete(report.id)}>Delete</Button> </td>
      </tr>
    ))}
  </tbody>
</Table>
</div>
    </Fragment>
)}
export default ReportHistory;