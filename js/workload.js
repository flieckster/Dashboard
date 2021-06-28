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

 if (!FileNameSearch){
  alert("Filename can not be empty");
 };



  let completeURL = (!TaskStartDate && !TaskEndDate) ? baseURL + Filenames : baseURL + Filenames + PartnerName + TaskName + TaskCompleteStart +TaskCompleteEnd ;

 
 
  console.log(completeURL)

  fetch(completeURL)
  
  .then(response => response.json())
  .then(data => {
    console.log(data);
    for ( var i=0 ; i < data.DATA.length; i++){
      let WHfilename = data['DATA'][i]['Filenamebarcode'];
      let WHCopyFilename= data['DATA'][i]['CopyFilename'];
      //trim off the .tif in the copy filename
      let WHfilenametrimmed = WHCopyFilename.slice(0, -4);
      let WHtask= data['DATA'][i]['CurrentTask']
      let WHProductName= data['DATA'][i]['ProductName']
      let WHShotStatus= data['DATA'][i]['ShotStatus']
      let WHthumb= data['DATA'][i]['ThumbPath']
    // console.log(WHfilename);
    // console.log(WHtask);


    document.getElementById("display").insertAdjacentHTML('afterbegin', `
    <div class="col m6">
        <div class="card blue-grey lighten-2">
            <div class="card-content white-text">
                <span class="card-title" style="font-size: 14px"; >${WHfilename}</span>
                <p style="font-size: 12px">Filename: ${WHfilenametrimmed}</p>
                <p style="font-size: 12px">Product Name: ${WHProductName}</p>
                <p style="font-size: 12px">Shot Status: ${WHShotStatus}</p>
                <p style="font-size: 12px">Current Task: ${WHtask}</p>
                <p><img src=${WHthumb}></p>
            </div>
        </div>
  `);

  // if (WHtask == "Completed"){
  //   document.getElementsByClassName("blue-grey").insertAdjacentHTML('afterend', `style="color:green";`);
  // }
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
