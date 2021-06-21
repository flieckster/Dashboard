$(document).ready(function() {
  let getDatabutton = document.getElementById("getDatabutton");

  getDatabutton.onclick = function(){
    dataPull();
  };

  function dataPull() {
  
  let TaskStartDate = document.getElementById("TaskStartDate").value;
  let TaskEndDate = document.getElementById("TaskEndDate").value;
  let FileNameSearch = document.getElementById("Filenames").value;

  const baseURL = "http://trueaction.workhorsegroup.us/ServerExport.cfm?configfile=ServerExportCfg-SampleTaskInfo.inc"
  const Filenames = "&Filenames=" + FileNameSearch;
  const PartnerName = "&PartnerName="+"NYandC";
  const TaskName = "&TaskName="+"Shoot";
  const TaskCompleteStart = "&TaskCompleteStart=" + TaskStartDate;
  const TaskCompleteEnd = "&TaskCompleteEnd="+ TaskEndDate;


 
  let completeURL = baseURL + Filenames + PartnerName + TaskName + TaskCompleteStart +TaskCompleteEnd;
  console.log(completeURL)
  
  fetch(completeURL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    for ( var i=0 ; i < data.DATA.length; i++){
      let WHfilename = data['DATA'][i]['Filenamebarcode'];
      
      let WHCopyFilename= data['DATA'][i]['CopyFilename'];
      let WHfilenametrimmed = WHCopyFilename.slice(0, -4);
      let WHtask= data['DATA'][i]['CurrentTask']
      let WHProductName= data['DATA'][i]['ProductName']
      let WHShotStatus= data['DATA'][i]['ShotStatus']
    // console.log(WHfilename);
    // console.log(WHtask);

    document.getElementById("display").insertAdjacentHTML('afterbegin', `<div class="row">
    <div class="col  m6">
        <div class="card blue-grey lighten-2">
            <div class="card-content white-text">
                <span class="card-title">${WHfilename}</span>
                <p>Filename: ${WHfilenametrimmed}</p>
                <p>Product Name: ${WHProductName}</p>
                <p>Shot Status: ${WHShotStatus}</p>
                <p>Current Task: ${WHtask}</p>
            </div>
        </div>
    </div>`);
  }
  })
  .catch((err) => {
    console.log(err);
})
 
      // let Whdata = data['url'];
      // console.log(Whdata);
      



    // })
  }



})