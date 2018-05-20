import React from "react";

 export const SortedSchedule = (userid="1",dayofweek="1",timeofday="0900") => {
var result='{"prescriptions":[]}'
var holder = JSON.parse(result)

    const start = PharmData(userid)
    for (infoIndex = 0; infoIndex < start.prescriptions.length; infoIndex++) {
        if(start.prescriptions[infoIndex].schedule.dayofweekbasis)
        {
            var dowbasis = start.prescriptions[infoIndex].schedule.dayofweekbasis
             for( z=0;z < dowbasis.length;z++)
            {
                   if(dowbasis[z].dayofweek==dayofweek)
                    {
                     // console.log(start.prescriptions[infoIndex].prescriptionid)  
                     // console.log(dayofweek)
                     // console.log(dowbasis[z].time)
                     var nextup = dowbasis[z].time.find(function (element){return parseInt(element) > parseInt(timeofday)});

                     //return {prescriptionid:start.prescriptions[infoIndex].prescriptionid, dayofweek:dayofweek, schedule:dowbasis[z].time }    
                     var q=   {prescriptionid:start.prescriptions[infoIndex].prescriptionid, dayofweek:dayofweek, schedule:dowbasis[z].time, nextup:nextup }   
                     holder["prescriptions"].push(q)                           
                    }
 
            } 
 
        }
    }
    holder.prescriptions.sort((a,b) => parseInt(a.nextup) - parseInt(b.nextup));
    console.log(holder) 
return ''

} 


export const PharmData = (userid ="1") => {
    const data= require('takepills/data/go.json')

    for (infoIndex = 0; infoIndex < data.length; infoIndex++) {
       if(data[infoIndex].profileid=='1') {
           return (data[infoIndex])
       }
    }
    return null;
    
    }

export const PharmList = (userid) => {
    const data= require('./data/pharmacy.json')
    return (data);
} 

export const PharmacyItem= (pharmacyid) => {
    const data= require('./data/pharmacy.json')
    for (infoIndex = 0; infoIndex < data.length; infoIndex++) {
        if(data[infoIndex].pharmacyid=='1') {
            return (data[infoIndex])
        }
     }
     return null;
} 

export const BigProfile = (profileid) => {
    const data= require('./data/profile.json')
    for (infoIndex = 0; infoIndex < data.length; infoIndex++) {
        if(data[infoIndex].profileid=='1') {
            //data[infoIndex].initials='DD'
            var str = data[infoIndex].name
            var matches=str.match(/\b(\w)/g);              
            data[infoIndex].initials = matches.join('');    
            return (data[infoIndex])
        }
     }
     return null;

}

export const MedicationInformation = (medicationid) => {
    const data= require('./data/go.json')
    for (infoIndex = 0; infoIndex < data.length; infoIndex++) {
        for(prescIndex = 0; prescIndex < data[infoIndex].prescriptions.length;prescIndex++) {
                if(data[infoIndex].prescriptions[prescIndex].medication.medicationid=='66993-422_fd492237-6483-423b-aa2a-37c2dcf9f890') {
                    return data[infoIndex].prescriptions[prescIndex].medication
                }
        }
       
     }
     return null;

}




