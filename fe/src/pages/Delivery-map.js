import React from 'react'

export default function EditCustomerPage() {
  return (
    <div>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA66KwUrjxcFG5u0exynlJ45CrbrNe3hEc&callback=initMap"
  type="text/javascript"></script>
  <h1 style="margin-left:600px">Google Map</h1>
    <div id="panel">    
        <b>Xuất phát: </b>    
        <select id="source">    
          <option value="91 Man Thiện">91 Man Thiện</option>  
        </select>    
        <b>Đích: </b>    
        <select id="destination"> 
          <option value="">None</option> 
        </select>   
        <b>Phương tiện: </b>   
        <select id="mode">
          <option value="DRIVING">Lái xe</option>
          <option value="WALKING">Đi bộ</option>
          <option value="BICYCLING">Xe đạp</option>
          <option value="TRANSIT">Xe tải</option>
        </select>
        </div>   
        </div>    
    
        <div id="warnings"></div>    
        <div id="instructions"></div>    
        <div id="map"></div>

    </div>
  )
}
