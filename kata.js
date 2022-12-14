// take an array of objects
// some have a location properts

// updateRemoteStudents([
//     { name: 'Hypatia', age: 31, location: 'leeds' },
//     { name: 'Ramanujan', age: 22 },
//     { name: 'Tao', age: 47, location: 'manchester' }
//   ]);

// [
//     { name: 'Hypatia', age: 31, location: 'leeds' },
//     { name: 'Ramanujan', age: 22, location: 'remote' },
//     { name: 'Tao', age: 47, location: 'manchester' }
//   ];

// 

function updateRemoteStudents(arr){

    for(i = 0; i < arr.length; i++){
        if (arr[i].hasOwnProperty('location')){
            
        }
        else{
            arr[i].location = 'remote'
        }
    }
    console.log(arr);
    return arr
}
module.exports = {updateRemoteStudents}