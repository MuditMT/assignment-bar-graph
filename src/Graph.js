import {React,useEffect} from 'react';
import './component/graph.css'
import * as d3 from 'd3'


const Graph = () =>{

  

  const refresh = ()=>{
    window.location.reload();
  }

  
   
   useEffect(() => {

      let dataSet = [
        {subject: "Company 1", count: Math.floor(Math.random() * 200)},
        {subject: "Company 2", count: Math.floor(Math.random() * 200)},
        {subject: "Company 3", count: Math.floor(Math.random() * 200)},
        {subject: "Company 4", count: Math.floor(Math.random() * 200)},
      ]
 
      d3.select('#pgraphs').selectAll('p').data(dataSet).enter().append('p').text(dt => dt.subject + ": " + dt.count)
      
      
        const getMax = () => { 
          let max = 0
          dataSet.forEach((dt) => {
              if(dt.count > max) {max = dt.count}
          })
          return max
        }
     
        d3.select('#BarChart').selectAll('div').data(dataSet) 
        .enter().append('div').classed('bar', true).style('height', `${getMax()}px`)
    
        d3.select('#BarChart').selectAll('.bar')
        .transition().duration(1000).style('height', bar => `${bar.count}px`)
          .style('width', '80px').style('margin-right', '10px').delay(300) 
      
    },[])

  return (
  <>
    <div >
      <div id="pgraphs"></div> 
      <div id="BarChart"></div>
    </div>

    
    <p className="pa">
    <a style={{marginLeft:'19em',textDecoration:'none'
    }} href="#" onClick={() => {window.location.href="/graph"}}>Click Here</a>
    </p>
    </>
    
  );
}

export default Graph;