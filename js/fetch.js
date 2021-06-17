fetch('http://trueaction.workhorsegroup.us/ServerExport.cfm?configfile=ServerExportCfg-SampleTaskInfo.inc&PartnerName=NYandC&Filenames=NYCC-03785217_943')
  .then(response => response.json())
  .then(data => console.log(data));