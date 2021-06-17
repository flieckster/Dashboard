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

    .then(Response => Response.json())
    .then(data => {
      

      let Whdata = data['url'];
      console.log(Whdata);
      $( "#display" ).attr(Whdata);   



    })
  }



})