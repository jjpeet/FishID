var data = {
    resource_id: '32af9a35-d4db-41e9-b152-d52609ff6372', // the resource id
    limit: 5, // get 5 results
    //q: 'jones' // query for 'jones'
  };
  $.ajax({
    url: 'https://data.qld.gov.au/api/action/datastore_search',
    data: data,
    dataType: 'jsonp',
    success: function(data) {
      //alert('Total results found: ' + data.result.total)
      console.log(data.result.records);
      
    }
  });
  
  