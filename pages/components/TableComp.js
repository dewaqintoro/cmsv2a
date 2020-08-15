import React from 'react'
import { Button, Row, Col, Spinner,Table } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { connect } from 'react-redux';

const { SearchBar } = Search;
const columns = [{
  // dataField: [attributes][FID],
  dataField: 'attributes.FID',

  text: 'ID',
  sort: true
}, {
  dataField: 'attributes.Provinsi',
  text: 'Provinsi',
  sort: true
}, {
  dataField: 'attributes.Kasus_Posi',
  text: 'Positif'
}, {
  dataField: 'attributes.Kasus_Semb',
  text: 'Sembuh'
}, {
  dataField: 'attributes.Kasus_Meni',
  text: 'Meninggal'
}
];
 
const defaultSorted = [{
  dataField: 'id',
  order: 'asc'
}];

const mapStateToProps = (state) => {
  return {
    
    getCovidsList: state.covids.getCovidsList,
    errorCovidsList: state.covids.errorCovidsList
  }
}


const TableComp = (props) => {
  // console.log(props.getCovidsList[8]);
  
  return (
    <div>
      {props.getCovidsList ?
      <ToolkitProvider
      keyField="id"
      data={ props.getCovidsList } 
      columns={ columns }
      defaultSorted={ defaultSorted }
      search
      >
      { 
        props => (
          <div> 
            <div className="table1">
              <div className="row topTable align-self-center" id="rowTable">
                <div className="col-9">
                  <h5 className="vCenter">Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi</h5>
                  {/* <hr/> */}
                </div>
                <div className="col-3 search">
                  <SearchBar { ...props.searchProps } />
                </div>
              </div>
              {/* <div className="search">
              </div> */}
              <div className="table2">
                <BootstrapTable pagination={ paginationFactory() } striped
                  { ...props.baseProps }
                />
              </div>
            </div>
          </div>
        )
      }
      
      </ToolkitProvider>:null}
 
      
    </div>
  )
}

export default connect(mapStateToProps,null) (TableComp)
