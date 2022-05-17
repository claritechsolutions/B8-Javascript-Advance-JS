function days(date1,date2){
    let diff_in_time= date2.getTime() - date1.getTime();
    let diff_in_days= diff_in_time / (1000 * 3600 *24);
    return diff_in_days;
}
var result= days(new Date("5/7/2022"), new Date("5/17/2022"));
console.log(result);